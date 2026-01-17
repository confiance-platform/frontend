// Admin Recommendations Management Page
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { recommendationService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaPlus, FaEdit, FaTrash, FaArrowUp, FaArrowDown,
  FaCheckCircle, FaClock, FaTimes, FaFilter, FaExclamationTriangle
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MARKETS, MARKET_LABELS, TRADE_TYPES, TRADE_TYPE_LABELS, RECOMMENDATION_STATUS } from '@/config/constants';
import RoleGate from '@/Components/RoleGate';

const AdminRecommendations = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0
  });

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [marketFilter, setMarketFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Form Modal
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedRec, setSelectedRec] = useState(null);
  const [form, setForm] = useState({
    market: 'INDIA',
    currency: 'INR',
    tickerSymbol: '',
    companyName: '',
    tradeType: 'POSITIONAL',
    recommendationDate: new Date().toISOString().split('T')[0],
    entryPrice: '',
    targetPrice: '',
    stopLoss: '',
    status: 'OPEN',
    remarks: ''
  });

  // Delete Confirmation
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, [pagination.pageNumber, marketFilter, statusFilter]);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      const response = await recommendationService.filterRecommendations(
        { market: marketFilter || undefined, status: statusFilter || undefined },
        { page: pagination.pageNumber, size: pagination.pageSize }
      );

      if (response.success && response.data) {
        setRecommendations(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageable?.pageNumber || 0,
          pageSize: response.data.pageable?.pageSize || 20,
          totalElements: response.data.totalElements || 0,
          totalPages: response.data.totalPages || 0
        });
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      toast.error(error.message || 'Failed to load recommendations');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      market: 'INDIA',
      currency: 'INR',
      tickerSymbol: '',
      companyName: '',
      tradeType: 'POSITIONAL',
      recommendationDate: new Date().toISOString().split('T')[0],
      entryPrice: '',
      targetPrice: '',
      stopLoss: '',
      status: 'OPEN',
      remarks: ''
    });
    setEditMode(false);
    setSelectedRec(null);
  };

  const handleCreateClick = () => {
    resetForm();
    setShowModal(true);
  };

  const handleEditClick = (rec) => {
    setSelectedRec(rec);
    setEditMode(true);
    setForm({
      market: rec.market || 'INDIA',
      currency: rec.currency || 'INR',
      tickerSymbol: rec.tickerSymbol || '',
      companyName: rec.companyName || '',
      tradeType: rec.tradeType || 'POSITIONAL',
      recommendationDate: rec.recommendationDate || new Date().toISOString().split('T')[0],
      entryPrice: rec.entryPrice || '',
      targetPrice: rec.targetPrice || '',
      stopLoss: rec.stopLoss || '',
      status: rec.status || 'OPEN',
      remarks: rec.remarks || ''
    });
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleSubmit = async () => {
    if (!form.tickerSymbol || !form.entryPrice || !form.targetPrice || !form.stopLoss) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      setSubmitting(true);
      let response;

      if (editMode && selectedRec) {
        response = await recommendationService.updateRecommendation(selectedRec.id, form);
      } else {
        response = await recommendationService.createRecommendation(form);
      }

      if (response.success) {
        toast.success(editMode ? 'Recommendation updated successfully!' : 'Recommendation created successfully!');
        setShowModal(false);
        resetForm();
        fetchRecommendations();
      }
    } catch (error) {
      console.error('Error saving recommendation:', error);
      toast.error(error.message || 'Failed to save recommendation');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      setSubmitting(true);
      const response = await recommendationService.deleteRecommendation(deleteId);

      if (response.success) {
        toast.success('Recommendation deleted successfully!');
        setShowDeleteModal(false);
        setDeleteId(null);
        fetchRecommendations();
      }
    } catch (error) {
      console.error('Error deleting recommendation:', error);
      toast.error(error.message || 'Failed to delete recommendation');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(parseFloat(amount || 0));
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      OPEN: { color: 'success', text: 'Open' },
      CLOSED: { color: 'secondary', text: 'Closed' },
      PARTIALLY_SOLD: { color: 'warning', text: 'Partial' },
      EXPIRED: { color: 'danger', text: 'Expired' }
    };
    const config = statusConfig[status] || statusConfig.OPEN;
    return <Badge color={config.color}>{config.text}</Badge>;
  };

  const getMarketFlag = (market) => {
    const flags = {
      US: '🇺🇸', INDIA: '🇮🇳', UK: '🇬🇧', EU: '🇪🇺', SINGAPORE: '🇸🇬',
      HONG_KONG: '🇭🇰', JAPAN: '🇯🇵', CANADA: '🇨🇦', AUSTRALIA: '🇦🇺'
    };
    return flags[market] || '🌍';
  };

  const getCurrencyByMarket = (market) => {
    const currencies = {
      US: 'USD', INDIA: 'INR', UK: 'GBP', EU: 'EUR', SINGAPORE: 'SGD',
      HONG_KONG: 'HKD', JAPAN: 'JPY', CANADA: 'CAD', AUSTRALIA: 'AUD'
    };
    return currencies[market] || 'INR';
  };

  const calculateRiskReward = () => {
    if (form.entryPrice && form.targetPrice && form.stopLoss) {
      const entry = parseFloat(form.entryPrice);
      const target = parseFloat(form.targetPrice);
      const stop = parseFloat(form.stopLoss);
      const reward = target - entry;
      const risk = entry - stop;
      if (risk > 0) {
        return (reward / risk).toFixed(2);
      }
    }
    return 'N/A';
  };

  const filteredRecommendations = recommendations.filter(rec => {
    const matchesSearch =
      rec.tickerSymbol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  if (loading && recommendations.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading recommendations...</p>
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
                <h4 className="mb-1">Recommendation Management</h4>
                <p className="text-muted mb-0">Create and manage stock recommendations</p>
              </div>
              <button className="btn btn-primary" onClick={handleCreateClick}>
                <FaPlus className="me-2" />
                Create Recommendation
              </button>
            </div>
          </Col>
        </Row>

        {/* Filters */}
        <Row className="mb-4">
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <Row className="g-3">
                  <Col md={4}>
                    <div className="position-relative">
                      <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                      <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Search by symbol or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <select
                      className="form-select"
                      value={marketFilter}
                      onChange={(e) => setMarketFilter(e.target.value)}
                    >
                      <option value="">All Markets</option>
                      {Object.entries(MARKETS).map(([key, value]) => (
                        <option key={value} value={value}>
                          {getMarketFlag(value)} {MARKET_LABELS[value]}
                        </option>
                      ))}
                    </select>
                  </Col>
                  <Col md={4}>
                    <select
                      className="form-select"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="">All Status</option>
                      {Object.entries(RECOMMENDATION_STATUS).map(([key, value]) => (
                        <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
                      ))}
                    </select>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Recommendations Table */}
        <Row>
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                {filteredRecommendations.length === 0 ? (
                  <div className="text-center py-5">
                    <FaExclamationTriangle className="fs-1 text-muted mb-3" />
                    <h5 className="text-muted">No recommendations found</h5>
                    <p className="text-muted mb-3">Create your first recommendation</p>
                    <button className="btn btn-primary" onClick={handleCreateClick}>
                      <FaPlus className="me-2" />
                      Create Recommendation
                    </button>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Market</th>
                          <th>Symbol / Company</th>
                          <th>Trade Type</th>
                          <th>Entry</th>
                          <th>Target</th>
                          <th>Stop Loss</th>
                          <th>R:R</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredRecommendations.map((rec) => (
                          <tr key={rec.id}>
                            <td>
                              <span className="fs-4 me-1">{getMarketFlag(rec.market)}</span>
                              <small>{rec.market}</small>
                            </td>
                            <td>
                              <strong>{rec.tickerSymbol}</strong>
                              <div className="small text-muted">{rec.companyName}</div>
                            </td>
                            <td>
                              <Badge color="info">{TRADE_TYPE_LABELS[rec.tradeType] || rec.tradeType}</Badge>
                            </td>
                            <td>{formatCurrency(rec.entryPrice, rec.currency)}</td>
                            <td className="text-success">{formatCurrency(rec.targetPrice, rec.currency)}</td>
                            <td className="text-danger">{formatCurrency(rec.stopLoss, rec.currency)}</td>
                            <td><Badge color="secondary">{rec.riskRewardRatio || 'N/A'}</Badge></td>
                            <td>{getStatusBadge(rec.status)}</td>
                            <td>{formatDate(rec.recommendationDate)}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary me-2"
                                onClick={() => handleEditClick(rec)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteClick(rec.id)}
                              >
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <Row className="mt-4">
            <Col xs={12}>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted">
                  Showing {filteredRecommendations.length} of {pagination.totalElements}
                </span>
                <nav>
                  <ul className="pagination mb-0">
                    <li className={`page-item ${pagination.pageNumber === 0 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(pagination.pageNumber - 1)}>
                        Previous
                      </button>
                    </li>
                    {[...Array(Math.min(pagination.totalPages, 5))].map((_, index) => (
                      <li key={index} className={`page-item ${pagination.pageNumber === index ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(index)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li className={`page-item ${pagination.pageNumber === pagination.totalPages - 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(pagination.pageNumber + 1)}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        )}

        {/* Create/Edit Modal */}
        <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
          <ModalHeader toggle={() => setShowModal(false)}>
            {editMode ? 'Edit Recommendation' : 'Create New Recommendation'}
          </ModalHeader>
          <ModalBody>
            <Row className="g-3">
              <Col md={6}>
                <label className="form-label">Market *</label>
                <select
                  className="form-select"
                  value={form.market}
                  onChange={(e) => {
                    const market = e.target.value;
                    setForm(prev => ({
                      ...prev,
                      market,
                      currency: getCurrencyByMarket(market)
                    }));
                  }}
                >
                  {Object.entries(MARKETS).map(([key, value]) => (
                    <option key={value} value={value}>
                      {getMarketFlag(value)} {MARKET_LABELS[value]}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <label className="form-label">Trade Type *</label>
                <select
                  className="form-select"
                  value={form.tradeType}
                  onChange={(e) => setForm(prev => ({ ...prev, tradeType: e.target.value }))}
                >
                  {Object.entries(TRADE_TYPES).map(([key, value]) => (
                    <option key={value} value={value}>{TRADE_TYPE_LABELS[value]}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <label className="form-label">Ticker Symbol *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., RELIANCE, AAPL"
                  value={form.tickerSymbol}
                  onChange={(e) => setForm(prev => ({ ...prev, tickerSymbol: e.target.value.toUpperCase() }))}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., Reliance Industries Ltd"
                  value={form.companyName}
                  onChange={(e) => setForm(prev => ({ ...prev, companyName: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Recommendation Date *</label>
                <input
                  type="date"
                  className="form-control"
                  value={form.recommendationDate}
                  onChange={(e) => setForm(prev => ({ ...prev, recommendationDate: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={form.status}
                  onChange={(e) => setForm(prev => ({ ...prev, status: e.target.value }))}
                >
                  {Object.entries(RECOMMENDATION_STATUS).map(([key, value]) => (
                    <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
                  ))}
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Entry Price *</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="0.00"
                  value={form.entryPrice}
                  onChange={(e) => setForm(prev => ({ ...prev, entryPrice: e.target.value }))}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Target Price *</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="0.00"
                  value={form.targetPrice}
                  onChange={(e) => setForm(prev => ({ ...prev, targetPrice: e.target.value }))}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Stop Loss *</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="0.00"
                  value={form.stopLoss}
                  onChange={(e) => setForm(prev => ({ ...prev, stopLoss: e.target.value }))}
                />
              </Col>
              <Col md={12}>
                <label className="form-label">Remarks / Notes</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Any notes or trading strategy..."
                  value={form.remarks}
                  onChange={(e) => setForm(prev => ({ ...prev, remarks: e.target.value }))}
                />
              </Col>
            </Row>

            {form.entryPrice && form.targetPrice && form.stopLoss && (
              <div className="alert alert-info mt-3">
                <Row>
                  <Col md={4} className="text-center">
                    <div className="small">Potential Return</div>
                    <strong className="text-success">
                      +{((parseFloat(form.targetPrice) - parseFloat(form.entryPrice)) / parseFloat(form.entryPrice) * 100).toFixed(2)}%
                    </strong>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="small">Max Risk</div>
                    <strong className="text-danger">
                      -{((parseFloat(form.entryPrice) - parseFloat(form.stopLoss)) / parseFloat(form.entryPrice) * 100).toFixed(2)}%
                    </strong>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="small">Risk:Reward Ratio</div>
                    <strong>{calculateRiskReward()}</strong>
                  </Col>
                </Row>
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
            <p>Are you sure you want to delete this recommendation? This action cannot be undone.</p>
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

export default AdminRecommendations;
