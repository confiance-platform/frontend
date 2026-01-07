// Authentication Context with RBAC
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../Services/authService';
import {
  getUserData,
  isAuthenticated as checkAuth,
  hasRole as checkRole,
  hasPermission as checkPermission,
  hasAnyPermission as checkAnyPermission,
  hasAllPermissions as checkAllPermissions,
  clearAuthData,
} from '../utils/tokenManager';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state
  useEffect(() => {
    const initAuth = () => {
      const authenticated = checkAuth();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        const userData = getUserData();
        setUser(userData);
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  /**
   * Login function
   */
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);

      if (response.success && response.data) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { success: true, data: response.data };
      }

      return { success: false, message: response.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Login failed',
        error,
      };
    }
  };

  /**
   * Logout function
   */
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      clearAuthData();
    }
  };

  /**
   * Update user data
   */
  const updateUser = (userData) => {
    setUser(userData);
  };

  /**
   * Check if user has specific role
   */
  const hasRole = (role) => {
    if (!user) return false;
    return checkRole(role);
  };

  /**
   * Check if user has specific permission
   */
  const hasPermission = (permission) => {
    if (!user) return false;
    return checkPermission(permission);
  };

  /**
   * Check if user has any of the specified permissions
   */
  const hasAnyPermission = (permissions) => {
    if (!user) return false;
    return checkAnyPermission(permissions);
  };

  /**
   * Check if user has all of the specified permissions
   */
  const hasAllPermissions = (permissions) => {
    if (!user) return false;
    return checkAllPermissions(permissions);
  };

  /**
   * Check if user is admin (ADMIN or SUPER_ADMIN)
   */
  const isAdmin = () => {
    if (!user) return false;
    return hasRole('ROLE_ADMIN') || hasRole('ROLE_SUPER_ADMIN');
  };

  /**
   * Check if user is super admin
   */
  const isSuperAdmin = () => {
    if (!user) return false;
    return hasRole('ROLE_SUPER_ADMIN');
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUser,
    hasRole,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    isAdmin,
    isSuperAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
