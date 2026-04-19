// Payment Service (Razorpay Integration)
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class PaymentService {
  /**
   * Create payment order
   * @param {object} orderData - Order data
   * @returns {Promise} Order response with razorpay details
   */
  async createOrder(orderData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.PAYMENTS.CREATE_ORDER, {
        amount: orderData.amount,
        userId: orderData.userId,
        currency: orderData.currency || 'INR',
        description: orderData.description,
        receipt: orderData.receipt || `receipt_${Date.now()}`,
        notes: orderData.notes || {},
        customer: orderData.customer || {},
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Verify payment after Razorpay checkout
   * @param {object} paymentData - Razorpay payment response
   * @returns {Promise} Verification response
   */
  async verifyPayment(paymentData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.PAYMENTS.VERIFY, {
        razorpayOrderId: paymentData.razorpay_order_id,
        razorpayPaymentId: paymentData.razorpay_payment_id,
        razorpaySignature: paymentData.razorpay_signature,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user payment history
   * @param {number} userId - User ID
   * @param {object} params - Pagination parameters
   * @returns {Promise} Payment history
   */
  async getUserPayments(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.PAYMENTS.USER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get payment by internal order ID
   * @param {string} orderId - Internal order ID
   * @returns {Promise} Payment details
   */
  async getPaymentByOrderId(orderId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PAYMENTS.GET_BY_ORDER_ID(orderId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get payment by Razorpay order ID
   * @param {string} razorpayOrderId - Razorpay order ID
   * @returns {Promise} Payment details
   */
  async getPaymentByRazorpayOrderId(razorpayOrderId) {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.PAYMENTS.GET_BY_RAZORPAY_ORDER_ID(razorpayOrderId)
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Request refund for a captured payment (admin).
   * Backend: POST /payments/refund/{razorpayPaymentId}?amount=X
   * @param {string} razorpayPaymentId - Razorpay payment ID
   * @param {number|string} amount - Refund amount
   * @returns {Promise} Refund response
   */
  async requestRefund(razorpayPaymentId, amount) {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.PAYMENTS.REFUND(razorpayPaymentId),
        null,
        { params: { amount } }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Initialize Razorpay checkout
   * @param {object} order - Order from createOrder response
   * @param {object} options - Additional options
   * @returns {Promise} Opens Razorpay checkout
   */
  initializeRazorpayCheckout(order, options = {}) {
    return new Promise((resolve, reject) => {
      if (!window.Razorpay) {
        reject(new Error('Razorpay SDK not loaded. Please add the Razorpay script.'));
        return;
      }

      const razorpayOptions = {
        key: order.razorpayKeyId,
        amount: order.amount * 100, // Convert to paise
        currency: order.currency || 'INR',
        name: options.companyName || 'Confiance Financial',
        description: options.description || 'Payment',
        image: options.logo || '/logo.png',
        order_id: order.razorpayOrderId,

        handler: async (response) => {
          try {
            // Verify payment on backend
            const verifyResult = await this.verifyPayment(response);
            resolve(verifyResult);
          } catch (error) {
            reject(error);
          }
        },

        prefill: {
          name: options.customerName || '',
          email: options.customerEmail || '',
          contact: options.customerPhone || '',
        },

        theme: {
          color: options.themeColor || '#3399cc',
        },

        modal: {
          ondismiss: () => {
            reject(new Error('Payment cancelled by user'));
          },
        },
      };

      const rzp = new window.Razorpay(razorpayOptions);

      rzp.on('payment.failed', (response) => {
        reject({
          error: response.error,
          message: response.error.description,
        });
      });

      rzp.open();
    });
  }

  /**
   * Complete payment flow (create order + checkout + verify)
   * @param {object} paymentData - Payment data
   * @param {object} options - UI options
   * @returns {Promise} Payment result
   */
  async processPayment(paymentData, options = {}) {
    try {
      // Step 1: Create order
      const orderResponse = await this.createOrder(paymentData);

      if (!orderResponse.success) {
        throw new Error(orderResponse.message || 'Failed to create payment order');
      }

      // Step 2: Open Razorpay checkout and verify
      const result = await this.initializeRazorpayCheckout(orderResponse.data, options);

      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Load Razorpay script dynamically
   * @returns {Promise} Resolves when script is loaded
   */
  loadRazorpayScript() {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Failed to load Razorpay script'));
      document.body.appendChild(script);
    });
  }
}

export const paymentService = new PaymentService();
export default paymentService;
