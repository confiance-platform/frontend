# Confiance Financial Platform - Complete Documentation

**Version:** 1.0.0  
**Last Updated:** December 27, 2024  
**Frontend Stack:** React 18.3.1 + Vite + Bootstrap 5.3.3  
**Backend:** Spring Boot Microservices

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Architecture](#architecture)
4. [Authentication & Authorization](#authentication--authorization)
5. [API Documentation](#api-documentation)
6. [Component Structure](#component-structure)
7. [Routing](#routing)
8. [Deployment](#deployment)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Spring Boot backend running on `http://localhost:8080`

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env.development

# 3. Start development server
npm run dev

# Server will start at http://localhost:5173
```

### Default Login Credentials

```
Super Admin:
Email: admin@confiance.com
Password: Admin@123

Admin:
Email: admin2@confiance.com
Password: Admin@123

User:
Email: user@confiance.com
Password: User@123
```

---

## Project Overview

### What is Confiance?

Confiance is a comprehensive financial investment platform that enables users to:
- Manage investment portfolios
- Track investments in real-time
- Execute transactions (Buy/Sell)
- View detailed analytics and reports
- Receive notifications for important events

### Key Features

**For Users:**
- Portfolio dashboard with real-time data
- Investment tracking and analytics
- Transaction history
- Profile management
- Notifications

**For Admins:**
- User management
- Investment product management
- Transaction monitoring
- System analytics
- Notification management

**For Super Admins:**
- Complete system access
- User and admin management
- System configuration
- Security settings
- Audit logs

### Tech Stack

**Frontend:**
- React 18.3.1 with Vite
- Bootstrap 5.3.3
- React Router v6
- React Query (@tanstack/react-query)
- Axios for API calls
- Framer Motion for animations
- React Hook Form + Zod for validation
- Chart.js for data visualization

**Backend:**
- Spring Boot
- Spring Security
- JWT Authentication
- MySQL Database
- RESTful API architecture

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│                  React Frontend                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │ Landing Page │  │ Auth Pages   │  │ Dashboard │ │
│  │              │  │ (Public)     │  │(Protected)│ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│         │                  │                │        │
│         └──────────────────┴────────────────┘        │
│                       │                               │
│              ┌────────▼────────┐                     │
│              │  Auth Context   │                     │
│              │  React Query    │                     │
│              │  API Services   │                     │
│              └────────┬────────┘                     │
└───────────────────────┼──────────────────────────────┘
                        │
                  ┌─────▼──────┐
                  │   Axios    │
                  │ Interceptors│
                  └─────┬──────┘
                        │
┌───────────────────────▼──────────────────────────────┐
│           Spring Boot Backend (Port 8080)            │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │   Auth   │  │   User   │  │   Investment     │  │
│  │ Service  │  │ Service  │  │   Service        │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │Portfolio │  │Transaction│  │  Notification   │  │
│  │ Service  │  │  Service  │  │   Service        │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│                      │                               │
│              ┌───────▼────────┐                     │
│              │  MySQL Database │                     │
│              └─────────────────┘                     │
└──────────────────────────────────────────────────────┘
```

### Frontend Directory Structure

```
src/
├── components/          # Reusable components
│   ├── ProtectedRoute.jsx  # Route guards
│   └── Loader.jsx          # Loading component
├── context/            # React Context providers
│   └── AuthContext.jsx    # Authentication state
├── services/           # API service layer
│   ├── apiClient.js       # Axios configuration
│   ├── authService.js     # Auth API calls
│   ├── userService.js     # User API calls
│   ├── investmentService.js
│   ├── transactionService.js
│   ├── portfolioService.js
│   └── adminService.js
├── utils/              # Utility functions
│   └── tokenManager.js    # JWT token utilities
├── config/             # Configuration
│   └── constants.js       # App constants
├── Pages/              # Page components
│   ├── LandingPage/       # Public landing page
│   ├── AuthPages/         # Login, Signup
│   └── Dashboard/         # Protected dashboards
├── Layout/             # Layout components
│   ├── Header/
│   ├── Sidebar/
│   └── Footer/
└── Route/              # Routing configuration
    ├── index.jsx          # Main routes
    └── AuthRoutes.jsx     # Route constants
```

---

## Authentication & Authorization

### JWT Token Flow

1. **Login:**
   ```javascript
   POST /api/v1/auth/login
   Request: { email, password }
   Response: { 
     accessToken: "...",  // 15 min expiry
     refreshToken: "...", // 7 day expiry
     user: { id, name, email, role, permissions }
   }
   ```

2. **Token Storage:**
   - Access token → `localStorage.getItem('access_token')`
   - Refresh token → `localStorage.getItem('refresh_token')`
   - User data → `localStorage.getItem('user_data')`

3. **Auto Token Injection:**
   ```javascript
   // Axios interceptor automatically adds token to all requests
   headers: { Authorization: `Bearer ${accessToken}` }
   ```

4. **Auto Token Refresh:**
   ```javascript
   // On 401 error, automatically refresh token
   if (response.status === 401) {
     const newToken = await refreshAccessToken();
     // Retry original request with new token
   }
   ```

### Role-Based Access Control (RBAC)

**3 Roles:**
1. `ROLE_USER` - Regular users
2. `ROLE_ADMIN` - Administrators
3. `ROLE_SUPER_ADMIN` - Super administrators

**14 Permissions:**
```javascript
USER_READ, USER_WRITE, USER_DELETE,
INVESTMENT_READ, INVESTMENT_WRITE, INVESTMENT_DELETE,
TRANSACTION_READ, TRANSACTION_WRITE, TRANSACTION_DELETE,
PORTFOLIO_READ, PORTFOLIO_WRITE,
ADMIN_READ, ADMIN_WRITE, NOTIFICATION_WRITE
```

### Protected Routes

**Route Guards:**
```jsx
// Requires authentication
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>

// Public only (redirects if authenticated)
<PublicRoute>
  <Login />
</PublicRoute>

// Requires specific role
<RoleRoute allowedRoles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
  <AdminPanel />
</RoleRoute>

// Requires specific permission
<PermissionRoute requiredPermission="USER_WRITE">
  <CreateUser />
</PermissionRoute>
```

### Permission Checking

```javascript
// In components
const { hasPermission, hasRole, isAdmin } = useAuth();

if (hasPermission('USER_WRITE')) {
  // Show edit button
}

if (isAdmin()) {
  // Show admin features
}
```

---

## API Documentation

### Base Configuration

```javascript
// .env.development
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_APP_NAME=Confiance Financial Platform
```

### Authentication API

#### Login
```javascript
POST /api/v1/auth/login
Request: {
  "email": "admin@confiance.com",
  "password": "Admin@123"
}
Response: {
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "eyJhbGc...",
    "refreshToken": "eyJhbGc...",
    "user": {
      "id": 1,
      "name": "Admin User",
      "email": "admin@confiance.com",
      "role": "ROLE_ADMIN",
      "permissions": ["USER_READ", "USER_WRITE", ...]
    }
  }
}
```

#### Refresh Token
```javascript
POST /api/v1/auth/refresh
Headers: { "X-Refresh-Token": "refreshTokenHere" }
Response: {
  "success": true,
  "data": {
    "accessToken": "newAccessToken"
  }
}
```

#### Logout
```javascript
POST /api/v1/auth/logout
Headers: { "Authorization": "Bearer accessToken" }
Response: { "success": true, "message": "Logged out successfully" }
```

### User API

#### Get Current User
```javascript
GET /api/v1/users/me
Headers: { "Authorization": "Bearer accessToken" }
Response: {
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "ROLE_USER",
    "permissions": [...]
  }
}
```

#### Register User
```javascript
POST /api/v1/users/register
Request: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123",
  "role": "ROLE_USER"
}
Response: {
  "success": true,
  "message": "User registered successfully",
  "data": { userId: 1 }
}
```

#### Get All Users (Admin)
```javascript
GET /api/v1/users?page=0&size=10
Headers: { "Authorization": "Bearer accessToken" }
Permissions Required: USER_READ
Response: {
  "success": true,
  "data": {
    "content": [...users],
    "totalElements": 50,
    "totalPages": 5,
    "currentPage": 0
  }
}
```

### Investment API

#### Get All Investments
```javascript
GET /api/v1/investments?page=0&size=10
Headers: { "Authorization": "Bearer accessToken" }
Response: {
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "name": "Tech Growth Fund",
        "type": "MUTUAL_FUND",
        "currentPrice": 150.50,
        "minInvestment": 1000,
        "expectedReturn": 12.5,
        "riskLevel": "MEDIUM"
      }
    ]
  }
}
```

#### Get Investment by ID
```javascript
GET /api/v1/investments/{id}
Response: {
  "success": true,
  "data": {
    "id": 1,
    "name": "Tech Growth Fund",
    "description": "...",
    "currentPrice": 150.50,
    "performance": {
      "1M": 5.2,
      "3M": 12.5,
      "1Y": 18.3
    }
  }
}
```

### Transaction API

#### Create Transaction
```javascript
POST /api/v1/transactions
Request: {
  "investmentId": 1,
  "type": "BUY",
  "quantity": 10,
  "price": 150.50
}
Response: {
  "success": true,
  "message": "Transaction created successfully",
  "data": {
    "id": 1,
    "transactionDate": "2024-12-27T10:00:00",
    "status": "COMPLETED",
    "totalAmount": 1505.00
  }
}
```

#### Get User Transactions
```javascript
GET /api/v1/transactions/user?page=0&size=10
Response: {
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "investmentName": "Tech Growth Fund",
        "type": "BUY",
        "quantity": 10,
        "price": 150.50,
        "totalAmount": 1505.00,
        "status": "COMPLETED",
        "date": "2024-12-27"
      }
    ]
  }
}
```

### Portfolio API

#### Get User Portfolio
```javascript
GET /api/v1/portfolios/user
Response: {
  "success": true,
  "data": {
    "id": 1,
    "totalValue": 125450.00,
    "totalInvested": 100000.00,
    "totalGainLoss": 25450.00,
    "gainLossPercentage": 25.45,
    "holdings": [
      {
        "investmentId": 1,
        "investmentName": "Tech Growth Fund",
        "quantity": 100,
        "averagePrice": 140.00,
        "currentPrice": 150.50,
        "totalValue": 15050.00,
        "gainLoss": 1050.00,
        "gainLossPercentage": 7.5
      }
    ]
  }
}
```

### API Response Format

**Success Response:**
```javascript
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

**Error Response:**
```javascript
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field1": "Error message",
    "field2": "Error message"
  }
}
```

---

## Component Structure

### Landing Page

**Location:** `src/Pages/LandingPage/`

**Components:**
- `index.jsx` - Main landing page
- `LandingNavbar.jsx` - Fixed navbar
- `Hero.jsx` - Hero section with animations
- `Features.jsx` - Feature showcase
- `Overview.jsx` - Project overview
- `Pricing.jsx` - Pricing tiers
- `FAQ.jsx` - FAQ accordion
- `LandingFooter.jsx` - Footer
- `landing.css` - Styles

**Features:**
- Smooth scroll navigation
- Framer Motion animations
- Responsive design
- SEO optimized with react-helmet

### Authentication Pages

**Location:** `src/Pages/AuthPages/`

**Sign In** (`SignIn/index.jsx`):
- React Hook Form validation
- Zod schema validation
- Auto-redirect after login
- Error handling
- Demo credentials display

**Sign Up** (`SignUp/index.jsx`):
- Comprehensive registration form
- Password strength validation
- Role selection
- Success redirect to login

**Validation Rules:**
```javascript
// Password requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character (!@#$%^&*)
```

### Dashboard Components

**Protected Routes:**
- Ecommerce Dashboard (`/dashboard/ecommerce`)
- Project Dashboard (`/dashboard/project`)
- Crypto Dashboard (`/dashboard/crypto`)
- Education Dashboard (`/dashboard/education`)

**Common Features:**
- Real-time data with React Query
- Charts and visualizations
- Responsive tables
- Action buttons with permission checks

### Service Layer

**API Client** (`services/apiClient.js`):
```javascript
// Axios instance with interceptors
- Auto-inject JWT token
- Auto-refresh on 401
- Global error handling
- Request/response logging (dev mode)
```

**Service Pattern:**
```javascript
// Example: userService.js
export const userService = {
  async getMe() {
    const response = await apiClient.get('/users/me');
    return response;
  },
  
  async register(userData) {
    const response = await apiClient.post('/users/register', userData);
    return response;
  }
};
```

---

## Routing

### Route Configuration

**Public Routes:**
```javascript
/ → LandingPage
/auth/sign-in → Sign In
/auth/sign-up → Sign Up
/error/404 → Not Found
/error/500 → Server Error
```

**Protected Routes:**
```javascript
/dashboard/ecommerce → Ecommerce Dashboard
/dashboard/project → Project Dashboard
/apps/* → Various app pages
/widgets → Widgets page
```

### Route Guards

**ProtectedRoute:**
```jsx
// Requires authentication
<ProtectedRoute>
  <Component />
</ProtectedRoute>
```

**PublicRoute:**
```jsx
// Only for non-authenticated users
<PublicRoute>
  <Login />
</PublicRoute>
```

**RoleRoute:**
```jsx
// Requires specific role
<RoleRoute allowedRoles={['ROLE_ADMIN']}>
  <AdminPanel />
</RoleRoute>
```

### Navigation Flow

```
Landing Page (/)
    ↓
Sign In (/auth/sign-in)
    ↓
Dashboard (/dashboard/ecommerce)
```

---

## Deployment

### Build for Production

```bash
# Create production build
npm run build

# Output will be in /dist folder
# Serve with any static server
```

### Environment Setup

**Development:**
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_ENABLE_LOGS=true
```

**Production:**
```env
VITE_API_BASE_URL=https://api.confiance.com/api/v1
VITE_ENABLE_LOGS=false
```

### Deployment Checklist

- [ ] Update API URL in `.env.production`
- [ ] Build project: `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Configure CORS on backend for production domain
- [ ] Set up SSL certificate
- [ ] Configure CDN for static assets
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics (Google Analytics, etc.)

---

## Testing

### Test User Accounts

**Super Admin:**
- Email: `admin@confiance.com`
- Password: `Admin@123`
- Access: Full system access

**Admin:**
- Email: `admin2@confiance.com`
- Password: `Admin@123`
- Access: User and investment management

**User:**
- Email: `user@confiance.com`
- Password: `User@123`
- Access: Portfolio and transactions only

### Testing Features

**Authentication:**
1. Test login with all three user types
2. Verify token refresh on expiry
3. Test logout functionality
4. Verify protected route access

**Authorization:**
1. Login as User → Verify limited access
2. Login as Admin → Verify extended access
3. Login as Super Admin → Verify full access
4. Test permission-based UI elements

**Dashboard:**
1. Verify data loads correctly
2. Test real-time updates
3. Verify charts render properly
4. Test responsive design on mobile

---

## Troubleshooting

### Common Issues

**1. Blank Dashboard After Login**

**Solution:** Clear browser cache and hard refresh
```bash
Chrome/Edge: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
Firefox: Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)
```

**2. Sidebar Appearing on Landing Page**

**Solution:** Ensure you're on the correct port and clear cache
- Server port: Check console for actual port (5173, 5174, 5175, etc.)
- Hard refresh browser

**3. Token Expired Errors**

**Solution:** Tokens auto-refresh. If persists:
```javascript
// Manually clear storage
localStorage.clear();
// Then login again
```

**4. CORS Errors**

**Solution:** Ensure backend CORS is configured for your frontend URL
```java
// Backend: Add frontend URL to allowed origins
@CrossOrigin(origins = "http://localhost:5173")
```

**5. 404 on Refresh**

**Solution:** Configure server for SPA routing
```nginx
# Nginx configuration
location / {
  try_files $uri $uri/ /index.html;
}
```

### Debug Mode

Enable detailed logging:
```env
VITE_ENABLE_LOGS=true
```

Check console for:
- API request/response logs
- Authentication state changes
- Route navigation logs

---

## Additional Resources

### Package Documentation
- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [React Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com)
- [Framer Motion](https://www.framer.com/motion)
- [Bootstrap](https://getbootstrap.com)

### Support
For issues or questions:
- Check this documentation first
- Review browser console for errors
- Check backend logs for API errors
- Verify environment variables are set correctly

---

**Document Version:** 1.0.0  
**Last Updated:** December 27, 2024  
**Maintained By:** Confiance Development Team
