// Notification Service
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';

class NotificationService {
  /**
   * Send email notification
   * @param {object} emailData - Email data
   * @returns {Promise} Send response
   */
  async sendEmail(emailData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.NOTIFICATIONS.SEND_EMAIL, emailData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user notifications
   * @param {number} userId - User ID
   * @param {object} params - Query parameters
   * @returns {Promise} Notifications list
   */
  async getUserNotifications(userId, params = {}) {
    try {
      const response = await apiClient.get(`/notifications/user/${userId}`, {
        params,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark notification as read
   * @param {number} notificationId - Notification ID
   * @returns {Promise} Update response
   */
  async markAsRead(notificationId) {
    try {
      const response = await apiClient.put(`/notifications/${notificationId}/read`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark all notifications as read
   * @param {number} userId - User ID
   * @returns {Promise} Update response
   */
  async markAllAsRead(userId) {
    try {
      const response = await apiClient.put(`/notifications/user/${userId}/read-all`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete notification
   * @param {number} notificationId - Notification ID
   * @returns {Promise} Delete response
   */
  async deleteNotification(notificationId) {
    try {
      const response = await apiClient.delete(`/notifications/${notificationId}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get unread notification count
   * @param {number} userId - User ID
   * @returns {Promise} Count response
   */
  async getUnreadCount(userId) {
    try {
      const response = await apiClient.get(`/notifications/user/${userId}/unread-count`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const notificationService = new NotificationService();
export default notificationService;
