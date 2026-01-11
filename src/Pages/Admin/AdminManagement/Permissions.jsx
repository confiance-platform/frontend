// Permissions Management Page - Super Admin
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSave, FaTimes, FaSpinner, FaSearch, FaUserShield, FaCheck } from 'react-icons/fa';
import { userService, adminService } from '@/Services';
import { PERMISSIONS } from '@/config/constants';

const PermissionsManagement = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userIdFromQuery = searchParams.get('userId');

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [availablePermissions, setAvailablePermissions] = useState([]);
  const [userPermissions, setUserPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchAvailablePermissions();
  }, []);

  useEffect(() => {
    if (userIdFromQuery && users.length > 0) {
      const user = users.find(u => u.id === parseInt(userIdFromQuery));
      if (user) {
        handleSelectUser(user);
      }
    }
  }, [userIdFromQuery, users]);

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUsers({
        page: 0,
        size: 100,
        sortBy: 'createdAt',
        sortDirection: 'desc'
      });

      if (response.success && response.data) {
        setUsers(response.data.content || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error(error.message || 'Failed to fetch users');
    }
  };

  const fetchAvailablePermissions = async () => {
    try {
      const response = await adminService.getAvailablePermissions();
      if (response.success && response.data) {
        setAvailablePermissions(response.data);
      }
    } catch (error) {
      console.error('Error fetching permissions:', error);
      // Fallback to constants if API fails
      setAvailablePermissions(Object.values(PERMISSIONS));
    }
  };

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
    setLoading(true);

    try {
      const response = await adminService.getUserPermissions(user.id);
      if (response.success && response.data) {
        const permissions = response.data.permissions || [];
        setUserPermissions(permissions);
        setSelectedPermissions(permissions);
      }
    } catch (error) {
      console.error('Error fetching user permissions:', error);
      toast.error(error.message || 'Failed to fetch user permissions');
      // Use permissions from user object as fallback
      setUserPermissions(user.permissions || []);
      setSelectedPermissions(user.permissions || []);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePermission = (permission) => {
    setSelectedPermissions(prev =>
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSavePermissions = async () => {
    if (!selectedUser) {
      toast.error('Please select a user first');
      return;
    }

    try {
      setLoading(true);
      const response = await adminService.setUserPermissions(selectedUser.id, selectedPermissions);

      if (response.success) {
        toast.success('Permissions updated successfully');
        setUserPermissions(selectedPermissions);
      }
    } catch (error) {
      console.error('Error updating permissions:', error);
      toast.error(error.message || 'Failed to update permissions');
    } finally {
      setLoading(false);
    }
  };

  const handleGrantPermission = async (permission) => {
    if (!selectedUser) return;

    try {
      const response = await adminService.grantPermissions(selectedUser.id, [permission]);
      if (response.success) {
        toast.success(`Permission "${permission}" granted`);
        setUserPermissions(prev => [...prev, permission]);
        setSelectedPermissions(prev => [...prev, permission]);
      }
    } catch (error) {
      console.error('Error granting permission:', error);
      toast.error(error.message || 'Failed to grant permission');
    }
  };

  const handleRevokePermission = async (permission) => {
    if (!selectedUser) return;

    try {
      const response = await adminService.revokePermissions(selectedUser.id, [permission]);
      if (response.success) {
        toast.success(`Permission "${permission}" revoked`);
        setUserPermissions(prev => prev.filter(p => p !== permission));
        setSelectedPermissions(prev => prev.filter(p => p !== permission));
      }
    } catch (error) {
      console.error('Error revoking permission:', error);
      toast.error(error.message || 'Failed to revoke permission');
    }
  };

  const filteredUsers = users.filter(user =>
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupPermissionsByCategory = () => {
    const categories = {
      'User Management': availablePermissions.filter(p => p.startsWith('USER_')),
      'Investment Management': availablePermissions.filter(p => p.startsWith('INVESTMENT_')),
      'Transaction Management': availablePermissions.filter(p => p.startsWith('TRANSACTION_')),
      'Portfolio Management': availablePermissions.filter(p => p.startsWith('PORTFOLIO_')),
      'Admin & System': availablePermissions.filter(p => p.startsWith('ADMIN_') || p.startsWith('PERMISSION_'))
    };
    return categories;
  };

  const hasChanges = JSON.stringify(userPermissions.sort()) !== JSON.stringify(selectedPermissions.sort());

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">Permission Management</h4>
              <p className="text-muted mb-0">Manage user permissions and access control</p>
            </div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate('/admin/admins')}
            >
              <FaTimes className="me-2" />
              Back to Admins
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* User Selection Panel */}
        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="mb-0">Select User</h5>
            </div>
            <div className="card-body">
              {/* Search */}
              <div className="position-relative mb-3">
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Users List */}
              <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`p-3 mb-2 border rounded cursor-pointer ${
                      selectedUser?.id === user.id ? 'bg-primary-subtle border-primary' : 'hover-bg-light'
                    }`}
                    onClick={() => handleSelectUser(user)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                        {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-bold small">{user.firstName} {user.lastName}</div>
                        <small className="text-muted">{user.email}</small>
                      </div>
                      {selectedUser?.id === user.id && (
                        <FaCheck className="text-primary" />
                      )}
                    </div>
                    <div className="mt-2">
                      {user.roles?.map((role, idx) => (
                        <span key={idx} className="badge bg-primary-subtle text-primary me-1 small">
                          {role.replace('ROLE_', '')}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Panel */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0">
                  {selectedUser ? (
                    <>
                      <FaUserShield className="me-2" />
                      Permissions for {selectedUser.firstName} {selectedUser.lastName}
                    </>
                  ) : (
                    'Select a user to manage permissions'
                  )}
                </h5>
                {selectedUser && (
                  <small className="text-muted">
                    {selectedPermissions.length} of {availablePermissions.length} permissions selected
                  </small>
                )}
              </div>
              {loading && <FaSpinner className="fa-spin text-primary" />}
            </div>

            <div className="card-body">
              {selectedUser ? (
                <>
                  {Object.entries(groupPermissionsByCategory()).map(([category, permissions]) => (
                    permissions.length > 0 && (
                      <div key={category} className="mb-4">
                        <h6 className="text-primary mb-3">{category}</h6>
                        <div className="row g-2">
                          {permissions.map((permission) => (
                            <div key={permission} className="col-md-6">
                              <div className="form-check form-switch p-3 border rounded">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={permission}
                                  checked={selectedPermissions.includes(permission)}
                                  onChange={() => handleTogglePermission(permission)}
                                />
                                <label className="form-check-label ms-2" htmlFor={permission}>
                                  <strong>{permission.replace(/_/g, ' ')}</strong>
                                  <br />
                                  <small className="text-muted">
                                    {permission.includes('READ') && 'View and read data'}
                                    {permission.includes('WRITE') && 'Create and update data'}
                                    {permission.includes('DELETE') && 'Delete data'}
                                    {permission.includes('GRANT') && 'Grant permissions to users'}
                                    {permission.includes('REVOKE') && 'Revoke permissions from users'}
                                    {permission.includes('ACCESS') && 'Access admin panel'}
                                    {permission.includes('VIEW') && !permission.includes('READ') && 'View permissions'}
                                  </small>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </>
              ) : (
                <div className="text-center py-5">
                  <FaUserShield className="fs-1 text-muted mb-3" />
                  <p className="text-muted">Select a user from the list to manage their permissions</p>
                </div>
              )}
            </div>

            {selectedUser && (
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {hasChanges && (
                      <span className="badge bg-warning-subtle text-warning">
                        Unsaved Changes
                      </span>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setSelectedPermissions(userPermissions)}
                      disabled={!hasChanges || loading}
                    >
                      <FaTimes className="me-2" />
                      Reset
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSavePermissions}
                      disabled={!hasChanges || loading}
                    >
                      {loading ? (
                        <>
                          <FaSpinner className="fa-spin me-2" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <FaSave className="me-2" />
                          Save Permissions
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionsManagement;
