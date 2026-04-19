# User Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/users
```

## Overview
The User Service handles user management operations including registration, profile management, role management, and credential validation.

---

## Endpoints

### 1. Register User
**POST** `/api/v1/users/register`

Register a new user in the system.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "SecureP@ss123",
  "firstName": "John",
  "lastName": "Doe",
  "contactNumber": "+1234567890",
  "country": "United States",
  "state": "California",
  "city": "San Francisco",
  "address": "123 Main Street",
  "postalCode": "94101"
}
```

#### Request Validation
- `email`: Required, must be valid email format
- `password`: Required, minimum 8 characters, must contain at least one digit, one lowercase, one uppercase, one special character (@#$%^&+=)
- `firstName`: Required, cannot be blank
- `lastName`: Required, cannot be blank
- `contactNumber`: Required, must match pattern `^[+]?[0-9]{10,15}$`
- `country`: Required, cannot be blank
- `state`: Optional
- `city`: Optional
- `address`: Optional
- `postalCode`: Optional

#### Success Response (201 Created)
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "contactNumber": "+1234567890",
    "country": "United States",
    "state": "California",
    "city": "San Francisco",
    "address": "123 Main Street",
    "postalCode": "94101",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"],
    "status": "ACTIVE",
    "emailVerified": false,
    "phoneVerified": false,
    "createdAt": "2024-01-15T10:30:00",
    "lastLoginAt": null
  },
  "timestamp": "2024-01-15T10:30:00"
}
```

---

### 2. Get User by ID
**GET** `/api/v1/users/{id}`

Retrieve user details by user ID.

#### Path Parameters
- `id`: User ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "contactNumber": "+1234567890",
    "country": "United States",
    "state": "California",
    "city": "San Francisco",
    "address": "123 Main Street",
    "postalCode": "94101",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"],
    "status": "ACTIVE",
    "emailVerified": true,
    "phoneVerified": false,
    "createdAt": "2024-01-15T10:30:00",
    "lastLoginAt": "2024-01-16T08:20:00"
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

---

### 3. Get User Info
**GET** `/api/v1/users/{id}/info`

Get simplified user info for authentication purposes.

#### Path Parameters
- `id`: User ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"]
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

---

### 4. Update User
**PUT** `/api/v1/users/{id}`

Update user profile information.

#### Path Parameters
- `id`: User ID (number)

#### Request Body
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "contactNumber": "+1234567890",
  "country": "United States",
  "state": "California",
  "city": "San Francisco",
  "address": "456 Oak Avenue",
  "postalCode": "94102"
}
```

#### Notes
- All fields are optional
- Only provided fields will be updated

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "contactNumber": "+1234567890",
    "country": "United States",
    "state": "California",
    "city": "San Francisco",
    "address": "456 Oak Avenue",
    "postalCode": "94102",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"],
    "status": "ACTIVE",
    "emailVerified": true,
    "phoneVerified": false,
    "createdAt": "2024-01-15T10:30:00",
    "lastLoginAt": "2024-01-16T08:20:00"
  },
  "timestamp": "2024-01-16T10:35:00"
}
```

---

### 5. Delete User
**DELETE** `/api/v1/users/{id}`

Soft delete a user (sets status to DELETED).

#### Path Parameters
- `id`: User ID (number)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null,
  "timestamp": "2024-01-16T10:40:00"
}
```

---

### 6. Get All Users (Paginated)
**GET** `/api/v1/users`

Retrieve a paginated list of all users.

#### Query Parameters
- `page`: Page number (default: 0)
- `size`: Page size (default: 20)
- `sortBy`: Sort field (default: "id")
- `sortDirection`: Sort direction - "asc" or "desc" (default: "asc")

#### Example Request
```
GET /api/v1/users?page=0&size=10&sortBy=createdAt&sortDirection=desc
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
        "email": "user@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "contactNumber": "+1234567890",
        "country": "United States",
        "roles": ["ROLE_USER"],
        "permissions": ["USER_READ", "INVESTMENT_READ"],
        "status": "ACTIVE",
        "emailVerified": true,
        "phoneVerified": false,
        "createdAt": "2024-01-15T10:30:00",
        "lastLoginAt": "2024-01-16T08:20:00"
      }
    ],
    "pageNumber": 0,
    "pageSize": 10,
    "totalElements": 50,
    "totalPages": 5,
    "last": false
  },
  "timestamp": "2024-01-16T10:45:00"
}
```

---

### 7. Validate Credentials
**POST** `/api/v1/users/validate-credentials`

Validate user credentials (used internally by auth service).

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "SecureP@ss123"
}
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"]
  },
  "timestamp": "2024-01-16T10:50:00"
}
```

---

### 8. Add Role to User
**POST** `/api/v1/users/{id}/roles`

Add a role to a user.

#### Path Parameters
- `id`: User ID (number)

#### Query Parameters
- `role`: Role to add - "ROLE_USER", "ROLE_ADMIN", or "ROLE_SUPER_ADMIN"

#### Example Request
```
POST /api/v1/users/1/roles?role=ROLE_ADMIN
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Role added successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER", "ROLE_ADMIN"],
    "permissions": ["USER_READ", "USER_WRITE", "USER_DELETE", "INVESTMENT_READ", "..."],
    "status": "ACTIVE",
    "createdAt": "2024-01-15T10:30:00"
  },
  "timestamp": "2024-01-16T11:00:00"
}
```

---

### 9. Remove Role from User
**DELETE** `/api/v1/users/{id}/roles`

Remove a role from a user.

#### Path Parameters
- `id`: User ID (number)

#### Query Parameters
- `role`: Role to remove - "ROLE_USER", "ROLE_ADMIN", or "ROLE_SUPER_ADMIN"

#### Example Request
```
DELETE /api/v1/users/1/roles?role=ROLE_ADMIN
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Role removed successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "roles": ["ROLE_USER"],
    "permissions": ["USER_READ", "INVESTMENT_READ", "TRANSACTION_READ", "PORTFOLIO_READ"],
    "status": "ACTIVE",
    "createdAt": "2024-01-15T10:30:00"
  },
  "timestamp": "2024-01-16T11:05:00"
}
```

---

## Data Models

### UserRegistrationRequest
```typescript
{
  email: string;              // Required, valid email
  password: string;           // Required, min 8 chars, must contain digit, lowercase, uppercase, special char
  firstName: string;          // Required
  lastName: string;           // Required
  contactNumber: string;      // Required, 10-15 digits with optional +
  country: string;            // Required
  state?: string;             // Optional
  city?: string;              // Optional
  address?: string;           // Optional
  postalCode?: string;        // Optional
}
```

### UserUpdateRequest
```typescript
{
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  postalCode?: string;
}
```

### UserResponse
```typescript
{
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  country: string;
  state: string;
  city: string;
  address: string;
  postalCode: string;
  roles: UserRole[];          // ["ROLE_USER", "ROLE_ADMIN", "ROLE_SUPER_ADMIN"]
  permissions: Permission[];
  status: UserStatus;         // "ACTIVE", "INACTIVE", "SUSPENDED", "DELETED"
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;          // ISO-8601 datetime
  lastLoginAt: string | null; // ISO-8601 datetime
}
```

---

## Enums

### UserRole
- `ROLE_USER` - Regular user
- `ROLE_ADMIN` - Administrator
- `ROLE_SUPER_ADMIN` - Super administrator

### UserStatus
- `ACTIVE` - Active user
- `INACTIVE` - Inactive user
- `SUSPENDED` - Suspended user
- `DELETED` - Deleted user

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - User not found |
| 409 | Conflict - Email already exists |
| 500 | Internal Server Error |

---

## Notes

1. All endpoints (except registration) require authentication
2. Role management endpoints require ADMIN or SUPER_ADMIN role
3. User deletion is soft delete - user status is set to DELETED
4. Default pagination size is 20 items per page
5. Passwords are validated for strength on registration
