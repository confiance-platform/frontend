// All Users Page - Admin User Management
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaPlus, FaEdit, FaTrash, FaUserCheck, FaUserSlash, FaSpinner, FaSearch } from 'react-icons/fa';
import { userService } from '@/Services';
import { USER_ROLES, USER_STATUS } from '@/config/constants';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [pagination.pageNumber, statusFilter, roleFilter]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers({
        page: pagination.pageNumber,
        size: pagination.pageSize,
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (response.success && response.data) {
        setUsers(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageNumber,
          pageSize: response.data.pageSize,
          totalElements: response.data.totalElements,
          totalPages: response.data.totalPages,
        });
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error(error.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId, userName) => {
    if (window.confirm(`Are you sure you want to delete user "${userName}"?`)) {
      try {
        const response = await userService.deleteUser(userId);
        if (response.success) {
          toast.success('User deleted successfully');
          fetchUsers();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error(error.message || 'Failed to delete user');
      }
    }
  };

  const handleAddRole = async (userId, role) => {
    try {
      const response = await userService.addRole(userId, role);
      if (response.success) {
        toast.success(`Role ${role} added successfully`);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error adding role:', error);
      toast.error(error.message || 'Failed to add role');
    }
  };

  const handleRemoveRole = async (userId, role) => {
    try {
      const response = await userService.removeRole(userId, role);
      if (response.success) {
        toast.success(`Role ${role} removed successfully`);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error removing role:', error);
      toast.error(error.message || 'Failed to remove role');
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || user.status === statusFilter;
    const matchesRole = !roleFilter || user.roles?.includes(roleFilter);
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case USER_STATUS.ACTIVE: return 'bg-success-subtle text-success';
      case USER_STATUS.INACTIVE: return 'bg-warning-subtle text-warning';
      case USER_STATUS.SUSPENDED: return 'bg-danger-subtle text-danger';
      case USER_STATUS.DELETED: return 'bg-secondary-subtle text-secondary';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case USER_ROLES.SUPER_ADMIN: return 'bg-danger-subtle text-danger';
      case USER_ROLES.ADMIN: return 'bg-primary-subtle text-primary';
      case USER_ROLES.USER: return 'bg-info-subtle text-info';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  if (loading && users.length === 0) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading users...</p>
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
              <h4 className="mb-1">User Management</h4>
              <p className="text-muted mb-0">Manage all users in the system</p>
            </div>
            <Link to="/admin/users/create" className="btn btn-primary">
              <FaPlus className="me-2" />
              Create User
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
                <div className="col-md-4">
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
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value={USER_STATUS.ACTIVE}>Active</option>
                    <option value={USER_STATUS.INACTIVE}>Inactive</option>
                    <option value={USER_STATUS.SUSPENDED}>Suspended</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    <option value={USER_ROLES.USER}>User</option>
                    <option value={USER_ROLES.ADMIN}>Admin</option>
                    <option value={USER_ROLES.SUPER_ADMIN}>Super Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">All Users ({pagination.totalElements})</h5>
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
                      <th>Status</th>
                      <th>Created At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="fw-bold">{user.id}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                              </div>
                              <div>
                                <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                <small className="text-muted">{user.country || 'N/A'}</small>
                              </div>
                            </div>
                          </td>
                          <td>{user.email}</td>
                          <td>{user.contactNumber || 'N/A'}</td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              {user.roles?.map((role, idx) => (
                                <span key={idx} className={`badge ${getRoleBadgeClass(role)}`}>
                                  {role.replace('ROLE_', '')}
                                </span>
                              )) || <span className="text-muted">No roles</span>}
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${getStatusBadgeClass(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </small>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <Link
                                to={`/admin/users/${user.id}`}
                                className="btn btn-sm btn-outline-primary"
                                title="Edit User"
                              >
                                <FaEdit />
                              </Link>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteUser(user.id, `${user.firstName} ${user.lastName}`)}
                                title="Delete User"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-5">
                          <p className="text-muted mb-0">No users found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {pagination.totalPages > 1 && (
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">
                    Showing {pagination.pageNumber * pagination.pageSize + 1} to{' '}
                    {Math.min((pagination.pageNumber + 1) * pagination.pageSize, pagination.totalElements)} of{' '}
                    {pagination.totalElements} entries
                  </div>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className={`page-item ${pagination.pageNumber === 0 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(pagination.pageNumber - 1)}
                          disabled={pagination.pageNumber === 0}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(pagination.totalPages)].map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${pagination.pageNumber === index ? 'active' : ''}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(index)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${pagination.pageNumber === pagination.totalPages - 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(pagination.pageNumber + 1)}
                          disabled={pagination.pageNumber === pagination.totalPages - 1}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
