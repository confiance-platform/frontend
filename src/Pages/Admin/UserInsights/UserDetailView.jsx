// Admin User Detail View - Complete view of a specific user's financial data
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaLightbulb,
  FaUserFriends,
  FaSpinner,
  FaArrowUp,
  FaArrowDown,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaEdit,
} from "react-icons/fa";
import { userService, adminUserService } from "@/Services";
import { toast } from "react-toastify";
import {
  TRANSACTION_TYPES,
  TRADE_STATUS,
  MARKET_LABELS,
  RECOMMENDATION_STATUS,
} from "@/config/constants";

// Tab Components
const PortfolioTab = ({ userId, data, loading }) => {
  const formatCurrency = (amount) => {
    if (!amount && amount !== 0) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <FaSpinner className="fa-spin fs-3 text-primary" />
      </div>
    );
  }

  const portfolio = data?.portfolio;
  const holdingsSummary = data?.holdingsSummary;

  if (!portfolio) {
    return (
      <div className="text-center py-5 text-muted">
        <FaWallet className="fs-1 mb-3 opacity-50" />
        <p>No portfolio data available</p>
      </div>
    );
  }

  const returns = portfolio.totalReturns || 0;
  const returnsPercent = portfolio.totalInvested
    ? ((returns / portfolio.totalInvested) * 100).toFixed(2)
    : 0;

  return (
    <div>
      {/* Portfolio Summary */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <p className="mb-1 opacity-75 small">Total Invested</p>
              <h4 className="mb-0">{formatCurrency(portfolio.totalInvested)}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white h-100">
            <div className="card-body">
              <p className="mb-1 opacity-75 small">Current Value</p>
              <h4 className="mb-0">{formatCurrency(portfolio.currentValue)}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`card h-100 ${returns >= 0 ? "bg-success" : "bg-danger"} text-white`}>
            <div className="card-body">
              <p className="mb-1 opacity-75 small">Total Returns</p>
              <h4 className="mb-0 d-flex align-items-center">
                {returns >= 0 ? <FaArrowUp className="me-2" /> : <FaArrowDown className="me-2" />}
                {formatCurrency(Math.abs(returns))}
              </h4>
              <small className="opacity-75">({returnsPercent}%)</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-dark h-100">
            <div className="card-body">
              <p className="mb-1 opacity-75 small">Balance</p>
              <h4 className="mb-0">{formatCurrency(portfolio.balance)}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings by Market */}
      {holdingsSummary && (
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white">
            <h6 className="mb-0">Holdings by Market</h6>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {Object.entries(holdingsSummary.byMarket || {}).map(([market, holdings]) => (
                <div key={market} className="col-md-4">
                  <div className="border rounded p-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-semibold">{MARKET_LABELS[market] || market}</span>
                      <span className="badge bg-primary-subtle text-primary">
                        {holdings.count} stocks
                      </span>
                    </div>
                    <div className="text-muted small">
                      Value: {formatCurrency(holdings.totalValue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TransactionsTab = ({ userId, loading: parentLoading }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ type: "", status: "" });
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, [userId, page, filter]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await adminUserService.getUserTransactions(userId, {
        page,
        size: 10,
        type: filter.type || undefined,
        status: filter.status || undefined,
      });
      if (response.success) {
        setTransactions(response.data?.content || response.data || []);
        setTotalPages(response.data?.totalPages || 1);
      }
    } catch (error) {
      console.debug("No transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const getTypeColor = (type) => {
    const colors = {
      DEPOSIT: "success",
      WITHDRAWAL: "danger",
      INVESTMENT: "primary",
      RETURN: "info",
      DIVIDEND: "warning",
      FEE: "secondary",
    };
    return colors[type] || "secondary";
  };

  if (loading && transactions.length === 0) {
    return (
      <div className="text-center py-5">
        <FaSpinner className="fa-spin fs-3 text-primary" />
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <select
            className="form-select form-select-sm"
            value={filter.type}
            onChange={(e) => setFilter((f) => ({ ...f, type: e.target.value }))}
          >
            <option value="">All Types</option>
            {Object.keys(TRANSACTION_TYPES).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select form-select-sm"
            value={filter.status}
            onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
          >
            <option value="">All Status</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th className="text-end">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td className="small">{new Date(t.createdAt).toLocaleDateString()}</td>
                <td>
                  <span className={`badge bg-${getTypeColor(t.type)}-subtle text-${getTypeColor(t.type)}`}>
                    {t.type}
                  </span>
                </td>
                <td className="small">{t.description || "-"}</td>
                <td className="text-end fw-semibold">{formatCurrency(t.amount)}</td>
                <td>
                  <span className={`badge bg-${t.status === "COMPLETED" ? "success" : t.status === "PENDING" ? "warning" : "danger"}-subtle text-${t.status === "COMPLETED" ? "success" : t.status === "PENDING" ? "warning" : "danger"}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-muted">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center">
          <ul className="pagination pagination-sm">
            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage((p) => p - 1)}>
                Previous
              </button>
            </li>
            <li className="page-item active">
              <span className="page-link">{page + 1} / {totalPages}</span>
            </li>
            <li className={`page-item ${page >= totalPages - 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage((p) => p + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

const TradesTab = ({ userId }) => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: "", market: "" });
  const [summary, setSummary] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchTrades();
    fetchSummary();
  }, [userId, page, filter]);

  const fetchTrades = async () => {
    try {
      setLoading(true);
      const response = await adminUserService.getUserTrades(userId, {
        page,
        size: 10,
        status: filter.status || undefined,
        market: filter.market || undefined,
      });
      if (response.success) {
        setTrades(response.data?.content || response.data || []);
        setTotalPages(response.data?.totalPages || 1);
      }
    } catch (error) {
      console.debug("No trades:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await adminUserService.getUserTradeSummary(userId);
      if (response.success) {
        setSummary(response.data);
      }
    } catch (error) {
      console.debug("No trade summary:", error);
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (loading && trades.length === 0) {
    return (
      <div className="text-center py-5">
        <FaSpinner className="fa-spin fs-3 text-primary" />
      </div>
    );
  }

  return (
    <div>
      {/* Trade Summary */}
      {summary && (
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Total Trades</div>
              <div className="fs-4 fw-bold">{summary.totalTrades || 0}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Open Trades</div>
              <div className="fs-4 fw-bold text-primary">{summary.openTrades || 0}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Total Invested</div>
              <div className="fs-5 fw-bold">{formatCurrency(summary.totalInvested)}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`border rounded p-3 text-center ${(summary.totalPL || 0) >= 0 ? "border-success" : "border-danger"}`}>
              <div className="text-muted small">Total P&L</div>
              <div className={`fs-5 fw-bold ${(summary.totalPL || 0) >= 0 ? "text-success" : "text-danger"}`}>
                {formatCurrency(summary.totalPL)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <select
            className="form-select form-select-sm"
            value={filter.status}
            onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
          >
            <option value="">All Status</option>
            {Object.keys(TRADE_STATUS).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select form-select-sm"
            value={filter.market}
            onChange={(e) => setFilter((f) => ({ ...f, market: e.target.value }))}
          >
            <option value="">All Markets</option>
            {Object.entries(MARKET_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Trades Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Symbol</th>
              <th>Market</th>
              <th className="text-end">Qty</th>
              <th className="text-end">Buy Price</th>
              <th className="text-end">Current/Sell</th>
              <th className="text-end">P&L</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t) => {
              const pl = t.profitLoss || ((t.sellPrice || t.currentPrice || 0) - t.buyPrice) * t.quantity;
              return (
                <tr key={t.id}>
                  <td className="small">{new Date(t.createdAt).toLocaleDateString()}</td>
                  <td className="fw-semibold">{t.symbol || t.stockSymbol}</td>
                  <td>
                    <span className="badge bg-secondary-subtle text-secondary">{t.market}</span>
                  </td>
                  <td className="text-end">{t.quantity}</td>
                  <td className="text-end">{formatCurrency(t.buyPrice)}</td>
                  <td className="text-end">{formatCurrency(t.sellPrice || t.currentPrice)}</td>
                  <td className={`text-end fw-semibold ${pl >= 0 ? "text-success" : "text-danger"}`}>
                    {formatCurrency(pl)}
                  </td>
                  <td>
                    <span className={`badge bg-${t.status === "OPEN" ? "primary" : t.status === "CLOSED" ? "success" : "warning"}-subtle text-${t.status === "OPEN" ? "primary" : t.status === "CLOSED" ? "success" : "warning"}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              );
            })}
            {trades.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-muted">
                  No trades found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center">
          <ul className="pagination pagination-sm">
            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage((p) => p - 1)}>
                Previous
              </button>
            </li>
            <li className="page-item active">
              <span className="page-link">{page + 1} / {totalPages}</span>
            </li>
            <li className={`page-item ${page >= totalPages - 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage((p) => p + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

const RecommendationsTab = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: Recommendations are typically system-wide, not user-specific
    // This would need a user-specific recommendations endpoint
    setLoading(false);
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <FaSpinner className="fa-spin fs-3 text-primary" />
      </div>
    );
  }

  return (
    <div className="text-center py-5 text-muted">
      <FaLightbulb className="fs-1 mb-3 opacity-50" />
      <p>User-specific recommendations coming soon</p>
      <p className="small">This feature requires API: <code>GET /recommendations/user/{"{userId}"}</code></p>
    </div>
  );
};

const ReferralsTab = ({ userId }) => {
  const [referrals, setReferrals] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReferrals();
    fetchSummary();
  }, [userId]);

  const fetchReferrals = async () => {
    try {
      setLoading(true);
      const response = await adminUserService.getUserReferrals(userId);
      if (response.success) {
        setReferrals(response.data?.content || response.data || []);
      }
    } catch (error) {
      console.debug("No referrals:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await adminUserService.getUserReferralSummary(userId);
      if (response.success) {
        setSummary(response.data);
      }
    } catch (error) {
      console.debug("No referral summary:", error);
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <FaSpinner className="fa-spin fs-3 text-primary" />
      </div>
    );
  }

  return (
    <div>
      {/* Referral Summary */}
      {summary && (
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Total Referrals</div>
              <div className="fs-4 fw-bold">{summary.totalReferrals || 0}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Active Referrals</div>
              <div className="fs-4 fw-bold text-success">{summary.activeReferrals || 0}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <div className="text-muted small">Total Commission</div>
              <div className="fs-5 fw-bold text-primary">{formatCurrency(summary.totalCommission)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Referrals List */}
      {referrals.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Referred User</th>
                <th>Join Date</th>
                <th className="text-end">Commission</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((r) => (
                <tr key={r.id}>
                  <td>{r.referredUserName || r.referredUserEmail}</td>
                  <td className="small">{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className="text-end fw-semibold">{formatCurrency(r.commission)}</td>
                  <td>
                    <span className={`badge bg-${r.status === "ACTIVE" ? "success" : r.status === "PAID" ? "info" : "secondary"}-subtle text-${r.status === "ACTIVE" ? "success" : r.status === "PAID" ? "info" : "secondary"}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4 text-muted">
          <FaUserFriends className="fs-1 mb-3 opacity-50" />
          <p>No referrals found</p>
        </div>
      )}
    </div>
  );
};

// Main Component
const UserDetailView = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("portfolio");

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Fetch user details and financial overview in parallel
      const [userResponse, financialResponse] = await Promise.all([
        userService.getUserById(userId),
        adminUserService.getUserFinancialOverview(userId),
      ]);

      if (userResponse.success) {
        setUser(userResponse.data);
      }

      if (financialResponse.success) {
        setFinancialData(financialResponse.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to load user data");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "portfolio", label: "Portfolio", icon: FaWallet },
    { id: "transactions", label: "Transactions", icon: FaExchangeAlt },
    { id: "trades", label: "Trading", icon: FaChartLine },
    { id: "recommendations", label: "Recommendations", icon: FaLightbulb },
    { id: "referrals", label: "Referrals", icon: FaUserFriends },
  ];

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading user details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container-fluid">
        <div className="text-center py-5">
          <FaUser className="fs-1 text-muted mb-3" />
          <h5>User not found</h5>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/admin/user-insights")}>
            Back to User Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-secondary me-3"
              onClick={() => navigate("/admin/user-insights")}
            >
              <FaArrowLeft className="me-2" />
              Back
            </button>
            <h4 className="mb-0">User Details</h4>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-auto">
              <div
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                style={{ width: 80, height: 80 }}
              >
                <span className="text-white fs-2 fw-bold">
                  {user.firstName?.[0] || user.email?.[0]?.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="col">
              <h4 className="mb-1">
                {user.firstName} {user.lastName}
              </h4>
              <div className="d-flex flex-wrap gap-3 text-muted">
                <span>
                  <FaEnvelope className="me-1" /> {user.email}
                </span>
                {user.phone && (
                  <span>
                    <FaPhone className="me-1" /> {user.phone}
                  </span>
                )}
                <span>
                  <FaCalendar className="me-1" /> Joined{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="mt-2">
                <span
                  className={`badge me-2 bg-${
                    user.status === "ACTIVE" || !user.status
                      ? "success"
                      : user.status === "SUSPENDED"
                      ? "danger"
                      : "secondary"
                  }-subtle text-${
                    user.status === "ACTIVE" || !user.status
                      ? "success"
                      : user.status === "SUSPENDED"
                      ? "danger"
                      : "secondary"
                  }`}
                >
                  {user.status || "ACTIVE"}
                </span>
                {user.roles?.map((role) => (
                  <span key={role} className="badge bg-primary-subtle text-primary me-2">
                    {role.replace("ROLE_", "")}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-auto">
              <Link to={`/admin/users/${userId}`} className="btn btn-outline-primary">
                <FaEdit className="me-2" />
                Edit User
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white p-0">
          <ul className="nav nav-tabs nav-tabs-flush border-0">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`nav-link px-4 py-3 ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="me-2" />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          {activeTab === "portfolio" && (
            <PortfolioTab userId={userId} data={financialData} loading={loading} />
          )}
          {activeTab === "transactions" && (
            <TransactionsTab userId={userId} loading={loading} />
          )}
          {activeTab === "trades" && <TradesTab userId={userId} />}
          {activeTab === "recommendations" && <RecommendationsTab userId={userId} />}
          {activeTab === "referrals" && <ReferralsTab userId={userId} />}
        </div>
      </div>
    </div>
  );
};

export default UserDetailView;
