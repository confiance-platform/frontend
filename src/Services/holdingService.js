// Holding Service
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';

class HoldingService {
  /**
   * Get user holdings
   * @param {number} userId - User ID
   * @returns {Promise} Holdings list
   */
  async getUserHoldings(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.HOLDINGS.USER(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get holdings summary for user
   * @param {number} userId - User ID
   * @returns {Promise} Holdings summary
   */
  async getHoldingsSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.HOLDINGS.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get holdings by market
   * @param {number} userId - User ID
   * @param {string} market - Market code (US, INDIA, etc.)
   * @returns {Promise} Holdings list
   */
  async getHoldingsByMarket(userId, market) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.HOLDINGS.BY_MARKET(userId, market));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Calculate unrealized P&L
   * @param {number} averageBuyPrice - Average buy price
   * @param {number} currentPrice - Current price
   * @param {number} quantity - Quantity held
   * @returns {object} Unrealized P&L amount and percentage
   */
  calculateUnrealizedPL(averageBuyPrice, currentPrice, quantity) {
    const investedAmount = averageBuyPrice * quantity;
    const currentValue = currentPrice * quantity;
    const unrealizedPL = currentValue - investedAmount;
    const unrealizedPLPercentage = ((unrealizedPL / investedAmount) * 100).toFixed(2);

    return {
      investedAmount: investedAmount.toFixed(2),
      currentValue: currentValue.toFixed(2),
      unrealizedPL: unrealizedPL.toFixed(2),
      unrealizedPLPercentage,
    };
  }

  /**
   * Calculate total portfolio value from holdings
   * @param {Array} holdings - List of holdings
   * @returns {object} Total portfolio metrics
   */
  calculatePortfolioMetrics(holdings) {
    if (!holdings || holdings.length === 0) {
      return {
        totalInvestedAmount: '0.00',
        totalCurrentValue: '0.00',
        totalUnrealizedPL: '0.00',
        totalUnrealizedPLPercentage: '0.00',
        totalHoldings: 0,
      };
    }

    const totalInvestedAmount = holdings.reduce(
      (sum, h) => sum + parseFloat(h.investedAmount || 0),
      0
    );
    const totalCurrentValue = holdings.reduce(
      (sum, h) => sum + parseFloat(h.currentValue || 0),
      0
    );
    const totalUnrealizedPL = totalCurrentValue - totalInvestedAmount;
    const totalUnrealizedPLPercentage = totalInvestedAmount > 0
      ? ((totalUnrealizedPL / totalInvestedAmount) * 100).toFixed(2)
      : '0.00';

    return {
      totalInvestedAmount: totalInvestedAmount.toFixed(2),
      totalCurrentValue: totalCurrentValue.toFixed(2),
      totalUnrealizedPL: totalUnrealizedPL.toFixed(2),
      totalUnrealizedPLPercentage,
      totalHoldings: holdings.length,
    };
  }

  /**
   * Group holdings by market
   * @param {Array} holdings - List of holdings
   * @returns {object} Holdings grouped by market
   */
  groupByMarket(holdings) {
    if (!holdings) return {};

    return holdings.reduce((groups, holding) => {
      const market = holding.market || 'OTHER';
      if (!groups[market]) {
        groups[market] = [];
      }
      groups[market].push(holding);
      return groups;
    }, {});
  }
}

export const holdingService = new HoldingService();
export default holdingService;
