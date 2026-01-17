// Recommendation Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class RecommendationService {
  /**
   * Get all open recommendations (for users - read only)
   * @param {object} params - Query parameters
   * @returns {Promise} Open recommendations list
   */
  async getOpenRecommendations(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.OPEN, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all recommendations (admin)
   * @param {object} params - Query parameters
   * @returns {Promise} Recommendations list
   */
  async getAllRecommendations(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.LIST, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get recommendation by ID
   * @param {number} id - Recommendation ID
   * @returns {Promise} Recommendation data
   */
  async getRecommendationById(id) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.GET_BY_ID(id));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Filter recommendations
   * @param {object} filters - Filter parameters (market, status)
   * @param {object} params - Pagination parameters
   * @returns {Promise} Filtered recommendations list
   */
  async filterRecommendations(filters = {}, params = {}) {
    try {
      const queryParams = {
        ...filters,
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.FILTER, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get recommendations by market
   * @param {string} market - Market code (US, INDIA, etc.)
   * @param {object} params - Pagination parameters
   * @returns {Promise} Recommendations list
   */
  async getRecommendationsByMarket(market, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.BY_MARKET(market), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create new recommendation (admin only)
   * @param {object} recommendationData - Recommendation data
   * @returns {Promise} Create response
   */
  async createRecommendation(recommendationData) {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.RECOMMENDATIONS.CREATE,
        recommendationData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update recommendation (admin only)
   * @param {number} id - Recommendation ID
   * @param {object} updateData - Update data
   * @returns {Promise} Update response
   */
  async updateRecommendation(id, updateData) {
    try {
      const response = await apiClient.put(
        API_ENDPOINTS.RECOMMENDATIONS.UPDATE(id),
        updateData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete recommendation (admin only)
   * @param {number} id - Recommendation ID
   * @returns {Promise} Delete response
   */
  async deleteRecommendation(id) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.RECOMMENDATIONS.DELETE(id));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Calculate potential return
   * @param {number} entryPrice - Entry price
   * @param {number} targetPrice - Target price
   * @returns {object} Potential return and percentage
   */
  calculatePotentialReturn(entryPrice, targetPrice) {
    const potentialReturn = targetPrice - entryPrice;
    const potentialReturnPercentage = ((potentialReturn / entryPrice) * 100).toFixed(2);
    return {
      potentialReturn: potentialReturn.toFixed(2),
      potentialReturnPercentage,
    };
  }

  /**
   * Calculate risk reward ratio
   * @param {number} entryPrice - Entry price
   * @param {number} targetPrice - Target price
   * @param {number} stopLoss - Stop loss price
   * @returns {string} Risk reward ratio
   */
  calculateRiskRewardRatio(entryPrice, targetPrice, stopLoss) {
    const reward = targetPrice - entryPrice;
    const risk = entryPrice - stopLoss;
    if (risk <= 0) return '0.00';
    return (reward / risk).toFixed(2);
  }
}

export const recommendationService = new RecommendationService();
export default recommendationService;
