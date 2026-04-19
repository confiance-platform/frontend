// Admin User Service - Fetch user-specific data for admin views
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class AdminUserService {
  /**
   * Get user portfolio for admin view
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
   * Get user transactions for admin view
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Transactions list
   */
  async getUserTransactions(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        sortBy: params.sortBy ?? 'createdAt',
        sortDirection: params.sortDirection ?? 'desc',
        ...(params.type && { type: params.type }),
        ...(params.status && { status: params.status }),
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
   * Get user trades for admin view
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Trades list
   */
  async getUserTrades(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        sortBy: params.sortBy ?? 'createdAt',
        sortDirection: params.sortDirection ?? 'desc',
        ...(params.status && { status: params.status }),
        ...(params.market && { market: params.market }),
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
   * Get user trade summary for admin view
   * @param {number} userId - User ID
   * @returns {Promise} Trade summary
   */
  async getUserTradeSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.TRADES.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user holdings for admin view
   * @param {number} userId - User ID
   * @param {string} market - Optional market filter
   * @returns {Promise} Holdings list
   */
  async getUserHoldings(userId, market = null) {
    try {
      const endpoint = market
        ? API_ENDPOINTS.HOLDINGS.BY_MARKET(userId, market)
        : API_ENDPOINTS.HOLDINGS.USER(userId);
      const response = await apiClient.get(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user holdings summary for admin view
   * @param {number} userId - User ID
   * @returns {Promise} Holdings summary
   */
  async getUserHoldingsSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.HOLDINGS.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user referrals for admin view
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Referrals list
   */
  async getUserReferrals(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        ...(params.quarter && { quarter: params.quarter }),
        ...(params.year && { year: params.year }),
      };

      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.USER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user referral summary for admin view
   * @param {number} userId - User ID
   * @returns {Promise} Referral summary
   */
  async getUserReferralSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user referral commission for admin view
   * @param {number} userId - User ID
   * @returns {Promise} Commission data
   */
  async getUserCommission(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.COMMISSION(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all users with investment summary (Admin Dashboard)
   * This is a composite call that fetches users and their portfolio summaries
   * @param {object} params - Query parameters
   * @returns {Promise} Users with investment data
   */
  async getAllUsersWithInvestments(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        sortBy: params.sortBy ?? 'createdAt',
        sortDirection: params.sortDirection ?? 'desc',
        ...(params.status && { status: params.status }),
        ...(params.hasInvestments !== undefined && { hasInvestments: params.hasInvestments }),
      };

      const response = await apiClient.get(API_ENDPOINTS.ADMIN.USERS_WITH_INVESTMENTS, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get admin dashboard statistics
   * @returns {Promise} Dashboard stats
   */
  async getDashboardStats() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN.DASHBOARD_STATS);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get portfolio statistics (admin).
   * Backend: GET /admin/portfolio/stats
   */
  async getPortfolioStats() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN.PORTFOLIO_STATS);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user complete financial overview
   * @param {number} userId - User ID
   * @returns {Promise} Complete financial data
   */
  async getUserFinancialOverview(userId) {
    try {
      // Fetch all data in parallel for efficiency
      const [portfolio, tradeSummary, holdingsSummary, referralSummary] = await Promise.allSettled([
        this.getUserPortfolio(userId),
        this.getUserTradeSummary(userId),
        this.getUserHoldingsSummary(userId),
        this.getUserReferralSummary(userId),
      ]);

      return {
        success: true,
        data: {
          portfolio: portfolio.status === 'fulfilled' ? portfolio.value?.data : null,
          tradeSummary: tradeSummary.status === 'fulfilled' ? tradeSummary.value?.data : null,
          holdingsSummary: holdingsSummary.status === 'fulfilled' ? holdingsSummary.value?.data : null,
          referralSummary: referralSummary.status === 'fulfilled' ? referralSummary.value?.data : null,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}

export const adminUserService = new AdminUserService();
export default adminUserService;
