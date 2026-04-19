// Portfolio Page - User Portfolio Dashboard
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { portfolioService, transactionService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaWallet, FaChartLine, FaArrowUp, FaArrowDown,
  FaSpinner, FaHistory, FaMoneyBillWave, FaPercentage
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const Portfolio = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetchPortfolioData();
    }
  }, [user]);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);

      // Fetch portfolio
      const portfolioResponse = await portfolioService.getUserPortfolio(user.id);
      if (portfolioResponse.success && portfolioResponse.data) {
        setPortfolio(portfolioResponse.data);
      }

      // Fetch recent transactions
      const transactionsResponse = await transactionService.getUserTransactions(user.id, {
        page: 0,
        size: 5
      });
      if (transactionsResponse.success && transactionsResponse.data) {
        setRecentTransactions(transactionsResponse.data.content || []);
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      toast.error(error.message || 'Failed to load portfolio data');
    } finally {
      setLoading(false);
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

  if (loading && !portfolio) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading portfolio...</p>
          </div>
        </div>
      </Container>
    );
  }

  const returnsIsPositive = parseFloat(portfolio?.totalReturns || 0) >= 0;

  return (
    <Container fluid>
      {/* Header */}
      <Row className="mb-4">
        <Col xs={12}>
          <div>
            <h4 className="mb-1">Portfolio Dashboard</h4>
            <p className="text-muted mb-0">Track your investments and returns</p>
          </div>
        </Col>
      </Row>

      {/* Portfolio Summary Cards */}
      <Row className="g-3 mb-4">
        {/* Total Invested */}
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
                  <FaWallet className="fs-5" />
                </div>
                <span className="badge bg-primary-subtle text-primary">All Time</span>
              </div>
              <h6 className="text-muted mb-1">Total Invested</h6>
              <h3 className="mb-0">{formatCurrency(portfolio?.totalInvested || 0)}</h3>
            </CardBody>
          </Card>
        </Col>

        {/* Current Value */}
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="avatar-sm bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                  <FaChartLine className="fs-5" />
                </div>
                <span className="badge bg-success-subtle text-success">Current</span>
              </div>
              <h6 className="text-muted mb-1">Current Value</h6>
              <h3 className="mb-0">{formatCurrency(portfolio?.currentValue || 0)}</h3>
            </CardBody>
          </Card>
        </Col>

        {/* Total Returns */}
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className={`avatar-sm ${returnsIsPositive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} rounded-circle d-flex align-items-center justify-content-center`}>
                  {returnsIsPositive ? <FaArrowUp className="fs-5" /> : <FaArrowDown className="fs-5" />}
                </div>
                <span className={`badge ${returnsIsPositive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                  {returnsIsPositive ? 'Profit' : 'Loss'}
                </span>
              </div>
              <h6 className="text-muted mb-1">Total Returns</h6>
              <h3 className={`mb-0 ${returnsIsPositive ? 'text-success' : 'text-danger'}`}>
                {returnsIsPositive ? '+' : ''}{formatCurrency(portfolio?.totalReturns || 0)}
              </h3>
            </CardBody>
          </Card>
        </Col>

        {/* Returns Percentage */}
        <Col lg={3} md={6}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className={`avatar-sm ${returnsIsPositive ? 'bg-info-subtle text-info' : 'bg-warning-subtle text-warning'} rounded-circle d-flex align-items-center justify-content-center`}>
                  <FaPercentage className="fs-5" />
                </div>
                <span className={`badge ${returnsIsPositive ? 'bg-info-subtle text-info' : 'bg-warning-subtle text-warning'}`}>
                  Returns %
                </span>
              </div>
              <h6 className="text-muted mb-1">Returns Percentage</h6>
              <h3 className={`mb-0 ${returnsIsPositive ? 'text-success' : 'text-danger'}`}>
                {returnsIsPositive ? '+' : ''}{parseFloat(portfolio?.returnsPercentage || 0).toFixed(2)}%
              </h3>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Portfolio Overview */}
        <Col lg={8} className="mb-4">
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">
                  <FaChartLine className="me-2" />
                  Portfolio Performance
                </h5>
              </div>

              {parseFloat(portfolio?.totalInvested || 0) === 0 ? (
                <div className="text-center py-5">
                  <div className="avatar-xl bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                    <FaWallet className="fs-1 text-muted" />
                  </div>
                  <h5 className="text-muted">No Investments Yet</h5>
                  <p className="text-muted mb-4">Start investing to build your portfolio</p>
                  <a href="/financial/investments" className="btn btn-primary">
                    Browse Investments
                  </a>
                </div>
              ) : (
                <div>
                  {/* Portfolio Breakdown */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-muted">Investment Amount</span>
                          <FaWallet className="text-primary" />
                        </div>
                        <h4 className="mb-0">{formatCurrency(portfolio?.totalInvested || 0)}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 border rounded">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-muted">Current Value</span>
                          <FaChartLine className="text-success" />
                        </div>
                        <h4 className="mb-0">{formatCurrency(portfolio?.currentValue || 0)}</h4>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small text-muted">Portfolio Growth</span>
                      <span className={`small fw-bold ${returnsIsPositive ? 'text-success' : 'text-danger'}`}>
                        {returnsIsPositive ? '+' : ''}{parseFloat(portfolio?.returnsPercentage || 0).toFixed(2)}%
                      </span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className={`progress-bar ${returnsIsPositive ? 'bg-success' : 'bg-danger'}`}
                        role="progressbar"
                        style={{ width: `${Math.min(Math.abs(parseFloat(portfolio?.returnsPercentage || 0)), 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="alert alert-info mb-0">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <i className="ph-duotone ph-info fs-3"></i>
                      </div>
                      <div>
                        <strong>Portfolio Summary</strong>
                        <p className="mb-0 small">
                          Your portfolio has {returnsIsPositive ? 'gained' : 'lost'} {formatCurrency(Math.abs(parseFloat(portfolio?.totalReturns || 0)))}
                          {' '}({returnsIsPositive ? '+' : ''}{parseFloat(portfolio?.returnsPercentage || 0).toFixed(2)}%)
                          {' '}since you started investing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>

        {/* Recent Transactions */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">
                  <FaHistory className="me-2" />
                  Recent Activity
                </h5>
                <a href="/financial/transactions" className="btn btn-sm btn-outline-primary">
                  View All
                </a>
              </div>

              {recentTransactions.length === 0 ? (
                <div className="text-center py-4">
                  <FaHistory className="fs-1 text-muted mb-2" />
                  <p className="text-muted mb-0">No transactions yet</p>
                </div>
              ) : (
                <div className="timeline">
                  {recentTransactions.map((transaction, index) => (
                    <div key={transaction.id} className={`mb-3 ${index !== recentTransactions.length - 1 ? 'pb-3 border-bottom' : ''}`}>
                      <div className="d-flex align-items-start">
                        <div className={`avatar-sm bg-${getTransactionTypeColor(transaction.type)}-subtle text-${getTransactionTypeColor(transaction.type)} rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}>
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-1">
                            <h6 className="mb-0">{transaction.type.replace(/_/g, ' ')}</h6>
                            <span className={`text-${getTransactionTypeColor(transaction.type)} fw-bold`}>
                              {transaction.type === 'WITHDRAWAL' || transaction.type === 'FEE' ? '-' : '+'}
                              {formatCurrency(transaction.amount)}
                            </span>
                          </div>
                          {transaction.description && (
                            <p className="text-muted small mb-1">{transaction.description}</p>
                          )}
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              {new Date(transaction.createdAt).toLocaleDateString()}
                            </small>
                            <span className={`badge bg-${transaction.status === 'COMPLETED' ? 'success' : transaction.status === 'PENDING' ? 'warning' : 'secondary'}-subtle text-${transaction.status === 'COMPLETED' ? 'success' : transaction.status === 'PENDING' ? 'warning' : 'secondary'} small`}>
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="border-0 shadow-sm bg-primary text-white">
            <CardBody>
              <Row className="align-items-center">
                <Col md={8}>
                  <h5 className="text-white mb-2">Ready to grow your wealth?</h5>
                  <p className="mb-0 opacity-75">Explore our investment options and start building your financial future today.</p>
                </Col>
                <Col md={4} className="text-md-end mt-3 mt-md-0">
                  <a href="/financial/investments" className="btn btn-light btn-lg">
                    <FaChartLine className="me-2" />
                    Browse Investments
                  </a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
