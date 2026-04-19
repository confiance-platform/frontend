// User Profile Page - View and Edit Profile
import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { userService, fileService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaEdit, FaSave, FaTimes, FaSpinner, FaUserCircle,
  FaCalendar, FaShieldAlt, FaCheckCircle, FaCamera, FaTrash
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { resolveImageUrl } from '@/utils/imageUrl';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postalCode: ''
  });

  // Avatar upload
  const avatarInputRef = useRef(null);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const handleAvatarPick = () => avatarInputRef.current?.click();

  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please choose an image file');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image must be under 10 MB');
      return;
    }
    try {
      setAvatarUploading(true);
      const upload = await fileService.uploadImage(file, {
        userId: user.id,
        folder: `avatars/${user.id}`,
        entityType: 'user',
        entityId: user.id,
      });
      const url = upload?.data?.secureUrl || upload?.data?.url
                || upload?.secureUrl || upload?.url;
      if (!url) throw new Error('Upload succeeded but no URL returned');

      const save = await userService.updateProfileImage(user.id, url);
      const saved = save?.data || save;
      setUserData(prev => ({ ...(prev || {}), profileImageUrl: saved?.profileImageUrl || url }));
      if (typeof updateUser === 'function') {
        updateUser({ ...(user || {}), profileImageUrl: saved?.profileImageUrl || url });
      }
      toast.success('Profile picture updated');
    } catch (err) {
      toast.error(err?.message || 'Avatar upload failed');
    } finally {
      setAvatarUploading(false);
      if (avatarInputRef.current) avatarInputRef.current.value = '';
    }
  };

  const handleAvatarRemove = async () => {
    try {
      setAvatarUploading(true);
      await userService.updateProfileImage(user.id, '');
      setUserData(prev => ({ ...(prev || {}), profileImageUrl: null }));
      if (typeof updateUser === 'function') {
        updateUser({ ...(user || {}), profileImageUrl: null });
      }
      toast.success('Profile picture removed');
    } catch (err) {
      toast.error(err?.message || 'Failed to remove avatar');
    } finally {
      setAvatarUploading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [user]);

  const fetchUserProfile = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const response = await userService.getUserById(user.id);

      if (response.success && response.data) {
        setUserData(response.data);
        setFormData({
          firstName: response.data.firstName || '',
          lastName: response.data.lastName || '',
          contactNumber: response.data.contactNumber || '',
          country: response.data.country || '',
          state: response.data.state || '',
          city: response.data.city || '',
          address: response.data.address || '',
          postalCode: response.data.postalCode || ''
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error(error.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await userService.updateUser(user.id, formData);

      if (response.success && response.data) {
        setUserData(response.data);
        updateUser(response.data);
        setEditing(false);
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      contactNumber: userData?.contactNumber || '',
      country: userData?.country || '',
      state: userData?.state || '',
      city: userData?.city || '',
      address: userData?.address || '',
      postalCode: userData?.postalCode || ''
    });
    setEditing(false);
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'ROLE_SUPER_ADMIN': return 'bg-danger text-white';
      case 'ROLE_ADMIN': return 'bg-primary text-white';
      case 'ROLE_USER': return 'bg-info text-white';
      default: return 'bg-secondary text-white';
    }
  };

  if (loading) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading profile...</p>
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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">My Profile</h4>
              <p className="text-muted mb-0">View and manage your profile information</p>
            </div>
            {!editing ? (
              <button
                className="btn btn-primary"
                onClick={() => setEditing(true)}
              >
                <FaEdit className="me-2" />
                Edit Profile
              </button>
            ) : (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCancel}
                  disabled={saving}
                >
                  <FaTimes className="me-2" />
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSave}
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
            )}
          </div>
        </Col>
      </Row>

      <Row>
        {/* Profile Card */}
        <Col lg={4} className="mb-4">
          <Card className="border-0 shadow-sm">
            <CardBody className="text-center">
              <div className="mb-4 position-relative d-inline-block">
                {userData?.profileImageUrl ? (
                  <img
                    src={resolveImageUrl(userData.profileImageUrl)}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: 120, height: 120, objectFit: 'cover' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <div className="avatar-xl bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                       style={{ width: '120px', height: '120px', fontSize: '48px' }}>
                    <FaUserCircle />
                  </div>
                )}

                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-primary rounded-circle position-absolute"
                  onClick={handleAvatarPick}
                  disabled={avatarUploading}
                  title="Change profile picture"
                  style={{ bottom: 0, right: 0, width: 36, height: 36, padding: 0 }}
                >
                  {avatarUploading ? <FaSpinner className="fa-spin" /> : <FaCamera />}
                </button>
                {userData?.profileImageUrl && !avatarUploading && (
                  <button
                    type="button"
                    className="btn btn-sm btn-light rounded-circle position-absolute border"
                    onClick={handleAvatarRemove}
                    title="Remove profile picture"
                    style={{ top: 0, right: 0, width: 28, height: 28, padding: 0 }}
                  >
                    <FaTrash className="text-danger" style={{ fontSize: 12 }} />
                  </button>
                )}
              </div>

              <h4 className="mb-1">{userData?.firstName} {userData?.lastName}</h4>
              <p className="text-muted mb-3">{userData?.email}</p>

              <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
                {userData?.roles?.map((role, idx) => (
                  <span key={idx} className={`badge ${getRoleBadgeClass(role)}`}>
                    {role.replace('ROLE_', '')}
                  </span>
                ))}
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Status</span>
                  <span className={`badge ${userData?.status === 'ACTIVE' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}`}>
                    {userData?.status}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Email Verified</span>
                  <span>
                    {userData?.emailVerified ? (
                      <FaCheckCircle className="text-success" />
                    ) : (
                      <FaTimes className="text-danger" />
                    )}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Member Since</span>
                  <span className="small">
                    {new Date(userData?.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Permissions Card */}
          <Card className="border-0 shadow-sm mt-3">
            <CardBody>
              <h6 className="mb-3">
                <FaShieldAlt className="me-2" />
                Permissions
              </h6>
              <div className="d-flex flex-wrap gap-1">
                {userData?.permissions?.slice(0, 6).map((permission, idx) => (
                  <span key={idx} className="badge bg-light text-dark border small">
                    {permission}
                  </span>
                ))}
                {userData?.permissions?.length > 6 && (
                  <span className="badge bg-light text-dark border small">
                    +{userData.permissions.length - 6} more
                  </span>
                )}
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* Profile Details */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              {/* Tabs */}
              <Nav tabs className="mb-4">
                <NavItem>
                  <NavLink
                    className={activeTab === 'overview' ? 'active' : ''}
                    onClick={() => setActiveTab('overview')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaUser className="me-2" />
                    Overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 'personal' ? 'active' : ''}
                    onClick={() => setActiveTab('personal')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaMapMarkerAlt className="me-2" />
                    Personal Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 'account' ? 'active' : ''}
                    onClick={() => setActiveTab('account')}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaCalendar className="me-2" />
                    Account Info
                  </NavLink>
                </NavItem>
              </Nav>

              {/* Tab Content */}
              <TabContent activeTab={activeTab}>
                {/* Overview Tab */}
                <TabPane tabId="overview">
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="form-label">
                        <FaUser className="me-2" />
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">
                        <FaEnvelope className="me-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={userData?.email || ''}
                        disabled
                      />
                      <small className="text-muted">Email cannot be changed</small>
                    </Col>
                    <Col md={6}>
                      <label className="form-label">
                        <FaPhone className="me-2" />
                        Contact Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                  </Row>
                </TabPane>

                {/* Personal Info Tab */}
                <TabPane tabId="personal">
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">State/Province</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col md={6}>
                      <label className="form-label">Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                    <Col xs={12}>
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </Col>
                  </Row>
                </TabPane>

                {/* Account Info Tab */}
                <TabPane tabId="account">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">User ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.id || ''}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Account Status</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.status || ''}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Verified</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.emailVerified ? 'Yes' : 'No'}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Verified</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.phoneVerified ? 'Yes' : 'No'}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Member Since</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.createdAt ? new Date(userData.createdAt).toLocaleString() : ''}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Login</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData?.lastLoginAt ? new Date(userData.lastLoginAt).toLocaleString() : 'N/A'}
                        disabled
                      />
                    </div>
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

export default Profile;
