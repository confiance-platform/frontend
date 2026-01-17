// Notification Service
import apiClient from './apiClient';
import { API_ENDPOINTS, PAGINATION } from '../config/constants';

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
   * Send simple email
   * @param {string} to - Recipient email
   * @param {string} subject - Email subject
   * @param {string} body - Email body
   * @returns {Promise} Send response
   */
  async sendSimpleEmail(to, subject, body) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.NOTIFICATIONS.SEND_EMAIL_SIMPLE, {
        to,
        subject,
        body,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Send template email
   * @param {string} to - Recipient email
   * @param {string} templateName - Template name
   * @param {object} variables - Template variables
   * @returns {Promise} Send response
   */
  async sendTemplateEmail(to, templateName, variables) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.NOTIFICATIONS.SEND_EMAIL_TEMPLATE, {
        to,
        templateName,
        variables,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Send email asynchronously
   * @param {object} emailData - Email data
   * @returns {Promise} Send response
   */
  async sendEmailAsync(emailData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.NOTIFICATIONS.SEND_EMAIL_ASYNC, emailData);
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
      const queryParams = {
        page: params.page ?? PAGINATION.DEFAULT_PAGE,
        size: params.size ?? PAGINATION.DEFAULT_SIZE,
      };

      const response = await apiClient.get(API_ENDPOINTS.NOTIFICATIONS.USER(userId), {
        params: queryParams,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Mark notification as read
   * @param {number} notificationId - Notification ID
   * @param {number} userId - User ID (required for X-User-Id header)
   * @returns {Promise} Update response
   */
  async markAsRead(notificationId, userId) {
    try {
      const response = await apiClient.put(
        API_ENDPOINTS.NOTIFICATIONS.MARK_READ(notificationId),
        null,
        {
          headers: { 'X-User-Id': userId },
        }
      );
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
      const response = await apiClient.put(API_ENDPOINTS.NOTIFICATIONS.MARK_ALL_READ(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete notification
   * @param {number} notificationId - Notification ID
   * @param {number} userId - User ID (required for X-User-Id header)
   * @returns {Promise} Delete response
   */
  async deleteNotification(notificationId, userId) {
    try {
      const response = await apiClient.delete(
        API_ENDPOINTS.NOTIFICATIONS.DELETE(notificationId),
        {
          headers: { 'X-User-Id': userId },
        }
      );
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
      const response = await apiClient.get(API_ENDPOINTS.NOTIFICATIONS.UNREAD_COUNT(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const notificationService = new NotificationService();
export default notificationService;
