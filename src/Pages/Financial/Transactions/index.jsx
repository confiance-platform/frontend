// Transactions Page - View and Create Transactions
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { transactionService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaPlus, FaFilter, FaSearch, FaSpinner, FaDownload,
  FaArrowUp, FaArrowDown, FaMoneyBillWave, FaCalendar
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TRANSACTION_TYPES, TRANSACTION_STATUS } from '@/config/constants';

const Transactions = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0
  });

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Create Transaction Modal
  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState({
    type: TRANSACTION_TYPES.DEPOSIT,
    amount: '',
    status: TRANSACTION_STATUS.PENDING,
    description: '',
    referenceId: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user?.id) {
      fetchTransactions();
    }
  }, [user, pagination.pageNumber, typeFilter, statusFilter]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await transactionService.getUserTransactions(user.id, {
        page: pagination.pageNumber,
        size: pagination.pageSize
      });

      if (response.success && response.data) {
        setTransactions(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageable?.pageNumber || 0,
          pageSize: response.data.pageable?.pageSize || 20,
          totalElements: response.data.totalElements || 0,
          totalPages: response.data.totalPages || 0
        });
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      toast.error(error.message || 'Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.type) {
      newErrors.type = 'Transaction type is required';
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateTransaction = async () => {
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      setCreating(true);

      const transactionData = {
        userId: user.id,
        type: formData.type,
        amount: parseFloat(formData.amount).toFixed(2),
        status: formData.status,
        description: formData.description || undefined,
        referenceId: formData.referenceId || undefined
      };

      const response = await transactionService.createTransaction(transactionData);

      if (response.success) {
        toast.success('Transaction created successfully');
        setShowModal(false);
        setFormData({
          type: TRANSACTION_TYPES.DEPOSIT,
          amount: '',
          status: TRANSACTION_STATUS.PENDING,
          description: '',
          referenceId: ''
        });
        fetchTransactions();
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      toast.error(error.message || 'Failed to create transaction');
    } finally {
      setCreating(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(parseFloat(amount || 0));
  };

  const getTransactionTypeColor = (type) => {
    switch (type) {
      case 'DEPOSIT': return 'success';
      case 'WITHDRAWAL': return 'danger';
      case 'INVESTMENT': return 'primary';
      case 'RETURN': return 'info';
      case 'DIVIDEND': return 'success';
      case 'INTEREST': return 'success';
      case 'FEE': return 'warning';
      case 'REFUND': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'success';
      case 'PENDING': return 'warning';
      case 'PROCESSING': return 'info';
      case 'FAILED': return 'danger';
      case 'CANCELLED': return 'secondary';
      case 'REFUNDED': return 'primary';
      default: return 'secondary';
    }
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'DEPOSIT': return <FaArrowUp />;
      case 'WITHDRAWAL': return <FaArrowDown />;
      default: return <FaMoneyBillWave />;
    }
  };

  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch =
      txn.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.referenceId?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || txn.type === typeFilter;
    const matchesStatus = !statusFilter || txn.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  // Calculate totals
  const totalDeposits = transactions
    .filter(t => t.type === 'DEPOSIT' && t.status === 'COMPLETED')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  const totalWithdrawals = transactions
    .filter(t => t.type === 'WITHDRAWAL' && t.status === 'COMPLETED')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  const totalInvestments = transactions
    .filter(t => t.type === 'INVESTMENT' && t.status === 'COMPLETED')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  return (
    <Container fluid>
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">Transactions</h4>
              <p className="text-muted mb-0">View and manage your transaction history</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              <FaPlus className="me-2" />
              New Transaction
            </button>
          </div>
        </Col>
      </Row>

      {/* Summary Cards */}
      <Row className="g-3 mb-4">
        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="avatar-sm bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FaArrowUp />
                </div>
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1">Total Deposits</h6>
                  <h4 className="mb-0 text-success">{formatCurrency(totalDeposits)}</h4>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="avatar-sm bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FaArrowDown />
                </div>
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1">Total Withdrawals</h6>
                  <h4 className="mb-0 text-danger">{formatCurrency(totalWithdrawals)}</h4>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center">
                <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FaMoneyBillWave />
                </div>
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1">Total Investments</h6>
                  <h4 className="mb-0 text-primary">{formatCurrency(totalInvestments)}</h4>
                </div>
              </div>
            </CardBody>
          </Card>
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
                      placeholder="Search by description or reference..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <select
                    className="form-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    {Object.entries(TRANSACTION_TYPES).map(([key, value]) => (
                      <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
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
                    {Object.entries(TRANSACTION_STATUS).map(([key, value]) => (
                      <option key={value} value={value}>{key}</option>
                    ))}
                  </select>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Transactions Table */}
      <Row>
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody className="p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Reference ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center py-5">
                          <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
                          <p className="text-muted">Loading transactions...</p>
                        </td>
                      </tr>
                    ) : filteredTransactions.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-5">
                          <FaMoneyBillWave className="fs-1 text-muted mb-3" />
                          <p className="text-muted mb-0">No transactions found</p>
                        </td>
                      </tr>
                    ) : (
                      filteredTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <FaCalendar className="text-muted me-2" />
                              <span>{new Date(transaction.createdAt).toLocaleString()}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className={`avatar-sm bg-${getTransactionTypeColor(transaction.type)}-subtle text-${getTransactionTypeColor(transaction.type)} rounded-circle d-flex align-items-center justify-content-center me-2`}>
                                {getTransactionIcon(transaction.type)}
                              </div>
                              <span className="fw-bold">{transaction.type.replace(/_/g, ' ')}</span>
                            </div>
                          </td>
                          <td>{transaction.description || '-'}</td>
                          <td>
                            <code className="small">{transaction.referenceId || '-'}</code>
                          </td>
                          <td>
                            <span className={`fw-bold text-${getTransactionTypeColor(transaction.type)}`}>
                              {transaction.type === 'WITHDRAWAL' || transaction.type === 'FEE' ? '-' : '+'}
                              {formatCurrency(transaction.amount)}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-${getStatusBadgeColor(transaction.status)}-subtle text-${getStatusBadgeColor(transaction.status)}`}>
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardBody>
            {pagination.totalPages > 1 && (
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">
                    Showing {pagination.pageNumber * pagination.pageSize + 1} to{' '}
                    {Math.min((pagination.pageNumber + 1) * pagination.pageSize, pagination.totalElements)} of{' '}
                    {pagination.totalElements} transactions
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
              </div>
            )}
          </Card>
        </Col>
      </Row>

      {/* Create Transaction Modal */}
      <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
        <ModalHeader toggle={() => setShowModal(false)}>
          Create New Transaction
        </ModalHeader>
        <ModalBody>
          <Row className="g-3">
            <Col md={6}>
              <label className="form-label">Transaction Type *</label>
              <select
                className={`form-select ${errors.type ? 'is-invalid' : ''}`}
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                {Object.entries(TRANSACTION_TYPES).map(([key, value]) => (
                  <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
                ))}
              </select>
              {errors.type && <div className="invalid-feedback">{errors.type}</div>}
            </Col>
            <Col md={6}>
              <label className="form-label">Amount *</label>
              <input
                type="number"
                step="0.01"
                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
              />
              {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
            </Col>
            <Col md={6}>
              <label className="form-label">Status *</label>
              <select
                className={`form-select ${errors.status ? 'is-invalid' : ''}`}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {Object.entries(TRANSACTION_STATUS).map(([key, value]) => (
                  <option key={value} value={value}>{key}</option>
                ))}
              </select>
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </Col>
            <Col md={6}>
              <label className="form-label">Reference ID</label>
              <input
                type="text"
                className="form-control"
                name="referenceId"
                value={formData.referenceId}
                onChange={handleChange}
                placeholder="TXN-2024-001"
              />
            </Col>
            <Col xs={12}>
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter transaction description..."
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
            disabled={creating}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleCreateTransaction}
            disabled={creating}
          >
            {creating ? (
              <>
                <FaSpinner className="fa-spin me-2" />
                Creating...
              </>
            ) : (
              <>
                <FaPlus className="me-2" />
                Create Transaction
              </>
            )}
          </button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Transactions;
