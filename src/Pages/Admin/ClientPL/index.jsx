// Admin Client P&L Page - View All Client Trades and P&L
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { tradeService, userService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaArrowUp, FaArrowDown, FaFilter,
  FaChartBar, FaUser, FaCalendar, FaDownload
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { MARKETS, MARKET_LABELS, TRADE_STATUS } from '@/config/constants';
import RoleGate from '@/Components/RoleGate';

const AdminClientPL = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [trades, setTrades] = useState([]);
  const [users, setUsers] = useState([]);
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
  const [userFilter, setUserFilter] = useState('');

  // User Details Modal
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userTrades, setUserTrades] = useState([]);
  const [userSummary, setUserSummary] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);

  useEffect(() => {
    fetchAllTrades();
    fetchUsers();
  }, [pagination.pageNumber, marketFilter, statusFilter]);

  const fetchAllTrades = async () => {
    try {
      setLoading(true);
      const response = await tradeService.getAllTrades({
        page: pagination.pageNumber,
        size: pagination.pageSize
      });

      if (response.success && response.data) {
        setTrades(response.data.content || []);
        setPagination({
          pageNumber: response.data.pageable?.pageNumber || 0,
          pageSize: response.data.pageable?.pageSize || 20,
          totalElements: response.data.totalElements || 0,
          totalPages: response.data.totalPages || 0
        });
      }
    } catch (error) {
      console.error('Error fetching trades:', error);
      toast.error(error.message || 'Failed to load trades');
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

  const handleViewUserDetails = async (userId) => {
    setSelectedUserId(userId);
    setShowUserModal(true);
    setLoadingUserData(true);

    try {
      const [tradesResponse, summaryResponse] = await Promise.all([
        tradeService.getUserTrades(userId, { size: 50 }),
        tradeService.getTradeSummary(userId)
      ]);

      if (tradesResponse.success) {
        setUserTrades(tradesResponse.data.content || []);
      }
      if (summaryResponse.success) {
        setUserSummary(summaryResponse.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to load user trade data');
    } finally {
      setLoadingUserData(false);
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
      PARTIALLY_SOLD: { color: 'warning', text: 'Partial' }
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

  // Calculate overall statistics
  const overallStats = {
    totalTrades: trades.length,
    openTrades: trades.filter(t => t.status === 'OPEN').length,
    closedTrades: trades.filter(t => t.status === 'CLOSED').length,
    totalPL: trades.reduce((sum, t) => sum + parseFloat(t.profitLoss || 0), 0),
    totalInvested: trades.reduce((sum, t) => sum + parseFloat(t.investedAmount || 0), 0)
  };

  const filteredTrades = trades.filter(trade => {
    const matchesSearch =
      trade.symbol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMarket = !marketFilter || trade.market === marketFilter;
    const matchesStatus = !statusFilter || trade.status === statusFilter;
    const matchesUser = !userFilter || trade.userId?.toString() === userFilter;
    return matchesSearch && matchesMarket && matchesStatus && matchesUser;
  });

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  const getUserName = (userId) => {
    const foundUser = users.find(u => u.id === userId);
    return foundUser ? `${foundUser.firstName} ${foundUser.lastName}` : `User #${userId}`;
  };

  if (loading && trades.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading client trades...</p>
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
              <h4 className="mb-1">Client P&L Report</h4>
              <p className="text-muted mb-0">View all client trades and profit/loss information</p>
            </div>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="mb-4 g-3">
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100 bg-primary text-white">
              <CardBody className="text-center">
                <FaChartBar className="fs-1 mb-2 opacity-75" />
                <div className="small opacity-75">Total Trades</div>
                <h3 className="mb-0">{overallStats.totalTrades}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100 bg-info text-white">
              <CardBody className="text-center">
                <div className="small opacity-75">Total Invested</div>
                <h4 className="mb-0">{formatCurrency(overallStats.totalInvested)}</h4>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className={`border-0 shadow-sm h-100 ${overallStats.totalPL >= 0 ? 'bg-success' : 'bg-danger'} text-white`}>
              <CardBody className="text-center">
                <div className="small opacity-75">Total P&L</div>
                <h4 className="mb-0">
                  {overallStats.totalPL >= 0 ? '+' : ''}{formatCurrency(overallStats.totalPL)}
                </h4>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="d-flex justify-content-around">
                  <div>
                    <div className="small text-muted">Open</div>
                    <h5 className="text-success mb-0">{overallStats.openTrades}</h5>
                  </div>
                  <div>
                    <div className="small text-muted">Closed</div>
                    <h5 className="text-secondary mb-0">{overallStats.closedTrades}</h5>
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
                  <Col md={3}>
                    <div className="position-relative">
                      <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                      <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Search symbol/company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <select
                      className="form-select"
                      value={userFilter}
                      onChange={(e) => setUserFilter(e.target.value)}
                    >
                      <option value="">All Users</option>
                      {users.map(u => (
                        <option key={u.id} value={u.id}>
                          {u.firstName} {u.lastName} ({u.email})
                        </option>
                      ))}
                    </select>
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
                      {Object.entries(TRADE_STATUS).map(([key, value]) => (
                        <option key={value} value={value}>{key.replace(/_/g, ' ')}</option>
                      ))}
                    </select>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Trades Table */}
        <Row>
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                {filteredTrades.length === 0 ? (
                  <div className="text-center py-5">
                    <FaChartBar className="fs-1 text-muted mb-3" />
                    <h5 className="text-muted">No trades found</h5>
                    <p className="text-muted mb-0">Try adjusting your filters</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>User</th>
                          <th>Market</th>
                          <th>Symbol</th>
                          <th>Buy Date</th>
                          <th>Buy Price</th>
                          <th>Qty</th>
                          <th>Invested</th>
                          <th>Sell Price</th>
                          <th>P&L</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTrades.map((trade) => {
                          const pl = parseFloat(trade.profitLoss || 0);
                          return (
                            <tr key={trade.id}>
                              <td>
                                <button
                                  className="btn btn-link p-0 text-decoration-none"
                                  onClick={() => handleViewUserDetails(trade.userId)}
                                >
                                  <FaUser className="me-1" />
                                  {getUserName(trade.userId)}
                                </button>
                              </td>
                              <td>
                                <span className="fs-5 me-1">{getMarketFlag(trade.market)}</span>
                                <small>{trade.market}</small>
                              </td>
                              <td>
                                <strong>{trade.symbol}</strong>
                                <div className="small text-muted">{trade.companyName}</div>
                              </td>
                              <td>{formatDate(trade.buyDate)}</td>
                              <td>{formatCurrency(trade.buyPrice, trade.currency)}</td>
                              <td>{trade.buyQuantity}</td>
                              <td>{formatCurrency(trade.investedAmount, trade.currency)}</td>
                              <td>{trade.sellPrice ? formatCurrency(trade.sellPrice, trade.currency) : '-'}</td>
                              <td>
                                {trade.status !== 'OPEN' ? (
                                  <span className={pl >= 0 ? 'text-success' : 'text-danger'}>
                                    {pl >= 0 ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
                                    {formatCurrency(Math.abs(pl), trade.currency)}
                                  </span>
                                ) : '-'}
                              </td>
                              <td>{getStatusBadge(trade.status)}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => handleViewUserDetails(trade.userId)}
                                >
                                  View User
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
                  Showing {filteredTrades.length} of {pagination.totalElements}
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

        {/* User Details Modal */}
        <Modal isOpen={showUserModal} toggle={() => setShowUserModal(false)} size="xl">
          <ModalHeader toggle={() => setShowUserModal(false)}>
            <FaUser className="me-2" />
            User Trading Details - {getUserName(selectedUserId)}
          </ModalHeader>
          <ModalBody>
            {loadingUserData ? (
              <div className="text-center py-5">
                <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
                <p className="text-muted">Loading user data...</p>
              </div>
            ) : (
              <>
                {/* User Summary */}
                {userSummary && (
                  <Row className="mb-4 g-3">
                    <Col md={3}>
                      <Card className="border bg-light">
                        <CardBody className="text-center py-3">
                          <div className="small text-muted">Total Invested</div>
                          <h5 className="mb-0">{formatCurrency(userSummary.totalInvestedAmount)}</h5>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className={`border ${parseFloat(userSummary.totalProfitLoss) >= 0 ? 'bg-success-subtle' : 'bg-danger-subtle'}`}>
                        <CardBody className="text-center py-3">
                          <div className="small text-muted">Total P&L</div>
                          <h5 className={`mb-0 ${parseFloat(userSummary.totalProfitLoss) >= 0 ? 'text-success' : 'text-danger'}`}>
                            {parseFloat(userSummary.totalProfitLoss) >= 0 ? '+' : ''}
                            {formatCurrency(userSummary.totalProfitLoss)}
                          </h5>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="border bg-light">
                        <CardBody className="text-center py-3">
                          <div className="small text-muted">Open Trades</div>
                          <h5 className="mb-0 text-success">{userSummary.openTradesCount || 0}</h5>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card className="border bg-light">
                        <CardBody className="text-center py-3">
                          <div className="small text-muted">Closed Trades</div>
                          <h5 className="mb-0 text-secondary">{userSummary.closedTradesCount || 0}</h5>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                )}

                {/* User Trades Table */}
                <div className="table-responsive">
                  <table className="table table-sm table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Symbol</th>
                        <th>Buy Date</th>
                        <th>Buy Price</th>
                        <th>Qty</th>
                        <th>Invested</th>
                        <th>Sell Price</th>
                        <th>P&L</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userTrades.map((trade) => {
                        const pl = parseFloat(trade.profitLoss || 0);
                        return (
                          <tr key={trade.id}>
                            <td>
                              <strong>{trade.symbol}</strong>
                              <span className="ms-2">{getMarketFlag(trade.market)}</span>
                            </td>
                            <td>{formatDate(trade.buyDate)}</td>
                            <td>{formatCurrency(trade.buyPrice, trade.currency)}</td>
                            <td>{trade.buyQuantity}</td>
                            <td>{formatCurrency(trade.investedAmount, trade.currency)}</td>
                            <td>{trade.sellPrice ? formatCurrency(trade.sellPrice, trade.currency) : '-'}</td>
                            <td>
                              {trade.status !== 'OPEN' ? (
                                <span className={pl >= 0 ? 'text-success' : 'text-danger'}>
                                  {pl >= 0 ? '+' : ''}{formatCurrency(pl, trade.currency)}
                                </span>
                              ) : '-'}
                            </td>
                            <td>{getStatusBadge(trade.status)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </ModalBody>
        </Modal>
      </Container>
    </RoleGate>
  );
};

export default AdminClientPL;
