// Full notifications page — all notifications for the current user with
// filter (all / unread / read), pagination, mark-read, mark-all-read, delete.
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FaBell, FaBellSlash, FaCheckDouble, FaTrash, FaSpinner,
  FaCheckCircle, FaCircle, FaExternalLinkAlt
} from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { notificationService } from '@/Services';

const PAGE_SIZE = 20;

const formatWhen = (iso) => {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return d.toLocaleDateString();
  } catch { return ''; }
};

// Icons by notification type — keep the set small and visual.
const typeIcon = (type) => {
  const t = (type || '').toUpperCase();
  if (t === 'TRADE')           return { cls: 'ph-chart-line-up',      color: 'text-success' };
  if (t === 'USER_REGISTERED') return { cls: 'ph-user-plus',          color: 'text-primary' };
  if (t === 'WELCOME')         return { cls: 'ph-hand-waving',        color: 'text-warning' };
  if (t === 'RECOMMENDATION')  return { cls: 'ph-lightbulb',          color: 'text-info'    };
  if (t === 'WARNING')         return { cls: 'ph-warning',            color: 'text-warning' };
  if (t === 'ERROR')           return { cls: 'ph-x-circle',           color: 'text-danger'  };
  return { cls: 'ph-bell', color: 'text-secondary' };
};

const Notifications = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [filter, setFilter] = useState('all'); // all | unread | read
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: PAGE_SIZE,
    totalElements: 0,
    totalPages: 0,
  });
  const [busyIds, setBusyIds] = useState(new Set());

  const setBusy = (id, on) => setBusyIds(prev => {
    const next = new Set(prev);
    if (on) next.add(id); else next.delete(id);
    return next;
  });

  const load = useCallback(async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const params = { page: pagination.pageNumber, size: pagination.pageSize };
      const resp = filter === 'unread'
        ? await notificationService.getUnreadNotifications(user.id, params)
        : await notificationService.getUserNotifications(user.id, params);

      const page = resp?.data || resp || {};
      let content = page.content || [];
      if (filter === 'read') {
        content = content.filter(n => n.isRead || n.read);
      }
      setRows(content);
      setPagination(p => ({
        ...p,
        totalElements: page.totalElements ?? 0,
        totalPages: page.totalPages ?? 0,
      }));

      const countResp = await notificationService.getUnreadCount(user.id);
      const c = countResp?.data?.unreadCount ?? countResp?.unreadCount ?? 0;
      setUnreadCount(typeof c === 'number' ? c : 0);
    } catch (err) {
      toast.error(err?.message || 'Failed to load notifications');
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [user?.id, filter, pagination.pageNumber, pagination.pageSize]);

  useEffect(() => { load(); }, [load]);

  // Reset to page 0 when filter changes.
  useEffect(() => { setPagination(p => ({ ...p, pageNumber: 0 })); }, [filter]);

  const handleClickItem = async (n) => {
    // Mark read locally for snappy UX.
    if (!(n.isRead || n.read)) {
      setRows(prev => prev.map(x => x.id === n.id ? { ...x, isRead: true, read: true } : x));
      setUnreadCount(c => Math.max(0, c - 1));
      try { await notificationService.markAsRead(n.id, user.id); } catch { /* non-critical */ }
    }
    if (n.actionUrl) navigate(n.actionUrl);
  };

  const handleMarkRead = async (e, n) => {
    e.stopPropagation();
    if (n.isRead || n.read) return;
    setBusy(n.id, true);
    try {
      await notificationService.markAsRead(n.id, user.id);
      setRows(prev => prev.map(x => x.id === n.id ? { ...x, isRead: true, read: true } : x));
      setUnreadCount(c => Math.max(0, c - 1));
    } catch (err) {
      toast.error(err?.message || 'Failed to mark read');
    } finally {
      setBusy(n.id, false);
    }
  };

  const handleDelete = async (e, n) => {
    e.stopPropagation();
    setBusy(n.id, true);
    try {
      await notificationService.deleteNotification(n.id, user.id);
      setRows(prev => prev.filter(x => x.id !== n.id));
      if (!(n.isRead || n.read)) setUnreadCount(c => Math.max(0, c - 1));
    } catch (err) {
      toast.error(err?.message || 'Failed to delete');
    } finally {
      setBusy(n.id, false);
    }
  };

  const handleMarkAllRead = async () => {
    if (!user?.id || unreadCount === 0) return;
    try {
      await notificationService.markAllAsRead(user.id);
      setRows(prev => prev.map(x => ({ ...x, isRead: true, read: true })));
      setUnreadCount(0);
      toast.success('All notifications marked as read');
    } catch (err) {
      toast.error(err?.message || 'Failed to mark all read');
    }
  };

  const displayedCount = rows.length;

  return (
    <Container fluid className="py-4">
      <Row className="g-3 mb-3">
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody>
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div>
                  <h4 className="mb-1 d-flex align-items-center gap-2">
                    <FaBell className="text-primary" /> Notifications
                    {unreadCount > 0 && (
                      <Badge color="primary" pill>{unreadCount} unread</Badge>
                    )}
                  </h4>
                  <div className="text-muted small">
                    Your activity feed — trades, registrations, system updates.
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="btn-group" role="group" aria-label="Filter">
                    {['all','unread','read'].map(f => (
                      <button
                        key={f}
                        type="button"
                        className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter(f)}
                      >
                        {f[0].toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleMarkAllRead}
                    disabled={unreadCount === 0}
                  >
                    <FaCheckDouble className="me-1" /> Mark all read
                  </button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="g-3">
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <CardBody className="p-0">
              {loading ? (
                <div className="text-center py-5">
                  <FaSpinner className="fa-spin text-primary" size={32} />
                  <div className="mt-2 text-muted">Loading…</div>
                </div>
              ) : displayedCount === 0 ? (
                <div className="text-center py-5 text-muted">
                  <FaBellSlash size={40} className="mb-2" />
                  <div>
                    {filter === 'unread'
                      ? 'No unread notifications — you\'re all caught up.'
                      : 'No notifications yet.'}
                  </div>
                </div>
              ) : (
                <ul className="list-unstyled mb-0">
                  {rows.map((n) => {
                    const isRead = n.isRead || n.read;
                    const { cls, color } = typeIcon(n.type);
                    const busy = busyIds.has(n.id);
                    return (
                      <li
                        key={n.id}
                        className={`d-flex align-items-start gap-3 px-3 py-3 border-bottom ${isRead ? '' : 'bg-light-primary'}`}
                        onClick={() => handleClickItem(n)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="flex-shrink-0 d-flex-center bg-white border rounded-circle"
                              style={{ width: 44, height: 44 }}>
                          <i className={`ph-duotone ${cls} ${color}`} style={{ fontSize: 22 }}></i>
                        </span>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2">
                            <h6 className={`mb-0 ${isRead ? 'fw-normal' : 'fw-semibold'}`}>
                              {n.title || 'Notification'}
                            </h6>
                            {n.type && (
                              <Badge color="light" className="text-dark text-uppercase" style={{ fontSize: 10 }}>
                                {n.type.replace(/_/g, ' ')}
                              </Badge>
                            )}
                            {!isRead && (
                              <Badge color="primary" pill style={{ fontSize: 10 }}>New</Badge>
                            )}
                          </div>
                          <p className="mb-1 text-muted">{n.message || n.body || ''}</p>
                          <div className="d-flex align-items-center gap-3 text-muted small">
                            <span>{formatWhen(n.createdAt || n.created_at || n.date)}</span>
                            {n.actionUrl && (
                              <span className="text-primary">
                                <FaExternalLinkAlt className="me-1" style={{ fontSize: 10 }} />
                                {n.actionUrl}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0 d-flex align-items-center gap-1">
                          {!isRead && (
                            <button
                              type="button"
                              className="btn btn-sm btn-link text-primary p-1"
                              title="Mark as read"
                              onClick={(e) => handleMarkRead(e, n)}
                              disabled={busy}
                            >
                              {busy ? <FaSpinner className="fa-spin" /> : <FaCheckCircle />}
                            </button>
                          )}
                          {isRead && (
                            <span className="text-muted p-1" title="Read">
                              <FaCircle style={{ fontSize: 8 }} />
                            </span>
                          )}
                          <button
                            type="button"
                            className="btn btn-sm btn-link text-danger p-1"
                            title="Delete"
                            onClick={(e) => handleDelete(e, n)}
                            disabled={busy}
                          >
                            {busy ? <FaSpinner className="fa-spin" /> : <FaTrash />}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {pagination.totalPages > 1 && (
                <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top">
                  <div className="text-muted small">
                    Page {pagination.pageNumber + 1} of {pagination.totalPages}
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
  );
};

export default Notifications;
