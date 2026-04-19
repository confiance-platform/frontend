// Portfolio Service
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';

class PortfolioService {
  /**
   * Get user portfolio
   * @param {number} userId - User ID
   * @returns {Promise} Portfolio data
   */
  async getUserPortfolio(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PORTFOLIO.USER(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Calculate portfolio metrics
   * @param {object} portfolio - Portfolio data
   * @returns {object} Calculated metrics
   */
  calculateMetrics(portfolio) {
    if (!portfolio) return null;

    const totalInvested = portfolio.totalInvested || 0;
    const currentValue = portfolio.currentValue || 0;
    const totalReturns = portfolio.totalReturns || 0;
    const returnsPercentage = portfolio.returnsPercentage || 0;

    return {
      totalInvested,
      currentValue,
      totalReturns,
      returnsPercentage,
      profitLoss: totalReturns,
      profitLossPercentage: returnsPercentage,
    };
  }
}

export const portfolioService = new PortfolioService();
export default portfolioService;
