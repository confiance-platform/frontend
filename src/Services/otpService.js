// OTP Service (Twilio SMS/Email)
import apiClient from './apiClient';
import { API_ENDPOINTS, OTP_PURPOSE } from '../config/constants';

class OtpService {
  /**
   * Send OTP to phone/email
   * @param {string} identifier - Phone number (with country code) or email
   * @param {string} purpose - OTP purpose (see OTP_PURPOSE enum)
   * @param {string} countryCode - Optional country code
   * @returns {Promise} Send response
   */
  async sendOtp(identifier, purpose, countryCode = '+91') {
    try {
      const response = await apiClient.post(API_ENDPOINTS.OTP.SEND, {
        identifier,
        purpose,
        countryCode,
      });
      return response;
    } catch (error) {
      // Handle rate limit errors
      if (error.status === 429) {
        const retryAfter = error.retryAfterSeconds || 60;
        throw {
          ...error,
          error: 'RATE_LIMIT_EXCEEDED',
          retryAfterSeconds: retryAfter,
          message: `Too many attempts. Please wait ${retryAfter} seconds.`,
        };
      }
      throw error;
    }
  }

  /**
   * Verify OTP
   * @param {string} identifier - Phone number or email
   * @param {string} otp - 6-digit OTP code
   * @param {string} purpose - OTP purpose (must match send purpose)
   * @returns {Promise} Verification response
   */
  async verifyOtp(identifier, otp, purpose) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.OTP.VERIFY, {
        identifier,
        otp,
        purpose,
      });
      return response;
    } catch (error) {
      // Handle specific OTP errors
      if (error.status === 400) {
        const errorType = error.errorCode || error.error;
        switch (errorType) {
          case 'OTP_EXPIRED':
            throw {
              ...error,
              error: 'OTP_EXPIRED',
              message: 'OTP has expired. Please request a new one.',
            };
          case 'INVALID_OTP':
            throw {
              ...error,
              error: 'INVALID_OTP',
              message: 'Invalid OTP. Please check and try again.',
            };
          case 'MAX_ATTEMPTS_EXCEEDED':
            throw {
              ...error,
              error: 'MAX_ATTEMPTS_EXCEEDED',
              message: 'Maximum attempts exceeded. Request a new OTP.',
            };
          default:
            throw error;
        }
      }
      throw error;
    }
  }

  /**
   * Resend OTP
   * @param {string} identifier - Phone number or email
   * @param {string} purpose - OTP purpose
   * @returns {Promise} Resend response
   */
  async resendOtp(identifier, purpose) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.OTP.RESEND, {
        identifier,
        purpose,
      });
      return response;
    } catch (error) {
      // Handle cooldown errors
      if (error.status === 429) {
        const retryAfter = error.retryAfterSeconds || 60;
        throw {
          ...error,
          error: 'RATE_LIMIT_EXCEEDED',
          retryAfterSeconds: retryAfter,
          message: `Please wait ${retryAfter} seconds before resending.`,
        };
      }
      throw error;
    }
  }

  /**
   * Format phone number with country code
   * @param {string} phone - Phone number
   * @param {string} countryCode - Country code (default: +91)
   * @returns {string} Formatted phone number
   */
  formatPhoneNumber(phone, countryCode = '+91') {
    // Remove all non-digit characters except +
    let cleaned = phone.replace(/[^\d+]/g, '');

    // If already has country code, return as is
    if (cleaned.startsWith('+')) {
      return cleaned;
    }

    // Remove leading 0 if present
    if (cleaned.startsWith('0')) {
      cleaned = cleaned.substring(1);
    }

    return `${countryCode}${cleaned}`;
  }

  /**
   * Validate phone number format
   * @param {string} phone - Phone number
   * @returns {boolean} Is valid
   */
  isValidPhoneNumber(phone) {
    // Basic validation: 10-15 digits with optional +
    const regex = /^\+?[1-9]\d{9,14}$/;
    return regex.test(phone.replace(/[\s-]/g, ''));
  }

  /**
   * Validate email format
   * @param {string} email - Email address
   * @returns {boolean} Is valid
   */
  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  /**
   * Get OTP purpose display text
   * @param {string} purpose - OTP purpose
   * @returns {string} Display text
   */
  getPurposeDisplayText(purpose) {
    const texts = {
      [OTP_PURPOSE.REGISTRATION]: 'account registration',
      [OTP_PURPOSE.LOGIN]: 'login verification',
      [OTP_PURPOSE.PASSWORD_RESET]: 'password reset',
      [OTP_PURPOSE.PHONE_VERIFICATION]: 'phone verification',
      [OTP_PURPOSE.EMAIL_VERIFICATION]: 'email verification',
      [OTP_PURPOSE.TRANSACTION]: 'transaction authorization',
      [OTP_PURPOSE.TWO_FACTOR_AUTH]: 'two-factor authentication',
    };
    return texts[purpose] || 'verification';
  }
}

export const otpService = new OtpService();
export default otpService;
