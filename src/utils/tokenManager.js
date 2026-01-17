// Token Management Utilities
import { jwtDecode } from 'jwt-decode';
import { STORAGE_KEYS } from '../config/constants';

/**
 * Save access token to storage
 */
export const setAccessToken = (token) => {
  if (token) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  }
};

/**
 * Get access token from storage
 */
export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Remove access token from storage
 */
export const removeAccessToken = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Save refresh token to storage
 */
export const setRefreshToken = (token) => {
  if (token) {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  }
};

/**
 * Get refresh token from storage
 */
export const getRefreshToken = () => {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Remove refresh token from storage
 */
export const removeRefreshToken = () => {
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Save session ID to storage
 */
export const setSessionId = (sessionId) => {
  if (sessionId) {
    localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  }
};

/**
 * Get session ID from storage
 */
export const getSessionId = () => {
  return localStorage.getItem(STORAGE_KEYS.SESSION_ID);
};

/**
 * Remove session ID from storage
 */
export const removeSessionId = () => {
  localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
};

/**
 * Save user data to storage
 */
export const setUserData = (userData) => {
  if (userData) {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  }
};

/**
 * Get user data from storage
 */
export const getUserData = () => {
  const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  return userData ? JSON.parse(userData) : null;
};

/**
 * Remove user data from storage
 */
export const removeUserData = () => {
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
};

/**
 * Clear all authentication data
 */
export const clearAuthData = () => {
  removeAccessToken();
  removeRefreshToken();
  removeSessionId();
  removeUserData();
};

/**
 * Decode JWT token
 */
export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

/**
 * Check if token is expired
 */
export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return true;

    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

/**
 * Get user info from access token
 */
export const getUserFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = decodeToken(token);
    return {
      userId: decoded.userId || decoded.sub,
      email: decoded.email,
      roles: decoded.roles || [],
      permissions: decoded.permissions || [],
      sessionId: decoded.sessionId,
    };
  } catch (error) {
    console.error('Error extracting user from token:', error);
    return null;
  }
};

/**
 * Check if user has specific role
 */
export const hasRole = (role) => {
  const userData = getUserData();
  if (!userData || !userData.roles) return false;
  return userData.roles.includes(role);
};

/**
 * Check if user has specific permission
 */
export const hasPermission = (permission) => {
  const userData = getUserData();
  if (!userData || !userData.permissions) return false;
  return userData.permissions.includes(permission);
};

/**
 * Check if user has any of the specified permissions
 */
export const hasAnyPermission = (permissions) => {
  const userData = getUserData();
  if (!userData || !userData.permissions) return false;
  return permissions.some((perm) => userData.permissions.includes(perm));
};

/**
 * Check if user has all of the specified permissions
 */
export const hasAllPermissions = (permissions) => {
  const userData = getUserData();
  if (!userData || !userData.permissions) return false;
  return permissions.every((perm) => userData.permissions.includes(perm));
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  const token = getAccessToken();
  return token && !isTokenExpired(token);
};
