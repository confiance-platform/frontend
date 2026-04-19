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
  // User Insights - View user portfolios, investments, etc.
  {
    type: "dropdown",
    name: "User Insights",
    iconClass: "ph-duotone ph-chart-pie-slice",
    collapseId: "user-insights",
    children: [
      { name: "Overview", path: "/admin/user-insights" },
      { name: "Invested Users", path: "/admin/user-insights?invested=invested" },
      { name: "Non-Invested", path: "/admin/user-insights?invested=not_invested" }
    ]
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
    type: "dropdown",
    name: "Recommendations",
    iconClass: "ph-duotone ph-lightbulb",
    collapseId: "admin-recommendations",
    children: [
      { name: "Manage Recommendations", path: "/admin/recommendations" },
      { name: "Client P&L", path: "/admin/client-pl" }
    ]
  },
  {
    type: "dropdown",
    name: "Referral Management",
    iconClass: "ph-duotone ph-users-three",
    collapseId: "referral-management",
    children: [
      { name: "Commission Config", path: "/admin/commission-config" },
      { name: "Referral Reports", path: "/admin/referral-reports" }
    ]
  },

  // User Portal Section
  {
    type: "header",
    name: "User Portal"
  },
  ...userSidebarConfig
];
