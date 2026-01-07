// Axios API Client Configuration
import axios from 'axios';
import { API_BASE_URL, ENABLE_LOGS } from '../config/constants';
import {
  getAccessToken,
  getSessionId,
  isTokenExpired,
  clearAuthData,
} from '../utils/tokenManager';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add access token to headers
    const token = getAccessToken();
    if (token && !isTokenExpired(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add session ID to headers if available
    const sessionId = getSessionId();
    if (sessionId) {
      config.headers['X-Session-Id'] = sessionId;
    }

    // Log request in development
    if (ENABLE_LOGS) {
      console.log('API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
        params: config.params,
      });
    }

    return config;
  },
  (error) => {
    if (ENABLE_LOGS) {
      console.error('Request Error:', error);
    }
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (ENABLE_LOGS) {
      console.log('API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }

    // Return the data directly
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Log error in development
    if (ENABLE_LOGS) {
      console.error('Response Error:', {
        status: error.response?.status,
        url: error.config?.url,
        message: error.message,
        data: error.response?.data,
      });
    }

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Check if we have a refresh token
      const refreshToken = localStorage.getItem('confiance_refresh_token');

      if (refreshToken) {
        try {
          // Try to refresh the token
          const { authService } = await import('./authService');
          const refreshResponse = await authService.refreshToken(refreshToken);

          if (refreshResponse.success) {
            // Retry the original request with new token
            return apiClient(originalRequest);
          }
        } catch (refreshError) {
          // Refresh failed, clear auth data and redirect to login
          clearAuthData();
          window.location.href = '/auth/sign-in';
          return Promise.reject(refreshError);
        }
      } else {
        // No refresh token, clear auth data and redirect to login
        clearAuthData();
        window.location.href = '/auth/sign-in';
      }
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      console.error('Access Denied: You do not have permission to perform this action');
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      console.error('Network Error: Please check your internet connection');
    }

    // Return standardized error response
    const errorResponse = {
      success: false,
      message: error.response?.data?.message || error.message || 'An error occurred',
      error: error.response?.data?.error || {
        code: 'UNKNOWN_ERROR',
        details: error.message,
      },
      status: error.response?.status,
    };

    return Promise.reject(errorResponse);
  }
);

export default apiClient;
