// OTP Input Component
import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Button, Alert, Spinner } from 'reactstrap';
import { otpService } from '../../Services/otpService';

const OtpInput = ({
  length = 6,
  identifier,
  purpose,
  onVerificationSuccess,
  onVerificationError,
  autoSend = false,
  className = '',
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);

  // Auto-send OTP on mount if autoSend is true
  useEffect(() => {
    if (autoSend && identifier && purpose) {
      handleSendOtp();
    }
  }, [autoSend, identifier, purpose]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleSendOtp = async () => {
    if (!identifier || !purpose) {
      setError('Missing identifier or purpose for OTP');
      return;
    }

    setIsSending(true);
    setError('');
    setSuccess('');

    try {
      const response = await otpService.sendOtp(identifier, purpose);
      if (response.success) {
        setSuccess('OTP sent successfully! Please check your phone/email.');
        setCanResend(false);
        setCountdown(60); // 60 seconds cooldown
        // Focus on first input
        inputRefs.current[0]?.focus();
      } else {
        setError(response.message || 'Failed to send OTP');
      }
    } catch (err) {
      if (err.retryAfterSeconds) {
        setCountdown(err.retryAfterSeconds);
        setCanResend(false);
      }
      setError(err.message || 'Failed to send OTP');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];

    // Handle paste
    if (value.length > 1) {
      const pastedValue = value.slice(0, length);
      for (let i = 0; i < pastedValue.length; i++) {
        if (index + i < length) {
          newOtp[index + i] = pastedValue[i];
        }
      }
      setOtp(newOtp);

      // Focus on next empty or last input
      const nextIndex = Math.min(index + pastedValue.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // Handle single digit
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all digits are entered
    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === length) {
      handleVerify(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = async (otpCode) => {
    if (!identifier || !purpose) {
      setError('Missing identifier or purpose for OTP verification');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await otpService.verifyOtp(identifier, otpCode, purpose);
      if (response.success) {
        setSuccess('OTP verified successfully!');
        if (onVerificationSuccess) {
          onVerificationSuccess(response);
        }
      } else {
        setError(response.message || 'Invalid OTP');
        if (onVerificationError) {
          onVerificationError(response);
        }
      }
    } catch (err) {
      setError(err.message || 'OTP verification failed');
      setOtp(new Array(length).fill(''));
      inputRefs.current[0]?.focus();
      if (onVerificationError) {
        onVerificationError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setOtp(new Array(length).fill(''));
    handleSendOtp();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);

    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);

      // Focus on the last filled input or the next empty one
      const lastIndex = Math.min(pastedData.length - 1, length - 1);
      inputRefs.current[lastIndex]?.focus();

      // Auto-verify if all digits are filled
      if (newOtp.every(digit => digit !== '') && newOtp.join('').length === length) {
        handleVerify(newOtp.join(''));
      }
    }
  };

  return (
    <div className={`otp-input-container ${className}`}>
      {error && (
        <Alert color="danger" className="mb-3">
          {error}
        </Alert>
      )}

      {success && (
        <Alert color="success" className="mb-3">
          {success}
        </Alert>
      )}

      <div className="otp-boxes d-flex justify-content-center gap-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={isLoading}
            className="otp-box form-control text-center"
            style={{
              width: '50px',
              height: '50px',
              fontSize: '24px',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
            autoComplete="off"
          />
        ))}
      </div>

      <Row className="justify-content-center">
        <Col xs="auto">
          {isLoading ? (
            <div className="text-center">
              <Spinner color="primary" size="sm" className="me-2" />
              <span>Verifying...</span>
            </div>
          ) : (
            <div className="text-center">
              <Button
                color="link"
                disabled={!canResend || isSending}
                onClick={handleResend}
                className="p-0"
              >
                {isSending ? (
                  <>
                    <Spinner size="sm" className="me-2" />
                    Sending...
                  </>
                ) : canResend ? (
                  'Resend OTP'
                ) : (
                  `Resend in ${countdown}s`
                )}
              </Button>
            </div>
          )}
        </Col>
      </Row>

      <style>{`
        .otp-box:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
        .otp-box:disabled {
          background-color: #e9ecef;
        }
      `}</style>
    </div>
  );
};

export default OtpInput;
