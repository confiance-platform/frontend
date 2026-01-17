// Referral Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class ReferralService {
  /**
   * Get user referrals (paginated)
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Referrals list
   */
  async getUserReferrals(userId, params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
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
   * Get referral summary for user
   * @param {number} userId - User ID
   * @returns {Promise} Referral summary
   */
  async getReferralSummary(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.SUMMARY(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get referrals by quarter
   * @param {number} userId - User ID
   * @param {number} quarter - Quarter (1, 2, 3, 4)
   * @param {number} year - Year
   * @param {object} params - Pagination parameters
   * @returns {Promise} Referrals list
   */
  async getReferralsByQuarter(userId, quarter, year, params = {}) {
    try {
      const queryParams = {
        quarter,
        year,
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.BY_QUARTER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get commission for quarter
   * @param {number} userId - User ID
   * @param {number} quarter - Quarter (1, 2, 3, 4)
   * @param {number} year - Year
   * @returns {Promise} Commission amount
   */
  async getCommissionForQuarter(userId, quarter, year) {
    try {
      const queryParams = { quarter, year };

      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.COMMISSION(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all commission slabs
   * @returns {Promise} Commission slabs list
   */
  async getCommissionSlabs() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.COMMISSION_SLABS);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create commission slab (admin only)
   * @param {object} slabData - Commission slab data
   * @returns {Promise} Create response
   */
  async createCommissionSlab(slabData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.REFERRALS.CREATE_SLAB, slabData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update commission slab (admin only)
   * @param {number} id - Slab ID
   * @param {object} updateData - Update data
   * @returns {Promise} Update response
   */
  async updateCommissionSlab(id, updateData) {
    try {
      const response = await apiClient.put(
        API_ENDPOINTS.REFERRALS.UPDATE_SLAB(id),
        updateData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete commission slab (admin only)
   * @param {number} id - Slab ID
   * @returns {Promise} Delete response
   */
  async deleteCommissionSlab(id) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.REFERRALS.DELETE_SLAB(id));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all referrals for quarter (admin only)
   * @param {number} quarter - Quarter (1, 2, 3, 4)
   * @param {number} year - Year
   * @param {object} params - Pagination parameters
   * @returns {Promise} Referrals list
   */
  async getAdminReferralsByQuarter(quarter, year, params = {}) {
    try {
      const queryParams = {
        quarter,
        year,
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.REFERRALS.ADMIN_QUARTER, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark referral as paid (admin only)
   * @param {number} referralId - Referral ID
   * @returns {Promise} Response
   */
  async markReferralAsPaid(referralId) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.REFERRALS.MARK_PAID(referralId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Calculate commission based on slabs
   * @param {number} investmentAmount - Investment amount
   * @param {Array} slabs - Commission slabs
   * @returns {object} Commission details
   */
  calculateCommission(investmentAmount, slabs) {
    if (!slabs || slabs.length === 0) {
      return { commission: 0, percentage: 0, slabName: 'N/A' };
    }

    // Find applicable slab
    const applicableSlab = slabs.find((slab) => {
      const min = parseFloat(slab.minAmount || 0);
      const max = slab.maxAmount ? parseFloat(slab.maxAmount) : Infinity;
      return investmentAmount >= min && investmentAmount <= max && slab.active;
    });

    if (!applicableSlab) {
      return { commission: 0, percentage: 0, slabName: 'N/A' };
    }

    const percentage = parseFloat(applicableSlab.commissionPercentage || 0);
    const commission = (investmentAmount * percentage) / 100;

    return {
      commission: commission.toFixed(2),
      percentage,
      slabName: applicableSlab.name,
    };
  }

  /**
   * Get current quarter and year
   * @returns {object} Current quarter and year
   */
  getCurrentQuarterYear() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const quarter = Math.floor(month / 3) + 1;

    return { quarter, year };
  }
}

export const referralService = new ReferralService();
export default referralService;
