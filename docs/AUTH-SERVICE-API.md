# Auth Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/auth
```

## Overview
The Auth Service handles user authentication and token management. It provides endpoints for login, token refresh, and logout operations.

---

## Endpoints

### 1. Login
**POST** `/api/v1/auth/login`

Authenticate user and receive access/refresh tokens.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "SecureP@ss123"
}
```

#### Request Validation
- `email`: Required, must be valid email format
- `password`: Required, cannot be blank

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenType": "Bearer",
    "expiresIn": 86400000,
    "user": {
      "id": 1,
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "roles": ["ROLE_USER"],
      "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"]
    }
  },
  "timestamp": "2024-01-15T10:30:00"
}
```

#### Error Response (401 Unauthorized)
```json
{
  "success": false,
  "message": "Invalid credentials",
  "timestamp": "2024-01-15T10:30:00"
}
```

---

### 2. Refresh Token
**POST** `/api/v1/auth/refresh`

Get new access token using refresh token.

#### Request Body
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Request Validation
- `refreshToken`: Required, cannot be blank

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenType": "Bearer",
    "expiresIn": 86400000,
    "user": {
      "id": 1,
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "roles": ["ROLE_USER"],
      "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"]
    }
  },
  "timestamp": "2024-01-15T10:30:00"
}
```

#### Error Response (401 Unauthorized)
```json
{
  "success": false,
  "message": "Invalid or expired refresh token",
  "timestamp": "2024-01-15T10:30:00"
}
```

---

### 3. Logout
**POST** `/api/v1/auth/logout`

Revoke user tokens and end session.

#### Request Headers
```
X-Session-Id: <session-id>
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Logout successful",
  "data": null,
  "timestamp": "2024-01-15T10:30:00"
}
```

---

## Common Response Structure

All API responses follow this structure:

```json
{
  "success": boolean,
  "message": "string",
  "data": object | null,
  "timestamp": "ISO-8601 datetime string"
}
```

---

## Data Models

### LoginRequest
```json
{
  "email": "string (required, valid email)",
  "password": "string (required)"
}
```

### RefreshTokenRequest
```json
{
  "refreshToken": "string (required)"
}
```

### AuthResponse
```json
{
  "accessToken": "string (JWT token)",
  "refreshToken": "string (JWT token)",
  "tokenType": "string (default: Bearer)",
  "expiresIn": "number (milliseconds)",
  "user": {
    "id": "number",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "roles": ["string"],
    "permissions": ["string"]
  }
}
```

### UserInfo
```json
{
  "id": "number",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "roles": ["ROLE_USER", "ROLE_ADMIN", "ROLE_SUPER_ADMIN"],
  "permissions": ["USER_READ", "USER_WRITE", "..."]
}
```

---

## Token Configuration

- **Access Token Expiration**: 86400000 ms (24 hours)
- **Refresh Token Expiration**: 604800000 ms (7 days)
- **Token Type**: Bearer
- **Algorithm**: HS256

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Invalid credentials or token |
| 500 | Internal Server Error |

---

## Notes

1. All endpoints return responses in JSON format
2. Access tokens should be included in the `Authorization` header as `Bearer <token>` for protected endpoints
3. Session ID should be stored on login and sent in `X-Session-Id` header for logout
4. Refresh tokens should be stored securely and used to obtain new access tokens when they expire
