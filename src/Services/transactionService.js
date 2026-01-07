// Transaction Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class TransactionService {
  /**
   * Get user transactions (paginated)
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Transactions list
   */
  async getUserTransactions(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.TRANSACTIONS.USER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create new transaction
   * @param {object} transactionData - Transaction data
   * @returns {Promise} Create response
   */
  async createTransaction(transactionData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.TRANSACTIONS.CREATE, transactionData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Filter transactions by type (client-side)
   * @param {Array} transactions - All transactions
   * @param {string} type - Transaction type
   * @returns {Array} Filtered transactions
   */
  filterByType(transactions, type) {
    if (!type) return transactions;
    return transactions.filter((transaction) => transaction.type === type);
  }

  /**
   * Filter transactions by status (client-side)
   * @param {Array} transactions - All transactions
   * @param {string} status - Transaction status
   * @returns {Array} Filtered transactions
   */
  filterByStatus(transactions, status) {
    if (!status) return transactions;
    return transactions.filter((transaction) => transaction.status === status);
  }

  /**
   * Calculate total amount by type
   * @param {Array} transactions - All transactions
   * @param {string} type - Transaction type
   * @returns {number} Total amount
   */
  calculateTotalByType(transactions, type) {
    return transactions
      .filter((t) => t.type === type)
      .reduce((total, t) => total + (t.amount || 0), 0);
  }
}

export const transactionService = new TransactionService();
export default transactionService;
