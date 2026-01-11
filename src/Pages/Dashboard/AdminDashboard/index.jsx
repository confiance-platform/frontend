// Admin Dashboard - User Management Overview
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaUsers, FaUserPlus, FaCheckCircle, FaBan, FaSpinner } from "react-icons/fa";
import { userService } from "@/Services";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch all users to calculate statistics
      const usersResponse = await userService.getAllUsers({
        page: 0,
        size: 100, // Get more users to calculate stats
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (usersResponse.success && usersResponse.data?.content) {
        const users = usersResponse.data.content;
        setAllUsers(users);
        setRecentUsers(users.slice(0, 10)); // Show only recent 10
      }

    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
      toast.error(error.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate user statistics from fetched data
  const calculateUserStats = () => {
    const activeUsers = allUsers.filter(u => u.status === 'ACTIVE' || !u.status).length;
    const suspendedUsers = allUsers.filter(u => u.status === 'SUSPENDED').length;

    // Users created in current month
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const newUsersThisMonth = allUsers.filter(u => {
      const createdDate = new Date(u.createdAt);
      return createdDate.getMonth() === currentMonth && createdDate.getFullYear() === currentYear;
    }).length;

    return {
      totalUsers: allUsers.length,
      activeUsers,
      suspendedUsers,
      newUsersThisMonth
    };
  };

  const stats = calculateUserStats();

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading admin dashboard...</p>
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
          <div className="card border-0 mb-4 bg-primary text-white">
            <div className="card-body">
              <h4 className="mb-1">Admin Dashboard</h4>
              <p className="mb-0 opacity-75">
                Welcome back, {user?.firstName || user?.email}! Manage users and monitor system activity.
              </p>
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
                  <h4 className="mb-0 fw-bold">{stats.totalUsers.toLocaleString()}</h4>
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
                  <h4 className="mb-0 fw-bold">{stats.activeUsers.toLocaleString()}</h4>
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
                  <h4 className="mb-0 fw-bold">+{stats.newUsersThisMonth}</h4>
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
                  <h4 className="mb-0 fw-bold">{stats.suspendedUsers}</h4>
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
              {recentUsers.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
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
                          <td className="fw-bold">
                            {u.firstName} {u.lastName}
                          </td>
                          <td>{u.email}</td>
                          <td>
                            <span className="badge bg-secondary-subtle text-secondary">
                              {u.roles?.[0]?.replace('ROLE_', '') || 'USER'}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-${u.status === 'ACTIVE' || !u.status ? 'success' : 'danger'}-subtle text-${u.status === 'ACTIVE' || !u.status ? 'success' : 'danger'}`}>
                              {u.status || 'ACTIVE'}
                            </span>
                          </td>
                          <td className="text-muted small">
                            {new Date(u.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-5 text-muted">
                  <FaUsers className="fs-1 mb-3 opacity-50" />
                  <p>No users found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions & Statistics */}
        <div className="col-lg-4">
          {/* Quick Actions */}
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
                <button className="btn btn-outline-secondary" onClick={fetchDashboardData}>
                  Refresh Data
                </button>
              </div>
            </div>
          </div>

          {/* User Activity Summary */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">User Statistics</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-muted">Active Rate</small>
                  <small className="fw-bold">
                    {stats.totalUsers > 0
                      ? ((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)
                      : 0}%
                  </small>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{
                      width: `${stats.totalUsers > 0 ? (stats.activeUsers / stats.totalUsers) * 100 : 0}%`
                    }}
                  ></div>
                </div>
              </div>

              <div className="mb-0">
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-muted">Growth This Month</small>
                  <small className="fw-bold text-info">+{stats.newUsersThisMonth} users</small>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{
                      width: `${stats.totalUsers > 0 ? Math.min((stats.newUsersThisMonth / stats.totalUsers) * 100 * 5, 100) : 0}%`
                    }}
                  ></div>
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
