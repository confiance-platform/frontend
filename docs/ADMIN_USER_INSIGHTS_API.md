# Admin User Insights - Required Backend APIs

This document outlines the API endpoints needed for the Admin User Insights feature. Some endpoints already exist, while others need to be created.

---

## Existing APIs (Already Available)

These endpoints should already exist based on the current codebase:

### 1. User Management
```
GET  /api/v1/users                          - List all users (paginated)
GET  /api/v1/users/{userId}                 - Get user by ID
```

### 2. Portfolio
```
GET  /api/v1/portfolio/user/{userId}        - Get user portfolio
```
**Response Structure:**
```json
{
  "success": true,
  "data": {
    "userId": 1,
    "totalInvested": 100000,
    "currentValue": 115000,
    "totalReturns": 15000,
    "balance": 5000,
    "lastUpdated": "2024-01-15T10:30:00Z"
  }
}
```

### 3. Transactions
```
GET  /api/v1/transactions/user/{userId}     - Get user transactions
```
**Query Parameters:**
- `page` (int, default: 0)
- `size` (int, default: 20)
- `sortBy` (string, default: 'createdAt')
- `sortDirection` (string, default: 'desc')
- `type` (string, optional) - DEPOSIT, WITHDRAWAL, INVESTMENT, RETURN, etc.
- `status` (string, optional) - PENDING, COMPLETED, FAILED, etc.

### 4. Trades
```
GET  /api/v1/trades/user/{userId}           - Get user trades
GET  /api/v1/trades/user/{userId}/summary   - Get trade summary
```
**Query Parameters for trades:**
- `page`, `size`, `sortBy`, `sortDirection`
- `status` (string, optional) - OPEN, CLOSED, PARTIALLY_SOLD
- `market` (string, optional) - US, INDIA, UK, etc.

**Trade Summary Response:**
```json
{
  "success": true,
  "data": {
    "totalTrades": 25,
    "openTrades": 5,
    "closedTrades": 20,
    "totalInvested": 500000,
    "currentValue": 550000,
    "totalPL": 50000,
    "realizedPL": 30000,
    "unrealizedPL": 20000
  }
}
```

### 5. Holdings
```
GET  /api/v1/holdings/user/{userId}                    - Get all user holdings
GET  /api/v1/holdings/user/{userId}/summary            - Get holdings summary
GET  /api/v1/holdings/user/{userId}/market/{market}    - Get holdings by market
```
**Holdings Summary Response:**
```json
{
  "success": true,
  "data": {
    "totalHoldings": 15,
    "totalValue": 750000,
    "byMarket": {
      "US": { "count": 5, "totalValue": 300000 },
      "INDIA": { "count": 10, "totalValue": 450000 }
    }
  }
}
```

### 6. Referrals
```
GET  /api/v1/referrals/user/{userId}           - Get user referrals
GET  /api/v1/referrals/user/{userId}/summary   - Get referral summary
GET  /api/v1/referrals/user/{userId}/commission - Get commission data
```
**Referral Summary Response:**
```json
{
  "success": true,
  "data": {
    "totalReferrals": 10,
    "activeReferrals": 8,
    "totalCommission": 25000,
    "pendingCommission": 5000,
    "paidCommission": 20000
  }
}
```

---

## New APIs Required

These endpoints need to be created to fully support the Admin User Insights feature:

### 1. Admin Dashboard Statistics
```
GET  /api/v1/admin/dashboard/stats
```
**Purpose:** Get aggregated statistics for admin dashboard

**Response Structure:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 1500,
    "activeUsers": 1200,
    "suspendedUsers": 50,
    "newUsersThisMonth": 75,
    "totalAUM": 50000000,
    "usersWithInvestments": 800,
    "totalTrades": 5000,
    "openTrades": 500
  }
}
```

### 2. Users with Investment Summary (Optional but Recommended)
```
GET  /api/v1/admin/users/with-investments
```
**Purpose:** Get users list with their investment summary in a single call (more efficient than multiple API calls)

**Query Parameters:**
- `page` (int, default: 0)
- `size` (int, default: 20)
- `sortBy` (string, default: 'createdAt')
- `sortDirection` (string, default: 'desc')
- `status` (string, optional) - Filter by user status
- `hasInvestments` (boolean, optional) - Filter users with/without investments
- `minInvestment` (number, optional) - Filter by minimum investment amount
- `maxInvestment` (number, optional) - Filter by maximum investment amount

**Response Structure:**
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "email": "user@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "phone": "+91-9876543210",
        "status": "ACTIVE",
        "roles": ["ROLE_USER"],
        "createdAt": "2024-01-01T10:00:00Z",
        "investmentSummary": {
          "totalInvested": 100000,
          "currentValue": 115000,
          "totalReturns": 15000,
          "totalTrades": 10,
          "openTrades": 3
        }
      }
    ],
    "totalElements": 1500,
    "totalPages": 75,
    "number": 0,
    "size": 20
  }
}
```

### 3. User Recommendations History (Optional)
```
GET  /api/v1/recommendations/user/{userId}
```
**Purpose:** Get recommendations that a specific user has acted on or been assigned

**Query Parameters:**
- `page`, `size`, `sortBy`, `sortDirection`
- `status` (string, optional) - OPEN, CLOSED, EXPIRED

**Response Structure:**
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "symbol": "AAPL",
        "market": "US",
        "recommendationType": "LONG_TERM",
        "recommendedPrice": 150.00,
        "targetPrice": 180.00,
        "stopLoss": 140.00,
        "status": "OPEN",
        "userAction": "BOUGHT",
        "userBuyPrice": 152.00,
        "userQuantity": 10,
        "currentPrice": 165.00,
        "unrealizedPL": 130.00,
        "createdAt": "2024-01-10T09:00:00Z"
      }
    ],
    "totalElements": 20,
    "totalPages": 2
  }
}
```

### 4. User Activity Log (Optional - For Audit)
```
GET  /api/v1/admin/users/{userId}/activity
```
**Purpose:** Get user activity log for audit purposes

**Query Parameters:**
- `page`, `size`
- `activityType` (string, optional) - LOGIN, TRADE, TRANSACTION, PROFILE_UPDATE, etc.
- `fromDate` (date, optional)
- `toDate` (date, optional)

**Response Structure:**
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "activityType": "TRADE",
        "description": "Bought 10 shares of AAPL",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

---

## API Endpoint Summary

| Endpoint | Status | Priority | Notes |
|----------|--------|----------|-------|
| GET /users | Exists | - | Already available |
| GET /users/{id} | Exists | - | Already available |
| GET /portfolio/user/{userId} | Exists | - | Already available |
| GET /transactions/user/{userId} | Exists | - | Already available |
| GET /trades/user/{userId} | Exists | - | Already available |
| GET /trades/user/{userId}/summary | Exists | - | Already available |
| GET /holdings/user/{userId} | Exists | - | Already available |
| GET /holdings/user/{userId}/summary | **Check** | High | May need to verify/create |
| GET /referrals/user/{userId} | Exists | - | Already available |
| GET /referrals/user/{userId}/summary | **Check** | High | May need to verify/create |
| GET /admin/dashboard/stats | **New** | Medium | Improves dashboard load time |
| GET /admin/users/with-investments | **New** | Medium | Reduces API calls |
| GET /recommendations/user/{userId} | **New** | Low | For user-specific recommendations |
| GET /admin/users/{userId}/activity | **New** | Low | For audit trail |

---

## Frontend Implementation Notes

The frontend has been implemented with graceful degradation:

1. **If APIs exist:** Full functionality works as expected
2. **If APIs don't exist:**
   - The UI shows loading states and handles errors gracefully
   - Portfolio data falls back to showing "No data available"
   - User list still works without investment summaries

### Files Created/Modified:

1. **New Service:** `/src/Services/adminUserService.js`
   - Handles all admin user insight API calls
   - Uses existing API endpoints where available
   - Graceful error handling for missing endpoints

2. **New Pages:**
   - `/src/Pages/Admin/UserInsights/index.jsx` - Main dashboard
   - `/src/Pages/Admin/UserInsights/UserDetailView.jsx` - User detail with tabs

3. **Updated Files:**
   - `/src/Data/Sidebar/adminSidebar.js` - Added User Insights menu
   - `/src/Route/index.jsx` - Added new routes
   - `/src/Services/index.js` - Export adminUserService

---

## Testing Checklist

Before deploying, verify these endpoints return expected data:

- [ ] `GET /api/v1/users` - Returns paginated user list
- [ ] `GET /api/v1/users/{userId}` - Returns single user details
- [ ] `GET /api/v1/portfolio/user/{userId}` - Returns portfolio data
- [ ] `GET /api/v1/transactions/user/{userId}` - Returns transactions
- [ ] `GET /api/v1/trades/user/{userId}` - Returns trades
- [ ] `GET /api/v1/trades/user/{userId}/summary` - Returns trade summary
- [ ] `GET /api/v1/holdings/user/{userId}` - Returns holdings
- [ ] `GET /api/v1/holdings/user/{userId}/summary` - Returns holdings summary
- [ ] `GET /api/v1/referrals/user/{userId}` - Returns referrals
- [ ] `GET /api/v1/referrals/user/{userId}/summary` - Returns referral summary
