// Investment Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class InvestmentService {
  /**
   * Get all investment products (paginated)
   * @param {object} params - Query parameters
   * @returns {Promise} Investment products list
   */
  async getAllInvestments(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.INVESTMENTS.LIST, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get investment product by ID
   * @param {number} investmentId - Investment product ID
   * @returns {Promise} Investment product data
   */
  async getInvestmentById(investmentId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.INVESTMENTS.GET_BY_ID(investmentId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create new investment product
   * @param {object} investmentData - Investment product data
   * @returns {Promise} Create response
   */
  async createInvestment(investmentData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.INVESTMENTS.CREATE, investmentData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Filter investments by type (client-side)
   * @param {Array} investments - All investments
   * @param {string} type - Investment type
   * @returns {Array} Filtered investments
   */
  filterByType(investments, type) {
    if (!type) return investments;
    return investments.filter((investment) => investment.type === type);
  }

  /**
   * Filter investments by status (client-side)
   * @param {Array} investments - All investments
   * @param {string} status - Investment status
   * @returns {Array} Filtered investments
   */
  filterByStatus(investments, status) {
    if (!status) return investments;
    return investments.filter((investment) => investment.status === status);
  }

  /**
   * Get investments by type
   * @param {string} type - Investment type
   * @param {object} params - Query parameters
   * @returns {Promise} Filtered investments
   */
  async getInvestmentsByType(type, params = {}) {
    try {
      const response = await this.getAllInvestments({ ...params, size: 100 });
      if (response.success && response.data) {
        const filtered = this.filterByType(response.data.content, type);
        return {
          ...response,
          data: {
            ...response.data,
            content: filtered,
          },
        };
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const investmentService = new InvestmentService();
export default investmentService;
