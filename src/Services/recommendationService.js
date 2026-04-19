// Recommendation Service — talks to the xlsx-backed recommendation-service.
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class RecommendationService {
  /**
   * Upload a Confiance_Stock_Recommendations.xlsx.
   * Admin / Super Admin only.
   * @param {File} file
   * @returns {Promise<{recLogInserted:number, recLogUpdated:number, longTermInserted:number, longTermUpdated:number, errors:string[]}>}
   */
  async uploadXlsx(file) {
    const form = new FormData();
    form.append('file', file);
    return apiClient.post(API_ENDPOINTS.RECOMMENDATIONS.UPLOAD, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 120000, // large files can take a while
    });
  }

  /** List available sheets (logical tabs the UI can show) */
  async getSheets() {
    return apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.SHEETS);
  }

  /**
   * Paged rec-log view with filters.
   * @param {object} filters { status, from, to, remarks, search }
   * @param {object} page    { page, size }
   */
  async getRecLog(filters = {}, page = {}) {
    const params = {
      ...stripEmpty(filters),
      page: page.page ?? PAGINATION.DEFAULT_PAGE,
      size: page.size ?? PAGINATION.DEFAULT_SIZE,
    };
    return apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.REC_LOG, { params });
  }

  /**
   * Paged long-term view with filters.
   * @param {object} filters { status, search }
   * @param {object} page    { page, size }
   */
  async getLongTerm(filters = {}, page = {}) {
    const params = {
      ...stripEmpty(filters),
      page: page.page ?? PAGINATION.DEFAULT_PAGE,
      size: page.size ?? PAGINATION.DEFAULT_SIZE,
    };
    return apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.LONG_TERM, { params });
  }

  /**
   * Distinct symbols (union of rec_log + long_term). Used by Record Trade dropdown.
   * Any authenticated user can read.
   * @returns {Promise<string[]>}
   */
  async getSymbols() {
    return apiClient.get(API_ENDPOINTS.RECOMMENDATIONS.SYMBOLS);
  }

  // ---- legacy surface kept so existing imports don't break at runtime ----
  async filterRecommendations(filters = {}, params = {}) {
    return this.getRecLog(filters, params);
  }
  async getAllRecommendations(params = {}) {
    return this.getRecLog({}, params);
  }
  async getOpenRecommendations(params = {}) {
    return this.getRecLog({ status: 'Open' }, params);
  }

  calculatePotentialReturn(entryPrice, targetPrice) {
    const pr = Number(targetPrice) - Number(entryPrice);
    const pct = ((pr / Number(entryPrice)) * 100).toFixed(2);
    return { potentialReturn: pr.toFixed(2), potentialReturnPercentage: pct };
  }

  calculateRiskRewardRatio(entryPrice, targetPrice, stopLoss) {
    const reward = Number(targetPrice) - Number(entryPrice);
    const risk = Number(entryPrice) - Number(stopLoss);
    if (risk <= 0) return '0.00';
    return (reward / risk).toFixed(2);
  }
}

function stripEmpty(obj) {
  const out = {};
  Object.entries(obj).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') out[k] = v;
  });
  return out;
}

export const recommendationService = new RecommendationService();
export default recommendationService;
