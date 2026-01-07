// Admin Service (Permission Management)
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';

class AdminService {
  /**
   * Get all available permissions
   * @returns {Promise} Available permissions
   */
  async getAvailablePermissions() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN.PERMISSIONS.AVAILABLE);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user permissions
   * @param {number} userId - User ID
   * @returns {Promise} User permissions
   */
  async getUserPermissions(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN.PERMISSIONS.USER(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Grant permissions to user
   * @param {number} userId - User ID
   * @param {Array} permissions - Permissions to grant
   * @returns {Promise} Response
   */
  async grantPermissions(userId, permissions) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ADMIN.PERMISSIONS.GRANT, {
        userId,
        permissions,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Revoke permissions from user
   * @param {number} userId - User ID
   * @param {Array} permissions - Permissions to revoke
   * @returns {Promise} Response
   */
  async revokePermissions(userId, permissions) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ADMIN.PERMISSIONS.REVOKE, {
        userId,
        permissions,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Set user permissions (replace all)
   * @param {number} userId - User ID
   * @param {Array} permissions - Permissions to set
   * @returns {Promise} Response
   */
  async setUserPermissions(userId, permissions) {
    try {
      const response = await apiClient.put(
        API_ENDPOINTS.ADMIN.PERMISSIONS.SET(userId),
        permissions
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Check if user has permission
   * @param {number} userId - User ID
   * @param {string} permission - Permission to check
   * @returns {Promise} Response
   */
  async checkUserPermission(userId, permission) {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN.PERMISSIONS.HAS(userId, permission)
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const adminService = new AdminService();
export default adminService;
