// User Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

class UserService {
  /**
   * Register new user
   * @param {object} userData - User registration data
   * @returns {Promise} Registration response
   */
  async register(userData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.USERS.REGISTER, userData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user by ID
   * @param {number} userId - User ID
   * @returns {Promise} User data
   */
  async getUserById(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.USERS.GET_BY_ID(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user info (for authentication)
   * @param {number} userId - User ID
   * @returns {Promise} User info
   */
  async getUserInfo(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.USERS.GET_INFO(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update user profile
   * @param {number} userId - User ID
   * @param {object} updateData - User update data
   * @returns {Promise} Update response
   */
  async updateUser(userId, updateData) {
    try {
      const response = await apiClient.put(API_ENDPOINTS.USERS.UPDATE(userId), updateData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete user
   * @param {number} userId - User ID
   * @returns {Promise} Delete response
   */
  async deleteUser(userId) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.USERS.DELETE(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all users (paginated)
   * @param {object} params - Query parameters
   * @returns {Promise} Users list
   */
  async getAllUsers(params = {}) {
    try {
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
        sortBy: params.sortBy ?? PAGINATION.DEFAULT_SORT_BY,
        sortDirection: params.sortDirection ?? PAGINATION.DEFAULT_SORT_DIRECTION,
      };

      const response = await apiClient.get(API_ENDPOINTS.USERS.LIST, {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Add role to user
   * @param {number} userId - User ID
   * @param {string} role - Role to add
   * @returns {Promise} Response
   */
  async addRole(userId, role) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.USERS.ADD_ROLE(userId), null, {
        params: { role },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Remove role from user
   * @param {number} userId - User ID
   * @param {string} role - Role to remove
   * @returns {Promise} Response
   */
  async removeRole(userId, role) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.USERS.REMOVE_ROLE(userId), {
        params: { role },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const userService = new UserService();
export default userService;
