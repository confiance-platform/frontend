// User Dashboard - Portfolio Overview
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaChartLine, FaWallet, FaExchangeAlt, FaArrowUp } from "react-icons/fa";

const UserDashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with actual API calls
  const portfolioStats = {
    totalBalance: 125450.00,
    monthlyGain: 12.5,
    totalInvested: 100000.00,
    totalGainLoss: 25450.00
  };

  const recentTransactions = [
    { id: 1, type: "BUY", symbol: "AAPL", quantity: 10, price: 150.50, date: "2024-12-20" },
    { id: 2, type: "SELL", symbol: "MSFT", quantity: 5, price: 380.20, date: "2024-12-18" }
  ];

  return (
    <div className="container-fluid">
      {/* Welcome Section */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 mb-4">
            <div className="card-body">
              <h4 className="mb-1">Welcome back, {user?.name}!</h4>
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
                  <h4 className="mb-0 fw-bold">${portfolioStats.totalBalance.toLocaleString()}</h4>
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
                  <div className="rounded-circle bg-success-subtle p-3">
                    <FaArrowUp className="text-success fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Monthly Gain</p>
                  <h4 className="mb-0 fw-bold text-success">+{portfolioStats.monthlyGain}%</h4>
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
                  <h4 className="mb-0 fw-bold">${portfolioStats.totalInvested.toLocaleString()}</h4>
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
                  <div className="rounded-circle bg-warning-subtle p-3">
                    <FaExchangeAlt className="text-warning fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Gain/Loss</p>
                  <h4 className="mb-0 fw-bold text-success">+${portfolioStats.totalGainLoss.toLocaleString()}</h4>
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
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Symbol</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((txn) => (
                      <tr key={txn.id}>
                        <td>
                          <span className={`badge bg-${txn.type === 'BUY' ? 'success' : 'danger'}-subtle text-${txn.type === 'BUY' ? 'success' : 'danger'}`}>
                            {txn.type}
                          </span>
                        </td>
                        <td className="fw-bold">{txn.symbol}</td>
                        <td>{txn.quantity}</td>
                        <td>${txn.price}</td>
                        <td>{txn.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link to="/portfolio" className="btn btn-primary">
                  <FaWallet className="me-2" />
                  View Portfolio
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
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
