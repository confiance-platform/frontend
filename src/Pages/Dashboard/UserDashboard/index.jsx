// User Dashboard - Portfolio Overview
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaChartLine, FaWallet, FaExchangeAlt, FaArrowUp, FaSpinner } from "react-icons/fa";
import { portfolioService, transactionService, investmentService } from "@/Services";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch user portfolio
      const portfolioResponse = await portfolioService.getUserPortfolio(user.id);
      if (portfolioResponse.success && portfolioResponse.data) {
        setPortfolio(portfolioResponse.data);
      }

      // Fetch recent transactions (last 5)
      const transactionsResponse = await transactionService.getUserTransactions(user.id, {
        page: 0,
        size: 5
      });
      if (transactionsResponse.success && transactionsResponse.data?.content) {
        setRecentTransactions(transactionsResponse.data.content);
      }

      // Fetch available investments
      const investmentsResponse = await investmentService.getAllInvestments({
        page: 0,
        size: 10
      });
      if (investmentsResponse.success && investmentsResponse.data?.content) {
        setInvestments(investmentsResponse.data.content);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error(error.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate portfolio stats from portfolio data
  const calculateStats = () => {
    if (!portfolio) {
      return {
        totalBalance: 0,
        totalInvested: 0,
        totalReturns: 0,
        returnsPercentage: 0
      };
    }

    const totalInvested = portfolio.totalInvested || 0;
    const currentValue = portfolio.currentValue || totalInvested;
    const totalReturns = currentValue - totalInvested;
    const returnsPercentage = totalInvested > 0 ? (totalReturns / totalInvested) * 100 : 0;

    return {
      totalBalance: currentValue,
      totalInvested,
      totalReturns,
      returnsPercentage
    };
  };

  const stats = calculateStats();

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Welcome Section */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 mb-4">
            <div className="card-body">
              <h4 className="mb-1">Welcome back, {user?.firstName || user?.email}!</h4>
              <p className="text-muted">Here's your portfolio overview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-primary-subtle p-3">
                    <FaWallet className="text-primary fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Balance</p>
                  <h4 className="mb-0 fw-bold">${stats.totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-circle bg-${stats.returnsPercentage >= 0 ? 'success' : 'danger'}-subtle p-3`}>
                    <FaArrowUp className={`text-${stats.returnsPercentage >= 0 ? 'success' : 'danger'} fs-4`} />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Returns</p>
                  <h4 className={`mb-0 fw-bold text-${stats.returnsPercentage >= 0 ? 'success' : 'danger'}`}>
                    {stats.returnsPercentage >= 0 ? '+' : ''}{stats.returnsPercentage.toFixed(2)}%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-info-subtle p-3">
                    <FaChartLine className="text-info fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Invested</p>
                  <h4 className="mb-0 fw-bold">${stats.totalInvested.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-circle bg-${stats.totalReturns >= 0 ? 'success' : 'danger'}-subtle p-3`}>
                    <FaExchangeAlt className={`text-${stats.totalReturns >= 0 ? 'success' : 'danger'} fs-4`} />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Returns</p>
                  <h4 className={`mb-0 fw-bold text-${stats.totalReturns >= 0 ? 'success' : 'danger'}`}>
                    {stats.totalReturns >= 0 ? '+' : ''}${stats.totalReturns.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Recent Transactions */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Transactions</h5>
              <Link to="/transactions" className="btn btn-sm btn-primary">View All</Link>
            </div>
            <div className="card-body">
              {recentTransactions.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((txn) => (
                        <tr key={txn.id}>
                          <td>
                            <span className={`badge bg-${
                              txn.type === 'DEPOSIT' || txn.type === 'INVESTMENT' || txn.type === 'RETURN'
                                ? 'success'
                                : 'danger'
                            }-subtle text-${
                              txn.type === 'DEPOSIT' || txn.type === 'INVESTMENT' || txn.type === 'RETURN'
                                ? 'success'
                                : 'danger'
                            }`}>
                              {txn.type || 'N/A'}
                            </span>
                          </td>
                          <td>{txn.description || '-'}</td>
                          <td className="fw-bold">${(txn.amount || 0).toFixed(2)}</td>
                          <td>
                            <span className={`badge bg-${
                              txn.status === 'COMPLETED' ? 'success' :
                              txn.status === 'PENDING' ? 'warning' :
                              txn.status === 'FAILED' ? 'danger' : 'secondary'
                            }-subtle text-${
                              txn.status === 'COMPLETED' ? 'success' :
                              txn.status === 'PENDING' ? 'warning' :
                              txn.status === 'FAILED' ? 'danger' : 'secondary'
                            }`}>
                              {txn.status || 'PENDING'}
                            </span>
                          </td>
                          <td className="text-muted small">
                            {new Date(txn.transactionDate || txn.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-5 text-muted">
                  <FaExchangeAlt className="fs-1 mb-3 opacity-50" />
                  <p>No transactions yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions & Available Investments */}
        <div className="col-lg-4">
          {/* Quick Actions */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link to="/portfolio" className="btn btn-primary">
                  <FaWallet className="me-2" />
                  View Full Portfolio
                </Link>
                <Link to="/investments" className="btn btn-outline-primary">
                  <FaChartLine className="me-2" />
                  Browse Investments
                </Link>
                <Link to="/transactions" className="btn btn-outline-secondary">
                  <FaExchangeAlt className="me-2" />
                  Transaction History
                </Link>
              </div>
            </div>
          </div>

          {/* Available Investments Preview */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Top Investments</h5>
              <Link to="/investments" className="btn btn-sm btn-outline-primary">View All</Link>
            </div>
            <div className="card-body">
              {investments.length > 0 ? (
                <div className="list-group list-group-flush">
                  {investments.slice(0, 3).map((inv) => (
                    <div key={inv.id} className="list-group-item border-0 px-0 py-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="mb-0 fw-bold small">{inv.name}</p>
                          <small className="text-muted">{inv.type}</small>
                        </div>
                        <div className="text-end">
                          <p className="mb-0 text-success small fw-bold">{inv.expectedReturn}%</p>
                          <small className="text-muted">Returns</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted text-center mb-0">No investments available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
