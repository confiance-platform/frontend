// Trade Recording Page - Record Buy/Sell Trades
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { tradeService, recommendationService } from '@/Services';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaPlus, FaArrowUp, FaArrowDown, FaExchangeAlt,
  FaCheckCircle, FaClock, FaTimes, FaFilter, FaCalendar, FaChartBar
} from 'react-icons/fa';
import { Container, Row, Col, Card, CardBody, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MARKETS, MARKET_LABELS, TRADE_STATUS } from '@/config/constants';

const Trades = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [trades, setTrades] = useState([]);
  const [summary, setSummary] = useState(null);
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

  // Buy Modal
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyForm, setBuyForm] = useState({
    market: 'INDIA',
    symbol: '',
    currency: 'INR',
    buyDate: new Date().toISOString().split('T')[0],
    buyPrice: '',
    buyQuantity: '',
    notes: ''
  });

  // Symbol dropdown — populated from recommendation-service. Any authenticated
  // user can call /recommendations/symbols. The input is a typeahead backed by
  // this list; the user can also free-type if the symbol isn't listed yet.
  const [symbols, setSymbols] = useState([]);
  const [symbolQuery, setSymbolQuery] = useState('');
  const [symbolDropdownOpen, setSymbolDropdownOpen] = useState(false);

  // Sell Modal
  const [showSellModal, setShowSellModal] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [sellForm, setSellForm] = useState({
    sellDate: new Date().toISOString().split('T')[0],
    sellPrice: '',
    sellQuantity: '',
    notes: ''
  });

  // Load the recommendation symbols once (cheap, a few dozen entries)
  useEffect(() => {
    (async () => {
      try {
        const list = await recommendationService.getSymbols();
        if (Array.isArray(list)) setSymbols(list);
      } catch (err) {
        // Non-fatal — user can still free-type symbols
        console.warn('Failed to load recommendation symbols', err?.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (user?.id) {
      fetchTrades();
      fetchSummary();
    }
  }, [user?.id, pagination.pageNumber, marketFilter, statusFilter]);

  const fetchTrades = async () => {
    try {
      setLoading(true);
      let response;

      if (marketFilter || statusFilter) {
        response = await tradeService.filterTrades(
          user.id,
          { market: marketFilter || undefined, status: statusFilter || undefined },
          { page: pagination.pageNumber, size: pagination.pageSize }
        );
      } else {
        response = await tradeService.getUserTrades(user.id, {
          page: pagination.pageNumber,
          size: pagination.pageSize
        });
      }

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

  const fetchSummary = async () => {
    try {
      const response = await tradeService.getTradeSummary(user.id);
      if (response.success && response.data) {
        setSummary(response.data);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };

  const handleBuySubmit = async () => {
    if (!buyForm.symbol || !buyForm.buyPrice || !buyForm.buyQuantity) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      setSubmitting(true);
      const response = await tradeService.createTrade(user.id, buyForm);

      if (response.success) {
        toast.success('Trade recorded successfully!');
        setShowBuyModal(false);
        setBuyForm({
          market: 'INDIA',
          symbol: '',
          currency: 'INR',
          buyDate: new Date().toISOString().split('T')[0],
          buyPrice: '',
          buyQuantity: '',
          notes: ''
        });
        setSymbolQuery('');
        fetchTrades();
        fetchSummary();
      }
    } catch (error) {
      console.error('Error recording trade:', error);
      toast.error(error.message || 'Failed to record trade');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSellClick = (trade) => {
    setSelectedTrade(trade);
    setSellForm({
      sellDate: new Date().toISOString().split('T')[0],
      sellPrice: '',
      sellQuantity: trade.remainingQuantity || trade.buyQuantity,
      notes: ''
    });
    setShowSellModal(true);
  };

  const handleSellSubmit = async () => {
    if (!sellForm.sellPrice || !sellForm.sellQuantity) {
      toast.error('Please fill all required fields');
      return;
    }

    const maxQty = parseFloat(selectedTrade.remainingQuantity || selectedTrade.buyQuantity);
    if (parseFloat(sellForm.sellQuantity) > maxQty) {
      toast.error(`Maximum quantity you can sell is ${maxQty}`);
      return;
    }

    try {
      setSubmitting(true);
      const response = await tradeService.recordSell(selectedTrade.id, user.id, sellForm);

      if (response.success) {
        toast.success('Sell recorded successfully!');
        setShowSellModal(false);
        setSelectedTrade(null);
        fetchTrades();
        fetchSummary();
      }
    } catch (error) {
      console.error('Error recording sell:', error);
      toast.error(error.message || 'Failed to record sell');
    } finally {
      setSubmitting(false);
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

  const getStatusBadge = (status) => {
    const statusConfig = {
      OPEN: { color: 'success', icon: FaCheckCircle, text: 'Open' },
      CLOSED: { color: 'secondary', icon: FaTimes, text: 'Closed' },
      PARTIALLY_SOLD: { color: 'warning', icon: FaClock, text: 'Partial' }
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

  const filteredTrades = trades.filter(trade => {
    const matchesSearch =
      trade.symbol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, pageNumber: newPage }));
  };

  if (loading && trades.length === 0) {
    return (
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted">Loading trades...</p>
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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">My Trades</h4>
              <p className="text-muted mb-0">Record and manage your buy/sell trades</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setShowBuyModal(true)}
            >
              <FaPlus className="me-2" />
              Record Buy Trade
            </button>
          </div>
        </Col>
      </Row>

      {/* Summary Cards */}
      {summary && (
        <Row className="mb-4 g-3">
          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="small text-muted mb-1">Total Invested</div>
                <h4 className="mb-0 text-primary">
                  {formatCurrency(summary.totalInvestedAmount)}
                </h4>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="small text-muted mb-1">Total P&L</div>
                <h4 className={`mb-0 ${parseFloat(summary.totalProfitLoss) >= 0 ? 'text-success' : 'text-danger'}`}>
                  {parseFloat(summary.totalProfitLoss) >= 0 ? '+' : ''}{formatCurrency(summary.totalProfitLoss)}
                </h4>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="small text-muted mb-1">Open Trades</div>
                <h4 className="mb-0 text-info">{summary.openTradesCount || 0}</h4>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="text-center">
                <div className="small text-muted mb-1">Closed Trades</div>
                <h4 className="mb-0 text-secondary">{summary.closedTradesCount || 0}</h4>
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
                  <p className="text-muted mb-3">Start by recording your first trade</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowBuyModal(true)}
                  >
                    <FaPlus className="me-2" />
                    Record Buy Trade
                  </button>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Market</th>
                        <th>Symbol / Company</th>
                        <th>Buy Date</th>
                        <th>Buy Price</th>
                        <th>Quantity</th>
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
                        const plPercentage = parseFloat(trade.profitLossPercentage || 0);
                        return (
                          <tr key={trade.id}>
                            <td>
                              <span className="fs-4 me-2">{getMarketFlag(trade.market)}</span>
                              <small className="text-muted">{trade.market}</small>
                            </td>
                            <td>
                              <div>
                                <strong>{trade.symbol}</strong>
                                <div className="small text-muted">{trade.companyName}</div>
                              </div>
                            </td>
                            <td>{formatDate(trade.buyDate)}</td>
                            <td>{formatCurrency(trade.buyPrice, trade.currency)}</td>
                            <td>
                              {trade.buyQuantity}
                              {trade.remainingQuantity && parseFloat(trade.remainingQuantity) !== parseFloat(trade.buyQuantity) && (
                                <div className="small text-muted">
                                  Remaining: {trade.remainingQuantity}
                                </div>
                              )}
                            </td>
                            <td>{formatCurrency(trade.investedAmount, trade.currency)}</td>
                            <td>
                              {trade.sellPrice ? formatCurrency(trade.sellPrice, trade.currency) : '-'}
                            </td>
                            <td>
                              {trade.status !== 'OPEN' ? (
                                <div className={pl >= 0 ? 'text-success' : 'text-danger'}>
                                  {pl >= 0 ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
                                  {formatCurrency(Math.abs(pl), trade.currency)}
                                  <div className="small">({plPercentage >= 0 ? '+' : ''}{plPercentage}%)</div>
                                </div>
                              ) : '-'}
                            </td>
                            <td>{getStatusBadge(trade.status)}</td>
                            <td>
                              {trade.status !== 'CLOSED' && (
                                <button
                                  className="btn btn-sm btn-outline-success"
                                  onClick={() => handleSellClick(trade)}
                                >
                                  <FaExchangeAlt className="me-1" />
                                  Sell
                                </button>
                              )}
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
                Showing {filteredTrades.length} of {pagination.totalElements} trades
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

      {/* Buy Trade Modal */}
      <Modal isOpen={showBuyModal} toggle={() => setShowBuyModal(false)} size="lg">
        <ModalHeader toggle={() => setShowBuyModal(false)}>
          <FaPlus className="me-2 text-primary" />
          Record Buy Trade
        </ModalHeader>
        <ModalBody>
          <Row className="g-3">
            <Col md={6}>
              <label className="form-label">Market *</label>
              <select
                className="form-select"
                value={buyForm.market}
                onChange={(e) => {
                  const market = e.target.value;
                  setBuyForm(prev => ({
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
              <label className="form-label">Symbol *</label>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Start typing — e.g. PLTR, NVDA"
                  value={symbolQuery || buyForm.symbol}
                  onChange={(e) => {
                    const v = e.target.value.toUpperCase();
                    setSymbolQuery(v);
                    setBuyForm(prev => ({ ...prev, symbol: v }));
                    setSymbolDropdownOpen(true);
                  }}
                  onFocus={() => setSymbolDropdownOpen(true)}
                  onBlur={() => setTimeout(() => setSymbolDropdownOpen(false), 150)}
                  autoComplete="off"
                />
                {symbolDropdownOpen && symbols.length > 0 && (
                  <div
                    className="position-absolute bg-white border rounded shadow-sm w-100"
                    style={{ zIndex: 1055, maxHeight: 220, overflowY: 'auto', top: '100%' }}
                  >
                    {symbols
                      .filter(s => !symbolQuery || s.toUpperCase().includes(symbolQuery.toUpperCase()))
                      .slice(0, 50)
                      .map(s => (
                        <button
                          key={s}
                          type="button"
                          className="dropdown-item w-100 text-start px-3 py-2"
                          onMouseDown={(e) => { e.preventDefault(); }}
                          onClick={() => {
                            setBuyForm(prev => ({ ...prev, symbol: s }));
                            setSymbolQuery(s);
                            setSymbolDropdownOpen(false);
                          }}
                        >
                          {s}
                        </button>
                      ))
                    }
                    {symbols.filter(s => !symbolQuery || s.toUpperCase().includes(symbolQuery.toUpperCase())).length === 0 && (
                      <div className="px-3 py-2 text-muted small">
                        No recommendation symbol matches — you can still type any symbol.
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="form-text">
                Type to search recommendations, or enter any symbol manually.
              </div>
            </Col>
            <Col md={4}>
              <label className="form-label">Buy Date *</label>
              <input
                type="date"
                className="form-control"
                value={buyForm.buyDate}
                onChange={(e) => setBuyForm(prev => ({ ...prev, buyDate: e.target.value }))}
              />
            </Col>
            <Col md={4}>
              <label className="form-label">Buy Price *</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="0.00"
                value={buyForm.buyPrice}
                onChange={(e) => setBuyForm(prev => ({ ...prev, buyPrice: e.target.value }))}
              />
            </Col>
            <Col md={4}>
              <label className="form-label">Quantity *</label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                value={buyForm.buyQuantity}
                onChange={(e) => setBuyForm(prev => ({ ...prev, buyQuantity: e.target.value }))}
              />
            </Col>
            <Col md={12}>
              <label className="form-label">Notes</label>
              <textarea
                className="form-control"
                rows="2"
                placeholder="Any notes about this trade..."
                value={buyForm.notes}
                onChange={(e) => setBuyForm(prev => ({ ...prev, notes: e.target.value }))}
              />
            </Col>
          </Row>

          {buyForm.buyPrice && buyForm.buyQuantity && (
            <div className="alert alert-info mt-3">
              <strong>Total Investment:</strong>{' '}
              {formatCurrency(
                parseFloat(buyForm.buyPrice) * parseFloat(buyForm.buyQuantity),
                buyForm.currency
              )}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => setShowBuyModal(false)}
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleBuySubmit}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <FaSpinner className="fa-spin me-2" />
                Recording...
              </>
            ) : (
              <>
                <FaCheckCircle className="me-2" />
                Record Trade
              </>
            )}
          </button>
        </ModalFooter>
      </Modal>

      {/* Sell Modal */}
      <Modal isOpen={showSellModal} toggle={() => setShowSellModal(false)} size="md">
        <ModalHeader toggle={() => setShowSellModal(false)}>
          <FaExchangeAlt className="me-2 text-success" />
          Record Sell for {selectedTrade?.symbol}
        </ModalHeader>
        <ModalBody>
          {selectedTrade && (
            <>
              <div className="alert alert-info mb-3">
                <div className="d-flex justify-content-between">
                  <span>Buy Price:</span>
                  <strong>{formatCurrency(selectedTrade.buyPrice, selectedTrade.currency)}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Available Quantity:</span>
                  <strong>{selectedTrade.remainingQuantity || selectedTrade.buyQuantity}</strong>
                </div>
              </div>

              <Row className="g-3">
                <Col md={12}>
                  <label className="form-label">Sell Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={sellForm.sellDate}
                    onChange={(e) => setSellForm(prev => ({ ...prev, sellDate: e.target.value }))}
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label">Sell Price *</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    placeholder="0.00"
                    value={sellForm.sellPrice}
                    onChange={(e) => setSellForm(prev => ({ ...prev, sellPrice: e.target.value }))}
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label">Quantity *</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    max={selectedTrade.remainingQuantity || selectedTrade.buyQuantity}
                    value={sellForm.sellQuantity}
                    onChange={(e) => setSellForm(prev => ({ ...prev, sellQuantity: e.target.value }))}
                  />
                </Col>
                <Col md={12}>
                  <label className="form-label">Notes</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Any notes about this sell..."
                    value={sellForm.notes}
                    onChange={(e) => setSellForm(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </Col>
              </Row>

              {sellForm.sellPrice && sellForm.sellQuantity && (
                <div className={`alert mt-3 ${parseFloat(sellForm.sellPrice) >= parseFloat(selectedTrade.buyPrice) ? 'alert-success' : 'alert-danger'}`}>
                  <div className="d-flex justify-content-between">
                    <span>Sell Amount:</span>
                    <strong>{formatCurrency(parseFloat(sellForm.sellPrice) * parseFloat(sellForm.sellQuantity), selectedTrade.currency)}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>P&L:</span>
                    <strong>
                      {parseFloat(sellForm.sellPrice) >= parseFloat(selectedTrade.buyPrice) ? '+' : ''}
                      {formatCurrency(
                        (parseFloat(sellForm.sellPrice) - parseFloat(selectedTrade.buyPrice)) * parseFloat(sellForm.sellQuantity),
                        selectedTrade.currency
                      )}
                      {' '}
                      ({(((parseFloat(sellForm.sellPrice) - parseFloat(selectedTrade.buyPrice)) / parseFloat(selectedTrade.buyPrice)) * 100).toFixed(2)}%)
                    </strong>
                  </div>
                </div>
              )}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary"
            onClick={() => setShowSellModal(false)}
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            onClick={handleSellSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <FaSpinner className="fa-spin me-2" />
                Recording...
              </>
            ) : (
              <>
                <FaCheckCircle className="me-2" />
                Record Sell
              </>
            )}
          </button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Trades;
