import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import {
  DashboardRoutes,
  AppsRoutes,
  AuthRoutes,
  ErrorRoutes,
  OtherRoutes,
} from "@/Route/AuthRoutes";
import Layout from "@/Layout";
import { ProtectedRoute, PublicRoute } from "@/Components/ProtectedRoute";

// Landing Page
const LandingPage = React.lazy(() => import("@/Pages/LandingPage"));

// Role-Based Dashboard Pages
const UserDashboard = React.lazy(() => import("@/Pages/Dashboard/UserDashboard"));
const AdminDashboard = React.lazy(() => import("@/Pages/Dashboard/AdminDashboard"));
const SuperAdminDashboard = React.lazy(() => import("@/Pages/Dashboard/SuperAdminDashboard"));

// Admin Pages - User Management
const AllUsers = React.lazy(() => import("@/Pages/Admin/UserManagement/AllUsers"));
const CreateUser = React.lazy(() => import("@/Pages/Admin/UserManagement/CreateUser"));

// Admin Pages - Admin Management
const AllAdmins = React.lazy(() => import("@/Pages/Admin/AdminManagement/AllAdmins"));
const CreateAdmin = React.lazy(() => import("@/Pages/Admin/AdminManagement/CreateAdmin"));
const PermissionsManagement = React.lazy(() => import("@/Pages/Admin/AdminManagement/Permissions"));

// Financial Pages
const Portfolio = React.lazy(() => import("@/Pages/Financial/Portfolio"));
const Transactions = React.lazy(() => import("@/Pages/Financial/Transactions"));
const Investments = React.lazy(() => import("@/Pages/Financial/Investments"));

// Existing Dashboard Pages (will be used for portfolio, investments, crypto)
const Ecommerce = React.lazy(() => import("@/Pages/Dashboard/Ecommerce"));
const ProjectPage = React.lazy(() => import("@/Pages/Dashboard/ProjectsPage"));
const Crypto = React.lazy(() => import("@/Pages/Dashboard/Crypto"));

// App Pages - Only Financial Platform Related
const Profile = React.lazy(() => import("@/Pages/Apps/ProfilePage/Profile"));
const Settings = React.lazy(() => import("@/Pages/Apps/ProfilePage/Settings"));
const Invoice = React.lazy(() => import("@/Pages/Apps/Invoice"));


// Authentication Pages
const SignIn = React.lazy(() => import("@/Pages/AuthPages/SignIn"));
const SignUp = React.lazy(() => import("@/Pages/AuthPages/SignUp"));

// Error Pages
const NotFound = React.lazy(() => import("@/Pages/ErrorPages/NotFound"));
const InternalServer = React.lazy(
  () => import("@/Pages/ErrorPages/InternalServer"),
);

// Other Pages
const PrivacyPolicy = React.lazy(
  () => import("@/Pages/OtherPage/PrivacyPolicy"),
);
const TermsCondition = React.lazy(
  () => import("@/Pages/OtherPage/TermsCondition"),
);

const Routes = () => {
  let element = [
    // LANDING PAGE (Public - No Layout)
    {
      path: "/",
      element: <LandingPage />,
    },

    // AUTHENTICATION ROUTES (Public - Redirects to dashboard if logged in)
    {
      path: AuthRoutes.AUTH_SIGN_IN,
      element: (
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      ),
    },
    {
      path: AuthRoutes.AUTH_SIGN_UP,
      element: (
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      ),
    },

    // ERROR PAGES
    { path: ErrorRoutes.ERROR_404, element: <NotFound /> },
    { path: ErrorRoutes.ERROR_500, element: <InternalServer /> },

    // LEGAL PAGES
    { path: OtherRoutes.PRIVACY_POLICY, element: <PrivacyPolicy /> },
    { path: OtherRoutes.TERMS_CONDITION, element: <TermsCondition /> },

    // PROTECTED ROUTES - Dashboard and Financial App Routes
    {
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        // Role-Based Dashboards
        { path: "dashboard/user", element: <UserDashboard /> },
        { path: "dashboard/admin", element: <AdminDashboard /> },
        { path: "dashboard/super-admin", element: <SuperAdminDashboard /> },

        // Dashboard Routes - Redirects
        {
          path: "dashboard",
          element: <Navigate to="/dashboard/user" replace />,
        },
        {
          path: "dashboard/default",
          element: <Navigate to="/dashboard/user" replace />,
        },

        // Portfolio/Investment Pages (Renamed for Financial Context)
        { path: "dashboard/portfolio", element: <Ecommerce /> }, // Portfolio Dashboard
        { path: DashboardRoutes.ECOMMERCE_PAGE, element: <Ecommerce /> }, // Alias
        { path: DashboardRoutes.PROJECT_PAGE, element: <ProjectPage /> }, // Investments
        { path: DashboardRoutes.CRYPTO_PAGE, element: <Crypto /> }, // Crypto Portfolio

        // User Pages
        { path: AppsRoutes.PROFILE_PAGE, element: <Profile /> },
        { path: AppsRoutes.SETTING_PAGE, element: <Settings /> },
        { path: AppsRoutes.INVOICE_PAGE, element: <Invoice /> },

        // Admin - User Management Routes
        { path: "admin/users", element: <AllUsers /> },
        { path: "admin/users/create", element: <CreateUser /> },

        // Admin - Admin Management Routes (Super Admin Only)
        { path: "admin/admins", element: <AllAdmins /> },
        { path: "admin/admins/create", element: <CreateAdmin /> },
        { path: "admin/permissions", element: <PermissionsManagement /> },

        // Financial Pages
        { path: "financial/portfolio", element: <Portfolio /> },
        { path: "financial/transactions", element: <Transactions /> },
        { path: "financial/investments", element: <Investments /> },
      ],
    },

    // 404 CATCH ALL
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return useRoutes(element);
};

export default Routes;
