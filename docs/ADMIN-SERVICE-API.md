# Admin Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/admin
```

## Overview
The Admin Service handles administrative operations, primarily focused on permission management. This service allows administrators to manage user permissions.

---

## Endpoints

### 1. Get Available Permissions
**GET** `/api/v1/admin/permissions/available`

Retrieve all available permissions in the system.

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Available permissions retrieved successfully",
  "data": [
    "USER_READ",
    "USER_WRITE",
    "USER_DELETE",
    "INVESTMENT_READ",
    "INVESTMENT_WRITE",
    "INVESTMENT_DELETE",
    "TRANSACTION_READ",
    "TRANSACTION_WRITE",
    "PORTFOLIO_READ",
    "PORTFOLIO_WRITE",
    "ADMIN_PANEL_ACCESS",
    "PERMISSION_GRANT",
    "PERMISSION_REVOKE",
    "PERMISSION_VIEW"
  ],
  "timestamp": "2024-01-16T10:00:00"
}
```

---

### 2. Get User Permissions
**GET** `/api/v1/admin/permissions/user/{userId}`

Get all permissions for a specific user.

#### Path Parameters
- `userId`: User ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "User permissions retrieved successfully",
  "data": {
    "userId": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER", "ROLE_ADMIN"],
    "permissions": [
      "USER_READ",
      "USER_WRITE",
      "USER_DELETE",
      "INVESTMENT_READ",
      "INVESTMENT_WRITE",
      "INVESTMENT_DELETE",
      "TRANSACTION_READ",
      "TRANSACTION_WRITE",
      "PORTFOLIO_READ",
      "PORTFOLIO_WRITE",
      "ADMIN_PANEL_ACCESS",
      "PERMISSION_VIEW"
    ]
  },
  "timestamp": "2024-01-16T10:05:00"
}
```

---

### 3. Grant Permissions
**POST** `/api/v1/admin/permissions/grant`

Grant one or more permissions to a user.

#### Request Body
```json
{
  "userId": 1,
  "permissions": [
    "INVESTMENT_WRITE",
    "TRANSACTION_WRITE"
  ]
}
```

#### Request Validation
- `userId`: Required, must be a valid user ID
- `permissions`: Required, cannot be empty, must contain valid permission values

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Permissions granted successfully",
  "data": {
    "userId": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": [
      "USER_READ",
      "INVESTMENT_READ",
      "INVESTMENT_WRITE",
      "TRANSACTION_READ",
      "TRANSACTION_WRITE",
      "PORTFOLIO_READ"
    ]
  },
  "timestamp": "2024-01-16T10:10:00"
}
```

---

### 4. Revoke Permissions
**POST** `/api/v1/admin/permissions/revoke`

Revoke one or more permissions from a user.

#### Request Body
```json
{
  "userId": 1,
  "permissions": [
    "INVESTMENT_WRITE",
    "TRANSACTION_WRITE"
  ]
}
```

#### Request Validation
- `userId`: Required, must be a valid user ID
- `permissions`: Required, cannot be empty, must contain valid permission values

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Permissions revoked successfully",
  "data": {
    "userId": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": [
      "USER_READ",
      "INVESTMENT_READ",
      "TRANSACTION_READ",
      "PORTFOLIO_READ"
    ]
  },
  "timestamp": "2024-01-16T10:15:00"
}
```

---

### 5. Set User Permissions
**PUT** `/api/v1/admin/permissions/user/{userId}`

Replace all existing permissions for a user with a new set of permissions.

#### Path Parameters
- `userId`: User ID (number)

#### Request Body
```json
[
  "USER_READ",
  "USER_WRITE",
  "INVESTMENT_READ",
  "PORTFOLIO_READ"
]
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "User permissions updated successfully",
  "data": {
    "userId": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": [
      "USER_READ",
      "USER_WRITE",
      "INVESTMENT_READ",
      "PORTFOLIO_READ"
    ]
  },
  "timestamp": "2024-01-16T10:20:00"
}
```

---

### 6. Check Permission
**GET** `/api/v1/admin/permissions/user/{userId}/has/{permission}`

Check if a user has a specific permission.

#### Path Parameters
- `userId`: User ID (number)
- `permission`: Permission to check (e.g., "USER_WRITE")

#### Example Request
```
GET /api/v1/admin/permissions/user/1/has/USER_WRITE
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Permission check completed",
  "data": true,
  "timestamp": "2024-01-16T10:25:00"
}
```

---

## Data Models

### PermissionRequest
```typescript
{
  userId: number;            // Required
  permissions: Permission[]; // Required, non-empty array
}
```

### UserPermissionsResponse
```typescript
{
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];
  permissions: Permission[];
}
```

---

## Available Permissions

### User Permissions
- `USER_READ` - Read user information
- `USER_WRITE` - Create and update users
- `USER_DELETE` - Delete users

### Investment Permissions
- `INVESTMENT_READ` - Read investment information
- `INVESTMENT_WRITE` - Create and update investments
- `INVESTMENT_DELETE` - Delete investments

### Transaction Permissions
- `TRANSACTION_READ` - Read transaction information
- `TRANSACTION_WRITE` - Create and update transactions

### Portfolio Permissions
- `PORTFOLIO_READ` - Read portfolio information
- `PORTFOLIO_WRITE` - Create and update portfolio

### Admin Permissions
- `ADMIN_PANEL_ACCESS` - Access admin panel
- `PERMISSION_GRANT` - Grant permissions to users
- `PERMISSION_REVOKE` - Revoke permissions from users
- `PERMISSION_VIEW` - View user permissions

---

## Default Permission Sets

### ROLE_USER (Default)
- USER_READ
- INVESTMENT_READ
- TRANSACTION_READ
- PORTFOLIO_READ

### ROLE_ADMIN
- All USER permissions
- All INVESTMENT permissions
- All TRANSACTION permissions
- All PORTFOLIO permissions
- ADMIN_PANEL_ACCESS
- PERMISSION_VIEW

### ROLE_SUPER_ADMIN
- All available permissions

---

## Authorization Requirements

All admin endpoints require:
1. Valid authentication token
2. User must have `ROLE_ADMIN` or `ROLE_SUPER_ADMIN` role
3. For grant/revoke operations: User must have `PERMISSION_GRANT` or `PERMISSION_REVOKE` permission

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

## Notes

1. Permission changes take effect immediately
2. Granting permissions is additive - existing permissions are preserved
3. Revoking permissions only removes specified permissions
4. Setting permissions replaces all existing permissions
5. Super admins cannot have their permissions revoked below admin level
6. At least one super admin must exist in the system
