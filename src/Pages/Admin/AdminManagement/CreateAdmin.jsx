// Create Admin Page - Super Admin Management
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSave, FaTimes, FaSpinner, FaSearch } from 'react-icons/fa';
import { userService } from '@/Services';
import { USER_ROLES } from '@/config/constants';

const CreateAdmin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [adminRole, setAdminRole] = useState(USER_ROLES.ADMIN);
  const [mode, setMode] = useState('select'); // 'select' or 'create'

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUsers({
        page: 0,
        size: 100,
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (response.success && response.data) {
        // Filter users who are not already admins or super admins
        const regularUsers = (response.data.content || []).filter(user =>
          !user.roles?.includes(USER_ROLES.ADMIN) && !user.roles?.includes(USER_ROLES.SUPER_ADMIN)
        );
        setUsers(regularUsers);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error(error.message || 'Failed to fetch users');
    }
  };

  const handlePromoteToAdmin = async () => {
    if (!selectedUser) {
      toast.error('Please select a user first');
      return;
    }

    try {
      setLoading(true);
      const response = await userService.addRole(selectedUser.id, adminRole);

      if (response.success) {
        toast.success(`User promoted to ${adminRole.replace('ROLE_', '')} successfully`);
        navigate('/admin/admins');
      }
    } catch (error) {
      console.error('Error promoting user:', error);
      toast.error(error.message || 'Failed to promote user');
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user =>
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">Create Administrator</h4>
              <p className="text-muted mb-0">Promote an existing user to administrator</p>
            </div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate('/admin/admins')}
            >
              <FaTimes className="me-2" />
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="btn-group w-100" role="group">
                <button
                  type="button"
                  className={`btn ${mode === 'select' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setMode('select')}
                >
                  Select Existing User
                </button>
                <button
                  type="button"
                  className={`btn ${mode === 'create' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => {
                    setMode('create');
                    navigate('/admin/users/create');
                  }}
                >
                  Create New User & Promote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mode === 'select' && (
        <>
          {/* Role Selection */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Select Admin Role</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-check form-check-lg">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="adminRole"
                          id="roleAdmin"
                          checked={adminRole === USER_ROLES.ADMIN}
                          onChange={() => setAdminRole(USER_ROLES.ADMIN)}
                        />
                        <label className="form-check-label" htmlFor="roleAdmin">
                          <strong>Administrator</strong>
                          <br />
                          <small className="text-muted">
                            Can manage users, view reports, and access admin panel
                          </small>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-check-lg">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="adminRole"
                          id="roleSuperAdmin"
                          checked={adminRole === USER_ROLES.SUPER_ADMIN}
                          onChange={() => setAdminRole(USER_ROLES.SUPER_ADMIN)}
                        />
                        <label className="form-check-label" htmlFor="roleSuperAdmin">
                          <strong>Super Administrator</strong>
                          <br />
                          <small className="text-muted">
                            Full system access including permission management and system configuration
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Selection */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Select User to Promote</h5>
                </div>
                <div className="card-body">
                  {/* Search */}
                  <div className="position-relative mb-3">
                    <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                    <input
                      type="text"
                      className="form-control ps-5"
                      placeholder="Search by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Users List */}
                  <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table table-hover mb-0">
                      <thead className="sticky-top bg-light">
                        <tr>
                          <th style={{ width: '50px' }}></th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user) => (
                            <tr
                              key={user.id}
                              className={`cursor-pointer ${selectedUser?.id === user.id ? 'table-active' : ''}`}
                              onClick={() => setSelectedUser(user)}
                            >
                              <td>
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  checked={selectedUser?.id === user.id}
                                  onChange={() => setSelectedUser(user)}
                                />
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                                    {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                    <small className="text-muted">ID: {user.id}</small>
                                  </div>
                                </div>
                              </td>
                              <td>{user.email}</td>
                              <td>{user.contactNumber || 'N/A'}</td>
                              <td>
                                <span className="badge bg-success-subtle text-success">
                                  {user.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center py-5">
                              <p className="text-muted mb-0">
                                No eligible users found. All users are already administrators.
                              </p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Selected User Info */}
                  {selectedUser && (
                    <div className="mt-4 p-3 border rounded bg-light">
                      <h6>Selected User</h6>
                      <p className="mb-1">
                        <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
                      </p>
                      <p className="mb-1">
                        <strong>Email:</strong> {selectedUser.email}
                      </p>
                      <p className="mb-0">
                        <strong>Will be promoted to:</strong>{' '}
                        <span className="badge bg-primary">{adminRole.replace('ROLE_', '')}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="card-footer bg-white">
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/admin/admins')}
                      disabled={loading}
                    >
                      <FaTimes className="me-2" />
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handlePromoteToAdmin}
                      disabled={!selectedUser || loading}
                    >
                      {loading ? (
                        <>
                          <FaSpinner className="fa-spin me-2" />
                          Promoting...
                        </>
                      ) : (
                        <>
                          <FaSave className="me-2" />
                          Promote to Admin
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateAdmin;
