// Admin Commission Configuration Page
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { referralService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSpinner, FaPlus, FaEdit, FaTrash, FaCheckCircle, FaPercent,
  FaTimes, FaToggleOn, FaToggleOff
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RoleGate from '@/Components/RoleGate';

const AdminCommissionConfig = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [slabs, setSlabs] = useState([]);

  // Form Modal
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedSlab, setSelectedSlab] = useState(null);
  const [form, setForm] = useState({
    name: '',
    minAmount: '',
    maxAmount: '',
    commissionPercentage: '',
    description: '',
    active: true,
    applicableQuarter: '',
    applicableYear: ''
  });

  // Delete Confirmation
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchSlabs();
  }, []);

  const fetchSlabs = async () => {
    try {
      setLoading(true);
      const response = await referralService.getCommissionSlabs();
      if (response.success && response.data) {
        setSlabs(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching slabs:', error);
      toast.error(error.message || 'Failed to load commission slabs');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      minAmount: '',
      maxAmount: '',
      commissionPercentage: '',
      description: '',
      active: true,
      applicableQuarter: '',
      applicableYear: ''
    });
    setEditMode(false);
    setSelectedSlab(null);
  };

  const handleCreateClick = () => {
    resetForm();
    setShowModal(true);
  };

  const handleEditClick = (slab) => {
    setSelectedSlab(slab);
    setEditMode(true);
    setForm({
      name: slab.name || '',
      minAmount: slab.minAmount || '',
      maxAmount: slab.maxAmount || '',
      commissionPercentage: slab.commissionPercentage || '',
      description: slab.description || '',
      active: slab.active !== false,
      applicableQuarter: slab.applicableQuarter || '',
      applicableYear: slab.applicableYear || ''
    });
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.minAmount || !form.commissionPercentage) {
      toast.error('Please fill all required fields');
      return;
    }

    // Validate min < max
    if (form.maxAmount && parseFloat(form.minAmount) >= parseFloat(form.maxAmount)) {
      toast.error('Maximum amount must be greater than minimum amount');
      return;
    }

    try {
      setSubmitting(true);
      const data = {
        ...form,
        minAmount: parseFloat(form.minAmount).toFixed(2),
        maxAmount: form.maxAmount ? parseFloat(form.maxAmount).toFixed(2) : null,
        commissionPercentage: parseFloat(form.commissionPercentage).toFixed(2)
      };

      let response;
      if (editMode && selectedSlab) {
        response = await referralService.updateCommissionSlab(selectedSlab.id, data);
      } else {
        response = await referralService.createCommissionSlab(data);
      }

      if (response.success) {
        toast.success(editMode ? 'Commission slab updated!' : 'Commission slab created!');
        setShowModal(false);
        resetForm();
        fetchSlabs();
      }
    } catch (error) {
      console.error('Error saving slab:', error);
      toast.error(error.message || 'Failed to save commission slab');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      setSubmitting(true);
      const response = await referralService.deleteCommissionSlab(deleteId);

      if (response.success) {
        toast.success('Commission slab deleted!');
        setShowDeleteModal(false);
        setDeleteId(null);
        fetchSlabs();
      }
    } catch (error) {
      console.error('Error deleting slab:', error);
      toast.error(error.message || 'Failed to delete commission slab');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (slab) => {
    try {
      const response = await referralService.updateCommissionSlab(slab.id, {
        ...slab,
        active: !slab.active
      });

      if (response.success) {
        toast.success(`Slab ${slab.active ? 'deactivated' : 'activated'}!`);
        fetchSlabs();
      }
    } catch (error) {
      console.error('Error toggling slab:', error);
      toast.error('Failed to update slab status');
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return 'Unlimited';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseFloat(amount));
  };

  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];

  if (loading) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading commission slabs...</p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <RoleGate allowedRoles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
      <Container fluid>
        {/* Header */}
        <Row className="mb-4">
          <Col xs={12}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-1">Commission Configuration</h4>
                <p className="text-muted mb-0">Manage referral commission slabs and rates</p>
              </div>
              <button className="btn btn-primary" onClick={handleCreateClick}>
                <FaPlus className="me-2" />
                Add Commission Slab
              </button>
            </div>
          </Col>
        </Row>

        {/* Info Card */}
        <Row className="mb-4">
          <Col xs={12}>
            <Card className="border-0 shadow-sm bg-info-subtle">
              <CardBody>
                <h6 className="text-info mb-2">
                  <FaPercent className="me-2" />
                  How Commission Slabs Work
                </h6>
                <p className="mb-0 text-muted">
                  Commission slabs define the percentage of referral commission earned based on the investment amount.
                  When a referred user makes an investment, the applicable slab determines the commission rate.
                  Slabs are checked from lowest to highest minimum amount to find the matching range.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Commission Slabs */}
        <Row className="g-4">
          {slabs.length === 0 ? (
            <Col xs={12}>
              <Card className="border-0 shadow-sm">
                <CardBody className="text-center py-5">
                  <FaPercent className="fs-1 text-muted mb-3" />
                  <h5 className="text-muted">No commission slabs configured</h5>
                  <p className="text-muted mb-3">Create your first commission slab to get started</p>
                  <button className="btn btn-primary" onClick={handleCreateClick}>
                    <FaPlus className="me-2" />
                    Add Commission Slab
                  </button>
                </CardBody>
              </Card>
            </Col>
          ) : (
            slabs.map((slab) => (
              <Col lg={4} md={6} key={slab.id}>
                <Card className={`border-0 shadow-sm h-100 ${!slab.active ? 'opacity-50' : ''}`}>
                  <CardBody>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-1">{slab.name}</h5>
                        <Badge color={slab.active ? 'success' : 'secondary'}>
                          {slab.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <div className="text-end">
                        <h3 className="text-primary mb-0">{slab.commissionPercentage}%</h3>
                        <small className="text-muted">Commission</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between text-muted small mb-1">
                        <span>Investment Range</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>{formatCurrency(slab.minAmount)}</span>
                        <span className="text-muted">to</span>
                        <span>{formatCurrency(slab.maxAmount)}</span>
                      </div>
                    </div>

                    {slab.description && (
                      <p className="text-muted small mb-3">{slab.description}</p>
                    )}

                    {(slab.applicableQuarter || slab.applicableYear) && (
                      <div className="mb-3">
                        <small className="text-muted">
                          Applicable: Q{slab.applicableQuarter} {slab.applicableYear}
                        </small>
                      </div>
                    )}

                    <div className="d-flex gap-2">
                      <button
                        className={`btn btn-sm ${slab.active ? 'btn-outline-warning' : 'btn-outline-success'}`}
                        onClick={() => handleToggleActive(slab)}
                        title={slab.active ? 'Deactivate' : 'Activate'}
                      >
                        {slab.active ? <FaToggleOff /> : <FaToggleOn />}
                      </button>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleEditClick(slab)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteClick(slab.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Summary Table */}
        {slabs.length > 0 && (
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="mb-3">Commission Slab Summary</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th>Slab Name</th>
                          <th>Min Amount</th>
                          <th>Max Amount</th>
                          <th>Commission %</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slabs.sort((a, b) => parseFloat(a.minAmount) - parseFloat(b.minAmount)).map((slab) => (
                          <tr key={slab.id} className={!slab.active ? 'table-secondary' : ''}>
                            <td><strong>{slab.name}</strong></td>
                            <td>{formatCurrency(slab.minAmount)}</td>
                            <td>{formatCurrency(slab.maxAmount)}</td>
                            <td>
                              <Badge color="primary" className="px-3">{slab.commissionPercentage}%</Badge>
                            </td>
                            <td>
                              <Badge color={slab.active ? 'success' : 'secondary'}>
                                {slab.active ? 'Active' : 'Inactive'}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Create/Edit Modal */}
        <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
          <ModalHeader toggle={() => setShowModal(false)}>
            {editMode ? 'Edit Commission Slab' : 'Create New Commission Slab'}
          </ModalHeader>
          <ModalBody>
            <Row className="g-3">
              <Col md={6}>
                <label className="form-label">Slab Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., Standard, Premium, VIP"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Commission Percentage *</label>
                <div className="input-group">
                  <input
                    type="number"
                    step="0.01"
                    max="100"
                    className="form-control"
                    placeholder="0.00"
                    value={form.commissionPercentage}
                    onChange={(e) => setForm(prev => ({ ...prev, commissionPercentage: e.target.value }))}
                  />
                  <span className="input-group-text">%</span>
                </div>
              </Col>
              <Col md={6}>
                <label className="form-label">Minimum Amount *</label>
                <div className="input-group">
                  <span className="input-group-text">INR</span>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    placeholder="0.00"
                    value={form.minAmount}
                    onChange={(e) => setForm(prev => ({ ...prev, minAmount: e.target.value }))}
                  />
                </div>
              </Col>
              <Col md={6}>
                <label className="form-label">Maximum Amount</label>
                <div className="input-group">
                  <span className="input-group-text">INR</span>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    placeholder="Leave empty for unlimited"
                    value={form.maxAmount}
                    onChange={(e) => setForm(prev => ({ ...prev, maxAmount: e.target.value }))}
                  />
                </div>
                <small className="text-muted">Leave empty for unlimited (no upper cap)</small>
              </Col>
              <Col md={12}>
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Description of this commission tier..."
                  value={form.description}
                  onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Applicable Quarter</label>
                <select
                  className="form-select"
                  value={form.applicableQuarter}
                  onChange={(e) => setForm(prev => ({ ...prev, applicableQuarter: e.target.value }))}
                >
                  <option value="">All Quarters</option>
                  <option value="1">Q1 (Jan-Mar)</option>
                  <option value="2">Q2 (Apr-Jun)</option>
                  <option value="3">Q3 (Jul-Sep)</option>
                  <option value="4">Q4 (Oct-Dec)</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Applicable Year</label>
                <select
                  className="form-select"
                  value={form.applicableYear}
                  onChange={(e) => setForm(prev => ({ ...prev, applicableYear: e.target.value }))}
                >
                  <option value="">All Years</option>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Status</label>
                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="activeSwitch"
                    checked={form.active}
                    onChange={(e) => setForm(prev => ({ ...prev, active: e.target.checked }))}
                  />
                  <label className="form-check-label" htmlFor="activeSwitch">
                    {form.active ? 'Active' : 'Inactive'}
                  </label>
                </div>
              </Col>
            </Row>

            {form.minAmount && form.commissionPercentage && (
              <div className="alert alert-info mt-3">
                <h6 className="mb-2">Example Calculation</h6>
                <p className="mb-0">
                  For an investment of <strong>{formatCurrency(form.minAmount)}</strong>,
                  the referrer will earn a commission of{' '}
                  <strong>{formatCurrency((parseFloat(form.minAmount) * parseFloat(form.commissionPercentage)) / 100)}</strong>
                  {' '}({form.commissionPercentage}%)
                </p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-secondary" onClick={() => setShowModal(false)} disabled={submitting}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={submitting}>
              {submitting ? (
                <>
                  <FaSpinner className="fa-spin me-2" />
                  Saving...
                </>
              ) : (
                <>
                  <FaCheckCircle className="me-2" />
                  {editMode ? 'Update' : 'Create'}
                </>
              )}
            </button>
          </ModalFooter>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal isOpen={showDeleteModal} toggle={() => setShowDeleteModal(false)}>
          <ModalHeader toggle={() => setShowDeleteModal(false)}>
            Confirm Delete
          </ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this commission slab? This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)} disabled={submitting}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleDelete} disabled={submitting}>
              {submitting ? (
                <>
                  <FaSpinner className="fa-spin me-2" />
                  Deleting...
                </>
              ) : (
                <>
                  <FaTrash className="me-2" />
                  Delete
                </>
              )}
            </button>
          </ModalFooter>
        </Modal>
      </Container>
    </RoleGate>
  );
};

export default AdminCommissionConfig;
