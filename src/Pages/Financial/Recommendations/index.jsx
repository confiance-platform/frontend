// User Recommendations Page - View Stock Recommendations (Read-Only)
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { recommendationService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaChartLine, FaFilter, FaArrowUp, FaArrowDown,
  FaExclamationTriangle, FaCheckCircle, FaClock, FaTimes, FaGlobe
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { MARKETS, MARKET_LABELS, TRADE_TYPES, TRADE_TYPE_LABELS, RECOMMENDATION_STATUS } from '@/config/constants';

const Recommendations = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
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
  const [statusFilter, setStatusFilter] = useState('OPEN');
  const [tradeTypeFilter, setTradeTypeFilter] = useState('');

  // Detail Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedRec, setSelectedRec] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, [pagination.pageNumber, marketFilter, statusFilter]);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      let response;

      if (statusFilter === 'OPEN') {
        response = await recommendationService.getOpenRecommendations({
          page: pagination.pageNumber,
          size: pagination.pageSize
        });
      } else {
        response = await recommendationService.filterRecommendations(
          { market: marketFilter || undefined, status: statusFilter || undefined },
          { page: pagination.pageNumber, size: pagination.pageSize }
        );
      }

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

  const formatCurrency = (amount, currency = 'INR') => {
    const currencyMap = {
      INR: 'en-IN',
      USD: 'en-US',
      GBP: 'en-GB',
      EUR: 'de-DE',
      SGD: 'en-SG',
      HKD: 'zh-HK',
      JPY: 'ja-JP',
      CAD: 'en-CA',
      AUD: 'en-AU'
    };
    return new Intl.NumberFormat(currencyMap[currency] || 'en-IN', {
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
      OPEN: { color: 'success', icon: FaCheckCircle, text: 'Open' },
      CLOSED: { color: 'secondary', icon: FaTimes, text: 'Closed' },
      PARTIALLY_SOLD: { color: 'warning', icon: FaClock, text: 'Partially Sold' },
      EXPIRED: { color: 'danger', icon: FaExclamationTriangle, text: 'Expired' }
    };
    const config = statusConfig[status] || statusConfig.OPEN;
    const Icon = config.icon;
    return (
      <Badge color={config.color} className="px-2 py-1">
        <Icon className="me-1" />
        {config.text}
      </Badge>
    );
  };

  const getTradeTypeBadge = (type) => {
    const typeConfig = {
      POSITIONAL: 'info',
      LONG_TERM: 'success',
      MOMENTUM: 'warning',
      SWING: 'primary',
      INTRADAY: 'danger'
    };
    return (
      <Badge color={typeConfig[type] || 'secondary'} className="px-2 py-1">
        {TRADE_TYPE_LABELS[type] || type}
      </Badge>
    );
  };

  const getMarketFlag = (market) => {
    const flags = {
      US: '🇺🇸',
      INDIA: '🇮🇳',
      UK: '🇬🇧',
      EU: '🇪🇺',
      SINGAPORE: '🇸🇬',
      HONG_KONG: '🇭🇰',
      JAPAN: '🇯🇵',
      CANADA: '🇨🇦',
      AUSTRALIA: '🇦🇺'
    };
    return flags[market] || '🌍';
  };

  const getPotentialReturn = (entry, target) => {
    const diff = parseFloat(target) - parseFloat(entry);
    const percentage = (diff / parseFloat(entry)) * 100;
    return percentage.toFixed(2);
  };

  const handleViewDetails = (rec) => {
    setSelectedRec(rec);
    setShowModal(true);
  };

  const filteredRecommendations = recommendations.filter(rec => {
    const matchesSearch =
      rec.tickerSymbol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMarket = !marketFilter || rec.market === marketFilter;
    const matchesTradeType = !tradeTypeFilter || rec.tradeType === tradeTypeFilter;
    return matchesSearch && matchesMarket && matchesTradeType;
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
    <Container fluid>
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12}>
          <div>
            <h4 className="mb-1">Stock Recommendations</h4>
            <p className="text-muted mb-0">View expert stock recommendations from our analysts</p>
          </div>
        </Col>
      </Row>

      {/* Filters */}
      <Row className="mb-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <Row className="g-3">
                <Col md={3}>
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
                <Col md={3}>
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
                <Col md={3}>
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
                <Col md={3}>
                  <select
                    className="form-select"
                    value={tradeTypeFilter}
                    onChange={(e) => setTradeTypeFilter(e.target.value)}
                  >
                    <option value="">All Trade Types</option>
                    {Object.entries(TRADE_TYPES).map(([key, value]) => (
                      <option key={value} value={value}>{TRADE_TYPE_LABELS[value]}</option>
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
                  <FaChartLine className="fs-1 text-muted mb-3" />
                  <h5 className="text-muted">No recommendations found</h5>
                  <p className="text-muted mb-0">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Market</th>
                        <th>Symbol / Company</th>
                        <th>Trade Type</th>
                        <th>Entry Price</th>
                        <th>Target Price</th>
                        <th>Stop Loss</th>
                        <th>Potential Return</th>
                        <th>R:R Ratio</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRecommendations.map((rec) => {
                        const potentialReturn = getPotentialReturn(rec.entryPrice, rec.targetPrice);
                        const isPositive = parseFloat(potentialReturn) > 0;
                        return (
                          <tr key={rec.id}>
                            <td>
                              <span className="fs-4 me-2">{getMarketFlag(rec.market)}</span>
                              <small className="text-muted">{rec.market}</small>
                            </td>
                            <td>
                              <div>
                                <strong>{rec.tickerSymbol}</strong>
                                <div className="small text-muted">{rec.companyName}</div>
                              </div>
                            </td>
                            <td>{getTradeTypeBadge(rec.tradeType)}</td>
                            <td>{formatCurrency(rec.entryPrice, rec.currency)}</td>
                            <td className="text-success fw-bold">
                              {formatCurrency(rec.targetPrice, rec.currency)}
                            </td>
                            <td className="text-danger">
                              {formatCurrency(rec.stopLoss, rec.currency)}
                            </td>
                            <td>
                              <span className={isPositive ? 'text-success' : 'text-danger'}>
                                {isPositive ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
                                {potentialReturn}%
                              </span>
                            </td>
                            <td>
                              <Badge color="info" className="px-2">
                                {rec.riskRewardRatio || 'N/A'}
                              </Badge>
                            </td>
                            <td>{getStatusBadge(rec.status)}</td>
                            <td>{formatDate(rec.recommendationDate)}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleViewDetails(rec)}
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
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
                Showing {filteredRecommendations.length} of {pagination.totalElements} recommendations
              </span>
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
          </Col>
        </Row>
      )}

      {/* Detail Modal */}
      <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
        <ModalHeader toggle={() => setShowModal(false)}>
          <span className="fs-4 me-2">{getMarketFlag(selectedRec?.market)}</span>
          {selectedRec?.tickerSymbol} - {selectedRec?.companyName}
        </ModalHeader>
        <ModalBody>
          {selectedRec && (
            <>
              <Row className="mb-4">
                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <CardBody>
                      <h6 className="text-muted mb-3">Trade Details</h6>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Market:</span>
                        <strong>{MARKET_LABELS[selectedRec.market]}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Trade Type:</span>
                        {getTradeTypeBadge(selectedRec.tradeType)}
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Status:</span>
                        {getStatusBadge(selectedRec.status)}
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Date:</span>
                        <strong>{formatDate(selectedRec.recommendationDate)}</strong>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <CardBody>
                      <h6 className="text-muted mb-3">Price Levels</h6>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Entry Price:</span>
                        <strong>{formatCurrency(selectedRec.entryPrice, selectedRec.currency)}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-success">Target Price:</span>
                        <strong className="text-success">{formatCurrency(selectedRec.targetPrice, selectedRec.currency)}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-danger">Stop Loss:</span>
                        <strong className="text-danger">{formatCurrency(selectedRec.stopLoss, selectedRec.currency)}</strong>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Risk:Reward:</span>
                        <Badge color="info" className="px-2">{selectedRec.riskRewardRatio || 'N/A'}</Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12}>
                  <Card className="border-0 bg-success-subtle">
                    <CardBody>
                      <h6 className="text-success mb-3">Potential Returns</h6>
                      <Row>
                        <Col md={4} className="text-center border-end">
                          <div className="small text-muted">Potential Return</div>
                          <h4 className="text-success mb-0">
                            {formatCurrency(selectedRec.potentialReturn || (parseFloat(selectedRec.targetPrice) - parseFloat(selectedRec.entryPrice)), selectedRec.currency)}
                          </h4>
                        </Col>
                        <Col md={4} className="text-center border-end">
                          <div className="small text-muted">Return %</div>
                          <h4 className="text-success mb-0">
                            +{selectedRec.potentialReturnPercentage || getPotentialReturn(selectedRec.entryPrice, selectedRec.targetPrice)}%
                          </h4>
                        </Col>
                        <Col md={4} className="text-center">
                          <div className="small text-muted">Max Risk</div>
                          <h4 className="text-danger mb-0">
                            {formatCurrency(parseFloat(selectedRec.entryPrice) - parseFloat(selectedRec.stopLoss), selectedRec.currency)}
                          </h4>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              {selectedRec.remarks && (
                <Row>
                  <Col xs={12}>
                    <Card className="border-0 bg-light">
                      <CardBody>
                        <h6 className="text-muted mb-2">Remarks / Notes</h6>
                        <p className="mb-0">{selectedRec.remarks}</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )}
            </>
          )}
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default Recommendations;
