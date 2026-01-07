// Authentication Service
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';
import {
  setAccessToken,
  setRefreshToken,
  setUserData,
  setSessionId,
  clearAuthData,
  getSessionId,
} from '../utils/tokenManager';

class AuthService {
  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} Login response
   */
  async login(email, password) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });

      if (response.success && response.data) {
        // Save tokens
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);

        // Save user data
        if (response.data.user) {
          setUserData(response.data.user);

          // Generate and save session ID from user info
          const sessionId = this.generateSessionId(response.data.user.id);
          setSessionId(sessionId);
        }
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Logout user
   * @returns {Promise} Logout response
   */
  async logout() {
    try {
      const sessionId = getSessionId();

      // Call logout endpoint
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT, null, {
        headers: {
          'X-Session-Id': sessionId,
        },
      });

      // Clear local storage regardless of response
      clearAuthData();

      return response;
    } catch (error) {
      // Clear local storage even if logout fails
      clearAuthData();
      throw error;
    }
  }

  /**
   * Refresh access token
   * @param {string} refreshToken - Refresh token
   * @returns {Promise} Refresh response
   */
  async refreshToken(refreshToken) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REFRESH, {
        refreshToken,
      });

      if (response.success && response.data) {
        // Save new tokens
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);

        // Update user data
        if (response.data.user) {
          setUserData(response.data.user);
        }
      }

      return response;
    } catch (error) {
      // If refresh fails, clear all auth data
      clearAuthData();
      throw error;
    }
  }

  /**
   * Generate session ID
   * @param {number} userId - User ID
   * @returns {string} Session ID
   */
  generateSessionId(userId) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `session-${userId}-${timestamp}-${random}`;
  }

  /**
   * Check if user is authenticated
   * @returns {boolean} Authentication status
   */
  isAuthenticated() {
    const { isAuthenticated } = require('../utils/tokenManager');
    return isAuthenticated();
  }

  /**
   * Get current user
   * @returns {object|null} Current user data
   */
  getCurrentUser() {
    const { getUserData } = require('../utils/tokenManager');
    return getUserData();
  }
}

export const authService = new AuthService();
export default authService;
