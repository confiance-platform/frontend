// Admin Recommendations — xlsx ingestion + browse (Rec Log / Long Term tabs)
// The admin uploads Confiance_Stock_Recommendations.xlsx; the server parses
// "Rec Log" (cols B..M) and "LongTerm" (cols C, F, D, E) into normalised
// tables with duplicate prevention (Rec Log: symbol+date+entry, Long Term: symbol).
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';
import { toast } from 'react-toastify';
import {
  FaSearch, FaSpinner, FaUpload, FaFileExcel,
  FaTimesCircle, FaArrowUp, FaArrowDown, FaTimes
} from 'react-icons/fa';
import RoleGate from '@/Components/RoleGate';
import { recommendationService } from '@/Services';

const SHEET_REC_LOG = 'rec-log';
const SHEET_LONG_TERM = 'long-term';

const STATUS_OPTIONS_REC_LOG = [
  { value: '', label: 'All statuses' },
  { value: 'Open', label: 'Open' },
  { value: 'Closed', label: 'Closed' },
  { value: 'Partially', label: 'Partially' }
];

const fmt = (v, digits = 2) => {
  if (v === null || v === undefined || v === '') return '—';
  const n = Number(v);
  if (Number.isNaN(n)) return String(v);
  return n.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
};

const fmtDate = (v) => (v ? String(v).slice(0, 10) : '—');

const statusBadge = (status) => {
  const s = (status || '').toLowerCase();
  let color = 'secondary';
  if (s === 'open') color = 'primary';
  else if (s === 'closed') color = 'success';
  else if (s === 'partially') color = 'warning';
  return <Badge color={color} pill>{status || '—'}</Badge>;
};

const AdminRecommendations = () => {
  const [activeSheet, setActiveSheet] = useState(SHEET_REC_LOG);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 25,
    totalElements: 0,
    totalPages: 0
  });

  // Rec Log filters
  const [statusFilter, setStatusFilter] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [remarksFilter, setRemarksFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Upload state
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [lastUpload, setLastUpload] = useState(null);

  const resetFilters = () => {
    setStatusFilter('');
    setFromDate('');
    setToDate('');
    setRemarksFilter('');
    setSearchTerm('');
    setPagination(p => ({ ...p, pageNumber: 0 }));
  };

  const switchSheet = (sheetId) => {
    setActiveSheet(sheetId);
    resetFilters();
    setRows([]);
  };

  const fetchPage = useCallback(async () => {
    setLoading(true);
    try {
      const pageParams = { page: pagination.pageNumber, size: pagination.pageSize };
      let resp;
      if (activeSheet === SHEET_REC_LOG) {
        resp = await recommendationService.getRecLog({
          status: statusFilter || undefined,
          from: fromDate || undefined,
          to: toDate || undefined,
          remarks: remarksFilter || undefined,
          search: searchTerm || undefined
        }, pageParams);
      } else {
        resp = await recommendationService.getLongTerm({
          status: statusFilter || undefined,
          search: searchTerm || undefined
        }, pageParams);
      }

      const page = resp || {};
      setRows(page.content || []);
      setPagination(p => ({
        ...p,
        totalElements: page.totalElements ?? 0,
        totalPages: page.totalPages ?? 0
      }));
    } catch (err) {
      toast.error(err?.message || 'Failed to load recommendations');
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [activeSheet, pagination.pageNumber, pagination.pageSize,
      statusFilter, fromDate, toDate, remarksFilter, searchTerm]);

  useEffect(() => { fetchPage(); }, [fetchPage]);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok = file.name.toLowerCase().endsWith('.xlsx')
      || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!ok) {
      toast.error('Please select a .xlsx file');
      return;
    }
    setUploading(true);
    setLastUpload(null);
    try {
      const res = await recommendationService.uploadXlsx(file);
      setLastUpload(res);
      const ins = (res.recLogInserted || 0) + (res.longTermInserted || 0);
      const upd = (res.recLogUpdated || 0) + (res.longTermUpdated || 0);
      toast.success(`Imported — ${ins} new, ${upd} updated`);
      setPagination(p => ({ ...p, pageNumber: 0 }));
      fetchPage();
    } catch (err) {
      toast.error(err?.message || 'Upload failed');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const statusOptionsLongTerm = useMemo(() => {
    const set = new Set();
    rows.forEach(r => { if (r.status) set.add(r.status); });
    return [{ value: '', label: 'All statuses' },
      ...Array.from(set).sort().map(s => ({ value: s, label: s }))];
  }, [rows]);

  const statusOptions = activeSheet === SHEET_REC_LOG
    ? STATUS_OPTIONS_REC_LOG
    : statusOptionsLongTerm;

  return (
    <RoleGate roles={["ROLE_ADMIN", "ROLE_SUPER_ADMIN"]}>
      <Container fluid className="py-4">
        <Row className="g-3 mb-3">
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
                  <div>
                    <h4 className="mb-1">Stock Recommendations</h4>
                    <div className="text-muted small">
                      Upload <code>Confiance_Stock_Recommendations.xlsx</code> — the server
                      parses the <b>Rec Log</b> and <b>LongTerm</b> sheets and stores them
                      with duplicate protection.
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onChange={handleUpload}
                      style={{ display: 'none' }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                    >
                      {uploading
                        ? <><FaSpinner className="fa-spin me-2" /> Uploading…</>
                        : <><FaUpload className="me-2" /> Upload .xlsx</>
                      }
                    </button>
                  </div>
                </div>

                {lastUpload && (
                  <div className="alert alert-info mt-3 mb-0 small">
                    <div><FaFileExcel className="me-2" /><b>{lastUpload.fileName}</b></div>
                    <div className="mt-1">
                      Rec Log: <b>{lastUpload.recLogInserted}</b> inserted, <b>{lastUpload.recLogUpdated}</b> updated,{' '}
                      <b>{lastUpload.recLogSkipped || 0}</b> skipped ·
                      &nbsp;LongTerm: <b>{lastUpload.longTermInserted}</b> inserted, <b>{lastUpload.longTermUpdated}</b> updated,{' '}
                      <b>{lastUpload.longTermSkipped || 0}</b> skipped
                    </div>
                    {lastUpload.errors?.length > 0 && (
                      <div className="mt-1 text-warning">
                        <FaTimesCircle className="me-1" /> {lastUpload.errors.join('; ')}
                      </div>
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="g-3 mb-3">
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <Row className="g-2 align-items-end">
                  <Col md={3} sm={6}>
                    <label className="form-label small mb-1">Sheet</label>
                    <select
                      className="form-select"
                      value={activeSheet}
                      onChange={(e) => switchSheet(e.target.value)}
                    >
                      <option value={SHEET_REC_LOG}>Rec Log</option>
                      <option value={SHEET_LONG_TERM}>Long Term</option>
                    </select>
                  </Col>

                  <Col md={2} sm={6}>
                    <label className="form-label small mb-1">Status</label>
                    <select
                      className="form-select"
                      value={statusFilter}
                      onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setPagination(p => ({ ...p, pageNumber: 0 }));
                      }}
                    >
                      {statusOptions.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </Col>

                  {activeSheet === SHEET_REC_LOG && (
                    <>
                      <Col md={2} sm={6}>
                        <label className="form-label small mb-1">From</label>
                        <input
                          type="date"
                          className="form-control"
                          value={fromDate}
                          onChange={(e) => {
                            setFromDate(e.target.value);
                            setPagination(p => ({ ...p, pageNumber: 0 }));
                          }}
                        />
                      </Col>
                      <Col md={2} sm={6}>
                        <label className="form-label small mb-1">To</label>
                        <input
                          type="date"
                          className="form-control"
                          value={toDate}
                          onChange={(e) => {
                            setToDate(e.target.value);
                            setPagination(p => ({ ...p, pageNumber: 0 }));
                          }}
                        />
                      </Col>
                      <Col md={2} sm={6}>
                        <label className="form-label small mb-1">Remarks contains</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. booked gains"
                          value={remarksFilter}
                          onChange={(e) => setRemarksFilter(e.target.value)}
                          onBlur={() => setPagination(p => ({ ...p, pageNumber: 0 }))}
                        />
                      </Col>
                    </>
                  )}

                  <Col md={activeSheet === SHEET_REC_LOG ? 1 : 5} sm={6}>
                    <label className="form-label small mb-1">Search</label>
                    <div className="position-relative">
                      <FaSearch className="position-absolute" style={{ top: 12, left: 10, color: '#888' }} />
                      <input
                        type="text"
                        className="form-control ps-4"
                        placeholder="Symbol…"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onBlur={() => setPagination(p => ({ ...p, pageNumber: 0 }))}
                      />
                    </div>
                  </Col>

                  <Col xs="auto">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={resetFilters}
                      title="Clear filters"
                    >
                      <FaTimes className="me-1" /> Clear
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="g-3">
          <Col xs={12}>
            <Card className="border-0 shadow-sm">
              <CardBody className="p-0">
                <div className="table-responsive">
                  {loading ? (
                    <div className="text-center py-5">
                      <FaSpinner className="fa-spin text-primary" size={32} />
                      <div className="mt-2 text-muted">Loading…</div>
                    </div>
                  ) : rows.length === 0 ? (
                    <div className="text-center py-5 text-muted">
                      <FaFileExcel size={32} className="mb-2" />
                      <div>No rows to show. Upload an xlsx to populate.</div>
                    </div>
                  ) : activeSheet === SHEET_REC_LOG ? (
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Market</th>
                          <th>Suggested On</th>
                          <th>Symbol</th>
                          <th className="text-end">CMP</th>
                          <th className="text-end">Entry</th>
                          <th className="text-end">Target</th>
                          <th className="text-end">Stop Loss</th>
                          <th className="text-end">R/R</th>
                          <th className="text-end">P/L %</th>
                          <th>Status</th>
                          <th>Exit Date</th>
                          <th className="text-end">Holding (d)</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(r => (
                          <tr key={r.id}>
                            <td><Badge color="light" className="text-dark">{r.market || 'US'}</Badge></td>
                            <td>{fmtDate(r.suggestedOn)}</td>
                            <td className="fw-semibold">{r.symbol}</td>
                            <td className="text-end">{fmt(r.cmp)}</td>
                            <td className="text-end">{fmt(r.entryPrice)}</td>
                            <td className="text-end">{fmt(r.target)}</td>
                            <td className="text-end">{fmt(r.stopLoss)}</td>
                            <td className="text-end">{fmt(r.rewardRiskRatio, 3)}</td>
                            <td className="text-end">
                              {r.profitLossPct != null ? (
                                <span className={Number(r.profitLossPct) >= 0 ? 'text-success' : 'text-danger'}>
                                  {Number(r.profitLossPct) >= 0
                                    ? <FaArrowUp className="me-1" />
                                    : <FaArrowDown className="me-1" />}
                                  {fmt(r.profitLossPct)}%
                                </span>
                              ) : '—'}
                            </td>
                            <td>{statusBadge(r.status)}</td>
                            <td>{fmtDate(r.exitDate)}</td>
                            <td className="text-end">{r.holdingDays ?? '—'}</td>
                            <td className="text-muted small" style={{ maxWidth: 280 }}>
                              {r.remarks || '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Symbol</th>
                          <th className="text-end">Recommended Entry</th>
                          <th>Latest View</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(r => (
                          <tr key={r.id}>
                            <td className="fw-semibold">{r.symbol}</td>
                            <td className="text-end">{fmt(r.recommendedEntry)}</td>
                            <td className="text-muted" style={{ maxWidth: 480 }}>
                              {r.latestView || '—'}
                            </td>
                            <td>{statusBadge(r.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {pagination.totalPages > 1 && (
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top">
                    <div className="text-muted small">
                      Showing page {pagination.pageNumber + 1} of {pagination.totalPages}
                      &nbsp;·&nbsp;{pagination.totalElements} total
                    </div>
                    <nav>
                      <ul className="pagination pagination-sm mb-0">
                        <li className={`page-item ${pagination.pageNumber === 0 ? 'disabled' : ''}`}>
                          <button className="page-link"
                                  onClick={() => setPagination(p => ({ ...p, pageNumber: Math.max(0, p.pageNumber - 1) }))}>
                            Previous
                          </button>
                        </li>
                        <li className={`page-item ${pagination.pageNumber + 1 >= pagination.totalPages ? 'disabled' : ''}`}>
                          <button className="page-link"
                                  onClick={() => setPagination(p => ({ ...p, pageNumber: Math.min(p.totalPages - 1, p.pageNumber + 1) }))}>
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </RoleGate>
  );
};

export default AdminRecommendations;
