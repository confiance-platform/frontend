# Frontend API Fixes & Integration Guide

This document lists all API discrepancies and provides comprehensive integration guides for Payment, OTP, Email, and File Upload features.

---

## Table of Contents

1. [Trade Service - Field Name Mismatches](#1-trade-service---field-name-mismatches)
2. [Trade Service - Endpoint Path Difference](#2-trade-service---endpoint-path-difference)
3. [Previously Missing APIs (Now Implemented)](#3-previously-missing-apis-now-implemented)
4. [Working APIs (Verified)](#4-working-apis-verified)
5. [Authentication Notes](#5-authentication-notes)
6. [Immediate Action Items](#6-immediate-action-items-for-frontend)
7. [Payment Integration (Razorpay)](#7-payment-integration-razorpay---frontend-guide) - **NEW**
8. [OTP Integration](#8-otp-integration---frontend-guide) - **NEW**
9. [Email Notifications](#9-email-notifications---frontend-guide) - **NEW**
10. [File Upload](#10-file-upload---frontend-guide) - **NEW**
11. [Rate Limits Handling](#11-rate-limits---frontend-handling) - **NEW**
12. [Complete Frontend Checklist](#12-complete-frontend-checklist) - **NEW**

---

## Summary

| Category | Count |
|----------|-------|
| Field Name Mismatches (Frontend must fix) | 5 |
| Endpoint Path Differences (Frontend must fix) | 1 |
| Previously Missing APIs (Now Implemented) | 8 |
| Working APIs | 62+ |
| **New Integration Guides** | **6** |

### New Features Ready for Frontend Integration

| Feature | Status | Section |
|---------|--------|---------|
| Razorpay Payment Gateway | Ready | Section 7 |
| OTP via Twilio (SMS) | Ready | Section 8 |
| Email Notifications | Ready | Section 9 |
| File Upload (Cloudinary) | Ready | Section 10 |
| Rate Limiting | Active | Section 11 |

---

## 1. TRADE SERVICE - Field Name Mismatches

The frontend is sending incorrect field names when creating trades. **Frontend must update the request body fields.**

### POST `/api/v1/trades/user/{userId}` - Create Trade

| Frontend Sends | Backend Expects | Action Required |
|----------------|-----------------|-----------------|
| `stockSymbol` | `symbol` | **RENAME** |
| `stockName` | `companyName` | **RENAME** |
| `quantity` | `buyQuantity` | **RENAME** |
| `tradeType` | *(not used)* | **REMOVE** (backend doesn't use this field) |
| `recommendationId` | *(not used)* | **REMOVE** (backend doesn't use this field) |

### Correct Request Body Format:
```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc",
  "market": "US",
  "buyPrice": 150.00,
  "buyQuantity": 10,
  "buyDate": "2026-01-15",
  "currency": "USD",
  "notes": "Optional notes"
}
```

### Required Fields:
- `market` (enum: US, INDIA, UK, EU, SINGAPORE, HONG_KONG, JAPAN, CANADA, AUSTRALIA)
- `symbol` (string)
- `buyDate` (date: YYYY-MM-DD)
- `buyPrice` (decimal)
- `buyQuantity` (decimal)

### Optional Fields:
- `companyName` (string)
- `currency` (string)
- `notes` (string)
- `sellDate`, `sellPrice`, `sellQuantity` (for closed trades)
- `status` (enum: OPEN, CLOSED, PARTIALLY_SOLD)

---

## 2. TRADE SERVICE - Endpoint Path Difference

### GET Trade by ID

| Frontend Uses | Backend Has |
|---------------|-------------|
| `GET /api/v1/trades/{tradeId}` | `GET /api/v1/trades/{tradeId}/user/{userId}` |

**Action Required:** Frontend must include userId in the path when fetching a specific trade.

---

## 3. PREVIOUSLY MISSING APIs (NOW IMPLEMENTED)

The following APIs have been implemented and are now available:

### Auth Service (3 endpoints) - NOW WORKING
| Method | Endpoint | Status |
|--------|----------|--------|
| POST | `/api/v1/auth/forgot-password` | **IMPLEMENTED** |
| POST | `/api/v1/auth/reset-password` | **IMPLEMENTED** |
| GET | `/api/v1/auth/verify-reset-token?token=xxx` | **IMPLEMENTED** |

### Notification Service - User Notifications (5 endpoints) - NOW WORKING
| Method | Endpoint | Status |
|--------|----------|--------|
| GET | `/api/v1/notifications/user/{userId}` | **IMPLEMENTED** |
| PUT | `/api/v1/notifications/{notificationId}/read` | **IMPLEMENTED** (requires X-User-Id header) |
| PUT | `/api/v1/notifications/user/{userId}/read-all` | **IMPLEMENTED** |
| DELETE | `/api/v1/notifications/{notificationId}` | **IMPLEMENTED** (requires X-User-Id header) |
| GET | `/api/v1/notifications/user/{userId}/unread-count` | **IMPLEMENTED** |

> **Note:** All notification endpoints now support user notification storage and retrieval.

---

## 4. WORKING APIs (Verified)

All the following APIs are working correctly with proper authentication:

### Auth Service
- POST `/api/v1/auth/login`
- POST `/api/v1/auth/refresh`
- POST `/api/v1/auth/logout`

### User Service
- POST `/api/v1/users/register`
- GET `/api/v1/users/{id}`
- GET `/api/v1/users/{id}/info`
- PUT `/api/v1/users/{id}`
- DELETE `/api/v1/users/{id}`
- GET `/api/v1/users`
- POST `/api/v1/users/{id}/roles`
- DELETE `/api/v1/users/{id}/roles`

### Admin/Permissions Service
- GET `/api/v1/admin/permissions/available`
- GET `/api/v1/admin/permissions/user/{userId}`
- POST `/api/v1/admin/permissions/grant`
- POST `/api/v1/admin/permissions/revoke`
- PUT `/api/v1/admin/permissions/user/{userId}`
- GET `/api/v1/admin/permissions/user/{userId}/has/{permission}`

### Investment Service
- GET `/api/v1/investments`
- GET `/api/v1/investments/{id}`
- POST `/api/v1/investments`

### Recommendation Service
- GET `/api/v1/recommendations`
- GET `/api/v1/recommendations/{id}`
- GET `/api/v1/recommendations/open`
- GET `/api/v1/recommendations/filter`
- GET `/api/v1/recommendations/market/{market}`
- POST `/api/v1/recommendations`
- PUT `/api/v1/recommendations/{id}`
- DELETE `/api/v1/recommendations/{id}`

### Transaction Service
- GET `/api/v1/transactions/user/{userId}`
- POST `/api/v1/transactions`

### Portfolio Service
- GET `/api/v1/portfolio/user/{userId}`

### Trade Service
- POST `/api/v1/trades/user/{userId}` (with correct field names - see above)
- PUT `/api/v1/trades/{tradeId}/user/{userId}`
- POST `/api/v1/trades/{tradeId}/user/{userId}/sell`
- GET `/api/v1/trades/{tradeId}/user/{userId}`
- GET `/api/v1/trades/user/{userId}`
- GET `/api/v1/trades/user/{userId}/filter`
- GET `/api/v1/trades/user/{userId}/status/{status}`
- GET `/api/v1/trades/user/{userId}/date-range`
- GET `/api/v1/trades/user/{userId}/summary`
- GET `/api/v1/trades/admin/all`
- DELETE `/api/v1/trades/{tradeId}/user/{userId}`

### Holding Service
- GET `/api/v1/holdings/user/{userId}`
- GET `/api/v1/holdings/user/{userId}/summary`
- GET `/api/v1/holdings/user/{userId}/market/{market}`

### Referral Service
- GET `/api/v1/referrals/user/{userId}`
- GET `/api/v1/referrals/user/{userId}/summary`
- GET `/api/v1/referrals/user/{userId}/quarter`
- GET `/api/v1/referrals/user/{userId}/commission`
- GET `/api/v1/referrals/commission-slabs`
- POST `/api/v1/referrals/commission-slabs`
- PUT `/api/v1/referrals/commission-slabs/{id}`
- DELETE `/api/v1/referrals/commission-slabs/{id}`
- GET `/api/v1/referrals/admin/quarter`
- POST `/api/v1/referrals/admin/{referralId}/mark-paid`

### Notification Service (Email Only - Working)
- POST `/api/v1/notifications/send-email`
- POST `/api/v1/notifications/send-email/simple`
- POST `/api/v1/notifications/send-email/template`
- POST `/api/v1/notifications/send-email/async`

---

## 5. AUTHENTICATION NOTES

All protected endpoints require:
```
Authorization: Bearer {accessToken}
```

Logout endpoint also requires:
```
X-Session-Id: {sessionId}
```

**Important:** The 401 Unauthorized errors occur when:
1. No Authorization header is provided
2. Invalid/expired JWT token
3. Missing Bearer prefix

---

## 6. IMMEDIATE ACTION ITEMS FOR FRONTEND

### Priority 1 - Fix Now (Breaking Issues)
1. **Update Trade create request body field names** (see Section 1)
   - Change `stockSymbol` to `symbol`
   - Change `stockName` to `companyName`
   - Change `quantity` to `buyQuantity`
   - Remove `tradeType` field (not used by backend)
   - Remove `recommendationId` field (not used by backend)

2. **Update GET trade endpoint to include userId in path** (see Section 2)
   - Change `GET /trades/{tradeId}` to `GET /trades/{tradeId}/user/{userId}`

### Priority 2 - Now Available (Previously Missing)
All previously missing APIs are now implemented and ready to use:
- Password reset APIs (forgot-password, reset-password, verify-reset-token)
- User notification APIs (get, mark read, delete, unread count)

---

## 7. PAYMENT INTEGRATION (Razorpay) - FRONTEND GUIDE

### Overview
Razorpay is integrated for payment processing. Frontend needs to implement checkout UI using Razorpay's JavaScript SDK.

### Step 1: Include Razorpay Script
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

### Step 2: Create Payment Order (API Call)
```javascript
// POST /api/v1/payments/create-order
const createPaymentOrder = async (userId, amount, description) => {
  const response = await fetch('/api/v1/payments/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      amount: amount,           // Amount in INR (e.g., 1000.00 for Rs.1000)
      userId: userId,
      currency: 'INR',
      description: description,
      receipt: `receipt_${Date.now()}`,
      notes: {
        purpose: 'Investment'
      },
      customer: {
        name: 'User Name',
        email: 'user@example.com',
        contact: '+919717806407'
      }
    })
  });
  return response.json();
};
```

### Step 3: Open Razorpay Checkout
```javascript
const initiatePayment = async (userId, amount) => {
  // Step 1: Create order
  const orderResponse = await createPaymentOrder(userId, amount, 'Investment Payment');

  if (!orderResponse.success) {
    alert('Failed to create payment order');
    return;
  }

  const order = orderResponse.data;

  // Step 2: Configure Razorpay options
  const options = {
    key: order.razorpayKeyId,              // "rzp_test_S4gvc2ax50znlu"
    amount: order.amount * 100,             // Convert to paise
    currency: order.currency,
    name: 'Confiance Financial',
    description: 'Investment Payment',
    image: '/logo.png',                     // Your company logo
    order_id: order.razorpayOrderId,        // Razorpay order ID

    // Payment success handler
    handler: async function(response) {
      // Step 3: Verify payment on backend
      await verifyPayment(response);
    },

    // Prefill customer details
    prefill: {
      name: 'John Doe',
      email: 'john@example.com',
      contact: '+919717806407'
    },

    // UI customization
    theme: {
      color: '#3399cc'
    },

    // Modal settings
    modal: {
      ondismiss: function() {
        console.log('Payment cancelled by user');
      }
    }
  };

  // Step 3: Open Razorpay checkout
  const rzp = new Razorpay(options);
  rzp.on('payment.failed', function(response) {
    alert('Payment failed: ' + response.error.description);
  });
  rzp.open();
};
```

### Step 4: Verify Payment (After Razorpay Success)
```javascript
// POST /api/v1/payments/verify
const verifyPayment = async (razorpayResponse) => {
  const response = await fetch('/api/v1/payments/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      razorpayOrderId: razorpayResponse.razorpay_order_id,
      razorpayPaymentId: razorpayResponse.razorpay_payment_id,
      razorpaySignature: razorpayResponse.razorpay_signature
    })
  });

  const result = await response.json();

  if (result.success) {
    // Payment successful - show success UI
    showPaymentSuccess(result.data);
  } else {
    // Payment verification failed
    showPaymentError(result.message);
  }
};
```

### Step 5: Get User Payment History
```javascript
// GET /api/v1/payments/user/{userId}?page=0&size=20
const getPaymentHistory = async (userId, page = 0) => {
  const response = await fetch(`/api/v1/payments/user/${userId}?page=${page}&size=20`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  return response.json();
};
```

### Payment UI Components Needed

| Component | Description |
|-----------|-------------|
| Payment Button | Button to initiate payment with loading state |
| Amount Input | Input for payment amount (if user can enter) |
| Payment History | Table showing past payments with status |
| Payment Status Badge | Shows CREATED, CAPTURED, REFUNDED, FAILED |
| Payment Receipt | Downloadable/printable receipt after success |

### Test Credentials (Razorpay Test Mode)
```
Card Number: 4111 1111 1111 1111
Expiry: Any future date (e.g., 12/30)
CVV: Any 3 digits (e.g., 123)
OTP: 1234 (for test mode)

UPI: success@razorpay (always succeeds)
UPI: failure@razorpay (always fails)
```

### Payment Status Values
| Status | Description | UI Action |
|--------|-------------|-----------|
| CREATED | Order created, awaiting payment | Show "Pay Now" button |
| AUTHORIZED | Payment authorized | Processing indicator |
| CAPTURED | Payment successful | Show success, create transaction |
| REFUNDED | Payment refunded | Show refund status |
| FAILED | Payment failed | Show error, retry option |

---

## 8. OTP INTEGRATION - FRONTEND GUIDE

### Overview
OTP service is used for phone/email verification during registration, login, password reset, and transactions.

### OTP Flow Diagram
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Enter      │    │  Send OTP   │    │  Enter OTP  │    │  Verify     │
│  Phone/Email│ -> │  API Call   │ -> │  Input Box  │ -> │  OTP API    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                         │                   │                   │
                         v                   v                   v
                   60s cooldown        Auto-focus          Success/Fail
                   Resend timer        6 digit input       Redirect
```

### Step 1: Send OTP
```javascript
// POST /api/v1/otp/send
const sendOtp = async (identifier, purpose) => {
  const response = await fetch('/api/v1/otp/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: identifier,    // Phone with country code: "+919717806407" or email
      purpose: purpose,          // See purpose values below
      countryCode: '+91'         // Optional
    })
  });
  return response.json();
};

// Purpose values:
// - "REGISTRATION"       - New user signup
// - "LOGIN"              - Login verification
// - "PASSWORD_RESET"     - Forgot password
// - "PHONE_VERIFICATION" - Verify phone number
// - "EMAIL_VERIFICATION" - Verify email
// - "TRANSACTION"        - Transaction authorization
// - "TWO_FACTOR_AUTH"    - 2FA
```

### Step 2: OTP Input UI Component
```javascript
// React example for OTP input
const OtpInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Call onComplete when all digits entered
    if (newOtp.every(digit => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          className="otp-input"
        />
      ))}
    </div>
  );
};
```

### Step 3: Verify OTP
```javascript
// POST /api/v1/otp/verify
const verifyOtp = async (identifier, otp, purpose) => {
  const response = await fetch('/api/v1/otp/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: identifier,
      otp: otp,                  // 6-digit code
      purpose: purpose           // Must match send purpose
    })
  });
  return response.json();
};
```

### Step 4: Resend OTP (with cooldown)
```javascript
// POST /api/v1/otp/resend
const resendOtp = async (identifier, purpose) => {
  const response = await fetch('/api/v1/otp/resend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: identifier,
      purpose: purpose
    })
  });
  return response.json();
};

// Resend timer component
const ResendTimer = ({ seconds = 60, onResend }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return countdown > 0 ? (
    <span>Resend OTP in {countdown}s</span>
  ) : (
    <button onClick={() => { onResend(); setCountdown(seconds); }}>
      Resend OTP
    </button>
  );
};
```

### OTP UI Components Needed

| Component | Description |
|-----------|-------------|
| Phone Input | Phone number input with country code selector |
| OTP Input | 6-digit box input with auto-focus |
| Resend Timer | Countdown timer (60 seconds) with resend button |
| Loading State | Spinner while sending/verifying OTP |
| Error Display | Show error messages (invalid OTP, expired, etc.) |
| Success State | Redirect or show success after verification |

### Rate Limits (Important!)
| Action | Limit | Frontend Handling |
|--------|-------|-------------------|
| OTP Send Cooldown | 60 seconds | Show countdown timer |
| OTP Send per Minute | 2 | Disable resend button |
| OTP Send per Hour | 10 | Show "Try again later" message |
| Verification Attempts | 5 per OTP | Show remaining attempts |

### Error Handling
```javascript
const handleOtpError = (response) => {
  switch (response.error) {
    case 'RATE_LIMIT_EXCEEDED':
      showError(`Too many attempts. Try again in ${response.retryAfterSeconds}s`);
      break;
    case 'OTP_EXPIRED':
      showError('OTP has expired. Please request a new one.');
      break;
    case 'INVALID_OTP':
      showError('Invalid OTP. Please check and try again.');
      break;
    case 'MAX_ATTEMPTS_EXCEEDED':
      showError('Maximum attempts exceeded. Request a new OTP.');
      break;
    default:
      showError(response.message);
  }
};
```

---

## 9. EMAIL NOTIFICATIONS - FRONTEND GUIDE

### Overview
Backend sends emails automatically for various events. Frontend needs to handle email-related UI only.

### Automatic Email Triggers (No Frontend Action Needed)
These emails are sent automatically by backend:
- Welcome email after registration
- Password reset link email
- OTP via email (if phone not available)
- Payment confirmation email
- Transaction alerts

### Email Preferences UI (Optional)
```javascript
// GET /api/v1/users/{userId}/preferences
const getEmailPreferences = async (userId) => {
  const response = await fetch(`/api/v1/users/${userId}/preferences`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  return response.json();
};

// PUT /api/v1/users/{userId}/preferences
const updateEmailPreferences = async (userId, preferences) => {
  const response = await fetch(`/api/v1/users/${userId}/preferences`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      emailNotifications: preferences.emailNotifications,
      marketingEmails: preferences.marketingEmails,
      transactionAlerts: preferences.transactionAlerts
    })
  });
  return response.json();
};
```

### Frontend Only Needs:
1. **Email input validation** - Validate email format before API calls
2. **Email verification status** - Show if email is verified or not
3. **Preferences toggle** - Allow users to enable/disable email notifications

---

## 10. FILE UPLOAD - FRONTEND GUIDE

### Overview
Cloudinary is integrated for file uploads. Frontend can upload images, documents, and videos.

### Step 1: Upload Image
```javascript
// POST /api/v1/files/upload/image
const uploadImage = async (file, userId, entityType, entityId) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('userId', userId);
  formData.append('entityType', entityType);  // e.g., "profile", "kyc"
  formData.append('entityId', entityId);
  formData.append('folder', 'images');

  const response = await fetch('/api/v1/files/upload/image', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${accessToken}` },
    body: formData
  });
  return response.json();
};
```

### Step 2: Upload Document (KYC, etc.)
```javascript
// POST /api/v1/files/upload/document
const uploadDocument = async (file, userId, documentType) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('userId', userId);
  formData.append('entityType', 'kyc');
  formData.append('folder', 'documents');

  const response = await fetch('/api/v1/files/upload/document', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${accessToken}` },
    body: formData
  });
  return response.json();
};
```

### Step 3: File Upload Component
```javascript
// React file upload component
const FileUpload = ({ accept, onUpload, maxSize = 10 }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (max 10MB)
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Show preview for images
    if (file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file));
    }

    setUploading(true);
    try {
      const result = await onUpload(file);
      if (result.success) {
        // Use result.data.secureUrl for display
        console.log('Uploaded:', result.data.secureUrl);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        disabled={uploading}
      />
      {preview && <img src={preview} alt="Preview" className="preview" />}
      {uploading && <div className="progress-bar" style={{ width: `${progress}%` }} />}
    </div>
  );
};
```

### Supported File Types

| Endpoint | Supported Types | Max Size |
|----------|-----------------|----------|
| `/upload/image` | jpg, jpeg, png, gif, webp, svg | 10MB |
| `/upload/document` | pdf, doc, docx, xls, xlsx, ppt, pptx, txt, csv | 10MB |
| `/upload/video` | mp4, avi, mov, wmv, mkv | 10MB |
| `/upload` | Auto-detect all above | 10MB |

### Get Uploaded Files
```javascript
// GET /api/v1/files/entity/{entityType}/{entityId}
const getEntityFiles = async (entityType, entityId) => {
  const response = await fetch(`/api/v1/files/entity/${entityType}/${entityId}`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  return response.json();
};
```

### Delete File
```javascript
// DELETE /api/v1/files/{publicId}
const deleteFile = async (publicId) => {
  const response = await fetch(`/api/v1/files/${encodeURIComponent(publicId)}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  return response.json();
};
```

### File Upload UI Components Needed

| Component | Description |
|-----------|-------------|
| Drag & Drop Zone | Drag files to upload area |
| File Picker | Click to browse files |
| Preview | Image thumbnail, PDF icon, etc. |
| Progress Bar | Upload progress indicator |
| File List | List of uploaded files with delete option |
| Error Display | File too large, wrong type, etc. |

---

## 11. RATE LIMITS - FRONTEND HANDLING

### Global Rate Limit Response (HTTP 429)
```javascript
// Handle rate limit in API interceptor
const apiInterceptor = async (response) => {
  if (response.status === 429) {
    const data = await response.json();
    const retryAfter = response.headers.get('Retry-After') || data.retryAfterSeconds;

    // Show user-friendly message
    showRateLimitError(retryAfter);

    // Optionally auto-retry after delay
    // await delay(retryAfter * 1000);
    // return retry(request);
  }
  return response;
};

const showRateLimitError = (seconds) => {
  toast.error(`Too many requests. Please wait ${seconds} seconds.`, {
    duration: seconds * 1000
  });
};
```

### Rate Limit Summary

| Service | Limit | Frontend Action |
|---------|-------|-----------------|
| OTP Send | 60s cooldown, 2/min, 10/hour | Show countdown timer |
| OTP Verify | 5 attempts per OTP | Show remaining attempts |
| Payment Create | 5/min, 30/hour | Disable button temporarily |
| File Upload | 10/min, 50/hour | Queue uploads if needed |
| API Global | 10/sec per IP | Implement request throttling |

---

## 12. COMPLETE FRONTEND CHECKLIST

### Authentication Pages
- [ ] Login with email/password
- [ ] Registration with OTP verification
- [ ] Forgot password (send reset link)
- [ ] Reset password page
- [ ] Logout functionality

### OTP Components
- [ ] Phone number input with country code
- [ ] 6-digit OTP input boxes
- [ ] Resend timer (60 seconds)
- [ ] Error message display
- [ ] Loading states

### Payment Components
- [ ] Payment amount input
- [ ] Razorpay checkout integration
- [ ] Payment status display
- [ ] Payment history list
- [ ] Receipt/Invoice view

### File Upload Components
- [ ] Profile image upload
- [ ] KYC document upload
- [ ] Image preview
- [ ] Upload progress
- [ ] File deletion

### Notification Components
- [ ] Notification bell icon with count
- [ ] Notification list/dropdown
- [ ] Mark as read functionality
- [ ] Mark all as read
- [ ] Delete notifications

### Error Handling
- [ ] 401 Unauthorized - Redirect to login
- [ ] 429 Rate Limit - Show wait message
- [ ] 400 Validation - Show field errors
- [ ] 500 Server Error - Show generic error

---

*Document generated: 2026-01-17*
*Backend Version: Updated with Payment, OTP, Email, File Upload, Rate Limiting*
