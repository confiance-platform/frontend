// Referrals Page - View Referral Information
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { referralService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSpinner, FaUsers, FaMoneyBillWave, FaCopy, FaCheckCircle,
  FaClock, FaFilter, FaPercent, FaLink, FaShareAlt
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { REFERRAL_STATUS } from '@/config/constants';

const Referrals = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [referrals, setReferrals] = useState([]);
  const [summary, setSummary] = useState(null);
  const [commissionSlabs, setCommissionSlabs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 0,
    totalPages: 0
  });

  // Filters
  const [quarter, setQuarter] = useState(referralService.getCurrentQuarterYear().quarter);
  const [year, setYear] = useState(referralService.getCurrentQuarterYear().year);
  const [showQuarterFilter, setShowQuarterFilter] = useState(false);

  // Commission Slabs Modal
  const [showSlabsModal, setShowSlabsModal] = useState(false);

  useEffect(() => {
    if (user?.id) {
      fetchSummary();
      fetchCommissionSlabs();
    }
  }, [user?.id]);

  useEffect(() => {
    if (user?.id && showQuarterFilter) {
      fetchReferralsByQuarter();
    }
  }, [user?.id, quarter, year, showQuarterFilter]);

  const fetchSummary = async () => {
    try {
      setLoading(true);
      const response = await referralService.getReferralSummary(user.id);

      if (response.success && response.data) {
        setSummary(response.data);
        setReferrals(response.data.recentReferrals || []);
      }
    } catch (error) {
      console.error('Error fetching referral summary:', error);
      toast.error(error.message || 'Failed to load referral information');
    } finally {
      setLoading(false);
    }
  };

  const fetchReferralsByQuarter = async () => {
    try {
      setLoading(true);
      const response = await referralService.getReferralsByQuarter(user.id, quarter, year);

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
      console.error('Error fetching referrals by quarter:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCommissionSlabs = async () => {
    try {
      const response = await referralService.getCommissionSlabs();
      if (response.success && response.data) {
        setCommissionSlabs(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching commission slabs:', error);
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

  const copyReferralCode = () => {
    if (summary?.referralCode) {
      navigator.clipboard.writeText(summary.referralCode);
      setCopied(true);
      toast.success('Referral code copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const shareReferralCode = () => {
    if (navigator.share && summary?.referralCode) {
      navigator.share({
        title: 'Join Confiance Financial Platform',
        text: `Use my referral code ${summary.referralCode} to sign up and get started!`,
        url: window.location.origin + '/auth/sign-up?ref=' + summary.referralCode
      }).catch(console.error);
    }
  };

  const getStatusBadge = (status, paid) => {
    if (paid) {
      return (
        <Badge color="success" className="px-2 py-1">
          <FaCheckCircle className="me-1" />
          Paid
        </Badge>
      );
    }
    const statusConfig = {
      ACTIVE: { color: 'success', icon: FaCheckCircle, text: 'Active' },
      INACTIVE: { color: 'secondary', icon: FaClock, text: 'Inactive' },
      PENDING: { color: 'warning', icon: FaClock, text: 'Pending' }
    };
    const config = statusConfig[status] || statusConfig.ACTIVE;
    const Icon = config.icon;
    return (
      <Badge color={config.color} className="px-2 py-1">
        <Icon className="me-1" />
        {config.text}
      </Badge>
    );
  };

  const getQuarterName = (q) => {
    const quarters = ['Q1 (Jan-Mar)', 'Q2 (Apr-Jun)', 'Q3 (Jul-Sep)', 'Q4 (Oct-Dec)'];
    return quarters[q - 1] || 'N/A';
  };

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 3; y--) {
    years.push(y);
  }

  if (loading && !summary) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading referral information...</p>
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
            <h4 className="mb-1">My Referrals</h4>
            <p className="text-muted mb-0">Share your referral code and earn commissions</p>
          </div>
        </Col>
      </Row>

      {/* Referral Code Card */}
      <Row className="mb-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm bg-primary text-white">
            <CardBody className="py-4">
              <Row className="align-items-center">
                <Col md={8}>
                  <h5 className="mb-2">
                    <FaLink className="me-2" />
                    Your Referral Code
                  </h5>
                  <div className="d-flex align-items-center gap-3">
                    <h2 className="mb-0 font-monospace bg-white text-primary px-4 py-2 rounded">
                      {summary?.referralCode || 'N/A'}
                    </h2>
                    <button
                      className={`btn ${copied ? 'btn-success' : 'btn-light'} btn-lg`}
                      onClick={copyReferralCode}
                    >
                      {copied ? <FaCheckCircle className="me-2" /> : <FaCopy className="me-2" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    {navigator.share && (
                      <button
                        className="btn btn-light btn-lg"
                        onClick={shareReferralCode}
                      >
                        <FaShareAlt className="me-2" />
                        Share
                      </button>
                    )}
                  </div>
                </Col>
                <Col md={4} className="text-md-end mt-3 mt-md-0">
                  <button
                    className="btn btn-outline-light"
                    onClick={() => setShowSlabsModal(true)}
                  >
                    <FaPercent className="me-2" />
                    View Commission Slabs
                  </button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Summary Cards */}
      <Row className="mb-4 g-3">
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody className="text-center">
              <FaUsers className="fs-1 text-primary mb-3" />
              <div className="small text-muted mb-1">Total Referrals</div>
              <h3 className="mb-0">{summary?.totalReferrals || 0}</h3>
            </CardBody>
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody className="text-center">
              <FaCheckCircle className="fs-1 text-success mb-3" />
              <div className="small text-muted mb-1">Commission Earned</div>
              <h3 className="mb-0 text-success">
                {formatCurrency(summary?.totalCommissionEarned)}
              </h3>
            </CardBody>
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody className="text-center">
              <FaClock className="fs-1 text-warning mb-3" />
              <div className="small text-muted mb-1">Pending Commission</div>
              <h3 className="mb-0 text-warning">
                {formatCurrency(summary?.pendingCommission)}
              </h3>
            </CardBody>
          </Card>
        </Col>
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm h-100">
            <CardBody className="text-center">
              <FaMoneyBillWave className="fs-1 text-info mb-3" />
              <div className="small text-muted mb-1">Total Lifetime</div>
              <h3 className="mb-0 text-info">
                {formatCurrency(
                  (parseFloat(summary?.totalCommissionEarned || 0) +
                   parseFloat(summary?.pendingCommission || 0))
                )}
              </h3>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Filters */}
      <Row className="mb-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <Row className="align-items-center g-3">
                <Col md={3}>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="quarterFilter"
                      checked={showQuarterFilter}
                      onChange={(e) => setShowQuarterFilter(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="quarterFilter">
                      Filter by Quarter
                    </label>
                  </div>
                </Col>
                {showQuarterFilter && (
                  <>
                    <Col md={4}>
                      <select
                        className="form-select"
                        value={quarter}
                        onChange={(e) => setQuarter(parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4].map(q => (
                          <option key={q} value={q}>{getQuarterName(q)}</option>
                        ))}
                      </select>
                    </Col>
                    <Col md={3}>
                      <select
                        className="form-select"
                        value={year}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                      >
                        {years.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </Col>
                  </>
                )}
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
              <h6 className="mb-3">
                {showQuarterFilter ? `Referrals for ${getQuarterName(quarter)} ${year}` : 'Recent Referrals'}
              </h6>
              {referrals.length === 0 ? (
                <div className="text-center py-5">
                  <FaUsers className="fs-1 text-muted mb-3" />
                  <h5 className="text-muted">No referrals found</h5>
                  <p className="text-muted mb-0">
                    Share your referral code with friends to start earning commissions
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Referred User</th>
                        <th>Referral Date</th>
                        <th>Quarter/Year</th>
                        <th>Investment Amount</th>
                        <th>Commission Rate</th>
                        <th>Commission Earned</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referrals.map((referral, index) => (
                        <tr key={referral.id || index}>
                          <td>
                            <strong>{referral.referredUserName || 'User'}</strong>
                          </td>
                          <td>{formatDate(referral.referralDate)}</td>
                          <td>
                            <Badge color="info" className="px-2">
                              Q{referral.quarter} {referral.year}
                            </Badge>
                          </td>
                          <td>{formatCurrency(referral.referredUserInvestment)}</td>
                          <td>
                            <Badge color="primary" className="px-2">
                              {referral.commissionRate}%
                            </Badge>
                          </td>
                          <td className="text-success fw-bold">
                            {formatCurrency(referral.commissionEarned)}
                          </td>
                          <td>{getStatusBadge(referral.status, referral.paid)}</td>
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

      {/* How It Works */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm bg-light">
            <CardBody>
              <h6 className="mb-3">How Referral Program Works</h6>
              <Row className="g-3">
                <Col md={3}>
                  <div className="text-center p-3">
                    <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '40px', height: '40px' }}>
                      1
                    </div>
                    <h6 className="mb-1">Share Code</h6>
                    <p className="small text-muted mb-0">Share your unique referral code with friends</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center p-3">
                    <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '40px', height: '40px' }}>
                      2
                    </div>
                    <h6 className="mb-1">Friend Signs Up</h6>
                    <p className="small text-muted mb-0">They register using your referral code</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center p-3">
                    <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '40px', height: '40px' }}>
                      3
                    </div>
                    <h6 className="mb-1">Friend Invests</h6>
                    <p className="small text-muted mb-0">When they make investments</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center p-3">
                    <div className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '40px', height: '40px' }}>
                      4
                    </div>
                    <h6 className="mb-1">Earn Commission</h6>
                    <p className="small text-muted mb-0">You earn commission on their investments</p>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Commission Slabs Modal */}
      <Modal isOpen={showSlabsModal} toggle={() => setShowSlabsModal(false)} size="lg">
        <ModalHeader toggle={() => setShowSlabsModal(false)}>
          <FaPercent className="me-2 text-primary" />
          Commission Slabs
        </ModalHeader>
        <ModalBody>
          {commissionSlabs.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No commission slabs configured</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Slab Name</th>
                    <th>Investment Range</th>
                    <th>Commission Rate</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionSlabs.filter(slab => slab.active).map((slab) => (
                    <tr key={slab.id}>
                      <td><strong>{slab.name}</strong></td>
                      <td>
                        {formatCurrency(slab.minAmount)}
                        {' - '}
                        {slab.maxAmount ? formatCurrency(slab.maxAmount) : 'Unlimited'}
                      </td>
                      <td>
                        <Badge color="success" className="px-3 py-2 fs-6">
                          {slab.commissionPercentage}%
                        </Badge>
                      </td>
                      <td className="text-muted">{slab.description || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="alert alert-info mt-3 mb-0">
            <small>
              Commission is calculated based on the total investment amount made by your referred users.
              Higher investment amounts may qualify for better commission rates.
            </small>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default Referrals;
