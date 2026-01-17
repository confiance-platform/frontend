// Create User Page - Admin User Management
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSave, FaTimes, FaSpinner } from 'react-icons/fa';
import { userService } from '@/Services';
import { USER_ROLES } from '@/config/constants';

const CreateUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postalCode: '',
    role: USER_ROLES.USER
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one digit, one lowercase, one uppercase, and one special character (@#$%^&+=)';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      setLoading(true);

      // Prepare registration data (excluding confirmPassword and role)
      const { confirmPassword, role, ...registrationData } = formData;

      // Register the user
      const response = await userService.register(registrationData);

      if (response.success && response.data) {
        // If a specific role is selected and it's not the default USER role
        if (role && role !== USER_ROLES.USER) {
          try {
            await userService.addRole(response.data.id, role);
          } catch (roleError) {
            console.error('Error adding role:', roleError);
            toast.warning('User created but failed to assign role');
          }
        }

        toast.success('User created successfully');
        navigate('/admin/users');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error(error.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">Create New User</h4>
              <p className="text-muted mb-0">Add a new user to the system</p>
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

      {/* Form */}
      <div className="row">
        <div className="col-12">
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
                      <label htmlFor="role" className="form-label">
                        Role <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value={USER_ROLES.USER}>User</option>
                        <option value={USER_ROLES.ADMIN}>Admin</option>
                        <option value={USER_ROLES.SUPER_ADMIN}>Super Admin</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      <small className="text-muted">
                        Min 8 characters with 1 digit, 1 lowercase, 1 uppercase, 1 special char
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
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
                    disabled={loading}
                  >
                    <FaTimes className="me-2" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="fa-spin me-2" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <FaSave className="me-2" />
                        Create User
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
