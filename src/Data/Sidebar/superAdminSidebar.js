// Super Admin Sidebar Configuration - Full System Access
import { adminSidebarConfig } from "./adminSidebar";

export const superAdminSidebarConfig = [
  // Super Admin Section
  {
    type: "header",
    name: "Super Admin Portal"
  },
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
      { name: "Create Admin", path: "/admin/admins/create" },
      { name: "Permissions", path: "/admin/permissions" }
    ]
  },
  {
    type: "dropdown",
    name: "System",
    iconClass: "ph-duotone ph-gear",
    collapseId: "system",
    children: [
      { name: "Configuration", path: "/admin/config" },
      { name: "Audit Logs", path: "/admin/audit-logs" },
      { name: "System Health", path: "/admin/health" }
    ]
  },

  // Include all admin sidebar items (which includes user portal)
  ...adminSidebarConfig
];
