# Confiance Platform Deployment Guide

Complete guide for local development and Flux production deployment.

---

## Quick Start

### Local Development

```bash
cd flux
docker-compose -f docker-compose-local.yml up -d
```

Access:
- Eureka: http://localhost:8761
- API Gateway: http://localhost:8080

### Flux Production

1. Upload `flux-production.yml` to https://cloud.runonflux.com
2. Deploy as `confiance-production`

---

## Local Development Setup

### Prerequisites
- Docker & Docker Compose
- 8GB RAM
- 20GB disk space

### Start Services

```bash
cd flux
docker-compose -f docker-compose-local.yml up -d --build
```

### Check Status

```bash
docker-compose -f docker-compose-local.yml ps
docker-compose -f docker-compose-local.yml logs -f
```

### Stop Services

```bash
docker-compose -f docker-compose-local.yml down
docker-compose -f docker-compose-local.yml down -v  # Also remove volumes
```

### Services & Ports

| Service | Port | URL |
|---------|------|-----|
| Eureka Dashboard | 8761 | http://localhost:8761 |
| API Gateway | 8080 | http://localhost:8080 |
| Auth Service | 8081 | http://localhost:8081 |
| User Service | 8082 | http://localhost:8082 |
| Notification | 8083 | http://localhost:8083 |
| Investment | 8084 | http://localhost:8084 |
| Transaction | 8085 | http://localhost:8085 |
| Portfolio | 8086 | http://localhost:8086 |
| MySQL | 3306 | localhost:3306 |
| Redis | 6379 | localhost:6379 |

### MySQL Access

```bash
mysql -h localhost -P 3306 -u root -p'Confiance@2026!Secure'
```

Databases:
- confiance_auth
- confiance_users
- confiance_investments
- confiance_transactions
- confiance_portfolios

---

## Flux Production Deployment

### Architecture

**Microservices:** Deployed on Flux (https://cloud.runonflux.com)
**Database:** Railway MySQL (caboose.proxy.rlwy.net:12992)
**Cache:** Railway Redis (hopper.proxy.rlwy.net:36629)

### Prerequisites

1. Flux account at https://cloud.runonflux.com
2. Railway MySQL with databases created:
   ```sql
   CREATE DATABASE confiance_auth;
   CREATE DATABASE confiance_users;
   CREATE DATABASE confiance_investments;
   CREATE DATABASE confiance_transactions;
   CREATE DATABASE confiance_portfolios;
   ```
3. Docker images pushed to Docker Hub:
   - rahulb15/confiance-discovery-service:latest
   - rahulb15/confiance-auth-service:latest
   - rahulb15/confiance-user-service:latest
   - rahulb15/confiance-api-gateway:latest
   - rahulb15/confiance-investment-service:latest
   - rahulb15/confiance-transaction-service:latest
   - rahulb15/confiance-portfolio-service:latest
   - rahulb15/confiance-notification-service:latest

### Deploy to Flux

1. Go to https://cloud.runonflux.com/apps/register/configure
2. Click **Import**
3. Upload `flux/flux-production.yml`
4. App Name: `confiance-production`
5. Click **Deploy**

### Verify Deployment

1. **Check Services:** All should show "running" (green)
2. **Check Eureka:** Access `http://<your-flux-url>:8761`
   - Should see 7 services registered
3. **Check Logs:** No connection errors
4. **Test API:** See below

---

## API Testing

### Register User

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "Test123!",
    "firstName": "Test",
    "lastName": "User"
  }'
```

### Login

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "Test123!"
  }'
```

Returns JWT token.

---

## Troubleshooting

### Local: Services won't start

```bash
docker-compose -f docker-compose-local.yml down -v
docker-compose -f docker-compose-local.yml up -d --build
```

### Local: Port already in use

```bash
lsof -i :8080  # Check what's using the port
```

### Flux: Can't connect to Railway MySQL

**Check:**
1. Railway MySQL is running
2. Databases are created
3. Connection string is correct in `flux-production.yml`
4. Firewall allows connections

**Test from local:**
```bash
mysql -h caboose.proxy.rlwy.net -P 12992 -u root -p'hahxqfvEdNayQkWmMaQJisTqZsgFkPFb' -e "SHOW DATABASES;"
```

### Flux: Can't connect to Railway Redis

**Test from local:**
```bash
redis-cli -h hopper.proxy.rlwy.net -p 36629 -a 'WsSbyoJdbPkJEwwxdUwrAIIGXvlEzYjz' ping
```

---

## Resource Requirements

### Local
- CPU: 4+ cores recommended
- RAM: 8GB minimum
- Disk: 20GB free space

### Flux Production
- Total: 7.5 CPU cores, 7.5GB RAM
- Per service: 0.5-1.0 CPU, 512-1024MB RAM

---

## Files

- `docker-compose-local.yml` - Local development with Docker
- `flux-production.yml` - Flux production with Railway

---

## Support

For issues:
1. Check logs: `docker-compose -f docker-compose-local.yml logs -f <service>`
2. Check Eureka dashboard
3. Verify environment variables
4. Check Railway services are running

---

**Version:** 3.0
**Last Updated:** January 5, 2026
