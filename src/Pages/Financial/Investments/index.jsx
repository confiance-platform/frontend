// Investments Page - Browse and Invest in Products
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { investmentService, transactionService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaChartLine, FaLock, FaMoneyBillWave,
  FaInfoCircle, FaCheckCircle, FaTimes, FaFilter
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { INVESTMENT_TYPES, INVESTMENT_STATUS, TRANSACTION_TYPES, TRANSACTION_STATUS } from '@/config/constants';

const Investments = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [investing, setInvesting] = useState(false);
  const [investments, setInvestments] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 12,
    totalElements: 0,
    totalPages: 0
  });

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState(INVESTMENT_STATUS.ACTIVE);

  // Investment Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investmentError, setInvestmentError] = useState('');

  useEffect(() => {
    fetchInvestments();
  }, [pagination.pageNumber, typeFilter, statusFilter]);

  const fetchInvestments = async () => {
    try {
      setLoading(true);
      const response = await investmentService.getAllInvestments({
        page: pagination.pageNumber,
        size: pagination.pageSize
      });

      if (response.success && response.data) {
        setInvestments(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageable?.pageNumber || 0,
          pageSize: response.data.pageable?.pageSize || 12,
          totalElements: response.data.totalElements || 0,
          totalPages: response.data.totalPages || 0
        });
      }
    } catch (error) {
      console.error('Error fetching investments:', error);
      toast.error(error.message || 'Failed to load investments');
    } finally {
      setLoading(false);
    }
  };

  const handleInvestClick = (product) => {
    setSelectedProduct(product);
    setInvestmentAmount('');
    setInvestmentError('');
    setShowModal(true);
  };

  const validateInvestment = () => {
    const amount = parseFloat(investmentAmount);
    const min = parseFloat(selectedProduct.minInvestment);
    const max = selectedProduct.maxInvestment ? parseFloat(selectedProduct.maxInvestment) : Infinity;

    if (!investmentAmount || amount <= 0) {
      setInvestmentError('Please enter a valid amount');
      return false;
    }

    if (amount < min) {
      setInvestmentError(`Minimum investment is ${formatCurrency(min)}`);
      return false;
    }

    if (amount > max) {
      setInvestmentError(`Maximum investment is ${formatCurrency(max)}`);
      return false;
    }

    setInvestmentError('');
    return true;
  };

  const handleInvest = async () => {
    if (!validateInvestment()) {
      toast.error('Please fix the errors');
      return;
    }

    try {
      setInvesting(true);

      // Create investment transaction
      const transactionData = {
        userId: user.id,
        type: TRANSACTION_TYPES.INVESTMENT,
        amount: parseFloat(investmentAmount).toFixed(2),
        status: TRANSACTION_STATUS.COMPLETED,
        description: `Investment in ${selectedProduct.name}`,
        referenceId: `INV-${Date.now()}`
      };

      const response = await transactionService.createTransaction(transactionData);

      if (response.success) {
        toast.success(`Successfully invested ${formatCurrency(investmentAmount)} in ${selectedProduct.name}`);
        setShowModal(false);
        setSelectedProduct(null);
        setInvestmentAmount('');
      }
    } catch (error) {
      console.error('Error creating investment:', error);
      toast.error(error.message || 'Failed to create investment');
    } finally {
      setInvesting(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(parseFloat(amount || 0));
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'MUTUAL_FUND': return '📊';
      case 'EQUITY': return '📈';
      case 'BOND': return '📜';
      case 'FIXED_DEPOSIT': return '🏦';
      case 'RECURRING_DEPOSIT': return '💰';
      case 'GOLD': return '🥇';
      case 'REAL_ESTATE': return '🏠';
      case 'CRYPTO': return '₿';
      default: return '💼';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'MUTUAL_FUND': return 'primary';
      case 'EQUITY': return 'success';
      case 'BOND': return 'info';
      case 'FIXED_DEPOSIT': return 'warning';
      case 'GOLD': return 'warning';
      case 'CRYPTO': return 'danger';
      default: return 'secondary';
    }
  };

  const getRiskLevel = (returns) => {
    const rate = parseFloat(returns);
    if (rate < 7) return { level: 'Low', color: 'success' };
    if (rate < 12) return { level: 'Medium', color: 'warning' };
    return { level: 'High', color: 'danger' };
  };

  const filteredInvestments = investments.filter(inv => {
    const matchesSearch =
      inv.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || inv.type === typeFilter;
    const matchesStatus = !statusFilter || inv.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  if (loading && investments.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading investment products...</p>
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
            <h4 className="mb-1">Investment Products</h4>
            <p className="text-muted mb-0">Explore and invest in various financial products</p>
          </div>
        </Col>
      </Row>

      {/* Filters */}
      <Row className="mb-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <Row className="g-3">
                <Col md={6}>
                  <div className="position-relative">
                    <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                    <input
                      type="text"
                      className="form-control ps-5"
                      placeholder="Search investment products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <select
                    className="form-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    {Object.entries(INVESTMENT_TYPES).map(([key, value]) => (
                      <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
                    ))}
                  </select>
                </Col>
                <Col md={3}>
                  <select
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    {Object.entries(INVESTMENT_STATUS).map(([key, value]) => (
                      <option key={value} value={value}>{key}</option>
                    ))}
                  </select>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Investment Products Grid */}
      <Row className="g-4">
        {filteredInvestments.length === 0 ? (
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody className="text-center py-5">
                <FaChartLine className="fs-1 text-muted mb-3" />
                <h5 className="text-muted">No investment products found</h5>
                <p className="text-muted mb-0">Try adjusting your filters</p>
              </CardBody>
            </Card>
          </Col>
        ) : (
          filteredInvestments.map((product) => {
            const risk = getRiskLevel(product.expectedReturns);
            return (
              <Col key={product.id} lg={4} md={6}>
                <Card className="border-0 shadow-sm h-100 hover-card">
                  <CardBody className="d-flex flex-column">
                    {/* Header */}
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <span className="fs-1 me-2">{getTypeIcon(product.type)}</span>
                        <div>
                          <h6 className="mb-0">{product.name}</h6>
                          <small className={`badge bg-${getTypeColor(product.type)}-subtle text-${getTypeColor(product.type)}`}>
                            {product.type.replace(/_/g, ' ')}
                          </small>
                        </div>
                      </div>
                      {product.status === INVESTMENT_STATUS.ACTIVE && (
                        <span className="badge bg-success-subtle text-success">
                          <FaCheckCircle className="me-1" />
                          Active
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted small mb-3 flex-grow-1">
                      {product.description || 'No description available'}
                    </p>

                    {/* Details */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">Expected Returns</span>
                        <strong className="text-success fs-5">
                          {parseFloat(product.expectedReturns).toFixed(2)}% p.a.
                        </strong>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">Risk Level</span>
                        <span className={`badge bg-${risk.color}-subtle text-${risk.color}`}>
                          {risk.level}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">Min Investment</span>
                        <strong>{formatCurrency(product.minInvestment)}</strong>
                      </div>

                      {product.maxInvestment && (
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-muted small">Max Investment</span>
                          <strong>{formatCurrency(product.maxInvestment)}</strong>
                        </div>
                      )}

                      {product.lockInPeriodMonths > 0 && (
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted small">
                            <FaLock className="me-1" />
                            Lock-in Period
                          </span>
                          <strong>{product.lockInPeriodMonths} months</strong>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleInvestClick(product)}
                      disabled={product.status !== INVESTMENT_STATUS.ACTIVE}
                    >
                      <FaMoneyBillWave className="me-2" />
                      {product.status === INVESTMENT_STATUS.ACTIVE ? 'Invest Now' : 'Not Available'}
                    </button>
                  </CardBody>
                </Card>
              </Col>
            );
          })
        )}
      </Row>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <Row className="mt-4">
          <Col xs={12}>
            <div className="d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${pagination.pageNumber === 0 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(pagination.pageNumber - 1)}
                      disabled={pagination.pageNumber === 0}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(Math.min(pagination.totalPages, 5))].map((_, index) => (
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
          </Col>
        </Row>
      )}

      {/* Investment Modal */}
      <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
        <ModalHeader toggle={() => setShowModal(false)}>
          Invest in {selectedProduct?.name}
        </ModalHeader>
        <ModalBody>
          {selectedProduct && (
            <>
              {/* Product Info */}
              <div className="alert alert-info mb-4">
                <div className="d-flex align-items-start">
                  <FaInfoCircle className="fs-4 me-3 mt-1" />
                  <div>
                    <h6 className="mb-2">Product Details</h6>
                    <ul className="mb-0 ps-3">
                      <li>Expected Returns: <strong>{parseFloat(selectedProduct.expectedReturns).toFixed(2)}% p.a.</strong></li>
                      <li>Minimum Investment: <strong>{formatCurrency(selectedProduct.minInvestment)}</strong></li>
                      {selectedProduct.maxInvestment && (
                        <li>Maximum Investment: <strong>{formatCurrency(selectedProduct.maxInvestment)}</strong></li>
                      )}
                      {selectedProduct.lockInPeriodMonths > 0 && (
                        <li>Lock-in Period: <strong>{selectedProduct.lockInPeriodMonths} months</strong></li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Investment Amount */}
              <div className="mb-3">
                <label className="form-label">Investment Amount *</label>
                <div className="input-group">
                  <span className="input-group-text">₹</span>
                  <input
                    type="number"
                    step="0.01"
                    className={`form-control ${investmentError ? 'is-invalid' : ''}`}
                    value={investmentAmount}
                    onChange={(e) => {
                      setInvestmentAmount(e.target.value);
                      setInvestmentError('');
                    }}
                    onBlur={validateInvestment}
                    placeholder="Enter amount"
                  />
                  {investmentError && (
                    <div className="invalid-feedback">{investmentError}</div>
                  )}
                </div>
                <small className="text-muted">
                  Min: {formatCurrency(selectedProduct.minInvestment)}
                  {selectedProduct.maxInvestment && ` | Max: ${formatCurrency(selectedProduct.maxInvestment)}`}
                </small>
              </div>

              {/* Expected Returns Calculation */}
              {investmentAmount && !investmentError && (
                <div className="alert alert-success">
                  <h6 className="mb-2">Expected Returns</h6>
                  <p className="mb-0">
                    After 1 year, your investment of <strong>{formatCurrency(investmentAmount)}</strong> is expected to grow to approximately{' '}
                    <strong className="text-success">
                      {formatCurrency(
                        parseFloat(investmentAmount) * (1 + parseFloat(selectedProduct.expectedReturns) / 100)
                      )}
                    </strong>
                    {' '}(+{formatCurrency(parseFloat(investmentAmount) * parseFloat(selectedProduct.expectedReturns) / 100)})
                  </p>
                  <small className="text-muted">* Returns are indicative and not guaranteed</small>
                </div>
              )}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
            disabled={investing}
          >
            <FaTimes className="me-2" />
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleInvest}
            disabled={investing || !!investmentError || !investmentAmount}
          >
            {investing ? (
              <>
                <FaSpinner className="fa-spin me-2" />
                Processing...
              </>
            ) : (
              <>
                <FaCheckCircle className="me-2" />
                Confirm Investment
              </>
            )}
          </button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Investments;
