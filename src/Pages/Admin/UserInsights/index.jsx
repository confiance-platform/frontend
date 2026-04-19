// Admin User Insights Dashboard - Overview of all users with investment data
import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  FaUsers,
  FaChartLine,
  FaWallet,
  FaUserCheck,
  FaSpinner,
  FaSearch,
  FaFilter,
  FaEye,
  FaSyncAlt,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { userService, adminUserService } from "@/Services";
import { toast } from "react-toastify";
import { USER_STATUS } from "@/config/constants";

const UserInsightsDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userFinancials, setUserFinancials] = useState({});
  const [loadingFinancials, setLoadingFinancials] = useState({});

  // Filters
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "");
  const [investmentFilter, setInvestmentFilter] = useState(searchParams.get("invested") || "");

  // Pagination
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page")) || 0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const pageSize = 15;

  // Stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    investedUsers: 0,
    totalInvested: 0,
  });

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers({
        page: currentPage,
        size: pageSize,
        sortBy: "createdAt",
        sortDirection: "desc",
      });

      if (response.success && response.data) {
        const usersData = response.data.content || response.data;
        setUsers(Array.isArray(usersData) ? usersData : []);
        setTotalPages(response.data.totalPages || 1);
        setTotalUsers(response.data.totalElements || usersData.length);

        // Calculate basic stats
        calculateStats(usersData);

        // Fetch financial data for each user
        fetchUserFinancials(usersData);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (usersData) => {
    const activeCount = usersData.filter(
      (u) => u.status === "ACTIVE" || !u.status
    ).length;
    setStats((prev) => ({
      ...prev,
      totalUsers: usersData.length,
      activeUsers: activeCount,
    }));
  };

  const fetchUserFinancials = async (usersData) => {
    // Filter only regular users (not admins)
    const regularUsers = usersData.filter(
      (u) => !u.roles?.includes("ROLE_ADMIN") && !u.roles?.includes("ROLE_SUPER_ADMIN")
    );

    let investedCount = 0;
    let totalInvestedAmount = 0;

    for (const u of regularUsers) {
      setLoadingFinancials((prev) => ({ ...prev, [u.id]: true }));
      try {
        const overview = await adminUserService.getUserFinancialOverview(u.id);
        if (overview.success && overview.data) {
          const portfolio = overview.data.portfolio;
          setUserFinancials((prev) => ({
            ...prev,
            [u.id]: overview.data,
          }));

          if (portfolio?.totalInvested > 0) {
            investedCount++;
            totalInvestedAmount += portfolio.totalInvested || 0;
          }
        }
      } catch (error) {
        // Silently handle - user may not have data
        console.debug(`No financial data for user ${u.id}`);
      } finally {
        setLoadingFinancials((prev) => ({ ...prev, [u.id]: false }));
      }
    }

    setStats((prev) => ({
      ...prev,
      investedUsers: investedCount,
      totalInvested: totalInvestedAmount,
    }));
  };

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (statusFilter) params.set("status", statusFilter);
    if (investmentFilter) params.set("invested", investmentFilter);
    params.set("page", "0");
    setSearchParams(params);
    setCurrentPage(0);
    fetchUsers();
  }, [searchTerm, statusFilter, investmentFilter]);

  const handleViewUser = (userId) => {
    navigate(`/admin/user-insights/${userId}`);
  };

  const filteredUsers = users.filter((u) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.phone?.includes(searchTerm);

    // Status filter
    const matchesStatus =
      !statusFilter ||
      (statusFilter === "ACTIVE" && (u.status === "ACTIVE" || !u.status)) ||
      u.status === statusFilter;

    // Investment filter
    const userPortfolio = userFinancials[u.id]?.portfolio;
    const hasInvestment = userPortfolio?.totalInvested > 0;
    const matchesInvestment =
      !investmentFilter ||
      (investmentFilter === "invested" && hasInvestment) ||
      (investmentFilter === "not_invested" && !hasInvestment);

    return matchesSearch && matchesStatus && matchesInvestment;
  });

  const formatCurrency = (amount) => {
    if (!amount && amount !== 0) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getReturnColor = (returns) => {
    if (!returns) return "text-muted";
    return returns >= 0 ? "text-success" : "text-danger";
  };

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading user insights...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">User Insights</h4>
              <p className="text-muted mb-0">
                View and analyze user portfolios, investments, and activity
              </p>
            </div>
            <button className="btn btn-outline-primary" onClick={fetchUsers}>
              <FaSyncAlt className="me-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-primary-subtle p-3">
                    <FaUsers className="text-primary fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Users</p>
                  <h4 className="mb-0 fw-bold">{totalUsers.toLocaleString()}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-success-subtle p-3">
                    <FaUserCheck className="text-success fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Active Users</p>
                  <h4 className="mb-0 fw-bold">{stats.activeUsers.toLocaleString()}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-info-subtle p-3">
                    <FaChartLine className="text-info fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Invested Users</p>
                  <h4 className="mb-0 fw-bold">{stats.investedUsers}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-warning-subtle p-3">
                    <FaWallet className="text-warning fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total AUM</p>
                  <h4 className="mb-0 fw-bold">{formatCurrency(stats.totalInvested)}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label small text-muted">
                <FaSearch className="me-1" /> Search
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Search by name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <div className="col-md-2">
              <label className="form-label small text-muted">
                <FaFilter className="me-1" /> Status
              </label>
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="SUSPENDED">Suspended</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label small text-muted">Investment</label>
              <select
                className="form-select"
                value={investmentFilter}
                onChange={(e) => setInvestmentFilter(e.target.value)}
              >
                <option value="">All Users</option>
                <option value="invested">Has Investments</option>
                <option value="not_invested">No Investments</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleSearch}>
                Apply Filters
              </button>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("");
                  setInvestmentFilter("");
                  setSearchParams({});
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Users ({filteredUsers.length})</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th className="text-end">Total Invested</th>
                  <th className="text-end">Current Value</th>
                  <th className="text-end">Returns</th>
                  <th className="text-center">Trades</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => {
                  const financials = userFinancials[u.id];
                  const portfolio = financials?.portfolio;
                  const tradeSummary = financials?.tradeSummary;
                  const isLoadingFinancial = loadingFinancials[u.id];
                  const returns = portfolio?.totalReturns || 0;
                  const returnsPercent = portfolio?.totalInvested
                    ? ((returns / portfolio.totalInvested) * 100).toFixed(2)
                    : 0;

                  return (
                    <tr key={u.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center me-2"
                            style={{ width: 40, height: 40 }}
                          >
                            <span className="text-primary fw-bold">
                              {u.firstName?.[0] || u.email?.[0]?.toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="fw-semibold">
                              {u.firstName} {u.lastName}
                            </div>
                            <small className="text-muted">ID: {u.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="small">{u.email}</div>
                        <div className="text-muted small">{u.phone || "-"}</div>
                      </td>
                      <td>
                        <span
                          className={`badge bg-${
                            u.status === "ACTIVE" || !u.status
                              ? "success"
                              : u.status === "SUSPENDED"
                              ? "danger"
                              : "secondary"
                          }-subtle text-${
                            u.status === "ACTIVE" || !u.status
                              ? "success"
                              : u.status === "SUSPENDED"
                              ? "danger"
                              : "secondary"
                          }`}
                        >
                          {u.status || "ACTIVE"}
                        </span>
                      </td>
                      <td className="text-end">
                        {isLoadingFinancial ? (
                          <FaSpinner className="fa-spin text-muted" />
                        ) : (
                          <span className="fw-semibold">
                            {formatCurrency(portfolio?.totalInvested)}
                          </span>
                        )}
                      </td>
                      <td className="text-end">
                        {isLoadingFinancial ? (
                          <FaSpinner className="fa-spin text-muted" />
                        ) : (
                          formatCurrency(portfolio?.currentValue)
                        )}
                      </td>
                      <td className="text-end">
                        {isLoadingFinancial ? (
                          <FaSpinner className="fa-spin text-muted" />
                        ) : portfolio?.totalInvested ? (
                          <div className={getReturnColor(returns)}>
                            <span className="d-flex align-items-center justify-content-end">
                              {returns >= 0 ? (
                                <FaArrowUp className="me-1" />
                              ) : (
                                <FaArrowDown className="me-1" />
                              )}
                              {formatCurrency(Math.abs(returns))}
                            </span>
                            <small>({returnsPercent}%)</small>
                          </div>
                        ) : (
                          <span className="text-muted">-</span>
                        )}
                      </td>
                      <td className="text-center">
                        {isLoadingFinancial ? (
                          <FaSpinner className="fa-spin text-muted" />
                        ) : (
                          <span className="badge bg-secondary-subtle text-secondary">
                            {tradeSummary?.totalTrades || 0}
                          </span>
                        )}
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleViewUser(u.id)}
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center py-5 text-muted">
                      <FaUsers className="fs-1 mb-3 opacity-50" />
                      <p className="mb-0">No users found matching your criteria</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="card-footer bg-white d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Showing {currentPage * pageSize + 1} to{" "}
              {Math.min((currentPage + 1) * pageSize, totalUsers)} of {totalUsers} users
            </small>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  const pageNum = currentPage < 3 ? i : currentPage - 2 + i;
                  if (pageNum >= totalPages) return null;
                  return (
                    <li
                      key={pageNum}
                      className={`page-item ${pageNum === currentPage ? "active" : ""}`}
                    >
                      <button className="page-link" onClick={() => setCurrentPage(pageNum)}>
                        {pageNum + 1}
                      </button>
                    </li>
                  );
                })}
                <li className={`page-item ${currentPage >= totalPages - 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInsightsDashboard;
