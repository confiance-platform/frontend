// OTP Verification Modal Component
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import OtpInput from './index';
import { OTP_PURPOSE } from '../../config/constants';

const OtpVerificationModal = ({
  isOpen,
  toggle,
  identifier,
  purpose = OTP_PURPOSE.PHONE_VERIFICATION,
  title = 'Verify OTP',
  description = '',
  autoSend = true,
  onVerificationSuccess,
  onVerificationError,
}) => {
  const getPurposeDescription = () => {
    if (description) return description;

    const descriptions = {
      [OTP_PURPOSE.REGISTRATION]: 'Enter the OTP sent to your phone/email to complete registration.',
      [OTP_PURPOSE.LOGIN]: 'Enter the OTP sent to your phone/email to login.',
      [OTP_PURPOSE.PASSWORD_RESET]: 'Enter the OTP sent to your phone/email to reset your password.',
      [OTP_PURPOSE.PHONE_VERIFICATION]: 'Enter the OTP sent to your phone to verify your number.',
      [OTP_PURPOSE.EMAIL_VERIFICATION]: 'Enter the OTP sent to your email to verify your address.',
      [OTP_PURPOSE.TRANSACTION]: 'Enter the OTP sent to your phone/email to authorize this transaction.',
      [OTP_PURPOSE.TWO_FACTOR_AUTH]: 'Enter the OTP for two-factor authentication.',
    };

    return descriptions[purpose] || 'Enter the OTP to proceed.';
  };

  const handleSuccess = (response) => {
    if (onVerificationSuccess) {
      onVerificationSuccess(response);
    }
    toggle();
  };

  const maskIdentifier = (id) => {
    if (!id) return '';

    // Email
    if (id.includes('@')) {
      const [username, domain] = id.split('@');
      const maskedUsername = username.slice(0, 2) + '***' + username.slice(-1);
      return `${maskedUsername}@${domain}`;
    }

    // Phone
    if (id.length >= 10) {
      return id.slice(0, 3) + '****' + id.slice(-4);
    }

    return id;
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody className="py-4">
        <div className="text-center mb-4">
          <div className="mb-3">
            <i className="bi bi-shield-lock-fill display-4 text-primary"></i>
          </div>
          <p className="text-muted mb-2">{getPurposeDescription()}</p>
          {identifier && (
            <p className="fw-medium">{maskIdentifier(identifier)}</p>
          )}
        </div>

        <OtpInput
          length={6}
          identifier={identifier}
          purpose={purpose}
          autoSend={autoSend}
          onVerificationSuccess={handleSuccess}
          onVerificationError={onVerificationError}
        />
      </ModalBody>
    </Modal>
  );
};

export default OtpVerificationModal;
