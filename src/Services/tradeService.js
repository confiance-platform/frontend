// Trade Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class TradeService {
  /**
   * Get user trades (paginated)
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Trades list
   */
  async getUserTrades(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        sortBy: params.sortBy ?? 'buyDate',
        sortDirection: params.sortDirection ?? 'desc',
      };

      const response = await apiClient.get(API_ENDPOINTS.TRADES.USER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create new buy trade
   * @param {number} userId - User ID
   * @param {object} tradeData - Trade data
   * @returns {Promise} Create response
   *
   * Required fields: market, symbol, buyDate, buyPrice, buyQuantity
   * Optional fields: companyName, currency, notes, status
   */
  async createTrade(userId, tradeData) {
    try {
      // Transform field names from frontend to backend format
      const backendData = {
        symbol: tradeData.stockSymbol || tradeData.symbol,
        companyName: tradeData.stockName || tradeData.companyName,
        market: tradeData.market,
        buyPrice: tradeData.buyPrice,
        buyQuantity: tradeData.quantity || tradeData.buyQuantity,
        buyDate: tradeData.buyDate,
        currency: tradeData.currency,
        notes: tradeData.notes,
        // Remove tradeType and recommendationId as backend doesn't use them
      };

      // Remove undefined/null fields
      Object.keys(backendData).forEach(key => {
        if (backendData[key] === undefined || backendData[key] === null) {
          delete backendData[key];
        }
      });

      const response = await apiClient.post(API_ENDPOINTS.TRADES.CREATE(userId), backendData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Record sell for existing trade
   * @param {number} tradeId - Trade ID
   * @param {number} userId - User ID
   * @param {object} sellData - Sell data
   * @returns {Promise} Sell response
   */
  async recordSell(tradeId, userId, sellData) {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.TRADES.SELL(tradeId, userId),
        sellData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get trade by ID
   * @param {number} tradeId - Trade ID
   * @param {number} userId - User ID
   * @returns {Promise} Trade data
   */
  async getTradeById(tradeId, userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.TRADES.GET_BY_ID(tradeId, userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update trade
   * @param {number} tradeId - Trade ID
   * @param {number} userId - User ID
   * @param {object} updateData - Update data
   * @returns {Promise} Update response
   */
  async updateTrade(tradeId, userId, updateData) {
    try {
      const response = await apiClient.put(API_ENDPOINTS.TRADES.UPDATE(tradeId, userId), updateData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete trade
   * @param {number} tradeId - Trade ID
   * @param {number} userId - User ID
   * @returns {Promise} Delete response
   */
  async deleteTrade(tradeId, userId) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.TRADES.DELETE(tradeId, userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Filter trades
   * @param {number} userId - User ID
   * @param {object} filters - Filter parameters (market, status)
   * @param {object} params - Pagination parameters
   * @returns {Promise} Filtered trades list
   */
  async filterTrades(userId, filters = {}, params = {}) {
    try {
      const queryParams = {
        ...filters,
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.TRADES.FILTER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get trades by status
   * @param {number} userId - User ID
   * @param {string} status - Trade status (OPEN, CLOSED, PARTIALLY_SOLD)
   * @param {object} params - Pagination parameters
   * @returns {Promise} Trades list
   */
  async getTradesByStatus(userId, status, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.TRADES.BY_STATUS(userId, status), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get trades by date range
   * @param {number} userId - User ID
   * @param {string} startDate - Start date (YYYY-MM-DD)
   * @param {string} endDate - End date (YYYY-MM-DD)
   * @param {object} params - Pagination parameters
   * @returns {Promise} Trades list
   */
  async getTradesByDateRange(userId, startDate, endDate, params = {}) {
    try {
      const queryParams = {
        startDate,
        endDate,
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.TRADES.DATE_RANGE(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get P&L summary for user
   * @param {number} userId - User ID
   * @returns {Promise} P&L summary
   */
  async getTradeSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.TRADES.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all trades (admin only)
   * @param {object} params - Query parameters
   * @returns {Promise} All trades list
   */
  async getAllTrades(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.TRADES.ADMIN_ALL, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Calculate profit/loss for a trade
   * @param {number} buyPrice - Buy price
   * @param {number} sellPrice - Sell price
   * @param {number} quantity - Quantity
   * @returns {object} Profit/loss amount and percentage
   */
  calculateProfitLoss(buyPrice, sellPrice, quantity) {
    const profitLoss = (sellPrice - buyPrice) * quantity;
    const profitLossPercentage = ((sellPrice - buyPrice) / buyPrice * 100).toFixed(2);
    return {
      profitLoss: profitLoss.toFixed(2),
      profitLossPercentage,
    };
  }

  /**
   * Calculate invested amount
   * @param {number} buyPrice - Buy price
   * @param {number} quantity - Quantity
   * @returns {string} Invested amount
   */
  calculateInvestedAmount(buyPrice, quantity) {
    return (buyPrice * quantity).toFixed(2);
  }
}

export const tradeService = new TradeService();
export default tradeService;
