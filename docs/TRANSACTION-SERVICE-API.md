# Transaction Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/transactions
```

## Overview
The Transaction Service manages all financial transactions including deposits, withdrawals, investments, returns, and other transaction types.

---

## Endpoints

### 1. Get User Transactions (Paginated)
**GET** `/api/v1/transactions/user/{userId}`

Retrieve paginated list of transactions for a specific user.

#### Path Parameters
- `userId`: User ID (number)

#### Query Parameters
- `page`: Page number (default: 0)
- `size`: Page size (default: 20)

#### Example Request
```
GET /api/v1/transactions/user/123?page=0&size=10
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
        "userId": 123,
        "type": "DEPOSIT",
        "amount": "10000.00",
        "status": "COMPLETED",
        "description": "Initial deposit",
        "referenceId": "TXN-2024-001",
        "createdAt": "2024-01-15T10:30:00"
      },
      {
        "id": 2,
        "userId": 123,
        "type": "INVESTMENT",
        "amount": "5000.00",
        "status": "COMPLETED",
        "description": "Investment in Mutual Fund XYZ",
        "referenceId": "TXN-2024-002",
        "createdAt": "2024-01-16T09:15:00"
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

### 2. Create Transaction
**POST** `/api/v1/transactions`

Create a new transaction.

#### Request Body
```json
{
  "userId": 123,
  "type": "DEPOSIT",
  "amount": "10000.00",
  "status": "PENDING",
  "description": "Monthly deposit",
  "referenceId": "TXN-2024-003"
}
```

#### Request Fields
- `userId`: Required, user ID
- `type`: Required, transaction type (see TransactionType enum)
- `amount`: Required, transaction amount (must be positive)
- `status`: Required, transaction status (see TransactionStatus enum)
- `description`: Optional, transaction description
- `referenceId`: Optional, external reference ID for tracking

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Transaction created",
  "data": {
    "id": 26,
    "userId": 123,
    "type": "DEPOSIT",
    "amount": "10000.00",
    "status": "PENDING",
    "description": "Monthly deposit",
    "referenceId": "TXN-2024-003",
    "createdAt": "2024-01-16T10:35:00"
  },
  "timestamp": "2024-01-16T10:35:00"
}
```

---

## Data Models

### Transaction
```typescript
{
  id: number;                // Transaction ID
  userId: number;            // User ID (required)
  type: TransactionType;     // Transaction type (required)
  amount: string;            // Transaction amount (required, decimal as string)
  status: TransactionStatus; // Transaction status (required)
  description?: string;      // Optional description
  referenceId?: string;      // Optional external reference ID
  createdAt: string;         // ISO-8601 datetime
}
```

---

## Enums

### TransactionType
Available transaction types:

| Type | Description |
|------|-------------|
| `DEPOSIT` | Money deposited into account |
| `WITHDRAWAL` | Money withdrawn from account |
| `INVESTMENT` | Money invested in a product |
| `RETURN` | Investment returns/maturity amount |
| `DIVIDEND` | Dividend payment received |
| `INTEREST` | Interest earned |
| `FEE` | Service or transaction fee |
| `REFUND` | Refund of previous transaction |

### TransactionStatus
Available transaction statuses:

| Status | Description |
|--------|-------------|
| `PENDING` | Transaction initiated but not processed |
| `PROCESSING` | Transaction being processed |
| `COMPLETED` | Transaction successfully completed |
| `FAILED` | Transaction failed |
| `CANCELLED` | Transaction cancelled by user or system |
| `REFUNDED` | Transaction amount refunded |

---

## Field Descriptions

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | number | Unique transaction identifier | Auto-generated |
| `userId` | number | User who owns this transaction | Required, must be valid user |
| `type` | enum | Type of transaction | Required, see TransactionType |
| `amount` | decimal | Transaction amount | Required, precision 19,2, must be positive |
| `status` | enum | Current status of transaction | Required, see TransactionStatus |
| `description` | string | Human-readable description | Optional |
| `referenceId` | string | External reference for tracking | Optional, useful for reconciliation |
| `createdAt` | datetime | When transaction was created | Auto-generated |

---

## Authorization Requirements

- User must be authenticated
- User must have `TRANSACTION_READ` permission to view transactions
- User must have `TRANSACTION_WRITE` permission to create transactions
- Users can only view/create their own transactions (unless they have admin role)

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Not authenticated |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - User not found |
| 500 | Internal Server Error |

---

## Example Use Cases

### 1. Deposit Money
```bash
curl -X POST "http://localhost:8080/api/v1/transactions" \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 123,
    "type": "DEPOSIT",
    "amount": "50000.00",
    "status": "PENDING",
    "description": "Bank transfer deposit",
    "referenceId": "BANK-TXN-12345"
  }'
```

### 2. Record Investment
```bash
curl -X POST "http://localhost:8080/api/v1/transactions" \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 123,
    "type": "INVESTMENT",
    "amount": "25000.00",
    "status": "COMPLETED",
    "description": "Investment in HDFC Balanced Fund",
    "referenceId": "INV-2024-001"
  }'
```

### 3. Get User Transaction History
```bash
curl -X GET "http://localhost:8080/api/v1/transactions/user/123?page=0&size=20" \
  -H "Authorization: Bearer <access_token>"
```

---

## Transaction Workflow

### Typical Transaction Flow

1. **PENDING** → Transaction created, awaiting processing
2. **PROCESSING** → Transaction being verified/processed
3. **COMPLETED** → Transaction successfully finished
4. **FAILED** → Transaction failed (can be retried)
5. **CANCELLED** → Transaction cancelled by user/system
6. **REFUNDED** → Original transaction amount refunded

---

## Business Rules

1. **Amount Validation**: All amounts must be positive (> 0)
2. **User Validation**: User must exist in the system
3. **Status Transitions**: Status should follow logical flow (PENDING → PROCESSING → COMPLETED/FAILED)
4. **Immutability**: Once created, transactions cannot be deleted (only status can be updated)
5. **Audit Trail**: All transactions are permanently stored for audit purposes
6. **Reference ID**: Should be unique for reconciliation purposes

---

## Notes

1. Transactions are immutable once created - they cannot be deleted
2. Transaction amounts are stored as decimals with precision (19,2)
3. All amounts are returned as strings to preserve decimal precision
4. Transactions automatically update portfolio values when status is COMPLETED
5. Failed transactions can be retried by creating a new transaction
6. The system maintains complete transaction history for compliance and audit
