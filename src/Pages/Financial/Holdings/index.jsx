// Holdings Page - View Current Holdings
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { holdingService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaChartPie, FaArrowUp, FaArrowDown, FaFilter,
  FaWallet, FaChartLine, FaPercent, FaGlobe
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Progress } from 'reactstrap';
import { MARKETS, MARKET_LABELS } from '@/config/constants';

const Holdings = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [holdings, setHoldings] = useState([]);
  const [summary, setSummary] = useState(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [marketFilter, setMarketFilter] = useState('');

  useEffect(() => {
    if (user?.id) {
      fetchHoldings();
    }
  }, [user?.id, marketFilter]);

  const fetchHoldings = async () => {
    try {
      setLoading(true);
      let response;

      if (marketFilter) {
        response = await holdingService.getHoldingsByMarket(user.id, marketFilter);
      } else {
        response = await holdingService.getHoldingsSummary(user.id);
      }

      if (response.success && response.data) {
        if (marketFilter) {
          setHoldings(response.data || []);
          // Calculate summary from holdings
          const calculatedSummary = holdingService.calculatePortfolioMetrics(response.data);
          setSummary(calculatedSummary);
        } else {
          setHoldings(response.data.holdings || []);
          setSummary({
            totalInvestedAmount: response.data.totalInvestedAmount,
            totalCurrentValue: response.data.totalCurrentValue,
            totalUnrealizedPL: response.data.totalUnrealizedPL,
            totalUnrealizedPLPercentage: response.data.totalUnrealizedPLPercentage,
            totalHoldings: response.data.totalHoldings
          });
        }
      }
    } catch (error) {
      console.error('Error fetching holdings:', error);
      toast.error(error.message || 'Failed to load holdings');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount, currency = 'INR') => {
    const currencyMap = {
      INR: 'en-IN',
      USD: 'en-US',
      GBP: 'en-GB',
      EUR: 'de-DE'
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

  const getMarketFlag = (market) => {
    const flags = {
      US: '🇺🇸', INDIA: '🇮🇳', UK: '🇬🇧', EU: '🇪🇺', SINGAPORE: '🇸🇬',
      HONG_KONG: '🇭🇰', JAPAN: '🇯🇵', CANADA: '🇨🇦', AUSTRALIA: '🇦🇺'
    };
    return flags[market] || '🌍';
  };

  const getPortfolioAllocation = (holding) => {
    if (!summary?.totalCurrentValue || parseFloat(summary.totalCurrentValue) === 0) return 0;
    return ((parseFloat(holding.currentValue) / parseFloat(summary.totalCurrentValue)) * 100).toFixed(1);
  };

  const filteredHoldings = holdings.filter(holding => {
    const matchesSearch =
      holding.symbol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      holding.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Group holdings by market for pie chart visualization
  const holdingsByMarket = holdingService.groupByMarket(holdings);

  if (loading && holdings.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading holdings...</p>
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
            <h4 className="mb-1">My Holdings</h4>
            <p className="text-muted mb-0">View your current stock holdings and portfolio allocation</p>
          </div>
        </Col>
      </Row>

      {/* Summary Cards */}
      {summary && (
        <Row className="mb-4 g-3">
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100 bg-primary text-white">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="small opacity-75 mb-1">Total Invested</div>
                    <h4 className="mb-0">{formatCurrency(summary.totalInvestedAmount)}</h4>
                  </div>
                  <FaWallet className="fs-2 opacity-50" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100 bg-info text-white">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="small opacity-75 mb-1">Current Value</div>
                    <h4 className="mb-0">{formatCurrency(summary.totalCurrentValue)}</h4>
                  </div>
                  <FaChartLine className="fs-2 opacity-50" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className={`border-0 shadow-sm h-100 ${parseFloat(summary.totalUnrealizedPL) >= 0 ? 'bg-success' : 'bg-danger'} text-white`}>
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="small opacity-75 mb-1">Unrealized P&L</div>
                    <h4 className="mb-0">
                      {parseFloat(summary.totalUnrealizedPL) >= 0 ? '+' : ''}
                      {formatCurrency(summary.totalUnrealizedPL)}
                    </h4>
                  </div>
                  {parseFloat(summary.totalUnrealizedPL) >= 0 ?
                    <FaArrowUp className="fs-2 opacity-50" /> :
                    <FaArrowDown className="fs-2 opacity-50" />
                  }
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className={`border-0 shadow-sm h-100 ${parseFloat(summary.totalUnrealizedPLPercentage) >= 0 ? 'bg-success' : 'bg-danger'} text-white`}>
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="small opacity-75 mb-1">Return %</div>
                    <h4 className="mb-0">
                      {parseFloat(summary.totalUnrealizedPLPercentage) >= 0 ? '+' : ''}
                      {summary.totalUnrealizedPLPercentage}%
                    </h4>
                  </div>
                  <FaPercent className="fs-2 opacity-50" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      {/* Market Distribution */}
      {Object.keys(holdingsByMarket).length > 1 && (
        <Row className="mb-4">
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <h6 className="mb-3">
                  <FaGlobe className="me-2 text-primary" />
                  Portfolio by Market
                </h6>
                <Row className="g-3">
                  {Object.entries(holdingsByMarket).map(([market, marketHoldings]) => {
                    const marketMetrics = holdingService.calculatePortfolioMetrics(marketHoldings);
                    const allocation = summary?.totalCurrentValue ?
                      ((parseFloat(marketMetrics.totalCurrentValue) / parseFloat(summary.totalCurrentValue)) * 100).toFixed(1) : 0;
                    return (
                      <Col md={4} key={market}>
                        <div className="p-3 bg-light rounded">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span>
                              <span className="fs-4 me-2">{getMarketFlag(market)}</span>
                              {MARKET_LABELS[market] || market}
                            </span>
                            <Badge color="primary">{allocation}%</Badge>
                          </div>
                          <Progress value={parseFloat(allocation)} className="mb-2" />
                          <div className="small text-muted">
                            Value: {formatCurrency(marketMetrics.totalCurrentValue)} | {marketHoldings.length} stocks
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

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
                      placeholder="Search by symbol or company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md={6}>
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
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Holdings Table */}
      <Row>
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              {filteredHoldings.length === 0 ? (
                <div className="text-center py-5">
                  <FaChartPie className="fs-1 text-muted mb-3" />
                  <h5 className="text-muted">No holdings found</h5>
                  <p className="text-muted mb-0">
                    {marketFilter ? 'Try selecting a different market' : 'Start trading to build your portfolio'}
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Market</th>
                        <th>Symbol / Company</th>
                        <th>Quantity</th>
                        <th>Avg. Buy Price</th>
                        <th>Current Price</th>
                        <th>Invested</th>
                        <th>Current Value</th>
                        <th>Unrealized P&L</th>
                        <th>Allocation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredHoldings.map((holding, index) => {
                        const pl = parseFloat(holding.unrealizedPL || 0);
                        const plPercentage = parseFloat(holding.unrealizedPLPercentage || 0);
                        const allocation = getPortfolioAllocation(holding);
                        return (
                          <tr key={holding.id || index}>
                            <td>
                              <span className="fs-4 me-2">{getMarketFlag(holding.market)}</span>
                              <small className="text-muted">{holding.market}</small>
                            </td>
                            <td>
                              <div>
                                <strong>{holding.symbol}</strong>
                                <div className="small text-muted">{holding.companyName}</div>
                                <div className="small text-muted">Bought: {formatDate(holding.boughtOn)}</div>
                              </div>
                            </td>
                            <td><strong>{holding.quantity}</strong></td>
                            <td>{formatCurrency(holding.averageBuyPrice, holding.currency)}</td>
                            <td className="fw-bold">{formatCurrency(holding.currentPrice, holding.currency)}</td>
                            <td>{formatCurrency(holding.investedAmount, holding.currency)}</td>
                            <td className="fw-bold">{formatCurrency(holding.currentValue, holding.currency)}</td>
                            <td>
                              <div className={pl >= 0 ? 'text-success' : 'text-danger'}>
                                <span className="fw-bold">
                                  {pl >= 0 ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
                                  {formatCurrency(Math.abs(pl), holding.currency)}
                                </span>
                                <div className="small">
                                  ({plPercentage >= 0 ? '+' : ''}{plPercentage}%)
                                </div>
                              </div>
                            </td>
                            <td>
                              <div style={{ width: '100px' }}>
                                <div className="d-flex justify-content-between small mb-1">
                                  <span>{allocation}%</span>
                                </div>
                                <Progress
                                  value={parseFloat(allocation)}
                                  color={parseFloat(allocation) > 20 ? 'warning' : 'primary'}
                                  style={{ height: '6px' }}
                                />
                              </div>
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

      {/* Summary Footer */}
      {filteredHoldings.length > 0 && summary && (
        <Row className="mt-4">
          <Col xs={12}>
            <Card className="border-0 shadow-sm bg-light">
              <CardBody>
                <Row className="text-center">
                  <Col md={4}>
                    <div className="small text-muted">Total Holdings</div>
                    <h5 className="mb-0">{summary.totalHoldings} Stocks</h5>
                  </Col>
                  <Col md={4}>
                    <div className="small text-muted">Total Investment</div>
                    <h5 className="mb-0">{formatCurrency(summary.totalInvestedAmount)}</h5>
                  </Col>
                  <Col md={4}>
                    <div className="small text-muted">Portfolio Value</div>
                    <h5 className={`mb-0 ${parseFloat(summary.totalUnrealizedPL) >= 0 ? 'text-success' : 'text-danger'}`}>
                      {formatCurrency(summary.totalCurrentValue)}
                    </h5>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Holdings;
