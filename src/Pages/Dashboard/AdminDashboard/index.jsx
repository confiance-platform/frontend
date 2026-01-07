// Admin Dashboard - User Management Overview
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaUsers, FaUserPlus, FaCheckCircle, FaBan } from "react-icons/fa";

const AdminDashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with actual API calls
  const userStats = {
    totalUsers: 1248,
    activeUsers: 1156,
    newUsersThisMonth: 89,
    suspendedUsers: 12
  };

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "USER", status: "Active", joinDate: "2024-12-20" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "USER", status: "Active", joinDate: "2024-12-19" }
  ];

  return (
    <div className="container-fluid">
      {/* Welcome Section */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 mb-4 bg-primary text-white">
            <div className="card-body">
              <h4 className="mb-1">Admin Dashboard</h4>
              <p className="mb-0 opacity-75">Welcome back, {user?.name}! Manage users and monitor system activity.</p>
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
                    <FaUsers className="text-primary fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Users</p>
                  <h4 className="mb-0 fw-bold">{userStats.totalUsers.toLocaleString()}</h4>
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
                    <FaCheckCircle className="text-success fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Active Users</p>
                  <h4 className="mb-0 fw-bold">{userStats.activeUsers.toLocaleString()}</h4>
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
                    <FaUserPlus className="text-info fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">New This Month</p>
                  <h4 className="mb-0 fw-bold">+{userStats.newUsersThisMonth}</h4>
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
                  <div className="rounded-circle bg-danger-subtle p-3">
                    <FaBan className="text-danger fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Suspended</p>
                  <h4 className="mb-0 fw-bold">{userStats.suspendedUsers}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Recent Users */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Users</h5>
              <Link to="/admin/users" className="btn btn-sm btn-primary">Manage All Users</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Join Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((u) => (
                      <tr key={u.id}>
                        <td className="fw-bold">{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                          <span className="badge bg-secondary-subtle text-secondary">{u.role}</span>
                        </td>
                        <td>
                          <span className={`badge bg-${u.status === 'Active' ? 'success' : 'danger'}-subtle text-${u.status === 'Active' ? 'success' : 'danger'}`}>
                            {u.status}
                          </span>
                        </td>
                        <td>{u.joinDate}</td>
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
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Admin Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link to="/admin/users" className="btn btn-primary">
                  <FaUsers className="me-2" />
                  Manage Users
                </Link>
                <Link to="/admin/users/create" className="btn btn-outline-primary">
                  <FaUserPlus className="me-2" />
                  Create New User
                </Link>
                <Link to="/admin/reports" className="btn btn-outline-secondary">
                  View Reports
                </Link>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">System Status</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small className="text-muted">System Health</small>
                  <small className="text-success fw-bold">Excellent</small>
                </div>
                <div className="progress" style={{ height: "6px" }}>
                  <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="mb-0">
                <div className="d-flex justify-content-between mb-1">
                  <small className="text-muted">User Activity</small>
                  <small className="text-info fw-bold">High</small>
                </div>
                <div className="progress" style={{ height: "6px" }}>
                  <div className="progress-bar bg-info" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
