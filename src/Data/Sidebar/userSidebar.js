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
    path: "/dashboard/ecommerce",
    iconClass: "ph-duotone ph-briefcase"
  },
  {
    type: "single",
    name: "Investments",
    path: "/dashboard/project",
    iconClass: "ph-duotone ph-chart-line-up"
  },
  {
    type: "single",
    name: "Crypto Portfolio",
    path: "/dashboard/crypto",
    iconClass: "ph-duotone ph-currency-bitcoin"
  },
  {
    type: "dropdown",
    name: "Account",
    iconClass: "ph-duotone ph-user",
    collapseId: "account",
    children: [
      { name: "Profile", path: "/apps/profile" },
      { name: "Settings", path: "/apps/settings" },
      { name: "Invoice", path: "/apps/invoice" }
    ]
  }
];
