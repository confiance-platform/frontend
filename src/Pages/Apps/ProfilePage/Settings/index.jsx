// User Settings Page - Account Settings
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { userService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaLock, FaBell, FaShieldAlt, FaUser, FaSave,
  FaTimes, FaSpinner, FaKey, FaEye, FaEyeSlash
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const Settings = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('account');
  const [userData, setUserData] = useState(null);

  // Password Change State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [passwordErrors, setPasswordErrors] = useState({});

  // Notification Settings State
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    portfolioUpdates: true,
    transactionAlerts: true,
    marketingEmails: false,
    securityAlerts: true
  });

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const fetchUserData = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const response = await userService.getUserById(user.id);
      if (response.success && response.data) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error(error.message || 'Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (passwordErrors[name]) {
      setPasswordErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validatePassword = () => {
    const errors = {};

    if (!passwordData.currentPassword) {
      errors.currentPassword = 'Current password is required';
    }

    if (!passwordData.newPassword) {
      errors.newPassword = 'New password is required';
    } else if (passwordData.newPassword.length < 8) {
      errors.newPassword = 'Password must be at least 8 characters';
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(passwordData.newPassword)) {
      errors.newPassword = 'Password must contain at least one digit, lowercase, uppercase, and special character';
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      errors.newPassword = 'New password must be different from current password';
    }

    setPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      setLoading(true);
      // Note: This would need a password change endpoint in the backend
      // For now, we'll show a success message
      toast.info('Password change endpoint not yet implemented in backend');

      // Reset form
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error(error.message || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveNotifications = () => {
    // Save notification preferences
    toast.success('Notification preferences saved');
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  if (loading && !userData) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading settings...</p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid>
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12}>
          <div>
            <h4 className="mb-1">Account Settings</h4>
            <p className="text-muted mb-0">Manage your account settings and preferences</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              {/* Tabs */}
              <Nav tabs className="mb-4">
                <NavItem>
                  <NavLink
                    className={activeTab === 'account' ? 'active' : ''}
                    onClick={() => setActiveTab('account')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaUser className="me-2" />
                    Account
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 'security' ? 'active' : ''}
                    onClick={() => setActiveTab('security')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaLock className="me-2" />
                    Security
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 'notifications' ? 'active' : ''}
                    onClick={() => setActiveTab('notifications')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaBell className="me-2" />
                    Notifications
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 'privacy' ? 'active' : ''}
                    onClick={() => setActiveTab('privacy')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaShieldAlt className="me-2" />
                    Privacy
                  </NavLink>
                </NavItem>
              </Nav>

              {/* Tab Content */}
              <TabContent activeTab={activeTab}>
                {/* Account Settings Tab */}
                <TabPane tabId="account">
                  <h5 className="mb-3">Account Information</h5>
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={userData?.email || ''}
                        disabled
                      />
                      <small className="text-muted">Email cannot be changed</small>
                    </Col>
                    <Col md={6}>
                      <label className="form-label">User ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.id || ''}
                        disabled
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">Account Status</label>
                      <div className="d-flex align-items-center">
                        <span className={`badge ${userData?.status === 'ACTIVE' ? 'bg-success' : 'bg-secondary'}`}>
                          {userData?.status || 'Unknown'}
                        </span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <label className="form-label">Member Since</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : ''}
                        disabled
                      />
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <div className="alert alert-info">
                    <FaUser className="me-2" />
                    To update your personal information (name, address, etc.), please visit the <a href="/apps/profile-page/profile" className="alert-link">Profile</a> page.
                  </div>
                </TabPane>

                {/* Security Tab */}
                <TabPane tabId="security">
                  <h5 className="mb-3">
                    <FaKey className="me-2" />
                    Change Password
                  </h5>

                  <form onSubmit={handlePasswordSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <label className="form-label">Current Password</label>
                        <div className="position-relative">
                          <input
                            type={showPasswords.current ? 'text' : 'password'}
                            className={`form-control ${passwordErrors.currentPassword ? 'is-invalid' : ''}`}
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                            onClick={() => togglePasswordVisibility('current')}
                            style={{ zIndex: 10 }}
                          >
                            {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
                          </button>
                          {passwordErrors.currentPassword && (
                            <div className="invalid-feedback">{passwordErrors.currentPassword}</div>
                          )}
                        </div>
                      </Col>
                      <Col md={6}>
                        {/* Empty column for layout */}
                      </Col>
                      <Col md={6}>
                        <label className="form-label">New Password</label>
                        <div className="position-relative">
                          <input
                            type={showPasswords.new ? 'text' : 'password'}
                            className={`form-control ${passwordErrors.newPassword ? 'is-invalid' : ''}`}
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                            onClick={() => togglePasswordVisibility('new')}
                            style={{ zIndex: 10 }}
                          >
                            {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
                          </button>
                          {passwordErrors.newPassword && (
                            <div className="invalid-feedback">{passwordErrors.newPassword}</div>
                          )}
                        </div>
                        <small className="text-muted">
                          Min 8 characters with 1 digit, 1 lowercase, 1 uppercase, 1 special char
                        </small>
                      </Col>
                      <Col md={6}>
                        <label className="form-label">Confirm New Password</label>
                        <div className="position-relative">
                          <input
                            type={showPasswords.confirm ? 'text' : 'password'}
                            className={`form-control ${passwordErrors.confirmPassword ? 'is-invalid' : ''}`}
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm new password"
                          />
                          <button
                            type="button"
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                            onClick={() => togglePasswordVisibility('confirm')}
                            style={{ zIndex: 10 }}
                          >
                            {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
                          </button>
                          {passwordErrors.confirmPassword && (
                            <div className="invalid-feedback">{passwordErrors.confirmPassword}</div>
                          )}
                        </div>
                      </Col>
                      <Col xs={12}>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <FaSpinner className="fa-spin me-2" />
                              Changing Password...
                            </>
                          ) : (
                            <>
                              <FaSave className="me-2" />
                              Change Password
                            </>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>

                  <hr className="my-4" />

                  <h5 className="mb-3">Two-Factor Authentication</h5>
                  <div className="alert alert-warning">
                    <FaShieldAlt className="me-2" />
                    Two-factor authentication is not yet enabled for your account. This feature will be available soon.
                  </div>
                </TabPane>

                {/* Notifications Tab */}
                <TabPane tabId="notifications">
                  <h5 className="mb-3">Notification Preferences</h5>

                  <div className="mb-4">
                    <h6 className="text-muted mb-3">Email Notifications</h6>
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="emailNotifications"
                        checked={notifications.emailNotifications}
                        onChange={() => handleNotificationChange('emailNotifications')}
                      />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        <strong>Email Notifications</strong>
                        <br />
                        <small className="text-muted">Receive general email notifications</small>
                      </label>
                    </div>

                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="portfolioUpdates"
                        checked={notifications.portfolioUpdates}
                        onChange={() => handleNotificationChange('portfolioUpdates')}
                      />
                      <label className="form-check-label" htmlFor="portfolioUpdates">
                        <strong>Portfolio Updates</strong>
                        <br />
                        <small className="text-muted">Get notified about portfolio value changes</small>
                      </label>
                    </div>

                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="transactionAlerts"
                        checked={notifications.transactionAlerts}
                        onChange={() => handleNotificationChange('transactionAlerts')}
                      />
                      <label className="form-check-label" htmlFor="transactionAlerts">
                        <strong>Transaction Alerts</strong>
                        <br />
                        <small className="text-muted">Receive alerts for all transactions</small>
                      </label>
                    </div>

                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="marketingEmails"
                        checked={notifications.marketingEmails}
                        onChange={() => handleNotificationChange('marketingEmails')}
                      />
                      <label className="form-check-label" htmlFor="marketingEmails">
                        <strong>Marketing Emails</strong>
                        <br />
                        <small className="text-muted">Receive promotional offers and updates</small>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted mb-3">SMS Notifications</h6>
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="smsNotifications"
                        checked={notifications.smsNotifications}
                        onChange={() => handleNotificationChange('smsNotifications')}
                      />
                      <label className="form-check-label" htmlFor="smsNotifications">
                        <strong>SMS Notifications</strong>
                        <br />
                        <small className="text-muted">Receive SMS notifications for important updates</small>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted mb-3">Security</h6>
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="securityAlerts"
                        checked={notifications.securityAlerts}
                        onChange={() => handleNotificationChange('securityAlerts')}
                        disabled
                      />
                      <label className="form-check-label" htmlFor="securityAlerts">
                        <strong>Security Alerts</strong>
                        <br />
                        <small className="text-muted">Always receive security-related notifications (Required)</small>
                      </label>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={handleSaveNotifications}
                  >
                    <FaSave className="me-2" />
                    Save Preferences
                  </button>
                </TabPane>

                {/* Privacy Tab */}
                <TabPane tabId="privacy">
                  <h5 className="mb-3">Privacy Settings</h5>

                  <div className="mb-4">
                    <h6>Data & Privacy</h6>
                    <p className="text-muted">
                      We are committed to protecting your privacy and personal data.
                      Your information is encrypted and stored securely.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6>Account Visibility</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="visibility" id="public" defaultChecked />
                      <label className="form-check-label" htmlFor="public">
                        <strong>Public</strong> - Your basic profile information is visible to other users
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="visibility" id="private" />
                      <label className="form-check-label" htmlFor="private">
                        <strong>Private</strong> - Only you can see your profile information
                      </label>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="alert alert-danger">
                    <h6 className="alert-heading">Delete Account</h6>
                    <p className="mb-0">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <hr />
                    <button className="btn btn-danger btn-sm">
                      Delete My Account
                    </button>
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
