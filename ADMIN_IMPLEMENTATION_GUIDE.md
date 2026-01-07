# Admin Portal Implementation Guide

## Overview
This document outlines the complete implementation of role-based access control with three separate portals: **User**, **Admin**, and **Super Admin**.

---

## ✅ Completed Tasks

### 1. Role-Based Dashboards Created
- **User Dashboard**: `/src/Pages/Dashboard/UserDashboard/index.jsx`
  - Portfolio overview with stats cards
  - Recent transactions table
  - Quick action links

- **Admin Dashboard**: `/src/Pages/Dashboard/AdminDashboard/index.jsx`
  - User management overview
  - System statistics
  - Recent user activity
  - Admin quick actions

- **Super Admin Dashboard**: `/src/Pages/Dashboard/SuperAdminDashboard/index.jsx`
  - Complete system overview
  - Admin user management
  - System activity logs
  - Full system controls

### 2. Role-Based Login Redirect
- **File**: `/src/Pages/AuthPages/SignIn/index.jsx`
- **Logic**: After successful login:
  - `ROLE_SUPER_ADMIN` → `/dashboard/super-admin`
  - `ROLE_ADMIN` → `/dashboard/admin`
  - `ROLE_USER` → `/dashboard/user`

---

## 🚧 In Progress / Next Steps

### 3. Role-Based Sidebar Configurations

Create three sidebar configuration files to control what menu items each role sees.

#### File: `/src/Data/Sidebar/userSidebar.js`
```javascript
export const userSidebarConfig = [
  {
    type: "single",
    name: "Dashboard",
    path: "/dashboard/user",
    iconClass: "ph-duotone ph-house-line"
  },
  {
    type: "single",
    name: "Portfolio",
    path: "/portfolio",
    iconClass: "ph-duotone ph-briefcase"
  },
  {
    type: "single",
    name: "Investments",
    path: "/investments",
    iconClass: "ph-duotone ph-chart-line-up"
  },
  {
    type: "single",
    name: "Transactions",
    path: "/transactions",
    iconClass: "ph-duotone ph-swap"
  },
  {
    type: "dropdown",
    name: "Account",
    iconClass: "ph-duotone ph-user",
    collapseId: "account",
    children: [
      { name: "Profile", path: "/apps/profile" },
      { name: "Settings", path: "/apps/settings" },
    ]
  }
];
```

#### File: `/src/Data/Sidebar/adminSidebar.js`
```javascript
import { userSidebarConfig } from "./userSidebar";

export const adminSidebarConfig = [
  {
    type: "single",
    name: "Admin Dashboard",
    path: "/dashboard/admin",
    iconClass: "ph-duotone ph-house-line"
  },
  {
    type: "dropdown",
    name: "User Management",
    iconClass: "ph-duotone ph-users",
    collapseId: "user-management",
    children: [
      { name: "All Users", path: "/admin/users" },
      { name: "Create User", path: "/admin/users/create" }
    ]
  },
  {
    type: "single",
    name: "Reports",
    path: "/admin/reports",
    iconClass: "ph-duotone ph-file-text"
  },
  {
    type: "header",
    name: "User Portal"
  },
  ...userSidebarConfig
];
```

#### File: `/src/Data/Sidebar/superAdminSidebar.js`
```javascript
import { adminSidebarConfig } from "./adminSidebar";

export const superAdminSidebarConfig = [
  {
    type: "single",
    name: "Super Admin Dashboard",
    path: "/dashboard/super-admin",
    iconClass: "ph-duotone ph-shield-check"
  },
  {
    type: "dropdown",
    name: "Admin Management",
    iconClass: "ph-duotone ph-user-shield",
    collapseId: "admin-management",
    children: [
      { name: "All Admins", path: "/admin/admins" },
      { name: "Permissions", path: "/admin/permissions" }
    ]
  },
  {
    type: "single",
    name: "System Config",
    path: "/admin/config",
    iconClass: "ph-duotone ph-gear"
  },
  {
    type: "single",
    name: "Audit Logs",
    path: "/admin/audit-logs",
    iconClass: "ph-duotone ph-file-search"
  },
  {
    type: "header",
    name: "Admin Portal"
  },
  ...adminSidebarConfig
];
```

### 4. Update Sidebar Component

**File**: `/src/Layout/Sidebar/index.jsx`

Add this logic at the beginning of the Sidebar component:

```javascript
import { useAuth } from "@/context/AuthContext";
import { userSidebarConfig } from "@/Data/Sidebar/userSidebar";
import { adminSidebarConfig } from "@/Data/Sidebar/adminSidebar";
import { superAdminSidebarConfig } from "@/Data/Sidebar/superAdminSidebar";

const Sidebar = ({ sidebarOpen, setIsSidebarOpen }) => {
  const { isSuperAdmin, isAdmin } = useAuth();

  // Select sidebar config based on role
  const getSidebarConfig = () => {
    if (isSuperAdmin()) return superAdminSidebarConfig;
    if (isAdmin()) return adminSidebarConfig;
    return userSidebarConfig;
  };

  const sidebarConfig = getSidebarConfig();

  // Then use sidebarConfig to render menu items instead of the current static config
}
```

### 5. Update Routes Configuration

**File**: `/src/Route/index.jsx`

Add role-based routes:

```javascript
import UserDashboard from "@/Pages/Dashboard/UserDashboard";
import AdminDashboard from "@/Pages/Dashboard/AdminDashboard";
import SuperAdminDashboard from "@/Pages/Dashboard/SuperAdminDashboard";

// Inside protected routes children array:
children: [
  // User Dashboard (All authenticated users)
  {
    path: "dashboard/user",
    element: <UserDashboard />
  },

  // Admin Dashboard (Admin & Super Admin only)
  {
    path: "dashboard/admin",
    element: (
      <RoleRoute allowedRoles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
        <AdminDashboard />
      </RoleRoute>
    )
  },

  // Super Admin Dashboard (Super Admin only)
  {
    path: "dashboard/super-admin",
    element: (
      <RoleRoute allowedRoles={['ROLE_SUPER_ADMIN']}>
        <SuperAdminDashboard />
      </RoleRoute>
    )
  },

  // ... existing routes
]
```

---

## 📋 User Management Pages (To Be Created)

### File Structure:
```
src/Pages/Admin/
├── UserManagement/
│   ├── UserList.jsx          # List all users with search/filter
│   ├── UserDetails.jsx       # View/Edit user details
│   └── CreateUser.jsx        # Create new user form
├── AdminManagement/
│   └── index.jsx             # Manage admin users
└── PermissionManagement/
    └── index.jsx             # Grant/revoke permissions
```

### UserList.jsx Implementation
```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const UserList = () => {
  const { isSuperAdmin } = useAuth();
  const [users, setUsers] = useState([]); // Fetch from API
  const [search, setSearch] = useState("");

  // Features needed:
  // 1. Fetch users from /api/v1/users
  // 2. Search/filter functionality
  // 3. Pagination
  // 4. Actions: View, Edit, Suspend, Delete
  // 5. Super Admin can see admins, Admin can only see users

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>User Management</h5>
              <Link to="/admin/users/create" className="btn btn-primary">
                Create New User
              </Link>
            </div>
            <div className="card-body">
              {/* Search */}
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mb-3"
              />

              {/* User Table */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map users here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
```

---

## 🔐 Permission Gate Components

### File: `/src/Components/PermissionGate.jsx`
```javascript
import { useAuth } from "@/context/AuthContext";

export const PermissionGate = ({
  children,
  permission,
  permissions,
  requireAll = false
}) => {
  const { hasPermission, hasAllPermissions, hasAnyPermission } = useAuth();

  let hasAccess = false;
  if (permission) {
    hasAccess = hasPermission(permission);
  } else if (permissions) {
    hasAccess = requireAll
      ? hasAllPermissions(permissions)
      : hasAnyPermission(permissions);
  }

  return hasAccess ? children : null;
};

// Usage:
// <PermissionGate permission="USER_DELETE">
//   <button onClick={handleDelete}>Delete User</button>
// </PermissionGate>
```

### File: `/src/Components/RoleGate.jsx`
```javascript
import { useAuth } from "@/context/AuthContext";

export const RoleGate = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user || !roles) return null;

  const hasAccess = roles.includes(user.role);

  return hasAccess ? children : null;
};

// Usage:
// <RoleGate roles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
//   <AdminOnlyComponent />
// </RoleGate>
```

---

## 🗑️ Routes to Remove

Remove these from `/src/Route/index.jsx`:
- All UI Kit routes (Alert, Badge, Button, etc.)
- Advanced UI routes (Modals, Spinners, etc.)
- Icon routes (Fontawesome, Tabler, etc.)
- Map routes (Google Maps, Leaflet)
- Most Chart routes (keep basic for dashboards)
- Blog routes
- E-shop routes (Cart, Products, Orders)
- Calendar, Chat, Email (unless needed)
- File Manager, Bookmark, Kanban
- Gallery, Pricing (moved to landing)

**Keep Only:**
- Landing Page
- Auth routes (Sign In, Sign Up)
- Dashboard routes (role-based)
- Profile & Settings
- Portfolio, Investments, Transactions (to be created)
- Admin routes (User Management, etc.)
- Error pages
- Legal pages

---

## 📊 API Integration Points

Based on DOCUMENTATION.md, integrate these APIs:

### User Management APIs
```javascript
// Get all users (Admin/SuperAdmin)
GET /api/v1/users?page=0&size=10
Headers: { Authorization: "Bearer token" }
Permissions: USER_READ

// Get user by ID
GET /api/v1/users/{id}
Permissions: USER_READ

// Create user
POST /api/v1/users/register
Permissions: USER_WRITE

// Update user
PUT /api/v1/users/{id}
Permissions: USER_WRITE

// Delete user
DELETE /api/v1/users/{id}
Permissions: USER_DELETE
```

### Permission Management APIs
```javascript
// Get user permissions
GET /api/v1/admin/permissions/user/{userId}
Permissions: ADMIN_READ

// Grant permissions
POST /api/v1/admin/permissions/grant
Body: { userId, permissions: ["USER_READ", "USER_WRITE"] }
Permissions: ADMIN_WRITE

// Revoke permissions
POST /api/v1/admin/permissions/revoke
Body: { userId, permissions: ["USER_WRITE"] }
Permissions: ADMIN_WRITE
```

---

## 🎨 CSS Improvements

### Dashboard Cards
Add these styles to enhance dashboard appearance:

```css
/* Dashboard Stats Cards */
.stats-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Role Badges */
.badge-super-admin {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.badge-admin {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

/* Admin Portal Header */
.admin-header {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
```

---

## ✅ Testing Checklist

### User Flow:
- [ ] Login with user credentials
- [ ] Verify redirect to `/dashboard/user`
- [ ] Verify sidebar only shows user menu items
- [ ] Try accessing `/dashboard/admin` (should be denied)
- [ ] Verify can access portfolio, transactions
- [ ] Logout successfully

### Admin Flow:
- [ ] Login with admin credentials
- [ ] Verify redirect to `/dashboard/admin`
- [ ] Verify sidebar shows admin + user menu items
- [ ] Verify can access user management
- [ ] Verify can view/edit users
- [ ] Try accessing `/dashboard/super-admin` (should be denied)
- [ ] Try accessing `/admin/permissions` (should be denied)

### Super Admin Flow:
- [ ] Login with super admin credentials
- [ ] Verify redirect to `/dashboard/super-admin`
- [ ] Verify sidebar shows all menu items
- [ ] Verify can access all user management features
- [ ] Verify can access admin management
- [ ] Verify can grant/revoke permissions
- [ ] Verify can see audit logs

---

## 📝 Implementation Priority

### Phase 1 (Critical - Completed)
- ✅ Create role-based dashboards
- ✅ Implement login redirect logic

### Phase 2 (High Priority - In Progress)
- ⏳ Create sidebar configurations
- ⏳ Update sidebar component
- ⏳ Update routes with role guards

### Phase 3 (Medium Priority - Next)
- ⬜ Create user management pages
- ⬜ Implement user CRUD operations
- ⬜ Add permission gates

### Phase 4 (Low Priority)
- ⬜ Create admin management pages
- ⬜ Implement permission management
- ⬜ Add audit logging
- ⬜ Remove unnecessary routes

---

## 🔗 Quick Reference

### Demo Credentials
```
Super Admin:
Email: admin@confiance.com
Password: Admin@123
Role: ROLE_SUPER_ADMIN

Admin:
Email: admin2@confiance.com
Password: Admin@123
Role: ROLE_ADMIN

User:
Email: user@confiance.com
Password: User@123
Role: ROLE_USER
```

### Key Files Modified/Created
1. `/src/Pages/Dashboard/UserDashboard/index.jsx` ✅
2. `/src/Pages/Dashboard/AdminDashboard/index.jsx` ✅
3. `/src/Pages/Dashboard/SuperAdminDashboard/index.jsx` ✅
4. `/src/Pages/AuthPages/SignIn/index.jsx` ✅
5. `/src/Data/Sidebar/userSidebar.js` ⏳
6. `/src/Data/Sidebar/adminSidebar.js` ⏳
7. `/src/Data/Sidebar/superAdminSidebar.js` ⏳
8. `/src/Layout/Sidebar/index.jsx` ⏳
9. `/src/Route/index.jsx` ⏳

---

**Last Updated:** December 27, 2024
**Status:** Phase 1 Complete, Phase 2 In Progress
