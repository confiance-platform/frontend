// Payment History Component
import React, { useState, useEffect } from 'react';
import { Table, Badge, Spinner, Alert, Card, CardHeader, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { paymentService } from '../../Services/paymentService';
import { useAuth } from '../../context/AuthContext';
import { PAYMENT_STATUS } from '../../config/constants';

const PaymentHistory = ({ pageSize = 10 }) => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPayments();
  }, [user?.userId, currentPage]);

  const fetchPayments = async () => {
    if (!user?.userId) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await paymentService.getUserPayments(user.userId, {
        page: currentPage,
        size: pageSize,
      });

      if (response.success) {
        setPayments(response.data.content || []);
        setTotalPages(response.data.totalPages || 0);
      } else {
        setError(response.message || 'Failed to fetch payments');
      }
    } catch (err) {
      setError(err.message || 'Failed to load payment history');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      [PAYMENT_STATUS.PENDING]: { color: 'warning', text: 'Pending' },
      [PAYMENT_STATUS.COMPLETED]: { color: 'success', text: 'Completed' },
      [PAYMENT_STATUS.FAILED]: { color: 'danger', text: 'Failed' },
      [PAYMENT_STATUS.REFUNDED]: { color: 'info', text: 'Refunded' },
      [PAYMENT_STATUS.CANCELLED]: { color: 'secondary', text: 'Cancelled' },
    };

    const config = statusConfig[status] || { color: 'secondary', text: status };
    return <Badge color={config.color}>{config.text}</Badge>;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatAmount = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spinner color="primary" />
        <p className="mt-2">Loading payment history...</p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h5 className="mb-0">Payment History</h5>
      </CardHeader>
      <CardBody>
        {error && (
          <Alert color="danger" className="mb-3">
            {error}
          </Alert>
        )}

        {payments.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted mb-0">No payments found</p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Transaction ID</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{formatDate(payment.createdAt)}</td>
                      <td>{payment.description || 'Payment'}</td>
                      <td>{formatAmount(payment.amount, payment.currency)}</td>
                      <td>{getStatusBadge(payment.status)}</td>
                      <td>
                        <small className="text-muted">
                          {payment.razorpayPaymentId || payment.transactionId || '-'}
                        </small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  <PaginationItem disabled={currentPage === 0}>
                    <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index} active={currentPage === index}>
                      <PaginationLink onClick={() => handlePageChange(index)}>
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem disabled={currentPage === totalPages - 1}>
                    <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                </Pagination>
              </div>
            )}
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default PaymentHistory;
