# Confiance Backend API Documentation

Welcome to the Confiance Investment Platform Backend API Documentation. This documentation provides detailed information about all available APIs for frontend integration.

## Quick Links

- [API Gateway](./API-GATEWAY.md) - Entry point and routing configuration
- [Auth Service](./AUTH-SERVICE-API.md) - Authentication and token management
- [User Service](./USER-SERVICE-API.md) - User management
- [Admin Service](./ADMIN-SERVICE-API.md) - Permission management
- [Portfolio Service](./PORTFOLIO-SERVICE-API.md) - Portfolio tracking
- [Transaction Service](./TRANSACTION-SERVICE-API.md) - Transaction management
- [Investment Service](./INVESTMENT-SERVICE-API.md) - Investment products
- [Notification Service](./NOTIFICATION-SERVICE-API.md) - Notifications

---

## Architecture Overview

The Confiance backend is built using a microservices architecture with the following components:

```
┌─────────────────────────────────────────────────┐
│           Client Application (Frontend)         │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │    API Gateway :8080   │
        └────────────┬───────────┘
                     │
        ┌────────────┴────────────┐
        │   Service Discovery     │
        │     (Eureka :8761)      │
        └────────────┬────────────┘
                     │
    ┌────────────────┼────────────────┐
    │                │                │
    ▼                ▼                ▼
┌────────┐     ┌──────────┐    ┌────────────┐
│  Auth  │     │   User   │    │Investment  │
│Service │     │ Service  │    │  Service   │
│  :8081 │     │  :8082   │    │   :8083    │
└────────┘     └──────────┘    └────────────┘

    ▼                ▼                ▼
┌────────┐     ┌──────────┐    ┌────────────┐
│Trans-  │     │Portfolio │    │Notification│
│action  │     │ Service  │    │  Service   │
│Service │     │  :8085   │    │   :8086    │
│  :8084 │     └──────────┘    └────────────┘
└────────┘
```

---

## Getting Started

### Base URL
All API requests should be made to the API Gateway:
- **Development**: `http://localhost:8080`
- **Production**: `https://your-domain.com`

### Authentication
Most endpoints require authentication. Follow these steps:

1. **Register a user** (if needed):
   ```bash
   POST /api/v1/users/register
   ```

2. **Login** to get access token:
   ```bash
   POST /api/v1/auth/login
   ```

3. **Use the token** in subsequent requests:
   ```bash
   Authorization: Bearer <your-access-token>
   ```

### Quick Example
```javascript
// 1. Login
const loginResponse = await fetch('http://localhost:8080/api/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecureP@ss123'
  })
});
const { data } = await loginResponse.json();
const accessToken = data.accessToken;

// 2. Use token to get user data
const userResponse = await fetch('http://localhost:8080/api/v1/users/1', {
  headers: { 'Authorization': `Bearer ${accessToken}` }
});
const userData = await userResponse.json();
```

---

## API Services Overview

### 1. Auth Service
**Base Path**: `/api/v1/auth`

Handles user authentication and token management.

**Key Endpoints**:
- `POST /login` - User login
- `POST /refresh` - Refresh access token
- `POST /logout` - User logout

[Full Documentation](./AUTH-SERVICE-API.md)

---

### 2. User Service
**Base Path**: `/api/v1/users`

Manages user accounts, profiles, and roles.

**Key Endpoints**:
- `POST /register` - Register new user
- `GET /{id}` - Get user details
- `PUT /{id}` - Update user profile
- `DELETE /{id}` - Delete user
- `GET /` - List all users (paginated)
- `POST /{id}/roles` - Add role to user
- `DELETE /{id}/roles` - Remove role from user

[Full Documentation](./USER-SERVICE-API.md)

---

### 3. Admin Service
**Base Path**: `/api/v1/admin`

Manages permissions and administrative functions.

**Key Endpoints**:
- `GET /permissions/available` - Get all permissions
- `GET /permissions/user/{userId}` - Get user permissions
- `POST /permissions/grant` - Grant permissions
- `POST /permissions/revoke` - Revoke permissions
- `PUT /permissions/user/{userId}` - Set permissions

[Full Documentation](./ADMIN-SERVICE-API.md)

---

### 4. Portfolio Service
**Base Path**: `/api/v1/portfolio`

Tracks user investment portfolios and returns.

**Key Endpoints**:
- `GET /user/{userId}` - Get user portfolio

[Full Documentation](./PORTFOLIO-SERVICE-API.md)

---

### 5. Transaction Service
**Base Path**: `/api/v1/transactions`

Manages all financial transactions.

**Key Endpoints**:
- `GET /user/{userId}` - Get user transactions (paginated)
- `POST /` - Create new transaction

[Full Documentation](./TRANSACTION-SERVICE-API.md)

---

### 6. Investment Service
**Base Path**: `/api/v1/investments`

Manages investment products available for users.

**Key Endpoints**:
- `GET /` - Get all products (paginated)
- `GET /{id}` - Get product details
- `POST /` - Create new product (admin only)

[Full Documentation](./INVESTMENT-SERVICE-API.md)

---

### 7. Notification Service
**Base Path**: `/api/v1/notifications`

Handles sending notifications to users.

**Key Endpoints**:
- `POST /send-email` - Send email notification

[Full Documentation](./NOTIFICATION-SERVICE-API.md)

---

## Common Response Format

All APIs follow a consistent response structure:

### Success Response
```json
{
  "success": true,
  "message": "Success message",
  "data": { /* response data */ },
  "timestamp": "2024-01-16T10:30:00"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "timestamp": "2024-01-16T10:30:00"
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "content": [ /* array of items */ ],
    "pageNumber": 0,
    "pageSize": 20,
    "totalElements": 100,
    "totalPages": 5,
    "last": false,
    "first": true
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

---

## Common HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error |

---

## Enums Reference

### UserRole
- `ROLE_USER` - Regular user
- `ROLE_ADMIN` - Administrator
- `ROLE_SUPER_ADMIN` - Super administrator

### UserStatus
- `ACTIVE` - Active user
- `INACTIVE` - Inactive user
- `SUSPENDED` - Suspended user
- `DELETED` - Deleted user

### Permission
- `USER_READ`, `USER_WRITE`, `USER_DELETE`
- `INVESTMENT_READ`, `INVESTMENT_WRITE`, `INVESTMENT_DELETE`
- `TRANSACTION_READ`, `TRANSACTION_WRITE`
- `PORTFOLIO_READ`, `PORTFOLIO_WRITE`
- `ADMIN_PANEL_ACCESS`, `PERMISSION_GRANT`, `PERMISSION_REVOKE`, `PERMISSION_VIEW`

### TransactionType
- `DEPOSIT`, `WITHDRAWAL`, `INVESTMENT`, `RETURN`, `DIVIDEND`, `INTEREST`, `FEE`, `REFUND`

### TransactionStatus
- `PENDING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `REFUNDED`

### InvestmentType
- `MUTUAL_FUND`, `EQUITY`, `BOND`, `FIXED_DEPOSIT`, `RECURRING_DEPOSIT`, `GOLD`, `REAL_ESTATE`, `CRYPTO`, `OTHER`

### InvestmentStatus
- `ACTIVE`, `MATURED`, `WITHDRAWN`, `CLOSED`, `SUSPENDED`

---

## CORS Configuration

The API Gateway is configured to accept requests from:
- `http://localhost:*` (all localhost ports for development)
- `https://frontend-two-wheat-xx7if4udbl.vercel.app`
- `https://confiance-application*.app.runonflux.io`
- `https://*.vercel.app`

**Allowed Methods**: GET, POST, PUT, DELETE, PATCH, OPTIONS

---

## Typical User Flows

### 1. User Registration & Login Flow
```
1. POST /api/v1/users/register
   → Register new user

2. POST /api/v1/auth/login
   → Get access token and refresh token

3. Store tokens securely
   → localStorage/sessionStorage (consider security implications)

4. Use access token for all subsequent requests
   → Add to Authorization header
```

### 2. Investment Flow
```
1. GET /api/v1/investments
   → Browse available investment products

2. GET /api/v1/investments/{id}
   → View product details

3. POST /api/v1/transactions
   → Create investment transaction

4. GET /api/v1/portfolio/user/{userId}
   → View updated portfolio
```

### 3. Transaction History Flow
```
1. GET /api/v1/transactions/user/{userId}?page=0&size=20
   → Get paginated transaction history

2. Load more pages as needed
   → Increase page number
```

---

## Error Handling

### Common Error Scenarios

**401 Unauthorized**
- Token expired or invalid
- Solution: Refresh token or re-login

**403 Forbidden**
- Insufficient permissions
- Solution: Check user roles/permissions

**404 Not Found**
- Resource doesn't exist
- Solution: Verify ID/path

**409 Conflict**
- Resource already exists (e.g., email already registered)
- Solution: Use different identifier

**500 Internal Server Error**
- Server-side error
- Solution: Retry or contact support

---

## Rate Limiting

Currently not implemented. Will be added in future versions.

---

## Best Practices for Frontend

1. **Token Management**
   - Store tokens securely
   - Implement token refresh logic
   - Clear tokens on logout

2. **Error Handling**
   - Handle all HTTP status codes
   - Show user-friendly error messages
   - Implement retry logic for failed requests

3. **Loading States**
   - Show loading indicators during API calls
   - Handle timeouts gracefully

4. **Pagination**
   - Implement infinite scroll or pagination UI
   - Default page size is 20 items

5. **Form Validation**
   - Validate on client-side before API call
   - Follow server validation rules (see individual API docs)

6. **Security**
   - Never expose tokens in URLs
   - Use HTTPS in production
   - Implement CSRF protection

---

## Testing

### Postman Collection
A Postman collection with all endpoints is available (to be added).

### Example cURL Commands
See individual service documentation for specific examples.

---

## Support & Contact

For questions or issues:
- Technical Documentation: This repository
- Bug Reports: [GitHub Issues](https://github.com/your-org/confiance-backend/issues)
- API Support: api-support@confiance.app

---

## Changelog

### Version 1.0.0 (Current)
- Initial API documentation
- All core services documented
- Basic CRUD operations for all entities
- Authentication and authorization
- Permission management

### Planned Features
- File upload support
- Advanced search and filtering
- Batch operations
- Real-time notifications via WebSocket
- API versioning
- GraphQL support

---

## Additional Resources

- [API Gateway Configuration](./API-GATEWAY.md)
- [Authentication Flow Diagram](./diagrams/auth-flow.png) - (to be added)
- [Database Schema](./diagrams/db-schema.png) - (to be added)
- [Postman Collection](./postman/confiance-api.json) - (to be added)

---

**Last Updated**: 2024-01-16
**API Version**: 1.0.0
**Documentation Version**: 1.0.0
