// Super Admin Dashboard - Full System Control
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaUsers, FaUserShield, FaShieldAlt, FaCog, FaChartBar } from "react-icons/fa";

const SuperAdminDashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with actual API calls
  const systemStats = {
    totalUsers: 1248,
    totalAdmins: 8,
    activePermissions: 14,
    systemUptime: "99.9%"
  };

  const recentAdmins = [
    { id: 1, name: "Admin One", email: "admin1@confiance.com", role: "ADMIN", lastActive: "2 hours ago" },
    { id: 2, name: "Admin Two", email: "admin2@confiance.com", role: "ADMIN", lastActive: "5 hours ago" }
  ];

  const systemActivities = [
    { id: 1, action: "User created", user: "John Doe", timestamp: "10 minutes ago" },
    { id: 2, action: "Permission granted", user: "Jane Smith", timestamp: "1 hour ago" },
    { id: 3, action: "Admin promoted", user: "Admin Three", timestamp: "3 hours ago" }
  ];

  return (
    <div className="container-fluid">
      {/* Welcome Section */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 mb-4 bg-gradient" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <div className="card-body text-white">
              <h4 className="mb-1">
                <FaShieldAlt className="me-2" />
                Super Admin Dashboard
              </h4>
              <p className="mb-0 opacity-75">Complete system control and oversight - Welcome, {user?.name}!</p>
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
                  <h4 className="mb-0 fw-bold">{systemStats.totalUsers.toLocaleString()}</h4>
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
                    <FaUserShield className="text-warning fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Admins</p>
                  <h4 className="mb-0 fw-bold">{systemStats.totalAdmins}</h4>
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
                    <FaShieldAlt className="text-info fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Permissions</p>
                  <h4 className="mb-0 fw-bold">{systemStats.activePermissions}</h4>
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
                    <FaChartBar className="text-success fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">System Uptime</p>
                  <h4 className="mb-0 fw-bold">{systemStats.systemUptime}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Admins List */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Admin Users</h5>
              <Link to="/admin/admins" className="btn btn-sm btn-warning">
                Manage Admins
              </Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAdmins.map((admin) => (
                      <tr key={admin.id}>
                        <td className="fw-bold">
                          <FaUserShield className="text-warning me-2" />
                          {admin.name}
                        </td>
                        <td>{admin.email}</td>
                        <td className="text-muted small">{admin.lastActive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent System Activity */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Recent System Activity</h5>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                {systemActivities.map((activity) => (
                  <div key={activity.id} className="list-group-item border-0 px-0">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <p className="mb-1 fw-bold">{activity.action}</p>
                        <small className="text-muted">{activity.user}</small>
                      </div>
                      <small className="text-muted">{activity.timestamp}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Super Admin Actions */}
      <div className="row g-4 mt-2">
        <div className="col-lg-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Super Admin Controls</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <Link to="/admin/users" className="btn btn-outline-primary w-100">
                    <FaUsers className="me-2" />
                    All Users
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/admin/admins" className="btn btn-outline-warning w-100">
                    <FaUserShield className="me-2" />
                    Manage Admins
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/admin/permissions" className="btn btn-outline-info w-100">
                    <FaShieldAlt className="me-2" />
                    Permissions
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/admin/config" className="btn btn-outline-secondary w-100">
                    <FaCog className="me-2" />
                    System Config
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
