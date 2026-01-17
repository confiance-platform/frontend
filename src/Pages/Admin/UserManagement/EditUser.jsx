// Edit User Page - Admin User Management
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSave, FaTimes, FaSpinner, FaArrowLeft, FaUserShield, FaKey } from 'react-icons/fa';
import { userService } from '@/Services';
import { USER_ROLES, USER_STATUS } from '@/config/constants';
import { useAuth } from '@/context/AuthContext';

const EditUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { isSuperAdmin } = useAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postalCode: '',
    status: USER_STATUS.ACTIVE
  });
  const [currentRoles, setCurrentRoles] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getUserById(userId);

      if (response.success && response.data) {
        const userData = response.data;
        setUser(userData);
        setCurrentRoles(userData.roles || []);
        setFormData({
          email: userData.email || '',
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          contactNumber: userData.contactNumber || '',
          country: userData.country || '',
          state: userData.state || '',
          city: userData.city || '',
          address: userData.address || '',
          postalCode: userData.postalCode || '',
          status: userData.status || USER_STATUS.ACTIVE
        });
      } else {
        toast.error('User not found');
        navigate('/admin/users');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      toast.error(error.message || 'Failed to fetch user details');
      navigate('/admin/users');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Required fields
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^[+]?[0-9]{10,15}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be 10-15 digits with optional +';
    }
    if (!formData.country) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      setSaving(true);

      const response = await userService.updateUser(userId, formData);

      if (response.success) {
        toast.success('User updated successfully');
        navigate('/admin/users');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(error.message || 'Failed to update user');
    } finally {
      setSaving(false);
    }
  };

  const handleAddRole = async (role) => {
    if (currentRoles.includes(role)) {
      toast.warning('User already has this role');
      return;
    }

    try {
      const response = await userService.addRole(userId, role);
      if (response.success) {
        setCurrentRoles(prev => [...prev, role]);
        toast.success(`Role ${role.replace('ROLE_', '')} added successfully`);
      }
    } catch (error) {
      console.error('Error adding role:', error);
      toast.error(error.message || 'Failed to add role');
    }
  };

  const handleRemoveRole = async (role) => {
    if (role === USER_ROLES.USER && currentRoles.length === 1) {
      toast.warning('Cannot remove the only role');
      return;
    }

    try {
      const response = await userService.removeRole(userId, role);
      if (response.success) {
        setCurrentRoles(prev => prev.filter(r => r !== role));
        toast.success(`Role ${role.replace('ROLE_', '')} removed successfully`);
      }
    } catch (error) {
      console.error('Error removing role:', error);
      toast.error(error.message || 'Failed to remove role');
    }
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case USER_ROLES.SUPER_ADMIN: return 'bg-danger text-white';
      case USER_ROLES.ADMIN: return 'bg-primary text-white';
      case USER_ROLES.USER: return 'bg-info text-white';
      default: return 'bg-secondary text-white';
    }
  };

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading user details...</p>
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
              <button
                className="btn btn-link text-muted p-0 mb-2"
                onClick={() => navigate('/admin/users')}
              >
                <FaArrowLeft className="me-2" />
                Back to Users
              </button>
              <h4 className="mb-1">Edit User</h4>
              <p className="text-muted mb-0">
                Update information for {user?.firstName} {user?.lastName}
              </p>
            </div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate('/admin/users')}
            >
              <FaTimes className="me-2" />
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Main Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Account Information */}
                <div className="mb-4">
                  <h5 className="mb-3">Account Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="user@example.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="status" className="form-label">
                        Status <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value={USER_STATUS.ACTIVE}>Active</option>
                        <option value={USER_STATUS.INACTIVE}>Inactive</option>
                        <option value={USER_STATUS.SUSPENDED}>Suspended</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="mb-4">
                  <h5 className="mb-3">Personal Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contactNumber" className="form-label">
                        Contact Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="+1234567890"
                      />
                      {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="mb-4">
                  <h5 className="mb-3">Address Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United States"
                      />
                      {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="state" className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="California"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="San Francisco"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="postalCode" className="form-label">Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="94101"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/admin/users')}
                    disabled={saving}
                  >
                    <FaTimes className="me-2" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <FaSpinner className="fa-spin me-2" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <FaSave className="me-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar - Roles & Quick Actions */}
        <div className="col-lg-4">
          {/* User Info Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body text-center">
              <div className="avatar-lg bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px', fontSize: '24px' }}>
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </div>
              <h5 className="mb-1">{user?.firstName} {user?.lastName}</h5>
              <p className="text-muted mb-2">{user?.email}</p>
              <p className="text-muted small mb-0">User ID: {user?.id}</p>
            </div>
          </div>

          {/* Roles Management Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white">
              <h6 className="mb-0">
                <FaUserShield className="me-2 text-primary" />
                Manage Roles
              </h6>
            </div>
            <div className="card-body">
              <p className="text-muted small mb-3">Current roles:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {currentRoles.length > 0 ? (
                  currentRoles.map((role, idx) => (
                    <span key={idx} className={`badge ${getRoleBadgeClass(role)} d-flex align-items-center gap-1`}>
                      {role.replace('ROLE_', '')}
                      {/* Don't allow removing super admin role unless current user is super admin */}
                      {(role !== USER_ROLES.SUPER_ADMIN || isSuperAdmin()) && currentRoles.length > 1 && (
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-1"
                          style={{ fontSize: '0.5rem' }}
                          onClick={() => handleRemoveRole(role)}
                          title="Remove role"
                        />
                      )}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">No roles assigned</span>
                )}
              </div>

              <hr />

              <p className="text-muted small mb-2">Add role:</p>
              <div className="d-flex flex-wrap gap-2">
                {!currentRoles.includes(USER_ROLES.USER) && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-info"
                    onClick={() => handleAddRole(USER_ROLES.USER)}
                  >
                    + User
                  </button>
                )}
                {!currentRoles.includes(USER_ROLES.ADMIN) && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleAddRole(USER_ROLES.ADMIN)}
                  >
                    + Admin
                  </button>
                )}
                {!currentRoles.includes(USER_ROLES.SUPER_ADMIN) && isSuperAdmin() && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleAddRole(USER_ROLES.SUPER_ADMIN)}
                  >
                    + Super Admin
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h6 className="mb-0">Quick Actions</h6>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => navigate(`/admin/permissions?userId=${userId}`)}
                >
                  <FaUserShield className="me-2" />
                  Manage Permissions
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                  disabled
                  title="Coming soon"
                >
                  <FaKey className="me-2" />
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
