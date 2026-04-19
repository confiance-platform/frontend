// All Admins Page - Super Admin Management
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaPlus, FaEdit, FaTrash, FaUserShield, FaSpinner, FaSearch, FaCrown } from 'react-icons/fa';
import { userService } from '@/Services';
import { USER_ROLES } from '@/config/constants';
import { useAuth } from '@/context/AuthContext';

const AllAdmins = () => {
  const { isSuperAdmin } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    fetchAdmins();
  }, [pagination.pageNumber]);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers({
        page: pagination.pageNumber,
        size: pagination.pageSize,
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (response.success && response.data) {
        // Filter to show only admins (and super admins only if current user is super admin)
        const adminUsers = (response.data.content || []).filter(user => {
          const isAdmin = user.roles?.includes(USER_ROLES.ADMIN);
          const isUserSuperAdmin = user.roles?.includes(USER_ROLES.SUPER_ADMIN);

          // If current user is super admin, show both admins and super admins
          if (isSuperAdmin()) {
            return isAdmin || isUserSuperAdmin;
          }

          // If current user is regular admin, only show admins (not super admins)
          return isAdmin && !isUserSuperAdmin;
        });

        setAdmins(adminUsers);
        setPagination({
          pageNumber: response.data.pageNumber,
          pageSize: response.data.pageSize,
          totalElements: adminUsers.length,
          totalPages: Math.ceil(adminUsers.length / response.data.pageSize),
        });
      }
    } catch (error) {
      console.error('Error fetching admins:', error);
      toast.error(error.message || 'Failed to fetch admins');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveAdminRole = async (userId, role, userName) => {
    if (window.confirm(`Are you sure you want to remove ${role} role from "${userName}"?`)) {
      try {
        const response = await userService.removeRole(userId, role);
        if (response.success) {
          toast.success(`${role} role removed successfully`);
          fetchAdmins();
        }
      } catch (error) {
        console.error('Error removing role:', error);
        toast.error(error.message || 'Failed to remove role');
      }
    }
  };

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.lastName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || admin.roles?.includes(roleFilter);
    return matchesSearch && matchesRole;
  });

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case USER_ROLES.SUPER_ADMIN: return 'bg-danger-subtle text-danger';
      case USER_ROLES.ADMIN: return 'bg-primary-subtle text-primary';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  // Check if a specific user has super admin role (different from isSuperAdmin() from useAuth)
  const isUserSuperAdmin = (user) => user.roles?.includes(USER_ROLES.SUPER_ADMIN);

  if (loading && admins.length === 0) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading administrators...</p>
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
              <h4 className="mb-1">Admin Management</h4>
              <p className="text-muted mb-0">Manage administrators and super administrators</p>
            </div>
            <Link to="/admin/admins/create" className="btn btn-primary">
              <FaPlus className="me-2" />
              Create Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="position-relative">
                    <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                    <input
                      type="text"
                      className="form-control ps-5"
                      placeholder="Search by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="">All Admin Roles</option>
                    <option value={USER_ROLES.ADMIN}>Admin</option>
                    {isSuperAdmin() && (
                      <option value={USER_ROLES.SUPER_ADMIN}>Super Admin</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admins Table */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">All Administrators ({filteredAdmins.length})</h5>
              {loading && <FaSpinner className="fa-spin text-primary" />}
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Roles</th>
                      <th>Permissions Count</th>
                      <th>Created At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAdmins.length > 0 ? (
                      filteredAdmins.map((admin) => (
                        <tr key={admin.id}>
                          <td className="fw-bold">{admin.id}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className={`avatar-sm ${isUserSuperAdmin(admin) ? 'bg-danger-subtle text-danger' : 'bg-primary-subtle text-primary'} rounded-circle d-flex align-items-center justify-content-center me-2`}>
                                {isUserSuperAdmin(admin) ? <FaCrown /> : <FaUserShield />}
                              </div>
                              <div>
                                <div className="fw-bold">{admin.firstName} {admin.lastName}</div>
                                <small className="text-muted">{admin.country || 'N/A'}</small>
                              </div>
                            </div>
                          </td>
                          <td>{admin.email}</td>
                          <td>{admin.contactNumber || 'N/A'}</td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              {admin.roles?.map((role, idx) => (
                                <span key={idx} className={`badge ${getRoleBadgeClass(role)}`}>
                                  {role.replace('ROLE_', '')}
                                </span>
                              )) || <span className="text-muted">No roles</span>}
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-info-subtle text-info">
                              {admin.permissions?.length || 0} permissions
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {new Date(admin.createdAt).toLocaleDateString()}
                            </small>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <Link
                                to={`/admin/permissions?userId=${admin.id}`}
                                className="btn btn-sm btn-outline-primary"
                                title="Manage Permissions"
                              >
                                <FaUserShield />
                              </Link>
                              {admin.roles?.includes(USER_ROLES.ADMIN) && (
                                <button
                                  className="btn btn-sm btn-outline-warning"
                                  onClick={() => handleRemoveAdminRole(admin.id, USER_ROLES.ADMIN, `${admin.firstName} ${admin.lastName}`)}
                                  title="Remove Admin Role"
                                >
                                  <FaTrash />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-5">
                          <p className="text-muted mb-0">No administrators found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAdmins;
