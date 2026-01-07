// Application Constants

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Confiance Financial Platform';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
export const ENABLE_LOGS = import.meta.env.VITE_ENABLE_LOGS === 'true';

// Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'confiance_access_token',
  REFRESH_TOKEN: 'confiance_refresh_token',
  USER_DATA: 'confiance_user_data',
  SESSION_ID: 'confiance_session_id',
  THEME_SETTINGS: 'La-Theme-settings',
};

// User Roles
export const USER_ROLES = {
  USER: 'ROLE_USER',
  ADMIN: 'ROLE_ADMIN',
  SUPER_ADMIN: 'ROLE_SUPER_ADMIN',
};

// Permissions
export const PERMISSIONS = {
  USER_READ: 'USER_READ',
  USER_WRITE: 'USER_WRITE',
  USER_DELETE: 'USER_DELETE',
  INVESTMENT_READ: 'INVESTMENT_READ',
  INVESTMENT_WRITE: 'INVESTMENT_WRITE',
  INVESTMENT_DELETE: 'INVESTMENT_DELETE',
  TRANSACTION_READ: 'TRANSACTION_READ',
  TRANSACTION_WRITE: 'TRANSACTION_WRITE',
  PORTFOLIO_READ: 'PORTFOLIO_READ',
  PORTFOLIO_WRITE: 'PORTFOLIO_WRITE',
  ADMIN_PANEL_ACCESS: 'ADMIN_PANEL_ACCESS',
  PERMISSION_GRANT: 'PERMISSION_GRANT',
  PERMISSION_REVOKE: 'PERMISSION_REVOKE',
  PERMISSION_VIEW: 'PERMISSION_VIEW',
};

// User Status
export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED',
};

// Investment Types
export const INVESTMENT_TYPES = {
  MUTUAL_FUND: 'MUTUAL_FUND',
  EQUITY: 'EQUITY',
  BOND: 'BOND',
  FIXED_DEPOSIT: 'FIXED_DEPOSIT',
  RECURRING_DEPOSIT: 'RECURRING_DEPOSIT',
  GOLD: 'GOLD',
  REAL_ESTATE: 'REAL_ESTATE',
  CRYPTO: 'CRYPTO',
  OTHER: 'OTHER',
};

// Investment Status
export const INVESTMENT_STATUS = {
  ACTIVE: 'ACTIVE',
  MATURED: 'MATURED',
  WITHDRAWN: 'WITHDRAWN',
  CLOSED: 'CLOSED',
  SUSPENDED: 'SUSPENDED',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  INVESTMENT: 'INVESTMENT',
  RETURN: 'RETURN',
  DIVIDEND: 'DIVIDEND',
  INTEREST: 'INTEREST',
  FEE: 'FEE',
  REFUND: 'REFUND',
};

// Transaction Status
export const TRANSACTION_STATUS = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  // Users
  USERS: {
    REGISTER: '/users/register',
    GET_BY_ID: (id) => `/users/${id}`,
    GET_INFO: (id) => `/users/${id}/info`,
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
    LIST: '/users',
    VALIDATE_CREDENTIALS: '/users/validate-credentials',
    ADD_ROLE: (id) => `/users/${id}/roles`,
    REMOVE_ROLE: (id) => `/users/${id}/roles`,
  },
  // Admin
  ADMIN: {
    PERMISSIONS: {
      AVAILABLE: '/admin/permissions/available',
      USER: (userId) => `/admin/permissions/user/${userId}`,
      GRANT: '/admin/permissions/grant',
      REVOKE: '/admin/permissions/revoke',
      SET: (userId) => `/admin/permissions/user/${userId}`,
      HAS: (userId, permission) => `/admin/permissions/user/${userId}/has/${permission}`,
    },
  },
  // Investments
  INVESTMENTS: {
    LIST: '/investments',
    GET_BY_ID: (id) => `/investments/${id}`,
    CREATE: '/investments',
  },
  // Transactions
  TRANSACTIONS: {
    USER: (userId) => `/transactions/user/${userId}`,
    CREATE: '/transactions',
  },
  // Portfolio
  PORTFOLIO: {
    USER: (userId) => `/portfolio/user/${userId}`,
  },
  // Notifications
  NOTIFICATIONS: {
    SEND_EMAIL: '/notifications/send-email',
  },
};

// Error Codes
export const ERROR_CODES = {
  AUTH_001: 'Invalid credentials',
  AUTH_002: 'Token expired',
  AUTH_003: 'Invalid token',
  AUTH_004: 'Refresh token expired',
  USER_001: 'User not found',
  USER_002: 'Email already exists',
  USER_003: 'Invalid user data',
  PERM_001: 'Insufficient permissions',
  PERM_002: 'Invalid permission',
  VAL_001: 'Validation error',
  SYS_001: 'System error',
};

// Pagination Defaults
export const PAGINATION = {
  DEFAULT_PAGE: 0,
  DEFAULT_SIZE: 20,
  DEFAULT_SORT_BY: 'id',
  DEFAULT_SORT_DIRECTION: 'asc',
};
