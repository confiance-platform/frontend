// User Sidebar Configuration - Financial Platform
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
    path: "/financial/portfolio",
    iconClass: "ph-duotone ph-briefcase"
  },
  {
    type: "single",
    name: "Investments",
    path: "/financial/investments",
    iconClass: "ph-duotone ph-chart-line-up"
  },
  {
    type: "single",
    name: "Transactions",
    path: "/financial/transactions",
    iconClass: "ph-duotone ph-arrows-left-right"
  },
  {
    type: "dropdown",
    name: "Account",
    iconClass: "ph-duotone ph-user",
    collapseId: "account",
    children: [
      { name: "Profile", path: "/apps/profile-page/profile" },
      { name: "Settings", path: "/apps/profile-page/setting" },
      { name: "Invoice", path: "/apps/invoice" }
    ]
  }
];
