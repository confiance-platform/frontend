// Super Admin Dashboard - Full System Control
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FaUsers, FaUserShield, FaShieldAlt, FaCog, FaChartBar, FaSpinner } from "react-icons/fa";
import { userService, adminService } from "@/Services";
import { toast } from "react-toastify";

const SuperAdminDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [availablePermissions, setAvailablePermissions] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch all users
      const usersResponse = await userService.getAllUsers({
        page: 0,
        size: 200,
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (usersResponse.success && usersResponse.data?.content) {
        const users = usersResponse.data.content;
        setAllUsers(users);

        // Filter admin users
        const admins = users.filter(u =>
          u.roles?.some(role => role.includes('ADMIN'))
        );
        setAdminUsers(admins);
      }

      // Fetch available permissions
      const permissionsResponse = await adminService.getAvailablePermissions();
      if (permissionsResponse.success && permissionsResponse.data) {
        setAvailablePermissions(permissionsResponse.data);
      }

    } catch (error) {
      console.error('Error fetching super admin dashboard data:', error);
      toast.error(error.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate system statistics
  const calculateSystemStats = () => {
    const totalUsers = allUsers.length;
    const totalAdmins = adminUsers.length;
    const activePermissions = availablePermissions.length;

    // Calculate system uptime (simulated - would come from backend in real scenario)
    const uptime = "99.9%";

    return {
      totalUsers,
      totalAdmins,
      activePermissions,
      systemUptime: uptime
    };
  };

  const stats = calculateSystemStats();

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading super admin dashboard...</p>
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
          <div className="card border-0 mb-4 bg-gradient" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <div className="card-body text-white">
              <h4 className="mb-1">
                <FaShieldAlt className="me-2" />
                Super Admin Dashboard
              </h4>
              <p className="mb-0 opacity-75">
                Complete system control and oversight - Welcome, {user?.firstName || user?.email}!
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
                  <div className="rounded-circle bg-warning-subtle p-3">
                    <FaUserShield className="text-warning fs-4" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="text-muted mb-1 small">Total Admins</p>
                  <h4 className="mb-0 fw-bold">{stats.totalAdmins}</h4>
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
                  <h4 className="mb-0 fw-bold">{stats.activePermissions}</h4>
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
                  <h4 className="mb-0 fw-bold">{stats.systemUptime}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Admin Users */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Admin Users</h5>
              <Link to="/admin/admins" className="btn btn-sm btn-warning">
                Manage Admins
              </Link>
            </div>
            <div className="card-body">
              {adminUsers.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminUsers.slice(0, 5).map((admin) => (
                        <tr key={admin.id}>
                          <td className="fw-bold">
                            <FaUserShield className="text-warning me-2" />
                            {admin.firstName} {admin.lastName}
                          </td>
                          <td>{admin.email}</td>
                          <td>
                            <span className="badge bg-warning-subtle text-warning">
                              {admin.roles?.[0]?.replace('ROLE_', '') || 'ADMIN'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-5 text-muted">
                  <FaUserShield className="fs-1 mb-3 opacity-50" />
                  <p>No admin users found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Available Permissions */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">System Permissions</h5>
              <Link to="/admin/permissions" className="btn btn-sm btn-info">
                Manage
              </Link>
            </div>
            <div className="card-body">
              {availablePermissions.length > 0 ? (
                <div className="row g-2">
                  {availablePermissions.slice(0, 12).map((perm, index) => (
                    <div key={index} className="col-md-6">
                      <div className="p-2 bg-light rounded">
                        <small className="fw-bold text-dark">
                          <FaShieldAlt className="text-info me-1" style={{ fontSize: '0.8rem' }} />
                          {perm}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5 text-muted">
                  <FaShieldAlt className="fs-1 mb-3 opacity-50" />
                  <p>No permissions configured</p>
                </div>
              )}
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
                    All Users ({stats.totalUsers})
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/admin/admins" className="btn btn-outline-warning w-100">
                    <FaUserShield className="me-2" />
                    Manage Admins ({stats.totalAdmins})
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/admin/permissions" className="btn btn-outline-info w-100">
                    <FaShieldAlt className="me-2" />
                    Permissions ({stats.activePermissions})
                  </Link>
                </div>
                <div className="col-md-3">
                  <button onClick={fetchDashboardData} className="btn btn-outline-secondary w-100">
                    <FaCog className="me-2" />
                    Refresh Data
                  </button>
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
