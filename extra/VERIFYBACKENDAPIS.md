# Backend API Verification Document

This document lists all APIs integrated in the frontend application, organized by backend module/service.
Base URL: `{API_BASE_URL}` (configured in `.env` files)

---

## 1. AUTH SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| POST | `/auth/login` | User login | `{ email, password }` | SignIn page |
| POST | `/auth/logout` | User logout | - | Header logout |
| POST | `/auth/refresh` | Refresh access token | `{ refreshToken }` | apiClient interceptor |
| POST | `/auth/forgot-password` | Request password reset email | `{ email }` | ForgotPassword page |
| POST | `/auth/reset-password` | Reset password with token | `{ token, newPassword, confirmPassword }` | PasswordReset page |
| GET | `/auth/verify-reset-token?token=xxx` | Verify reset token validity | - | PasswordReset page |

---

## 2. USER SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| POST | `/users/register` | Register new user | `{ email, password, firstName, lastName, contactNumber, country, city, ... }` | SignUp, CreateUser |
| GET | `/users/{id}` | Get user by ID | - | EditUser, Profile |
| GET | `/users/{id}/info` | Get user info | - | Auth context |
| PUT | `/users/{id}` | Update user profile | `{ firstName, lastName, email, contactNumber, country, state, city, address, postalCode, status }` | EditUser, Settings |
| DELETE | `/users/{id}` | Delete user | - | AllUsers (admin) |
| GET | `/users?page=X&size=X&sortBy=X&sortDirection=X` | Get all users (paginated) | - | AllUsers, AllAdmins |
| POST | `/users/{id}/roles?role=ROLE_XXX` | Add role to user | - | EditUser, CreateUser |
| DELETE | `/users/{id}/roles?role=ROLE_XXX` | Remove role from user | - | EditUser |

---

## 3. ADMIN SERVICE (Permissions)

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/admin/permissions/available` | Get all available permissions | - | Permissions page |
| GET | `/admin/permissions/user/{userId}` | Get user permissions | - | Permissions page |
| POST | `/admin/permissions/grant` | Grant permissions to user | `{ userId, permissions: [] }` | Permissions page |
| POST | `/admin/permissions/revoke` | Revoke permissions from user | `{ userId, permissions: [] }` | Permissions page |
| PUT | `/admin/permissions/user/{userId}` | Set user permissions (replace all) | `[ "PERMISSION_1", "PERMISSION_2" ]` | Permissions page |
| GET | `/admin/permissions/user/{userId}/has/{permission}` | Check if user has permission | - | RoleGate component |

---

## 4. INVESTMENT SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/investments?page=X&size=X` | Get all investment products | - | Investments page |
| GET | `/investments/{id}` | Get investment by ID | - | Investment details |
| POST | `/investments` | Create new investment product | `{ name, type, description, ... }` | Admin (if implemented) |

---

## 5. TRANSACTION SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/transactions/user/{userId}?page=X&size=X` | Get user transactions | - | Transactions page |
| POST | `/transactions` | Create new transaction | `{ userId, type, amount, ... }` | Transaction creation |

---

## 6. PORTFOLIO SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/portfolio/user/{userId}` | Get user portfolio summary | - | Portfolio page, Dashboard |

---

## 7. RECOMMENDATION SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/recommendations?page=X&size=X` | Get all recommendations | - | Admin Recommendations |
| GET | `/recommendations/open?page=X&size=X` | Get open recommendations | - | User Recommendations |
| GET | `/recommendations/{id}` | Get recommendation by ID | - | Recommendation details |
| GET | `/recommendations/filter?market=X&status=X&page=X&size=X` | Filter recommendations | - | Recommendations page |
| GET | `/recommendations/market/{market}?page=X&size=X` | Get recommendations by market | - | Recommendations page |
| POST | `/recommendations` | Create recommendation (admin) | `{ stockSymbol, stockName, market, tradeType, entryPrice, targetPrice, stopLoss, status, notes }` | Admin Recommendations |
| PUT | `/recommendations/{id}` | Update recommendation (admin) | `{ stockSymbol, stockName, market, tradeType, entryPrice, exitPrice, targetPrice, stopLoss, status, notes }` | Admin Recommendations |
| DELETE | `/recommendations/{id}` | Delete recommendation (admin) | - | Admin Recommendations |

---

## 8. TRADE SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/trades/user/{userId}?page=X&size=X&sortBy=X&sortDirection=X` | Get user trades | - | Trades page |
| POST | `/trades/user/{userId}` | Create new trade (buy) | `{ stockSymbol, stockName, market, tradeType, buyPrice, quantity, buyDate, recommendationId?, notes }` | Record Trade |
| POST | `/trades/{tradeId}/user/{userId}/sell` | Record sell for trade | `{ sellPrice, quantitySold, sellDate, notes }` | Sell Trade modal |
| GET | `/trades/{tradeId}` | Get trade by ID | - | Trade details |
| GET | `/trades/user/{userId}/filter?market=X&status=X&page=X&size=X` | Filter user trades | - | Trades page filter |
| GET | `/trades/user/{userId}/status/{status}?page=X&size=X` | Get trades by status | - | Trades page filter |
| GET | `/trades/user/{userId}/date-range?startDate=X&endDate=X&page=X&size=X` | Get trades by date range | - | Trades page filter |
| GET | `/trades/user/{userId}/summary` | Get P&L summary for user | - | Trades summary, Dashboard |
| GET | `/trades/admin/all?page=X&size=X` | Get all trades (admin) | - | Admin Client P&L |

---

## 9. HOLDING SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/holdings/user/{userId}` | Get user holdings | - | Holdings page |
| GET | `/holdings/user/{userId}/summary` | Get holdings summary | - | Holdings page, Dashboard |
| GET | `/holdings/user/{userId}/market/{market}` | Get holdings by market | - | Holdings page filter |

---

## 10. REFERRAL SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| GET | `/referrals/user/{userId}?page=X&size=X` | Get user referrals | - | User Referrals page |
| GET | `/referrals/user/{userId}/summary` | Get referral summary | - | User Referrals page |
| GET | `/referrals/user/{userId}/quarter?quarter=X&year=X&page=X&size=X` | Get referrals by quarter | - | User Referrals page |
| GET | `/referrals/user/{userId}/commission?quarter=X&year=X` | Get commission for quarter | - | User Referrals page |
| GET | `/referrals/commission-slabs` | Get all commission slabs | - | Commission Config, Referrals |
| POST | `/referrals/commission-slabs` | Create commission slab (admin) | `{ name, minAmount, maxAmount, commissionPercentage, quarter, year, active }` | Commission Config |
| PUT | `/referrals/commission-slabs/{id}` | Update commission slab (admin) | `{ name, minAmount, maxAmount, commissionPercentage, quarter, year, active }` | Commission Config |
| DELETE | `/referrals/commission-slabs/{id}` | Delete commission slab (admin) | - | Commission Config |
| GET | `/referrals/admin/quarter?quarter=X&year=X&page=X&size=X` | Get all referrals by quarter (admin) | - | Referral Reports |
| POST | `/referrals/admin/{referralId}/mark-paid` | Mark referral as paid (admin) | - | Referral Reports |

---

## 11. NOTIFICATION SERVICE

| Method | Endpoint | Description | Request Body | Used In |
|--------|----------|-------------|--------------|---------|
| POST | `/notifications/send-email` | Send email notification | `{ to, subject, body, ... }` | Various notifications |
| GET | `/notifications/user/{userId}` | Get user notifications | - | Notification dropdown |
| PUT | `/notifications/{notificationId}/read` | Mark notification as read | - | Notification dropdown |
| PUT | `/notifications/user/{userId}/read-all` | Mark all notifications as read | - | Notification dropdown |
| DELETE | `/notifications/{notificationId}` | Delete notification | - | Notification dropdown |
| GET | `/notifications/user/{userId}/unread-count` | Get unread notification count | - | Header badge |

---

## API Response Format (Expected)

All APIs should return responses in this format:

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... } // or array for list endpoints
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "content": [ ... ],
    "pageNumber": 0,
    "pageSize": 20,
    "totalElements": 100,
    "totalPages": 5,
    "first": true,
    "last": false
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errorCode": "AUTH_001",
  "errors": [ ... ] // optional validation errors
}
```

---

## Authentication Headers

All protected endpoints require:
```
Authorization: Bearer {accessToken}
```

Logout endpoint also requires:
```
X-Session-Id: {sessionId}
```

---

## User Roles

| Role | Value |
|------|-------|
| User | `ROLE_USER` |
| Admin | `ROLE_ADMIN` |
| Super Admin | `ROLE_SUPER_ADMIN` |

---

## User Status

| Status | Value |
|--------|-------|
| Active | `ACTIVE` |
| Inactive | `INACTIVE` |
| Suspended | `SUSPENDED` |
| Deleted | `DELETED` |

---

## Markets Supported

| Market | Value |
|--------|-------|
| United States | `US` |
| India | `INDIA` |
| United Kingdom | `UK` |
| European Union | `EU` |
| Singapore | `SINGAPORE` |
| Hong Kong | `HONG_KONG` |
| Japan | `JAPAN` |
| Canada | `CANADA` |
| Australia | `AUSTRALIA` |

---

## Trade Types

| Type | Value |
|------|-------|
| Positional | `POSITIONAL` |
| Long Term | `LONG_TERM` |
| Momentum | `MOMENTUM` |
| Swing | `SWING` |
| Intraday | `INTRADAY` |

---

## Recommendation Status

| Status | Value |
|--------|-------|
| Open | `OPEN` |
| Closed | `CLOSED` |
| Partially Sold | `PARTIALLY_SOLD` |
| Expired | `EXPIRED` |

---

## Trade Status

| Status | Value |
|--------|-------|
| Open | `OPEN` |
| Closed | `CLOSED` |
| Partially Sold | `PARTIALLY_SOLD` |

---

## Permissions List

| Permission | Description |
|------------|-------------|
| `USER_READ` | View user information |
| `USER_WRITE` | Create/update users |
| `USER_DELETE` | Delete users |
| `INVESTMENT_READ` | View investments |
| `INVESTMENT_WRITE` | Create/update investments |
| `INVESTMENT_DELETE` | Delete investments |
| `TRANSACTION_READ` | View transactions |
| `TRANSACTION_WRITE` | Create transactions |
| `PORTFOLIO_READ` | View portfolio |
| `PORTFOLIO_WRITE` | Update portfolio |
| `ADMIN_PANEL_ACCESS` | Access admin panel |
| `PERMISSION_GRANT` | Grant permissions |
| `PERMISSION_REVOKE` | Revoke permissions |
| `PERMISSION_VIEW` | View permissions |

---

## Summary by Module

| Module | Total APIs |
|--------|------------|
| Auth Service | 6 |
| User Service | 8 |
| Admin Service | 6 |
| Investment Service | 3 |
| Transaction Service | 2 |
| Portfolio Service | 1 |
| Recommendation Service | 8 |
| Trade Service | 9 |
| Holding Service | 3 |
| Referral Service | 10 |
| Notification Service | 6 |
| **TOTAL** | **62 APIs** |

---

## Notes for Backend Team

1. **Pagination**: All list endpoints should support `page`, `size`, `sortBy`, `sortDirection` query params
2. **Authentication**: All endpoints except `/auth/login`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-reset-token`, and `/users/register` require authentication
3. **Role-based Access**: Admin endpoints should check for `ROLE_ADMIN` or `ROLE_SUPER_ADMIN`
4. **Timestamps**: Use ISO 8601 format for all date/time fields
5. **Decimal Precision**: Use 2 decimal places for monetary values

---

*Document generated on: January 2026*
*Frontend Version: 1.0.0*
