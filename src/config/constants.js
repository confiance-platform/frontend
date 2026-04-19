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

// Markets
export const MARKETS = {
  US: 'US',
  INDIA: 'INDIA',
  UK: 'UK',
  EU: 'EU',
  SINGAPORE: 'SINGAPORE',
  HONG_KONG: 'HONG_KONG',
  JAPAN: 'JAPAN',
  CANADA: 'CANADA',
  AUSTRALIA: 'AUSTRALIA',
};

// Market Labels for display
export const MARKET_LABELS = {
  US: 'United States (USD)',
  INDIA: 'India (INR)',
  UK: 'United Kingdom (GBP)',
  EU: 'European Union (EUR)',
  SINGAPORE: 'Singapore (SGD)',
  HONG_KONG: 'Hong Kong (HKD)',
  JAPAN: 'Japan (JPY)',
  CANADA: 'Canada (CAD)',
  AUSTRALIA: 'Australia (AUD)',
};

// Trade Types
export const TRADE_TYPES = {
  POSITIONAL: 'POSITIONAL',
  LONG_TERM: 'LONG_TERM',
  MOMENTUM: 'MOMENTUM',
  SWING: 'SWING',
  INTRADAY: 'INTRADAY',
};

// Trade Type Labels
export const TRADE_TYPE_LABELS = {
  POSITIONAL: 'Positional (Short to Medium Term)',
  LONG_TERM: 'Long Term Investment',
  MOMENTUM: 'Momentum (Quick Gains)',
  SWING: 'Swing Trade',
  INTRADAY: 'Intraday',
};

// Recommendation Status (matches backend RecommendationStatus enum)
export const RECOMMENDATION_STATUS = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  EXPIRED: 'EXPIRED',
};

// Trade Status
export const TRADE_STATUS = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  PARTIALLY_SOLD: 'PARTIALLY_SOLD',
};

// Referral Status
export const REFERRAL_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PAID: 'PAID',
  PENDING: 'PENDING',
};

// Payment Status
export const PAYMENT_STATUS = {
  CREATED: 'CREATED',
  AUTHORIZED: 'AUTHORIZED',
  CAPTURED: 'CAPTURED',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED',
};

// OTP Purpose
export const OTP_PURPOSE = {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN',
  PASSWORD_RESET: 'PASSWORD_RESET',
  PHONE_VERIFICATION: 'PHONE_VERIFICATION',
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  TRANSACTION: 'TRANSACTION',
  TWO_FACTOR_AUTH: 'TWO_FACTOR_AUTH',
};

// Salutation Options
export const SALUTATIONS = {
  MR: 'MR',
  MRS: 'MRS',
  MS: 'MS',
  DR: 'DR',
  PROF: 'PROF',
};

// Salutation Labels
export const SALUTATION_LABELS = {
  MR: 'Mr.',
  MRS: 'Mrs.',
  MS: 'Ms.',
  DR: 'Dr.',
  PROF: 'Prof.',
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_RESET_TOKEN: '/auth/verify-reset-token',
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
    BY_EMAIL: '/users/by-email',
    UPDATE_PASSWORD: (id) => `/users/${id}/password`,
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
    DASHBOARD_STATS: '/admin/dashboard/stats',
    USERS_WITH_INVESTMENTS: '/admin/users/with-investments',
    PORTFOLIO_STATS: '/admin/portfolio/stats',
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
    SEND_EMAIL_SIMPLE: '/notifications/send-email/simple',
    SEND_EMAIL_TEMPLATE: '/notifications/send-email/template',
    SEND_EMAIL_ASYNC: '/notifications/send-email/async',
    USER: (userId) => `/notifications/user/${userId}`,
    UNREAD: (userId) => `/notifications/user/${userId}/unread`,
    MARK_READ: (notificationId) => `/notifications/${notificationId}/read`,
    MARK_ALL_READ: (userId) => `/notifications/user/${userId}/read-all`,
    DELETE: (notificationId) => `/notifications/${notificationId}`,
    UNREAD_COUNT: (userId) => `/notifications/user/${userId}/unread-count`,
  },
  // Payments (Razorpay)
  PAYMENTS: {
    CREATE_ORDER: '/payments/create-order',
    VERIFY: '/payments/verify',
    USER: (userId) => `/payments/user/${userId}`,
    GET_BY_ORDER_ID: (orderId) => `/payments/order/${orderId}`,
    GET_BY_RAZORPAY_ORDER_ID: (razorpayOrderId) => `/payments/razorpay-order/${razorpayOrderId}`,
    REFUND: (razorpayPaymentId) => `/payments/refund/${razorpayPaymentId}`,
    WEBHOOK: '/payments/webhook',
  },
  // OTP
  OTP: {
    SEND: '/otp/send',
    VERIFY: '/otp/verify',
    RESEND: '/otp/resend',
  },
  // File Upload
  FILES: {
    UPLOAD: '/files/upload',
    UPLOAD_IMAGE: '/files/upload/image',
    UPLOAD_DOCUMENT: '/files/upload/document',
    UPLOAD_VIDEO: '/files/upload/video',
    GET_BY_PUBLIC_ID: (publicId) => `/files/${encodeURIComponent(publicId)}`,
    GET_BY_ENTITY: (entityType, entityId) => `/files/entity/${entityType}/${entityId}`,
    DELETE: (publicId) => `/files/${encodeURIComponent(publicId)}`,
    GET_BY_USER: (userId) => `/files/user/${userId}`,
  },
  // Recommendations (xlsx-backed — recommendation-service)
  RECOMMENDATIONS: {
    UPLOAD: '/recommendations/upload',
    SHEETS: '/recommendations/sheets',
    REC_LOG: '/recommendations/rec-log',
    LONG_TERM: '/recommendations/long-term',
    SYMBOLS: '/recommendations/symbols',
    // legacy (no longer wired — kept to avoid import errors elsewhere)
    LIST: '/recommendations/rec-log',
    OPEN: '/recommendations/rec-log',
    GET_BY_ID: (id) => `/recommendations/rec-log/${id}`,
    CREATE: '/recommendations/upload',
    UPDATE: (id) => `/recommendations/rec-log/${id}`,
    DELETE: (id) => `/recommendations/rec-log/${id}`,
    FILTER: '/recommendations/rec-log',
    BY_MARKET: (market) => `/recommendations/rec-log?market=${market}`,
  },
  // Trades
  TRADES: {
    USER: (userId) => `/trades/user/${userId}`,
    CREATE: (userId) => `/trades/user/${userId}`,
    UPDATE: (tradeId, userId) => `/trades/${tradeId}/user/${userId}`,
    DELETE: (tradeId, userId) => `/trades/${tradeId}/user/${userId}`,
    SELL: (tradeId, userId) => `/trades/${tradeId}/user/${userId}/sell`,
    GET_BY_ID: (tradeId, userId) => `/trades/${tradeId}/user/${userId}`,
    FILTER: (userId) => `/trades/user/${userId}/filter`,
    BY_STATUS: (userId, status) => `/trades/user/${userId}/status/${status}`,
    DATE_RANGE: (userId) => `/trades/user/${userId}/date-range`,
    SUMMARY: (userId) => `/trades/user/${userId}/summary`,
    ADMIN_ALL: '/trades/admin/all',
  },
  // Holdings
  HOLDINGS: {
    USER: (userId) => `/holdings/user/${userId}`,
    PAGED: (userId) => `/holdings/user/${userId}/paged`,
    SUMMARY: (userId) => `/holdings/user/${userId}/summary`,
    BY_MARKET: (userId, market) => `/holdings/user/${userId}/market/${market}`,
    BY_SYMBOL: (userId, symbol) => `/holdings/user/${userId}/symbol/${symbol}`,
    ADMIN_BY_SYMBOL: (symbol) => `/holdings/admin/symbol/${symbol}`,
    ADMIN_USERS_WITH_HOLDINGS: '/holdings/admin/users-with-holdings',
  },
  // Referrals
  REFERRALS: {
    USER: (userId) => `/referrals/user/${userId}`,
    SUMMARY: (userId) => `/referrals/user/${userId}/summary`,
    BY_QUARTER: (userId) => `/referrals/user/${userId}/quarter`,
    COMMISSION: (userId) => `/referrals/user/${userId}/commission`,
    COMMISSION_SLABS: '/referrals/commission-slabs',
    CREATE_SLAB: '/referrals/commission-slabs',
    UPDATE_SLAB: (id) => `/referrals/commission-slabs/${id}`,
    DELETE_SLAB: (id) => `/referrals/commission-slabs/${id}`,
    ADMIN_QUARTER: '/referrals/admin/quarter',
    MARK_PAID: (referralId) => `/referrals/admin/${referralId}/mark-paid`,
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
