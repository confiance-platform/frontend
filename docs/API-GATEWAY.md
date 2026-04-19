# API Gateway Documentation

## Overview
The API Gateway serves as the single entry point for all client requests to the Confiance microservices backend. It routes requests to appropriate services, handles CORS, and provides centralized authentication/authorization.

## Base URL
```
Production: https://your-domain.com
Development: http://localhost:8080
```

---

## Gateway Configuration

### Server Configuration
- **Port**: 8080
- **Service Name**: api-gateway

### Service Discovery
- **Registry**: Eureka
- **Default Zone**: http://localhost:8761/eureka/
- **Auto Discovery**: Enabled
- **Service ID Format**: lowercase

---

## Routing Configuration

All routes use load balancing (lb://) with service discovery through Eureka.

### 1. Auth Service Routes
**Pattern**: `/api/v1/auth/**`
- **Target Service**: auth-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- POST `/api/v1/auth/login` → Login
- POST `/api/v1/auth/refresh` → Refresh Token
- POST `/api/v1/auth/logout` → Logout

---

### 2. User Service Routes
**Pattern**: `/api/v1/users/**`
- **Target Service**: user-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- POST `/api/v1/users/register` → Register User
- GET `/api/v1/users/{id}` → Get User by ID
- GET `/api/v1/users/{id}/info` → Get User Info
- PUT `/api/v1/users/{id}` → Update User
- DELETE `/api/v1/users/{id}` → Delete User
- GET `/api/v1/users` → Get All Users (Paginated)
- POST `/api/v1/users/validate-credentials` → Validate Credentials
- POST `/api/v1/users/{id}/roles` → Add Role
- DELETE `/api/v1/users/{id}/roles` → Remove Role

---

### 3. Admin Service Routes
**Pattern**: `/api/v1/admin/**`
- **Target Service**: user-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- GET `/api/v1/admin/permissions/available` → Get Available Permissions
- GET `/api/v1/admin/permissions/user/{userId}` → Get User Permissions
- POST `/api/v1/admin/permissions/grant` → Grant Permissions
- POST `/api/v1/admin/permissions/revoke` → Revoke Permissions
- PUT `/api/v1/admin/permissions/user/{userId}` → Set User Permissions
- GET `/api/v1/admin/permissions/user/{userId}/has/{permission}` → Check Permission

**Note**: Admin endpoints are part of the user-service but have a separate base path.

---

### 4. Investment Service Routes
**Pattern**: `/api/v1/investments/**`
- **Target Service**: investment-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- GET `/api/v1/investments` → Get All Investment Products
- GET `/api/v1/investments/{id}` → Get Investment Product by ID
- POST `/api/v1/investments` → Create Investment Product

---

### 5. Transaction Service Routes
**Pattern**: `/api/v1/transactions/**`
- **Target Service**: transaction-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- GET `/api/v1/transactions/user/{userId}` → Get User Transactions
- POST `/api/v1/transactions` → Create Transaction

---

### 6. Portfolio Service Routes
**Pattern**: `/api/v1/portfolio/**`
- **Target Service**: portfolio-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- GET `/api/v1/portfolio/user/{userId}` → Get User Portfolio

---

### 7. Notification Service Routes
**Pattern**: `/api/v1/notifications/**`
- **Target Service**: notification-service
- **Load Balanced**: Yes
- **Strip Prefix**: No (0)

**Available Endpoints**:
- POST `/api/v1/notifications/send-email` → Send Email

---

## CORS Configuration

### Allowed Origins
The gateway is configured to allow requests from:
- `http://localhost:*` (all localhost ports)
- `https://frontend-two-wheat-xx7if4udbl.vercel.app`
- `https://confiance-application*.app.runonflux.io`
- `https://*.vercel.app`

### Allowed Methods
- GET
- POST
- PUT
- DELETE
- PATCH
- OPTIONS

### Allowed Headers
- All headers (`*`)

### Exposed Headers
- Authorization
- Content-Type

### Additional Settings
- **Allow Credentials**: true
- **Max Age**: 3600 seconds (1 hour)

---

## Authentication & Authorization

### JWT Configuration
- **Secret Key**: Configured via environment variable
- **Access Token Expiration**: 86400000 ms (24 hours)
- **Refresh Token Expiration**: 604800000 ms (7 days)
- **Algorithm**: HS256

### Authentication Flow
1. Client sends credentials to `/api/v1/auth/login`
2. Gateway routes to auth-service
3. Auth-service validates and returns JWT tokens
4. Client includes token in subsequent requests via `Authorization: Bearer <token>` header
5. Gateway validates token before routing to services

---

## Redis Configuration

Used for session management and caching:
- **Host**: Configurable via `SPRING_REDIS_HOST` (default: localhost)
- **Port**: Configurable via `SPRING_REDIS_PORT` (default: 6379)
- **Password**: Configurable via `SPRING_REDIS_PASSWORD`
- **Timeout**: 60000 ms (60 seconds)

---

## Service Endpoints Summary

| Service | Base Path | Port | Description |
|---------|-----------|------|-------------|
| API Gateway | / | 8080 | Entry point for all requests |
| Auth Service | /api/v1/auth | 8081 | Authentication & token management |
| User Service | /api/v1/users | 8082 | User management |
| Admin Service | /api/v1/admin | 8082 | Admin & permission management |
| Investment Service | /api/v1/investments | 8083 | Investment product management |
| Transaction Service | /api/v1/transactions | 8084 | Transaction management |
| Portfolio Service | /api/v1/portfolio | 8085 | Portfolio management |
| Notification Service | /api/v1/notifications | 8086 | Notification delivery |
| Discovery Service | /eureka | 8761 | Service registry (Eureka) |
| Config Service | / | 8888 | Centralized configuration |

**Note**: Internal service ports are for direct access. Clients should always use the API Gateway (port 8080).

---

## Health & Monitoring

### Management Endpoints
Exposed via Spring Boot Actuator:
- `/actuator/health` - Health check
- `/actuator/info` - Application info
- `/actuator/metrics` - Metrics
- `/actuator/gateway` - Gateway routes info

### Health Check Details
- **Show Details**: Always
- **Access**: Public (consider restricting in production)

---

## Request Flow

```
Client Application
       ↓
   [API Gateway :8080]
       ↓
   [Load Balancer]
       ↓
   [Service Discovery - Eureka :8761]
       ↓
   [Target Microservice]
       ↓
   [Database / External Services]
```

---

## Error Handling

### Standard Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "timestamp": "2024-01-16T10:30:00"
}
```

### Common HTTP Status Codes
| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error - Server error |
| 503 | Service Unavailable - Service is down |

---

## Rate Limiting

Currently not configured. Consider implementing rate limiting in production:
- Per IP address
- Per user/API key
- Per endpoint

---

## Request/Response Examples

### Successful Request
```bash
curl -X GET "http://localhost:8080/api/v1/users/1" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "timestamp": "2024-01-16T10:30:00"
}
```

### Failed Request (Unauthorized)
```bash
curl -X GET "http://localhost:8080/api/v1/users/1"
```

**Response (401 Unauthorized)**:
```json
{
  "success": false,
  "message": "Authentication required",
  "timestamp": "2024-01-16T10:30:00"
}
```

---

## Security Best Practices

1. **Always use HTTPS in production**
2. **Validate JWT tokens on every request**
3. **Implement rate limiting**
4. **Enable request/response logging for audit**
5. **Use API keys for service-to-service communication**
6. **Implement request size limits**
7. **Enable CORS only for trusted domains**
8. **Sanitize all inputs**
9. **Use secure headers (HSTS, CSP, etc.)**
10. **Regular security audits**

---

## Logging Configuration

```yaml
logging:
  level:
    org.springframework.cloud.gateway: DEBUG
    reactor.netty: INFO
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"
```

---

## Testing the Gateway

### Health Check
```bash
curl http://localhost:8080/actuator/health
```

### Get Gateway Routes
```bash
curl http://localhost:8080/actuator/gateway/routes
```

### Test CORS
```bash
curl -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -X OPTIONS http://localhost:8080/api/v1/auth/login \
  --verbose
```

---

## Deployment Notes

### Environment Variables
Required environment variables for deployment:
- `SPRING_REDIS_HOST` - Redis host
- `SPRING_REDIS_PORT` - Redis port
- `SPRING_REDIS_PASSWORD` - Redis password
- `EUREKA_HOST` - Eureka server host
- `JWT_SECRET` - JWT secret key

### Docker Deployment
```yaml
version: '3.8'
services:
  api-gateway:
    image: confiance/api-gateway:latest
    ports:
      - "8080:8080"
    environment:
      - SPRING_REDIS_HOST=redis
      - EUREKA_HOST=eureka
    depends_on:
      - redis
      - eureka
```

---

## Future Enhancements

1. **API Versioning**: Support multiple API versions
2. **Request/Response Caching**: Cache frequent requests
3. **API Documentation**: Integrate Swagger/OpenAPI
4. **Circuit Breaker**: Implement Resilience4j
5. **Distributed Tracing**: Add Sleuth + Zipkin
6. **API Analytics**: Track API usage and performance
7. **WebSocket Support**: Real-time communication
8. **GraphQL Gateway**: Alternative to REST

---

## Support

For API support and documentation:
- API Docs: `/docs` (when integrated)
- Health Status: `/actuator/health`
- Gateway Info: `/actuator/info`
