// Payment Button Component (Razorpay Integration)
import React, { useState, useEffect } from 'react';
import { Button, Spinner, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { paymentService } from '../../Services/paymentService';
import { useAuth } from '../../context/AuthContext';

const PaymentButton = ({
  amount,
  currency = 'INR',
  description = 'Payment',
  buttonText = 'Pay Now',
  buttonColor = 'primary',
  buttonSize = '',
  className = '',
  disabled = false,
  notes = {},
  onSuccess,
  onError,
  onCancel,
}) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Load Razorpay script on mount
  useEffect(() => {
    const loadScript = async () => {
      try {
        await paymentService.loadRazorpayScript();
        setIsScriptLoaded(true);
      } catch (err) {
        setError('Failed to load payment gateway. Please refresh the page.');
      }
    };
    loadScript();
  }, []);

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const handlePaymentClick = () => {
    if (!user?.userId) {
      setError('Please login to make a payment');
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmPayment = async () => {
    setShowConfirmModal(false);
    setIsLoading(true);
    setError('');

    try {
      const paymentData = {
        amount: amount,
        userId: user.userId,
        currency: currency,
        description: description,
        notes: notes,
        customer: {
          name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email,
          email: user.email,
          phone: user.phone || '',
        },
      };

      const result = await paymentService.processPayment(paymentData, {
        companyName: 'Confiance Financial',
        description: description,
        customerName: paymentData.customer.name,
        customerEmail: user.email,
        customerPhone: user.phone || '',
        themeColor: '#3399cc',
      });

      if (result.success) {
        if (onSuccess) {
          onSuccess(result);
        }
      } else {
        throw new Error(result.message || 'Payment failed');
      }
    } catch (err) {
      if (err.message === 'Payment cancelled by user') {
        if (onCancel) {
          onCancel();
        }
      } else {
        setError(err.message || 'Payment failed. Please try again.');
        if (onError) {
          onError(err);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Alert color="danger" isOpen={!!error} toggle={() => setError('')} className="mb-3">
          {error}
        </Alert>
      )}

      <Button
        color={buttonColor}
        size={buttonSize}
        className={className}
        disabled={disabled || isLoading || !isScriptLoaded}
        onClick={handlePaymentClick}
      >
        {isLoading ? (
          <>
            <Spinner size="sm" className="me-2" />
            Processing...
          </>
        ) : !isScriptLoaded ? (
          <>
            <Spinner size="sm" className="me-2" />
            Loading...
          </>
        ) : (
          <>
            {buttonText} {amount && `- ${formatAmount(amount)}`}
          </>
        )}
      </Button>

      {/* Confirmation Modal */}
      <Modal isOpen={showConfirmModal} toggle={() => setShowConfirmModal(false)} centered>
        <ModalHeader toggle={() => setShowConfirmModal(false)}>
          Confirm Payment
        </ModalHeader>
        <ModalBody>
          <div className="text-center">
            <h4 className="mb-3">{formatAmount(amount)}</h4>
            <p className="text-muted mb-0">{description}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-2">
            <span>Amount:</span>
            <strong>{formatAmount(amount)}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <span>Currency:</span>
            <strong>{currency}</strong>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleConfirmPayment}>
            Proceed to Pay
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PaymentButton;
