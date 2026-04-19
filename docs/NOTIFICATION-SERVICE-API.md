# Notification Service API Documentation

## Base URL
```
http://localhost:8080/api/v1/notifications
```

## Overview
The Notification Service handles sending notifications to users via various channels (currently email). This service is used by other services to send notifications for important events.

---

## Endpoints

### 1. Send Email
**POST** `/api/v1/notifications/send-email`

Send an email notification to a user.

#### Request Body
```json
{
  "to": "user@example.com",
  "subject": "Welcome to Confiance Investment Platform",
  "body": "Thank you for registering with us. Your account has been created successfully."
}
```

#### Request Fields
- `to`: Required, recipient email address
- `subject`: Required, email subject line
- `body`: Required, email body content (supports plain text and HTML)

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Email sent successfully",
  "data": null,
  "timestamp": "2024-01-16T10:30:00"
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Invalid email address",
  "timestamp": "2024-01-16T10:30:00"
}
```

#### Error Response (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Failed to send email",
  "timestamp": "2024-01-16T10:30:00"
}
```

---

## Data Models

### EmailRequest
```typescript
{
  to: string;      // Recipient email address (required)
  subject: string; // Email subject (required)
  body: string;    // Email body content (required)
}
```

---

## Authorization Requirements

- Typically used by internal services (service-to-service communication)
- May require admin permissions or service authentication
- Public endpoint access should be restricted

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success - Email sent |
| 400 | Bad Request - Invalid input (email format, missing fields) |
| 401 | Unauthorized - Not authenticated |
| 403 | Forbidden - Insufficient permissions |
| 500 | Internal Server Error - SMTP/Email service failure |

---

## Example Use Cases

### 1. Welcome Email
```bash
curl -X POST "http://localhost:8080/api/v1/notifications/send-email" \
  -H "Authorization: Bearer <service_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "newuser@example.com",
    "subject": "Welcome to Confiance",
    "body": "Dear User,\n\nWelcome to Confiance Investment Platform!\n\nBest regards,\nConfiance Team"
  }'
```

### 2. Transaction Confirmation
```bash
curl -X POST "http://localhost:8080/api/v1/notifications/send-email" \
  -H "Authorization: Bearer <service_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "user@example.com",
    "subject": "Transaction Confirmation - Deposit Successful",
    "body": "Your deposit of $10,000 has been successfully processed.\n\nTransaction ID: TXN-2024-001\nDate: 2024-01-16\n\nThank you for using Confiance."
  }'
```

### 3. Password Reset
```bash
curl -X POST "http://localhost:8080/api/v1/notifications/send-email" \
  -H "Authorization: Bearer <service_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "user@example.com",
    "subject": "Password Reset Request",
    "body": "You have requested to reset your password.\n\nClick here to reset: https://confiance.app/reset-password?token=abc123\n\nIf you did not request this, please ignore this email."
  }'
```

---

## Common Email Templates

### Registration Welcome
```
Subject: Welcome to Confiance Investment Platform
Body:
Dear [First Name] [Last Name],

Welcome to Confiance Investment Platform!

Your account has been successfully created. You can now start exploring our investment products and grow your wealth.

Email: [Email]
Registration Date: [Date]

Get started: https://confiance.app/dashboard

Best regards,
The Confiance Team
```

### Transaction Notification
```
Subject: Transaction Confirmation - [Transaction Type]
Body:
Dear [First Name],

Your [transaction type] transaction has been successfully processed.

Transaction Details:
- Amount: $[Amount]
- Type: [Type]
- Status: [Status]
- Reference ID: [Reference ID]
- Date: [Date]

View transaction: https://confiance.app/transactions/[id]

Best regards,
The Confiance Team
```

### Investment Maturity Alert
```
Subject: Investment Maturity Notification
Body:
Dear [First Name],

Your investment in [Product Name] is maturing soon.

Investment Details:
- Product: [Product Name]
- Investment Amount: $[Amount]
- Maturity Amount: $[Maturity Amount]
- Maturity Date: [Date]
- Returns: $[Returns] ([Returns %]%)

Please log in to your account to review your options.

Best regards,
The Confiance Team
```

---

## Integration Notes

### Service-to-Service Communication

The notification service is typically called by other microservices:

1. **Auth Service**: Password reset, email verification
2. **User Service**: Welcome emails, profile updates
3. **Transaction Service**: Transaction confirmations
4. **Investment Service**: Investment confirmations, maturity alerts
5. **Portfolio Service**: Portfolio performance reports

### Example Integration (Java)
```java
@Service
public class UserService {

    @Autowired
    private RestTemplate restTemplate;

    public void sendWelcomeEmail(User user) {
        Map<String, String> emailRequest = new HashMap<>();
        emailRequest.put("to", user.getEmail());
        emailRequest.put("subject", "Welcome to Confiance");
        emailRequest.put("body", "Welcome " + user.getFirstName() + "!");

        restTemplate.postForObject(
            "http://notification-service/api/v1/notifications/send-email",
            emailRequest,
            ApiResponse.class
        );
    }
}
```

---

## Email Configuration

The service typically uses SMTP for sending emails. Configuration is done via environment variables or application properties:

```yaml
spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${EMAIL_USERNAME}
    password: ${EMAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
```

---

## Future Enhancements

Planned features for the notification service:

1. **SMS Notifications**: Send SMS via Twilio/SNS
2. **Push Notifications**: Mobile push notifications
3. **In-App Notifications**: Real-time notifications in the application
4. **Notification Templates**: Pre-defined templates with variables
5. **Notification Preferences**: User preferences for notification channels
6. **Notification History**: Track all notifications sent to users
7. **Bulk Notifications**: Send notifications to multiple users
8. **Scheduled Notifications**: Schedule notifications for future delivery
9. **Rich Email Templates**: HTML email templates with branding

---

## Best Practices

1. **Rate Limiting**: Implement rate limiting to prevent email spam
2. **Email Validation**: Validate email addresses before sending
3. **Error Handling**: Gracefully handle SMTP failures and retry
4. **Template Management**: Use templates for consistent branding
5. **Unsubscribe Links**: Include unsubscribe options in marketing emails
6. **Logging**: Log all notification attempts for audit purposes
7. **Asynchronous Processing**: Send emails asynchronously to avoid blocking
8. **Queue Management**: Use message queues for reliable delivery

---

## Notes

1. Email sending is asynchronous in production to avoid blocking API calls
2. Failed emails may be retried based on configuration
3. Email delivery is not guaranteed - implement fallback mechanisms
4. Consider using dedicated email service providers (SendGrid, AWS SES) for production
5. Implement email templates for consistent branding and easier management
6. Track email delivery status and bounce rates
7. Comply with email regulations (CAN-SPAM, GDPR)
