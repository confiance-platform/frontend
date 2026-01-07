// Admin Sidebar Configuration - Includes User Portal + Admin Features
import { userSidebarConfig } from "./userSidebar";

export const adminSidebarConfig = [
  // Admin Section Header
  {
    type: "header",
    name: "Admin Portal"
  },
  {
    type: "single",
    name: "Admin Dashboard",
    path: "/dashboard/admin",
    iconClass: "ph-duotone ph-gauge"
  },
  {
    type: "dropdown",
    name: "User Management",
    iconClass: "ph-duotone ph-users",
    collapseId: "user-management",
    children: [
      { name: "All Users", path: "/admin/users" },
      { name: "Create User", path: "/admin/users/create" },
      { name: "Active Users", path: "/admin/users?status=active" },
      { name: "Suspended Users", path: "/admin/users?status=suspended" }
    ]
  },
  {
    type: "single",
    name: "Reports",
    path: "/admin/reports",
    iconClass: "ph-duotone ph-file-text"
  },

  // User Portal Section
  {
    type: "header",
    name: "User Portal"
  },
  ...userSidebarConfig
];
