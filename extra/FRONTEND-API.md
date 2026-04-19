# Confiance Frontend API Documentation

This document provides a complete guide for frontend developers to integrate with the Confiance backend APIs.

## Base URL
```
Production: https://your-api-gateway-url
Development: http://localhost:8080
```

## Authentication
All authenticated endpoints require a JWT token in the header:
```
Authorization: Bearer <access_token>
```

---

# Table of Contents

1. [Authentication APIs](#1-authentication-apis)
2. [User Management APIs](#2-user-management-apis)
3. [Investment Products APIs](#3-investment-products-apis)
4. [Recommendations APIs](#4-recommendations-apis)
5. [Trade Recording APIs](#5-trade-recording-apis)
6. [Holdings APIs](#6-holdings-apis)
7. [Portfolio APIs](#7-portfolio-apis)
8. [Transaction APIs](#8-transaction-apis)
9. [Referral APIs](#9-referral-apis)
10. [Admin APIs](#10-admin-apis)
11. [Frontend Page Mapping](#11-frontend-page-mapping)

---

# 1. Authentication APIs

## 1.1 User Registration
**POST** `/api/v1/users/register`

Register a new user account.

### Request Body
```json
{
  "email": "user@example.com",
  "password": "Password@123",
  "salutation": "MR",
  "firstName": "John",
  "middleName": "William",
  "lastName": "Doe",
  "contactNumber": "+919876543210",
  "country": "India",
  "state": "Maharashtra",
  "city": "Mumbai",
  "address": "123 Main Street",
  "postalCode": "400001",
  "referralCode": "ABCD12345"
}
```

### Salutation Options
- `MR` - Mr.
- `MRS` - Mrs.
- `MS` - Ms.
- `DR` - Dr.
- `PROF` - Prof.

### Response (201 Created)
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "salutation": "MR",
    "firstName": "John",
    "middleName": "William",
    "lastName": "Doe",
    "contactNumber": "+919876543210",
    "country": "India",
    "referralCode": "JODO12345",
    "referredByCode": "ABCD12345",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"],
    "status": "ACTIVE",
    "createdAt": "2024-01-16T10:30:00"
  }
}
```

---

## 1.2 User Login
**POST** `/api/v1/auth/login`

Authenticate user and get access tokens.

### Request Body
```json
{
  "email": "user@example.com",
  "password": "Password@123"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenType": "Bearer",
    "expiresIn": 86400,
    "user": {
      "id": 1,
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "roles": ["ROLE_USER"],
      "permissions": ["USER_READ", "INVESTMENT_READ"]
    }
  }
}
```

---

## 1.3 Refresh Token
**POST** `/api/v1/auth/refresh`

Get new access token using refresh token.

### Request Body
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 1.4 Logout
**POST** `/api/v1/auth/logout`

Revoke tokens and logout.

### Headers
```
Authorization: Bearer <access_token>
```

---

# 2. User Management APIs

## 2.1 Get User Profile
**GET** `/api/v1/users/{userId}`

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "salutation": "MR",
    "firstName": "John",
    "middleName": "William",
    "lastName": "Doe",
    "contactNumber": "+919876543210",
    "country": "India",
    "state": "Maharashtra",
    "city": "Mumbai",
    "address": "123 Main Street",
    "postalCode": "400001",
    "referralCode": "JODO12345",
    "referredByCode": "ABCD12345",
    "roles": ["ROLE_USER"],
    "permissions": [...],
    "status": "ACTIVE",
    "emailVerified": true,
    "phoneVerified": false,
    "createdAt": "2024-01-16T10:30:00",
    "lastLoginAt": "2024-01-17T09:00:00"
  }
}
```

---

## 2.2 Update User Profile
**PUT** `/api/v1/users/{userId}`

### Request Body
```json
{
  "salutation": "DR",
  "firstName": "John",
  "middleName": "William",
  "lastName": "Doe",
  "contactNumber": "+919876543211",
  "country": "India",
  "state": "Karnataka",
  "city": "Bangalore",
  "address": "456 Tech Park",
  "postalCode": "560001"
}
```

---

# 3. Investment Products APIs

## 3.1 Get All Investment Products
**GET** `/api/v1/investments`

Get list of investment products (mutual funds, FDs, etc.) available for investment.

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)

### Response
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "name": "HDFC Balanced Advantage Fund",
        "description": "A balanced mutual fund with moderate risk",
        "type": "MUTUAL_FUND",
        "expectedReturns": "12.50",
        "minInvestment": "5000.00",
        "maxInvestment": "1000000.00",
        "lockInPeriodMonths": 12,
        "status": "ACTIVE",
        "createdAt": "2024-01-01T00:00:00"
      }
    ],
    "pageNumber": 0,
    "pageSize": 20,
    "totalElements": 25,
    "totalPages": 2
  }
}
```

### Investment Types
- `MUTUAL_FUND`
- `EQUITY`
- `BOND`
- `FIXED_DEPOSIT`
- `RECURRING_DEPOSIT`
- `GOLD`
- `REAL_ESTATE`
- `CRYPTO`
- `OTHER`

---

## 3.2 Get Investment Product Details
**GET** `/api/v1/investments/{id}`

---

# 4. Recommendations APIs

## 4.1 Get Open Recommendations (User)
**GET** `/api/v1/recommendations/open`

Get all active stock recommendations from admin (read-only for users).

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)

### Response
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "market": "INDIA",
        "currency": "INR",
        "tickerSymbol": "RELIANCE",
        "companyName": "Reliance Industries Ltd",
        "tradeType": "POSITIONAL",
        "recommendationDate": "2024-01-15",
        "entryPrice": "2500.00",
        "targetPrice": "2800.00",
        "stopLoss": "2400.00",
        "riskRewardRatio": "3.00",
        "status": "OPEN",
        "remarks": "Entry at 2500-2520 range",
        "potentialReturn": "300.00",
        "potentialReturnPercentage": "12.00",
        "potentialRisk": "100.00",
        "createdAt": "2024-01-15T10:00:00"
      }
    ],
    "totalElements": 10
  }
}
```

### Market Options
- `US` - United States (USD)
- `INDIA` - India (INR)
- `UK` - United Kingdom (GBP)
- `EU` - European Union (EUR)
- `SINGAPORE` - Singapore (SGD)
- `HONG_KONG` - Hong Kong (HKD)
- `JAPAN` - Japan (JPY)
- `CANADA` - Canada (CAD)
- `AUSTRALIA` - Australia (AUD)

### Trade Types
- `POSITIONAL` - Short to medium term
- `LONG_TERM` - Long term investment
- `MOMENTUM` - Quick gains
- `SWING` - Swing trade
- `INTRADAY` - Same day trade

### Recommendation Status
- `OPEN` - Active recommendation
- `CLOSED` - Target achieved or stopped out
- `PARTIALLY_SOLD` - Partial profit booked
- `EXPIRED` - Recommendation expired

---

## 4.2 Get All Recommendations with Filters
**GET** `/api/v1/recommendations/filter`

### Query Parameters
- `market` (optional): US, INDIA, etc.
- `status` (optional): OPEN, CLOSED, etc.
- `page` (default: 0)
- `size` (default: 20)

---

## 4.3 Get Recommendations by Market
**GET** `/api/v1/recommendations/market/{market}`

Example: `/api/v1/recommendations/market/INDIA`

---

## 4.4 Create Recommendation (Admin Only)
**POST** `/api/v1/recommendations`

### Request Body
```json
{
  "market": "INDIA",
  "currency": "INR",
  "tickerSymbol": "TCS",
  "companyName": "Tata Consultancy Services",
  "tradeType": "LONG_TERM",
  "recommendationDate": "2024-01-16",
  "entryPrice": "3800.00",
  "targetPrice": "4200.00",
  "stopLoss": "3600.00",
  "status": "OPEN",
  "remarks": "Strong IT sector, buy on dips"
}
```

---

## 4.5 Update Recommendation (Admin Only)
**PUT** `/api/v1/recommendations/{id}`

---

# 5. Trade Recording APIs

## 5.1 Record New Trade (Buy)
**POST** `/api/v1/trades/user/{userId}`

Record a new buy trade.

### Request Body
```json
{
  "market": "INDIA",
  "symbol": "RELIANCE",
  "companyName": "Reliance Industries Ltd",
  "currency": "INR",
  "buyDate": "2024-01-15",
  "buyPrice": "2510.50",
  "buyQuantity": "10",
  "notes": "Following admin recommendation"
}
```

### Response
```json
{
  "success": true,
  "message": "Trade recorded successfully",
  "data": {
    "id": 1,
    "userId": 123,
    "market": "INDIA",
    "symbol": "RELIANCE",
    "companyName": "Reliance Industries Ltd",
    "currency": "INR",
    "buyDate": "2024-01-15",
    "buyPrice": "2510.50",
    "buyQuantity": "10",
    "investedAmount": "25105.00",
    "remainingQuantity": "10",
    "positionHeldDays": 1,
    "status": "OPEN",
    "createdAt": "2024-01-15T10:30:00"
  }
}
```

---

## 5.2 Record Sell
**POST** `/api/v1/trades/{tradeId}/user/{userId}/sell`

Record sell against an existing buy trade.

### Request Body
```json
{
  "sellDate": "2024-01-20",
  "sellPrice": "2750.00",
  "sellQuantity": "5",
  "notes": "Partial profit booking at target"
}
```

### Response
```json
{
  "success": true,
  "message": "Sell recorded successfully",
  "data": {
    "id": 1,
    "symbol": "RELIANCE",
    "buyDate": "2024-01-15",
    "buyPrice": "2510.50",
    "buyQuantity": "10",
    "sellDate": "2024-01-20",
    "sellPrice": "2750.00",
    "sellQuantity": "5",
    "profitLoss": "1197.50",
    "profitLossPercentage": "9.54",
    "positionHeldDays": 5,
    "remainingQuantity": "5",
    "status": "PARTIALLY_SOLD"
  }
}
```

### Trade Status
- `OPEN` - Position held
- `CLOSED` - Fully exited
- `PARTIALLY_SOLD` - Partial exit

---

## 5.3 Get User Trades
**GET** `/api/v1/trades/user/{userId}`

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)
- `sortBy` (default: "buyDate")
- `sortDirection` (default: "desc")

---

## 5.4 Get Trades with Filters
**GET** `/api/v1/trades/user/{userId}/filter`

### Query Parameters
- `market` (optional): US, INDIA, etc.
- `status` (optional): OPEN, CLOSED, PARTIALLY_SOLD
- `page` (default: 0)
- `size` (default: 20)

---

## 5.5 Get Trades by Status
**GET** `/api/v1/trades/user/{userId}/status/{status}`

Example: `/api/v1/trades/user/123/status/OPEN`

---

## 5.6 Get Trades by Date Range
**GET** `/api/v1/trades/user/{userId}/date-range`

### Query Parameters
- `startDate`: YYYY-MM-DD
- `endDate`: YYYY-MM-DD
- `page` (default: 0)
- `size` (default: 20)

---

## 5.7 Get P&L Summary
**GET** `/api/v1/trades/user/{userId}/summary`

### Response
```json
{
  "success": true,
  "data": {
    "userId": 123,
    "totalProfitLoss": "15750.00",
    "totalInvestedAmount": "250000.00",
    "openTradesCount": 5,
    "closedTradesCount": 12
  }
}
```

---

# 6. Holdings APIs

## 6.1 Get User Holdings
**GET** `/api/v1/holdings/user/{userId}`

Get current holdings (aggregated by symbol).

### Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "userId": 123,
      "market": "INDIA",
      "symbol": "RELIANCE",
      "companyName": "Reliance Industries Ltd",
      "currency": "INR",
      "quantity": "15",
      "averageBuyPrice": "2480.00",
      "boughtOn": "2024-01-10",
      "investedAmount": "37200.00",
      "currentPrice": "2650.00",
      "currentValue": "39750.00",
      "unrealizedPL": "2550.00",
      "unrealizedPLPercentage": "6.85"
    }
  ]
}
```

---

## 6.2 Get Holdings Summary
**GET** `/api/v1/holdings/user/{userId}/summary`

### Response
```json
{
  "success": true,
  "data": {
    "userId": 123,
    "totalInvestedAmount": "500000.00",
    "totalCurrentValue": "575000.00",
    "totalUnrealizedPL": "75000.00",
    "totalUnrealizedPLPercentage": "15.00",
    "totalHoldings": 8,
    "holdings": [...]
  }
}
```

---

## 6.3 Get Holdings by Market
**GET** `/api/v1/holdings/user/{userId}/market/{market}`

Example: `/api/v1/holdings/user/123/market/US`

---

# 7. Portfolio APIs

## 7.1 Get User Portfolio
**GET** `/api/v1/portfolio/user/{userId}`

Get portfolio summary (auto-creates if not exists).

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "userId": 123,
    "totalInvested": "500000.00",
    "currentValue": "575000.00",
    "totalReturns": "75000.00",
    "returnsPercentage": "15.00",
    "createdAt": "2024-01-01T00:00:00",
    "updatedAt": "2024-01-17T10:00:00"
  }
}
```

---

# 8. Transaction APIs

## 8.1 Get User Transactions
**GET** `/api/v1/transactions/user/{userId}`

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)

### Response
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "userId": 123,
        "type": "DEPOSIT",
        "amount": "100000.00",
        "status": "COMPLETED",
        "description": "Initial deposit",
        "referenceId": "TXN-2024-001",
        "createdAt": "2024-01-15T10:30:00"
      }
    ]
  }
}
```

### Transaction Types
- `DEPOSIT` - Money deposited
- `WITHDRAWAL` - Money withdrawn
- `INVESTMENT` - Money invested
- `RETURN` - Investment returns
- `DIVIDEND` - Dividend payment
- `INTEREST` - Interest earned
- `FEE` - Service fee
- `REFUND` - Refund

### Transaction Status
- `PENDING`
- `PROCESSING`
- `COMPLETED`
- `FAILED`
- `CANCELLED`
- `REFUNDED`

---

## 8.2 Create Transaction
**POST** `/api/v1/transactions`

### Request Body
```json
{
  "userId": 123,
  "type": "DEPOSIT",
  "amount": "50000.00",
  "status": "PENDING",
  "description": "Monthly investment",
  "referenceId": "TXN-2024-002"
}
```

---

# 9. Referral APIs

## 9.1 Get Referral Summary
**GET** `/api/v1/referrals/user/{userId}/summary`

### Response
```json
{
  "success": true,
  "data": {
    "userId": 123,
    "referralCode": "JODO12345",
    "totalReferrals": 5,
    "totalCommissionEarned": "7500.00",
    "pendingCommission": "2500.00",
    "recentReferrals": [
      {
        "id": 1,
        "referredUserName": "Jane Smith",
        "referralDate": "2024-01-10",
        "quarter": 1,
        "year": 2024,
        "referredUserInvestment": "100000.00",
        "commissionRate": "2.50",
        "commissionEarned": "2500.00",
        "status": "ACTIVE",
        "paid": false
      }
    ]
  }
}
```

---

## 9.2 Get User Referrals
**GET** `/api/v1/referrals/user/{userId}`

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)

---

## 9.3 Get Referrals by Quarter
**GET** `/api/v1/referrals/user/{userId}/quarter`

### Query Parameters
- `quarter`: 1, 2, 3, or 4
- `year`: 2024

---

## 9.4 Get Commission for Quarter
**GET** `/api/v1/referrals/user/{userId}/commission`

### Query Parameters
- `quarter`: 1, 2, 3, or 4
- `year`: 2024

### Response
```json
{
  "success": true,
  "data": "5000.00"
}
```

---

## 9.5 Get Commission Slabs
**GET** `/api/v1/referrals/commission-slabs`

### Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Standard",
      "minAmount": "0.00",
      "maxAmount": "100000.00",
      "commissionPercentage": "2.00",
      "description": "Standard referral commission",
      "active": true
    },
    {
      "id": 2,
      "name": "Premium",
      "minAmount": "100000.01",
      "maxAmount": null,
      "commissionPercentage": "3.00",
      "description": "Premium referral commission for high-value referrals",
      "active": true
    }
  ]
}
```

---

# 10. Admin APIs

## 10.1 Get All Users
**GET** `/api/v1/users`

### Query Parameters
- `page` (default: 0)
- `size` (default: 20)
- `sortBy` (default: "createdAt")
- `sortDirection` (default: "desc")

---

## 10.2 User Permissions Management

### Get User Permissions
**GET** `/api/v1/admin/permissions/user/{userId}`

### Grant Permissions
**POST** `/api/v1/admin/permissions/grant`

```json
{
  "userId": 123,
  "permissions": ["INVESTMENT_WRITE", "ADMIN_PANEL_ACCESS"]
}
```

### Revoke Permissions
**POST** `/api/v1/admin/permissions/revoke`

---

## 10.3 Investment Product Management

### Create Investment Product
**POST** `/api/v1/investments`

```json
{
  "name": "SBI Blue Chip Fund",
  "description": "Large-cap equity fund",
  "type": "MUTUAL_FUND",
  "expectedReturns": "14.00",
  "minInvestment": "5000.00",
  "maxInvestment": "1000000.00",
  "lockInPeriodMonths": 0,
  "status": "ACTIVE"
}
```

---

## 10.4 Commission Slab Management

### Create Commission Slab
**POST** `/api/v1/referrals/commission-slabs`

```json
{
  "name": "VIP",
  "minAmount": "500000.00",
  "maxAmount": null,
  "commissionPercentage": "4.00",
  "description": "VIP referral tier",
  "active": true,
  "applicableQuarter": 1,
  "applicableYear": 2024
}
```

### Update Commission Slab
**PUT** `/api/v1/referrals/commission-slabs/{id}`

---

## 10.5 Get All Trades (Admin)
**GET** `/api/v1/trades/admin/all`

---

## 10.6 Get All Referrals for Quarter (Admin)
**GET** `/api/v1/referrals/admin/quarter`

### Query Parameters
- `quarter`: 1, 2, 3, or 4
- `year`: 2024

---

## 10.7 Mark Referral as Paid
**POST** `/api/v1/referrals/admin/{referralId}/mark-paid`

---

# 11. Frontend Page Mapping

## Home Page
- No API calls needed (static content)

## About Us Page
- No API calls needed (static content)

## Contact Page
- No API calls needed (static content)

---

## User Registration Page
```
POST /api/v1/users/register
```
Fields:
- Salutation (dropdown)
- First Name
- Middle Name
- Last Name
- Email
- Password
- Mobile
- Country
- State, City, Address, Postal Code
- Referral Code (optional)

---

## User Login Page
```
POST /api/v1/auth/login
```

---

## User Dashboard
```
GET /api/v1/users/{userId}
GET /api/v1/portfolio/user/{userId}
GET /api/v1/holdings/user/{userId}/summary
GET /api/v1/referrals/user/{userId}/summary
```

---

## Profile Update Page
```
GET /api/v1/users/{userId}
PUT /api/v1/users/{userId}
```

---

## Recommendation Sheet (User - Read Only)
```
GET /api/v1/recommendations/open
GET /api/v1/recommendations/filter?market=INDIA&status=OPEN
GET /api/v1/recommendations/market/US
```

---

## Record Trade Page
```
POST /api/v1/trades/user/{userId}           - Create buy trade
POST /api/v1/trades/{id}/user/{userId}/sell - Record sell
GET /api/v1/trades/user/{userId}            - View all trades
GET /api/v1/trades/user/{userId}/filter     - Filter trades
GET /api/v1/trades/user/{userId}/summary    - P&L summary
```

---

## Current Holdings Page
```
GET /api/v1/holdings/user/{userId}
GET /api/v1/holdings/user/{userId}/summary
GET /api/v1/holdings/user/{userId}/market/INDIA
```

---

## Referral Page
```
GET /api/v1/referrals/user/{userId}/summary
GET /api/v1/referrals/user/{userId}
GET /api/v1/referrals/user/{userId}/quarter?quarter=1&year=2024
GET /api/v1/referrals/user/{userId}/commission?quarter=1&year=2024
GET /api/v1/referrals/commission-slabs
```

---

## Transaction History Page
```
GET /api/v1/transactions/user/{userId}
```

---

## Admin - Enter Recommendation
```
POST /api/v1/recommendations
PUT /api/v1/recommendations/{id}
DELETE /api/v1/recommendations/{id}
GET /api/v1/recommendations
```

---

## Admin - User Information
```
GET /api/v1/users
GET /api/v1/users/{userId}
GET /api/v1/holdings/user/{userId}
```

---

## Admin - Client P&L
```
GET /api/v1/trades/admin/all
GET /api/v1/trades/user/{userId}/summary
```

---

## Admin - Commission Configuration
```
GET /api/v1/referrals/commission-slabs
POST /api/v1/referrals/commission-slabs
PUT /api/v1/referrals/commission-slabs/{id}
DELETE /api/v1/referrals/commission-slabs/{id}
```

---

## Admin - Referral Reports
```
GET /api/v1/referrals/admin/quarter?quarter=1&year=2024
POST /api/v1/referrals/admin/{referralId}/mark-paid
```

---

# Error Handling

All error responses follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Additional details"
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

## Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid/expired token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (duplicate entry)
- `500` - Internal Server Error

---

# Enums Reference

## User Roles
- `ROLE_USER` - Regular user
- `ROLE_ADMIN` - Admin user
- `ROLE_SUPER_ADMIN` - Super admin

## User Permissions
- `USER_READ`, `USER_WRITE`, `USER_DELETE`
- `INVESTMENT_READ`, `INVESTMENT_WRITE`, `INVESTMENT_DELETE`
- `TRANSACTION_READ`, `TRANSACTION_WRITE`
- `PORTFOLIO_READ`, `PORTFOLIO_WRITE`
- `ADMIN_PANEL_ACCESS`, `PERMISSION_GRANT`, `PERMISSION_REVOKE`, `PERMISSION_VIEW`

## User Status
- `PENDING_VERIFICATION`
- `ACTIVE`
- `INACTIVE`
- `SUSPENDED`
- `DELETED`

---

# Sample Flows

## Complete Investment Flow

1. **User registers**: `POST /api/v1/users/register`
2. **User logs in**: `POST /api/v1/auth/login`
3. **User views recommendations**: `GET /api/v1/recommendations/open`
4. **User records a buy trade**: `POST /api/v1/trades/user/{userId}`
5. **Holdings updated automatically**
6. **User views holdings**: `GET /api/v1/holdings/user/{userId}/summary`
7. **User records sell**: `POST /api/v1/trades/{tradeId}/user/{userId}/sell`
8. **User views P&L**: `GET /api/v1/trades/user/{userId}/summary`

## Referral Flow

1. **User A gets their referral code**: `GET /api/v1/referrals/user/{userAId}/summary`
2. **User A shares referral code with User B**
3. **User B registers with referral code**: `POST /api/v1/users/register` (with referralCode field)
4. **Referral created automatically**
5. **User B makes investments**: Referral commission calculated
6. **User A views referral earnings**: `GET /api/v1/referrals/user/{userAId}/summary`
7. **Admin marks commission as paid**: `POST /api/v1/referrals/admin/{referralId}/mark-paid`
