# Investment Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/investments
```

## Overview
The Investment Service manages investment products available for users to invest in. It provides endpoints to browse, search, and create investment products.

---

## Endpoints

### 1. Get All Investment Products (Paginated)
**GET** `/api/v1/investments`

Retrieve a paginated list of all investment products.

#### Query Parameters
- `page`: Page number (default: 0)
- `size`: Page size (default: 20)

#### Example Request
```
GET /api/v1/investments?page=0&size=10
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "content": [
      {
        "id": 1,
        "name": "HDFC Balanced Advantage Fund",
        "description": "A balanced mutual fund with moderate risk and stable returns",
        "type": "MUTUAL_FUND",
        "expectedReturns": "12.50",
        "minInvestment": "5000.00",
        "maxInvestment": "1000000.00",
        "lockInPeriodMonths": 12,
        "status": "ACTIVE",
        "createdAt": "2024-01-01T00:00:00"
      },
      {
        "id": 2,
        "name": "Fixed Deposit - 1 Year",
        "description": "Guaranteed returns with principal protection",
        "type": "FIXED_DEPOSIT",
        "expectedReturns": "7.50",
        "minInvestment": "10000.00",
        "maxInvestment": "5000000.00",
        "lockInPeriodMonths": 12,
        "status": "ACTIVE",
        "createdAt": "2024-01-01T00:00:00"
      }
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 10,
      "offset": 0
    },
    "totalElements": 25,
    "totalPages": 3,
    "last": false,
    "first": true,
    "numberOfElements": 10,
    "empty": false
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

---

### 2. Get Investment Product by ID
**GET** `/api/v1/investments/{id}`

Retrieve details of a specific investment product.

#### Path Parameters
- `id`: Investment product ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "name": "HDFC Balanced Advantage Fund",
    "description": "A balanced mutual fund with moderate risk and stable returns",
    "type": "MUTUAL_FUND",
    "expectedReturns": "12.50",
    "minInvestment": "5000.00",
    "maxInvestment": "1000000.00",
    "lockInPeriodMonths": 12,
    "status": "ACTIVE",
    "createdAt": "2024-01-01T00:00:00"
  },
  "timestamp": "2024-01-16T10:35:00"
}
```

#### Error Response (404 Not Found)
```json
{
  "success": false,
  "message": "Investment product not found",
  "timestamp": "2024-01-16T10:35:00"
}
```

---

### 3. Create Investment Product
**POST** `/api/v1/investments`

Create a new investment product (Admin only).

#### Request Body
```json
{
  "name": "SBI Blue Chip Fund",
  "description": "Large-cap equity mutual fund with growth focus",
  "type": "EQUITY",
  "expectedReturns": "15.00",
  "minInvestment": "1000.00",
  "maxInvestment": "5000000.00",
  "lockInPeriodMonths": 0,
  "status": "ACTIVE"
}
```

#### Request Fields
- `name`: Required, product name
- `description`: Optional, product description
- `type`: Required, investment type (see InvestmentType enum)
- `expectedReturns`: Required, expected annual returns as percentage
- `minInvestment`: Required, minimum investment amount
- `maxInvestment`: Optional, maximum investment amount
- `lockInPeriodMonths`: Required, lock-in period in months (0 for no lock-in)
- `status`: Required, product status (see InvestmentStatus enum)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Investment product created",
  "data": {
    "id": 26,
    "name": "SBI Blue Chip Fund",
    "description": "Large-cap equity mutual fund with growth focus",
    "type": "EQUITY",
    "expectedReturns": "15.00",
    "minInvestment": "1000.00",
    "maxInvestment": "5000000.00",
    "lockInPeriodMonths": 0,
    "status": "ACTIVE",
    "createdAt": "2024-01-16T10:40:00"
  },
  "timestamp": "2024-01-16T10:40:00"
}
```

---

## Data Models

### InvestmentProduct
```typescript
{
  id: number;                  // Product ID
  name: string;                // Product name (required)
  description?: string;        // Product description (optional)
  type: InvestmentType;        // Investment type (required)
  expectedReturns: string;     // Expected annual returns % (required, decimal)
  minInvestment: string;       // Minimum investment amount (required, decimal)
  maxInvestment?: string;      // Maximum investment amount (optional, decimal)
  lockInPeriodMonths: number;  // Lock-in period in months (required)
  status: InvestmentStatus;    // Product status (required)
  createdAt: string;           // ISO-8601 datetime
}
```

---

## Enums

### InvestmentType
Available investment product types:

| Type | Description |
|------|-------------|
| `MUTUAL_FUND` | Mutual fund investments |
| `EQUITY` | Direct equity/stock investments |
| `BOND` | Bond investments |
| `FIXED_DEPOSIT` | Fixed deposit schemes |
| `RECURRING_DEPOSIT` | Recurring deposit schemes |
| `GOLD` | Gold investment schemes |
| `REAL_ESTATE` | Real estate investments |
| `CRYPTO` | Cryptocurrency investments |
| `OTHER` | Other investment types |

### InvestmentStatus
Product availability status:

| Status | Description |
|--------|-------------|
| `ACTIVE` | Product is available for investment |
| `MATURED` | Product has reached maturity |
| `WITHDRAWN` | Product withdrawn from market |
| `CLOSED` | Product closed for new investments |
| `SUSPENDED` | Product temporarily suspended |

---

## Field Descriptions

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | number | Unique product identifier | Auto-generated |
| `name` | string | Product name | Required, max 255 chars |
| `description` | string | Detailed product description | Optional, text field |
| `type` | enum | Investment category | Required, see InvestmentType |
| `expectedReturns` | decimal | Expected annual returns (%) | Required, precision 5,2 (e.g., 12.50 = 12.5%) |
| `minInvestment` | decimal | Minimum investment amount | Required, precision 19,2 |
| `maxInvestment` | decimal | Maximum investment amount | Optional, precision 19,2 |
| `lockInPeriodMonths` | number | Lock-in period in months | Required, 0 = no lock-in |
| `status` | enum | Product availability status | Required, see InvestmentStatus |
| `createdAt` | datetime | When product was created | Auto-generated |

---

## Authorization Requirements

- **Get Products**: Requires `INVESTMENT_READ` permission
- **Get Product by ID**: Requires `INVESTMENT_READ` permission
- **Create Product**: Requires `INVESTMENT_WRITE` permission (Admin only)
- **Update Product**: Requires `INVESTMENT_WRITE` permission (Admin only)
- **Delete Product**: Requires `INVESTMENT_DELETE` permission (Admin only)

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Not authenticated |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Product not found |
| 500 | Internal Server Error |

---

## Example Use Cases

### 1. Browse Available Investments
```bash
curl -X GET "http://localhost:8080/api/v1/investments?page=0&size=20" \
  -H "Authorization: Bearer <access_token>"
```

### 2. Get Product Details
```bash
curl -X GET "http://localhost:8080/api/v1/investments/1" \
  -H "Authorization: Bearer <access_token>"
```

### 3. Create New Investment Product (Admin)
```bash
curl -X POST "http://localhost:8080/api/v1/investments" \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gold ETF Fund",
    "description": "Gold exchange-traded fund for portfolio diversification",
    "type": "GOLD",
    "expectedReturns": "8.00",
    "minInvestment": "500.00",
    "maxInvestment": null,
    "lockInPeriodMonths": 0,
    "status": "ACTIVE"
  }'
```

---

## Investment Product Examples

### Mutual Fund
```json
{
  "name": "HDFC Balanced Advantage Fund",
  "type": "MUTUAL_FUND",
  "expectedReturns": "12.50",
  "minInvestment": "5000.00",
  "lockInPeriodMonths": 12,
  "status": "ACTIVE"
}
```

### Fixed Deposit
```json
{
  "name": "1-Year Fixed Deposit",
  "type": "FIXED_DEPOSIT",
  "expectedReturns": "7.50",
  "minInvestment": "10000.00",
  "maxInvestment": "5000000.00",
  "lockInPeriodMonths": 12,
  "status": "ACTIVE"
}
```

### Equity
```json
{
  "name": "Tech Stocks Portfolio",
  "type": "EQUITY",
  "expectedReturns": "18.00",
  "minInvestment": "10000.00",
  "lockInPeriodMonths": 0,
  "status": "ACTIVE"
}
```

---

## Business Rules

1. **Expected Returns**: Represents annualized expected returns as percentage
2. **Lock-in Period**:
   - 0 = No lock-in, can withdraw anytime
   - >0 = Cannot withdraw before lock-in period expires
3. **Investment Limits**:
   - minInvestment: Minimum amount required to invest
   - maxInvestment: Optional maximum investment limit per transaction
4. **Status Management**:
   - Only ACTIVE products can accept new investments
   - CLOSED products cannot accept new investments but existing investments continue
   - SUSPENDED products are temporarily unavailable
5. **Product Lifecycle**: ACTIVE → CLOSED → MATURED/WITHDRAWN

---

## Notes

1. All decimal values are returned as strings to preserve precision
2. Expected returns are indicative and not guaranteed (except for fixed instruments)
3. Lock-in period is enforced at the transaction level
4. Products can be filtered by type, status, or returns in future enhancements
5. Historical performance data may be added in future versions
6. Risk ratings and category classifications will be added in future updates
