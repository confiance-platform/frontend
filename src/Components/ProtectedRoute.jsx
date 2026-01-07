// Protected Route Component
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Protected Route - Requires authentication
 */
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page, saving the attempted location
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

/**
 * Role-based Route - Requires specific role
 */
export const RoleRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, isLoading, hasRole } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  // Check if user has any of the required roles
  const hasRequiredRole = roles.some((role) => hasRole(role));

  if (!hasRequiredRole) {
    // Redirect to unauthorized page
    return <Navigate to="/error/403" replace />;
  }

  return children;
};

/**
 * Permission-based Route - Requires specific permission
 */
export const PermissionRoute = ({ children, permissions = [], requireAll = false }) => {
  const { isAuthenticated, isLoading, hasPermission, hasAllPermissions, hasAnyPermission } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  // Check permissions
  let hasRequiredPermission = false;

  if (permissions.length === 0) {
    hasRequiredPermission = true; // No specific permissions required
  } else if (permissions.length === 1) {
    hasRequiredPermission = hasPermission(permissions[0]);
  } else if (requireAll) {
    hasRequiredPermission = hasAllPermissions(permissions);
  } else {
    hasRequiredPermission = hasAnyPermission(permissions);
  }

  if (!hasRequiredPermission) {
    // Redirect to unauthorized page
    return <Navigate to="/error/403" replace />;
  }

  return children;
};

/**
 * Admin Route - Requires ADMIN or SUPER_ADMIN role
 */
export const AdminRoute = ({ children }) => {
  const { isAuthenticated, isLoading, isAdmin } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  if (!isAdmin()) {
    return <Navigate to="/error/403" replace />;
  }

  return children;
};

/**
 * Super Admin Route - Requires SUPER_ADMIN role
 */
export const SuperAdminRoute = ({ children }) => {
  const { isAuthenticated, isLoading, isSuperAdmin } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  if (!isSuperAdmin()) {
    return <Navigate to="/error/403" replace />;
  }

  return children;
};

/**
 * Public Route - Redirects to dashboard if already authenticated
 */
export const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    // Redirect to dashboard if already authenticated
    return <Navigate to="/dashboard/default" replace />;
  }

  return children;
};

export default ProtectedRoute;
