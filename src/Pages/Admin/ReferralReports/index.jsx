// Admin Referral Reports Page
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { referralService, userService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSpinner, FaUsers, FaMoneyBillWave, FaCheckCircle, FaClock,
  FaFilter, FaDownload, FaUser, FaCalendar
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RoleGate from '@/Components/RoleGate';

const AdminReferralReports = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0
  });

  // Filters
  const [quarter, setQuarter] = useState(referralService.getCurrentQuarterYear().quarter);
  const [year, setYear] = useState(referralService.getCurrentQuarterYear().year);
  const [paidFilter, setPaidFilter] = useState('');

  // Mark Paid Modal
  const [showMarkPaidModal, setShowMarkPaidModal] = useState(false);
  const [selectedReferral, setSelectedReferral] = useState(null);

  useEffect(() => {
    fetchReferrals();
    fetchUsers();
  }, [quarter, year, pagination.pageNumber]);

  const fetchReferrals = async () => {
    try {
      setLoading(true);
      const response = await referralService.getAdminReferralsByQuarter(quarter, year, {
        page: pagination.pageNumber,
        size: pagination.pageSize
      });

      if (response.success && response.data) {
        setReferrals(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageable?.pageNumber || 0,
          pageSize: response.data.pageable?.pageSize || 20,
          totalElements: response.data.totalElements || 0,
          totalPages: response.data.totalPages || 0
        });
      }
    } catch (error) {
      console.error('Error fetching referrals:', error);
      toast.error(error.message || 'Failed to load referrals');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUsers({ size: 100 });
      if (response.success && response.data) {
        setUsers(response.data.content || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleMarkPaidClick = (referral) => {
    setSelectedReferral(referral);
    setShowMarkPaidModal(true);
  };

  const handleMarkPaid = async () => {
    try {
      setSubmitting(true);
      const response = await referralService.markReferralAsPaid(selectedReferral.id);

      if (response.success) {
        toast.success('Referral marked as paid!');
        setShowMarkPaidModal(false);
        setSelectedReferral(null);
        fetchReferrals();
      }
    } catch (error) {
      console.error('Error marking referral as paid:', error);
      toast.error(error.message || 'Failed to mark referral as paid');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
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

  const getUserName = (userId) => {
    const foundUser = users.find(u => u.id === userId);
    return foundUser ? `${foundUser.firstName} ${foundUser.lastName}` : `User #${userId}`;
  };

  const getQuarterName = (q) => {
    const quarters = ['Q1 (Jan-Mar)', 'Q2 (Apr-Jun)', 'Q3 (Jul-Sep)', 'Q4 (Oct-Dec)'];
    return quarters[q - 1] || 'N/A';
  };

  // Calculate statistics
  const stats = {
    totalReferrals: referrals.length,
    totalCommission: referrals.reduce((sum, r) => sum + parseFloat(r.commissionEarned || 0), 0),
    paidCount: referrals.filter(r => r.paid).length,
    pendingCount: referrals.filter(r => !r.paid).length,
    totalInvestment: referrals.reduce((sum, r) => sum + parseFloat(r.referredUserInvestment || 0), 0)
  };

  const filteredReferrals = referrals.filter(ref => {
    if (paidFilter === 'paid') return ref.paid;
    if (paidFilter === 'pending') return !ref.paid;
    return true;
  });

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= currentYear - 3; y--) {
    years.push(y);
  }

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  if (loading && referrals.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading referral reports...</p>
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
            <div>
              <h4 className="mb-1">Referral Reports</h4>
              <p className="text-muted mb-0">View and manage referral commissions by quarter</p>
            </div>
          </Col>
        </Row>

        {/* Quarter Selection */}
        <Row className="mb-4">
          <Col xs={12}>
            <Card className="border-0 shadow-sm bg-primary text-white">
              <CardBody>
                <Row className="align-items-center">
                  <Col md={6}>
                    <h5 className="mb-2">
                      <FaCalendar className="me-2" />
                      Select Period
                    </h5>
                    <div className="d-flex gap-3">
                      <select
                        className="form-select w-auto"
                        value={quarter}
                        onChange={(e) => setQuarter(parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4].map(q => (
                          <option key={q} value={q}>{getQuarterName(q)}</option>
                        ))}
                      </select>
                      <select
                        className="form-select w-auto"
                        value={year}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                      >
                        {years.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col md={6} className="text-md-end mt-3 mt-md-0">
                    <h3 className="mb-0">{getQuarterName(quarter)} {year}</h3>
                    <p className="mb-0 opacity-75">Referral Report</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="mb-4 g-3">
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <FaUsers className="fs-1 text-primary mb-2" />
                <div className="small text-muted">Total Referrals</div>
                <h3 className="mb-0">{stats.totalReferrals}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <FaMoneyBillWave className="fs-1 text-info mb-2" />
                <div className="small text-muted">Total Investment</div>
                <h4 className="mb-0">{formatCurrency(stats.totalInvestment)}</h4>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100 bg-success-subtle">
              <CardBody className="text-center">
                <FaCheckCircle className="fs-1 text-success mb-2" />
                <div className="small text-muted">Total Commission</div>
                <h4 className="mb-0 text-success">{formatCurrency(stats.totalCommission)}</h4>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="d-flex justify-content-around">
                  <div>
                    <div className="small text-muted">Paid</div>
                    <h4 className="text-success mb-0">{stats.paidCount}</h4>
                  </div>
                  <div className="border-start"></div>
                  <div>
                    <div className="small text-muted">Pending</div>
                    <h4 className="text-warning mb-0">{stats.pendingCount}</h4>
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
                <Row className="align-items-center">
                  <Col md={6}>
                    <select
                      className="form-select w-auto"
                      value={paidFilter}
                      onChange={(e) => setPaidFilter(e.target.value)}
                    >
                      <option value="">All Referrals</option>
                      <option value="paid">Paid Only</option>
                      <option value="pending">Pending Only</option>
                    </select>
                  </Col>
                  <Col md={6} className="text-md-end mt-2 mt-md-0">
                    <span className="text-muted">
                      Showing {filteredReferrals.length} of {stats.totalReferrals} referrals
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Referrals Table */}
        <Row>
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                {filteredReferrals.length === 0 ? (
                  <div className="text-center py-5">
                    <FaUsers className="fs-1 text-muted mb-3" />
                    <h5 className="text-muted">No referrals found for this period</h5>
                    <p className="text-muted mb-0">Try selecting a different quarter or year</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Referrer</th>
                          <th>Referred User</th>
                          <th>Referral Date</th>
                          <th>Investment Amount</th>
                          <th>Commission Rate</th>
                          <th>Commission Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredReferrals.map((referral) => (
                          <tr key={referral.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                  <FaUser size={14} />
                                </div>
                                <div>
                                  <strong>{getUserName(referral.referrerId || referral.userId)}</strong>
                                </div>
                              </div>
                            </td>
                            <td>{referral.referredUserName || 'N/A'}</td>
                            <td>{formatDate(referral.referralDate)}</td>
                            <td>{formatCurrency(referral.referredUserInvestment)}</td>
                            <td>
                              <Badge color="info" className="px-2">
                                {referral.commissionRate}%
                              </Badge>
                            </td>
                            <td className="text-success fw-bold">
                              {formatCurrency(referral.commissionEarned)}
                            </td>
                            <td>
                              {referral.paid ? (
                                <Badge color="success" className="px-2 py-1">
                                  <FaCheckCircle className="me-1" />
                                  Paid
                                </Badge>
                              ) : (
                                <Badge color="warning" className="px-2 py-1">
                                  <FaClock className="me-1" />
                                  Pending
                                </Badge>
                              )}
                            </td>
                            <td>
                              {!referral.paid && (
                                <button
                                  className="btn btn-sm btn-success"
                                  onClick={() => handleMarkPaidClick(referral)}
                                >
                                  <FaCheckCircle className="me-1" />
                                  Mark Paid
                                </button>
                              )}
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
                  Page {pagination.pageNumber + 1} of {pagination.totalPages}
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

        {/* Summary by Referrer */}
        {referrals.length > 0 && (
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <h6 className="mb-3">Commission Summary by Referrer</h6>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead className="table-light">
                        <tr>
                          <th>Referrer</th>
                          <th>Total Referrals</th>
                          <th>Total Investment</th>
                          <th>Total Commission</th>
                          <th>Paid</th>
                          <th>Pending</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(
                          referrals.reduce((acc, ref) => {
                            const userId = ref.referrerId || ref.userId;
                            if (!acc[userId]) {
                              acc[userId] = {
                                userId,
                                count: 0,
                                totalInvestment: 0,
                                totalCommission: 0,
                                paidCommission: 0,
                                pendingCommission: 0
                              };
                            }
                            acc[userId].count++;
                            acc[userId].totalInvestment += parseFloat(ref.referredUserInvestment || 0);
                            acc[userId].totalCommission += parseFloat(ref.commissionEarned || 0);
                            if (ref.paid) {
                              acc[userId].paidCommission += parseFloat(ref.commissionEarned || 0);
                            } else {
                              acc[userId].pendingCommission += parseFloat(ref.commissionEarned || 0);
                            }
                            return acc;
                          }, {})
                        ).map(([userId, data]) => (
                          <tr key={userId}>
                            <td><strong>{getUserName(parseInt(userId))}</strong></td>
                            <td>{data.count}</td>
                            <td>{formatCurrency(data.totalInvestment)}</td>
                            <td className="text-success fw-bold">{formatCurrency(data.totalCommission)}</td>
                            <td className="text-success">{formatCurrency(data.paidCommission)}</td>
                            <td className="text-warning">{formatCurrency(data.pendingCommission)}</td>
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

        {/* Mark Paid Confirmation Modal */}
        <Modal isOpen={showMarkPaidModal} toggle={() => setShowMarkPaidModal(false)}>
          <ModalHeader toggle={() => setShowMarkPaidModal(false)}>
            Confirm Payment
          </ModalHeader>
          <ModalBody>
            {selectedReferral && (
              <div>
                <p>Are you sure you want to mark this referral commission as paid?</p>
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Referrer:</span>
                    <strong>{getUserName(selectedReferral.referrerId || selectedReferral.userId)}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Referred User:</span>
                    <strong>{selectedReferral.referredUserName}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Commission Amount:</span>
                    <strong className="text-success">{formatCurrency(selectedReferral.commissionEarned)}</strong>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-secondary" onClick={() => setShowMarkPaidModal(false)} disabled={submitting}>
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleMarkPaid} disabled={submitting}>
              {submitting ? (
                <>
                  <FaSpinner className="fa-spin me-2" />
                  Processing...
                </>
              ) : (
                <>
                  <FaCheckCircle className="me-2" />
                  Mark as Paid
                </>
              )}
            </button>
          </ModalFooter>
        </Modal>
      </Container>
    </RoleGate>
  );
};

export default AdminReferralReports;
