# Portfolio Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/portfolio
```

## Overview
The Portfolio Service manages user investment portfolios, tracking total investments, current values, and returns.

---

## Endpoints

### 1. Get User Portfolio
**GET** `/api/v1/portfolio/user/{userId}`

Retrieve portfolio information for a specific user. If the portfolio doesn't exist, it will be automatically created.

#### Path Parameters
- `userId`: User ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "userId": 123,
    "totalInvested": "50000.00",
    "currentValue": "55000.00",
    "totalReturns": "5000.00",
    "returnsPercentage": "10.00",
    "createdAt": "2024-01-15T10:30:00",
    "updatedAt": "2024-01-16T10:30:00"
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

#### New Portfolio Response (200 OK)
If portfolio doesn't exist, a new one is created:
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "userId": 123,
    "totalInvested": "0.00",
    "currentValue": "0.00",
    "totalReturns": "0.00",
    "returnsPercentage": "0.00",
    "createdAt": "2024-01-16T10:30:00",
    "updatedAt": "2024-01-16T10:30:00"
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

---

## Data Models

### Portfolio
```typescript
{
  id: number;                    // Portfolio ID
  userId: number;                // User ID (unique)
  totalInvested: string;         // Total amount invested (decimal as string)
  currentValue: string;          // Current portfolio value (decimal as string)
  totalReturns: string;          // Total returns earned (decimal as string)
  returnsPercentage: string;     // Returns percentage (decimal as string)
  createdAt: string;             // ISO-8601 datetime
  updatedAt: string;             // ISO-8601 datetime
}
```

---

## Field Descriptions

| Field | Type | Description | Precision |
|-------|------|-------------|-----------|
| `id` | number | Unique portfolio identifier | - |
| `userId` | number | User who owns this portfolio (unique constraint) | - |
| `totalInvested` | decimal | Total amount user has invested | 19,2 |
| `currentValue` | decimal | Current market value of all investments | 19,2 |
| `totalReturns` | decimal | Total profit/loss (currentValue - totalInvested) | 19,2 |
| `returnsPercentage` | decimal | Returns as percentage ((returns / invested) * 100) | 5,2 |
| `createdAt` | datetime | When portfolio was created | - |
| `updatedAt` | datetime | Last update timestamp | - |

---

## Business Logic

1. **Auto-Creation**: If a user doesn't have a portfolio, it's automatically created with zero values when first accessed
2. **One Portfolio Per User**: Each user can have only one portfolio (enforced by unique constraint on userId)
3. **Decimal Precision**: All monetary values use decimal precision (19,2) to avoid floating-point errors
4. **Percentage Calculation**: Returns percentage is calculated as: ((currentValue - totalInvested) / totalInvested) * 100

---

## Authorization Requirements

- User must be authenticated
- User must have `PORTFOLIO_READ` permission
- Users can only view their own portfolio (unless they have admin role)

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 401 | Unauthorized - Not authenticated |
| 403 | Forbidden - Insufficient permissions |
| 500 | Internal Server Error |

---

## Example Use Cases

### Check User Portfolio
```bash
curl -X GET "http://localhost:8080/api/v1/portfolio/user/123" \
  -H "Authorization: Bearer <access_token>"
```

### Response for Existing Portfolio
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "userId": 123,
    "totalInvested": "100000.00",
    "currentValue": "125000.00",
    "totalReturns": "25000.00",
    "returnsPercentage": "25.00",
    "createdAt": "2024-01-01T00:00:00",
    "updatedAt": "2024-01-16T10:30:00"
  }
}
```

### Response for New Portfolio (Auto-Created)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 2,
    "userId": 124,
    "totalInvested": "0.00",
    "currentValue": "0.00",
    "totalReturns": "0.00",
    "returnsPercentage": "0.00",
    "createdAt": "2024-01-16T10:30:00",
    "updatedAt": "2024-01-16T10:30:00"
  }
}
```

---

## Notes

1. Portfolio values are automatically updated when investments are made or returns are calculated
2. All decimal values are returned as strings to preserve precision
3. The service automatically creates a portfolio for new users
4. Portfolio calculations are typically updated by background jobs or when transactions occur
5. Historical portfolio values may be tracked separately for performance charts
