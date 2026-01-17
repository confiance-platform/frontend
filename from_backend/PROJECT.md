# Confiance Financial Platform - Complete Project Guide

**Version:** 3.0
**Last Updated:** January 5, 2026
**Status:** Production Ready ✅

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Quick Start](#quick-start)
4. [Local Development](#local-development)
5. [Production Deployment](#production-deployment)
6. [Scripts & Automation](#scripts--automation)
7. [CI/CD Pipeline](#cicd-pipeline)
8. [API Documentation](#api-documentation)
9. [Troubleshooting](#troubleshooting)

---

## Overview

Confiance is a comprehensive microservices-based financial investment platform built with Spring Boot, Spring Cloud, and deployed using Docker containers.

### Technology Stack

- **Java:** 17
- **Framework:** Spring Boot 3.2.1, Spring Cloud 2023.0.0
- **Security:** Spring Security + JWT
- **Database:** MySQL 8.0 (Railway in production)
- **Cache:** Redis 7 (Railway in production)
- **Build:** Maven 3.11.0
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Deployment:** Flux (cloud.runonflux.com)
- **Platform:** ARM64 compatible (Mac M1/M2/M3)

---

## Architecture

### Microservices

| Service | Port | Purpose |
|---------|------|---------|
| Discovery Service | 8761 | Eureka service registry |
| Auth Service | 8081 | Authentication & JWT |
| User Service | 8082 | User management & RBAC |
| Notification Service | 8083 | Email notifications |
| Investment Service | 8084 | Investment products |
| Transaction Service | 8085 | Financial transactions |
| Portfolio Service | 8086 | Portfolio management |
| API Gateway | 8080 | Routing & load balancing |

### Infrastructure

**Local Development:**
- MySQL & Redis run in Docker containers
- All services communicate via Docker network

**Production (Flux):**
- Microservices deployed on Flux
- MySQL on Railway (caboose.proxy.rlwy.net:12992)
- Redis on Railway (hopper.proxy.rlwy.net:36629)
- Cross-cloud architecture for reliability

---

## Quick Start

### Local Development

```bash
cd flux
docker-compose -f docker-compose-local.yml up -d
```

Access: http://localhost:8080

### Production Deployment

1. Upload `flux/flux-production.yml` to Flux
2. Deploy as `confiance-production`

---

## Local Development

### Prerequisites

- Docker 20.10+
- Docker Compose 2.0+
- 8GB RAM minimum
- 20GB free disk space

### Start All Services

```bash
cd flux
docker-compose -f docker-compose-local.yml up -d --build
```

### View Logs

```bash
docker-compose -f docker-compose-local.yml logs -f
docker-compose -f docker-compose-local.yml logs -f confianceauth  # Specific service
```

### Stop Services

```bash
docker-compose -f docker-compose-local.yml down
docker-compose -f docker-compose-local.yml down -v  # Also remove data
```

### Access Services

- **Eureka Dashboard:** http://localhost:8761
- **API Gateway:** http://localhost:8080
- **MySQL:** localhost:3306 (root/Confiance@2026!Secure)
- **Redis:** localhost:6379

### Clean Rebuild

```bash
./scripts/clean-build.sh
```

---

## Production Deployment

### Architecture

```
┌─────────────────────┐
│   Flux Cloud        │
│  (Microservices)    │
│                     │
│  - Discovery        │
│  - API Gateway      │
│  - Auth Service     │
│  - User Service     │
│  - Investment       │
│  - Transaction      │
│  - Portfolio        │
│  - Notification     │
└──────┬──────────────┘
       │
       │ HTTPS
       │
┌──────▼──────────────┐
│   Railway Cloud     │
│  (Managed Services) │
│                     │
│  - MySQL Database   │
│  - Redis Cache      │
└─────────────────────┘
```

### Railway Setup

**MySQL:**
- Host: caboose.proxy.rlwy.net
- Port: 12992
- User: root
- Password: hahxqfvEdNayQkWmMaQJisTqZsgFkPFb

**Redis:**
- Host: hopper.proxy.rlwy.net
- Port: 36629
- Password: WsSbyoJdbPkJEwwxdUwrAIIGXvlEzYjz

### Databases Required

```sql
CREATE DATABASE confiance_auth;
CREATE DATABASE confiance_users;
CREATE DATABASE confiance_investments;
CREATE DATABASE confiance_transactions;
CREATE DATABASE confiance_portfolios;
```

### Deploy to Flux

1. Go to https://cloud.runonflux.com/apps/register/configure
2. Click **Import**
3. Upload `flux/flux-production.yml`
4. App Name: `confiance-production`
5. Click **Deploy**
6. Monitor startup (3-5 minutes)
7. Verify all services are running

### Verify Deployment

```bash
# Check Eureka
curl http://<flux-url>:8761

# Test API
curl http://<flux-url>:8080/actuator/health
```

---

## Scripts & Automation

### Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `build-common-lib.sh` | Build shared library | `./scripts/build-common-lib.sh` |
| `clean-build.sh` | Clean rebuild all | `./scripts/clean-build.sh` |
| `push-all-repos.sh` | Push to GitHub | `./scripts/push-all-repos.sh` |
| `push-dockerfiles.sh` | Update Dockerfiles | `./scripts/push-dockerfiles.sh` |
| `push-security-fixes.sh` | Deploy security fixes | `./scripts/push-security-fixes.sh` |
| `git-setup.sh` | Initialize Git repos | `./scripts/git-setup.sh` |

### Common Commands

```bash
# Start local development
cd flux && docker-compose -f docker-compose-local.yml up -d

# Clean rebuild
./scripts/clean-build.sh

# Push changes to GitHub
./scripts/push-all-repos.sh

# Build common library
./scripts/build-common-lib.sh
```

---

## CI/CD Pipeline

### GitHub Actions Workflows

All services have automated CI/CD configured:

**Workflow:** `.github/workflows/docker-build-push.yml`

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Steps:**
1. Checkout code
2. Setup Java 17
3. Build with Maven
4. Build Docker image
5. Push to Docker Hub
6. Tag with `latest`

### Docker Hub Images

All images published to Docker Hub:
- `rahulb15/confiance-discovery-service:latest`
- `rahulb15/confiance-auth-service:latest`
- `rahulb15/confiance-user-service:latest`
- `rahulb15/confiance-api-gateway:latest`
- `rahulb15/confiance-investment-service:latest`
- `rahulb15/confiance-transaction-service:latest`
- `rahulb15/confiance-portfolio-service:latest`
- `rahulb15/confiance-notification-service:latest`

---

## API Documentation

### Base URL

- **Local:** http://localhost:8080
- **Production:** http://<flux-url>:8080

### Authentication

#### Register User

```bash
POST /api/auth/register

{
  "username": "john.doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login

```bash
POST /api/auth/login

{
  "username": "john.doe",
  "password": "SecurePass123!"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "type": "Bearer",
  "username": "john.doe"
}
```

### Protected Endpoints

All endpoints require JWT token in header:

```
Authorization: Bearer <token>
```

### Service Endpoints

- **Auth:** `/api/auth/*`
- **Users:** `/api/users/*`
- **Investments:** `/api/investments/*`
- **Transactions:** `/api/transactions/*`
- **Portfolios:** `/api/portfolios/*`

---

## Troubleshooting

### Local Development

#### Services won't start

```bash
# Full cleanup
docker-compose -f flux/docker-compose-local.yml down -v
docker system prune -f

# Rebuild
cd flux
docker-compose -f docker-compose-local.yml up -d --build
```

#### Port conflicts

```bash
# Find what's using port
lsof -i :8080

# Kill process or change port in docker-compose
```

#### MySQL connection issues

```bash
# Check MySQL is running
docker ps | grep mysql

# Check logs
docker logs confiancemysql

# Reset data
docker-compose -f flux/docker-compose-local.yml down -v
```

### Production (Flux)

#### Can't connect to Railway MySQL

**Test connection:**
```bash
mysql -h caboose.proxy.rlwy.net -P 12992 -u root -p'hahxqfvEdNayQkWmMaQJisTqZsgFkPFb' -e "SHOW DATABASES;"
```

**Check:**
- Railway MySQL is running
- Databases are created
- Firewall allows connections
- Credentials are correct in flux-production.yml

#### Can't connect to Railway Redis

**Test connection:**
```bash
redis-cli -h hopper.proxy.rlwy.net -p 36629 -a 'WsSbyoJdbPkJEwwxdUwrAIIGXvlEzYjz' ping
```

**Should return:** PONG

#### Services not registering with Eureka

**Check:**
1. Discovery service is running
2. Other services have correct EUREKA_CLIENT_SERVICEURL_DEFAULTZONE
3. Service logs for connection errors

**View Eureka:**
- Local: http://localhost:8761
- Flux: http://<flux-url>:8761

---

## Security

### Authentication
- JWT token-based
- Token expiration: 24 hours
- Secure password encryption (BCrypt)

### Authorization
- Role-Based Access Control (RBAC)
- 14 fine-grained permissions
- User roles: ADMIN, USER, MANAGER

### Database Security
- Encrypted connections (SSL/TLS)
- Password authentication
- Railway's security infrastructure

---

## Monitoring

### Health Checks

All services expose Spring Boot Actuator:
```bash
curl http://localhost:8080/actuator/health
curl http://localhost:8081/actuator/health  # Auth Service
```

### Logs

**Local:**
```bash
docker-compose -f flux/docker-compose-local.yml logs -f <service>
```

**Flux:**
- View in Flux dashboard
- Click service → Logs tab

### Metrics

Eureka Dashboard shows:
- Registered services
- Instance status
- Health indicators

---

## Project Structure

```
confiance-backend/
├── flux/
│   ├── docker-compose-local.yml    # Local development
│   ├── flux-production.yml         # Flux production
│   └── README.md                   # Deployment guide
│
├── scripts/
│   ├── build-common-lib.sh
│   ├── clean-build.sh
│   ├── push-all-repos.sh
│   ├── push-dockerfiles.sh
│   ├── push-security-fixes.sh
│   └── git-setup.sh
│
├── discovery-service/
├── auth-service/
├── user-service/
├── api-gateway/
├── investment-service/
├── transaction-service/
├── portfolio-service/
├── notification-service/
├── common-lib/
│
├── docker-compose.yml        # Root docker-compose (legacy)
├── Dockerfile.template       # Multi-stage build template
├── README.md                 # Quick start guide
└── PROJECT.md               # This file - Complete guide
```

---

## Development Workflow

### 1. Local Development

```bash
# Start services
cd flux
docker-compose -f docker-compose-local.yml up -d

# Make code changes
# ...

# Rebuild specific service
docker-compose -f docker-compose-local.yml up -d --build confianceauth

# Test
curl http://localhost:8080/api/auth/login
```

### 2. Build & Push

```bash
# Build and push all services
./scripts/push-all-repos.sh

# GitHub Actions will automatically:
# - Build Docker images
# - Push to Docker Hub
```

### 3. Deploy to Flux

```bash
# Flux will pull latest images
# Update deployment via Flux dashboard
# Or upload updated flux-production.yml
```

---

## Best Practices

### Code
- Follow Spring Boot best practices
- Use environment variables for configuration
- Implement proper error handling
- Write unit and integration tests

### Docker
- Use multi-stage builds
- Minimize image layers
- Don't store secrets in images
- Tag images properly

### Security
- Never commit credentials
- Use environment variables
- Rotate JWT secrets regularly
- Keep dependencies updated

### Deployment
- Test locally before deploying
- Use Railway for managed databases
- Monitor logs after deployment
- Keep Flux deployment files in Git

---

## Support & Resources

### Documentation
- **Quick Start:** README.md
- **Deployment:** flux/README.md
- **Complete Guide:** This file (PROJECT.md)

### External Resources
- Flux: https://wiki.runonflux.io
- Railway: https://docs.railway.app
- Spring Boot: https://spring.io/projects/spring-boot
- Spring Cloud: https://spring.io/projects/spring-cloud

### Common Issues
- Check GitHub Issues in respective repositories
- Review service logs
- Verify environment variables
- Test connections to Railway services

---

## Version History

### v3.0 (January 5, 2026)
- Migrated to Railway for MySQL & Redis
- Simplified deployment (2 files: local + production)
- Consolidated documentation
- Cleaned up project structure

### v2.0 (January 4, 2026)
- Organized folder structure
- Created comprehensive guides
- ARM64 compatibility
- GitHub Actions CI/CD

### v1.0 (Initial)
- Microservices architecture
- Docker containerization
- Basic deployment

---

**For quick deployment instructions, see:** `flux/README.md`

**For code changes and development, see:** Individual service README files

**For CI/CD and automation, see:** `.github/workflows/` in each service

---

**Status:** Production Ready ✅
**Platform:** Cross-cloud (Flux + Railway)
**Architecture:** Microservices
**Last Updated:** January 5, 2026