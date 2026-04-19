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
    name: "Recommendations",
    path: "/financial/recommendations",
    iconClass: "ph-duotone ph-lightbulb"
  },
  {
    type: "dropdown",
    name: "Trading",
    iconClass: "ph-duotone ph-chart-line-up",
    collapseId: "trading",
    children: [
      { name: "Record Trade", path: "/financial/trades" },
      { name: "Holdings", path: "/financial/holdings" },
      { name: "Investment Products", path: "/financial/investments" }
    ]
  },
  {
    type: "single",
    name: "Portfolio",
    path: "/financial/portfolio",
    iconClass: "ph-duotone ph-briefcase"
  },
  {
    type: "single",
    name: "Transactions",
    path: "/financial/transactions",
    iconClass: "ph-duotone ph-arrows-left-right"
  },
  {
    type: "single",
    name: "Referrals",
    path: "/financial/referrals",
    iconClass: "ph-duotone ph-users-three"
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
