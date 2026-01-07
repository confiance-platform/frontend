# Confiance Platform - Complete Deployment Guide

**Last Updated:** January 4, 2026
**Version:** 2.0
**Status:** Production Ready ✅

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Local Development](#local-development)
4. [Flux Production Deployment](#flux-production-deployment)
5. [Architecture](#architecture)
6. [Scripts Reference](#scripts-reference)
7. [Troubleshooting](#troubleshooting)
8. [API Documentation](#api-documentation)

---

## Quick Start

### For Local Development

```bash
# Start all services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### For Flux Production Deployment

```bash
# 1. Upload flux/prod/flux-infrastructure.yml to Flux
# 2. Wait for infrastructure to be healthy
# 3. Upload flux/prod/flux-application.yml to Flux
# 4. Monitor deployment on Flux dashboard
```

---

## Project Overview

### What is Confiance?

Confiance is a comprehensive microservices-based financial investment platform built with:
- **Backend:** Spring Boot 3.2.1 + Spring Cloud 2023.0.0
- **Database:** MySQL 8.0
- **Cache:** Redis 7
- **Security:** JWT Authentication + RBAC
- **Container:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Deployment:** Flux (Production), Docker Compose (Local)

### Microservices Architecture

| Service | Port | Purpose |
|---------|------|---------|
| Discovery Service | 8761 | Eureka service registry |
| Config Service | 8888 | Centralized configuration |
| API Gateway | 8080 | Routing & load balancing |
| Auth Service | 8081 | Authentication & JWT |
| User Service | 8082 | User management & RBAC |
| Notification Service | 8083 | Email notifications |
| Investment Service | 8084 | Investment products |
| Transaction Service | 8085 | Financial transactions |
| Portfolio Service | 8086 | Portfolio management |

### Technology Stack

- **Java:** 17
- **Framework:** Spring Boot 3.2.1
- **Security:** Spring Security + JWT (JJWT 0.12.3)
- **Database:** MySQL 8.0.33
- **Cache:** Redis 7
- **Build:** Maven 3.11.0
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Registry:** GitHub Packages (Maven), Docker Hub (Images)

---

## Local Development

### Prerequisites

- **Docker:** 20.10+
- **Docker Compose:** 2.0+
- **RAM:** 8GB minimum
- **Disk:** 20GB free space
- **OS:** macOS (ARM64/M1/M2/M3), Linux, Windows with WSL2

### Folder Structure

```
confiance-backend/
├── docker-compose.yml          # Main compose file (USE THIS for local)
├── Dockerfile.template         # Multi-stage build (ARM64 compatible)
├── flux/                       # Deployment configurations
│   ├── prod/                   # Production Flux deployment
│   │   ├── flux-infrastructure.yml
│   │   ├── flux-application.yml
│   │   └── FLUX_DEPLOYMENT_GUIDE.md
│   └── local/                  # Local testing (separated services)
│       ├── docker-compose-infrastructure-local.yml
│       ├── docker-compose-application-local.yml
│       ├── reset-local-infrastructure.sh
│       └── LOCAL_TESTING_GUIDE.md
├── scripts/                    # Automation scripts
│   └── README.md              # Scripts documentation
├── [9 microservices]/         # Service directories
└── common-lib/                # Shared library
```

### Starting Local Development

#### Method 1: Simple (Recommended)

```bash
# Start all services (builds from source)
docker-compose up -d --build

# Monitor logs
docker-compose logs -f

# Check all services are running
docker-compose ps

# Stop services
docker-compose down
```

**First build takes 10-15 minutes** (downloads dependencies, builds common-lib + 9 services)
**Subsequent builds are faster** (Docker layer caching)

#### Method 2: Separated Testing (Simulates Flux)

```bash
# 1. Start infrastructure
cd flux/local
docker-compose -f docker-compose-infrastructure-local.yml up -d

# 2. Wait for infrastructure to be healthy (30 seconds)
sleep 30

# 3. Start application services
docker-compose -f docker-compose-application-local.yml up -d

# 4. Monitor logs
docker-compose -f docker-compose-application-local.yml logs -f
```

### Service URLs (Local)

- **Eureka Dashboard:** http://localhost:8761
- **Config Service:** http://localhost:8888
- **API Gateway:** http://localhost:8080
- **Auth Service:** http://localhost:8081
- **User Service:** http://localhost:8082
- **Notification Service:** http://localhost:8083
- **Investment Service:** http://localhost:8084
- **Transaction Service:** http://localhost:8085
- **Portfolio Service:** http://localhost:8086
- **MySQL:** localhost:3306 (root/root)
- **Redis:** localhost:6379

### Testing the API

```bash
# 1. Register a user
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@confiance.com",
    "password": "Test123!",
    "firstName": "Test",
    "lastName": "User",
    "phoneNumber": "+1234567890"
  }'

# 2. Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "Test123!"
  }'

# 3. Get user profile (replace <TOKEN> with JWT from login)
curl http://localhost:8080/api/users/profile \
  -H "Authorization: Bearer <TOKEN>"
```

### Database Access

```bash
# MySQL command line
docker exec -it confiance-mysql mysql -uroot -proot

# Show databases
docker exec -it confiance-mysql mysql -uroot -proot -e "SHOW DATABASES;"

# Redis CLI
docker exec -it confiance-redis redis-cli

# Redis ping test
docker exec -it confiance-redis redis-cli ping
```

---

## Flux Production Deployment

### Overview

Flux deployment is **separated into 2 apps** to bypass the component limit:

1. **Infrastructure App** (3 components): MySQL, Redis, phpMyAdmin
2. **Application App** (9 components): All microservices

### Why Separation Works

Flux provides **cluster-wide DNS resolution** using `.flux` suffix:
- Services in different apps can communicate
- Example: `confiancemysql.flux:3306`
- Example: `confianceredis.flux:6379`
- Example: `confiancediscovery.flux:8761`

### Prerequisites

1. **Flux Account:** https://cloud.runonflux.com
2. **Docker Images:** All images pushed to Docker Hub
3. **Resource Requirements:**
   - Infrastructure: 2.0 CPU, 3 GB RAM
   - Application: 7.0 CPU, 8 GB RAM
   - **Total:** 9.0 CPU, 11 GB RAM

### Deployment Steps

#### Step 1: Deploy Infrastructure (FIRST)

1. Go to https://cloud.runonflux.com/apps/register/configure
2. Select **Import** option
3. Upload `flux/prod/flux-infrastructure.yml`
4. Configure settings:
   - **App Name:** `confiance-infrastructure`
   - Review resource allocations
5. Click **Deploy**
6. **WAIT** for all 3 components to be **RUNNING**

**Verify Infrastructure:**
```bash
# From Flux shell or locally if ports exposed
nc -zv confiancemysql.flux 3306
nc -zv confianceredis.flux 6379
```

#### Step 2: Deploy Application (SECOND)

1. Go to https://cloud.runonflux.com/apps/register/configure
2. Select **Import** option
3. Upload `flux/prod/flux-application.yml`
4. Configure settings:
   - **App Name:** `confiance-application`
   - Review resource allocations
5. Click **Deploy**
6. Monitor deployment progress

**Deployment Order:**
1. Discovery Service starts first
2. Config Service registers with Discovery
3. All other services register with Discovery
4. Services connect to MySQL and Redis using `.flux` DNS

#### Step 3: Verify Deployment

**Check Infrastructure:**
- MySQL: Should be accessible on port 3306
- Redis: Should be accessible on port 6379
- phpMyAdmin: Should be accessible on port 80

**Check Application:**
1. Access Eureka Dashboard: `http://<flux-app-url>:8761`
   - All 8 microservices should be registered
2. Test API Gateway: `http://<flux-app-url>:8080`
3. Check phpMyAdmin: `http://<infrastructure-url>:80`
   - Should show all databases created by services

### Flux DNS Resolution

Services communicate across deployments using `.flux` suffix:

**Infrastructure deployment provides:**
- `confiancemysql.flux:3306`
- `confianceredis.flux:6379`

**Application services connect to:**
```yaml
SPRING_DATASOURCE_URL: jdbc:mysql://confiancemysql.flux:3306/...
SPRING_REDIS_HOST: confianceredis.flux
EUREKA_CLIENT_SERVICEURL_DEFAULTZONE: http://confiancediscovery.flux:8761/eureka/
```

**This works because:**
- Both apps are in the same Flux account
- Flux provides cluster-wide DNS
- No additional network configuration needed

### Updating Flux Deployment

**To update infrastructure:**
1. Modify `flux/prod/flux-infrastructure.yml`
2. Redeploy infrastructure app on Flux

**To update application:**
1. Push new Docker images to Docker Hub
2. Modify `flux/prod/flux-application.yml` (if needed)
3. Redeploy application app on Flux

**To update a single service:**
1. Push new Docker image: `rahulb15/confiance-auth-service:latest`
2. Restart the service in Flux dashboard
3. Flux will pull the latest image

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        API Gateway (8080)                     │
│                    (Load Balancing & Routing)                 │
└────────────┬────────────────────────────────┬────────────────┘
             │                                │
    ┌────────▼─────────┐            ┌────────▼──────────┐
    │ Discovery Service │            │  Config Service   │
    │   (Eureka 8761)  │            │    (8888)         │
    └──────────────────┘            └───────────────────┘
             │
    ┌────────▼──────────────────────────────────────────┐
    │              Business Services                      │
    ├────────────┬──────────┬───────────┬────────────────┤
    │ Auth (8081)│User(8082)│Notify(8083)│Investment(8084)│
    ├────────────┴──────────┴───────────┴────────────────┤
    │ Transaction(8085) │ Portfolio(8086)                 │
    └──────────┬────────┴─────────────────┬──────────────┘
               │                          │
      ┌────────▼────────┐        ┌───────▼──────┐
      │  MySQL (3306)   │        │ Redis (6379) │
      │  - auth_db      │        │  - Sessions  │
      │  - user_db      │        │  - Cache     │
      │  - investment   │        └──────────────┘
      │  - transaction  │
      │  - portfolio    │
      └─────────────────┘
```

### Data Flow

1. **Client Request** → API Gateway (8080)
2. **Gateway** → Discovers service via Eureka
3. **Gateway** → Routes to appropriate service
4. **Service** → Authenticates via Auth Service (JWT)
5. **Service** → Queries MySQL database
6. **Service** → Caches data in Redis
7. **Service** → Returns response to Gateway
8. **Gateway** → Returns response to Client

### Dependency Chain

```
confiance-parent (POM)
       ↓
common-lib (JAR library)
       ↓
All 9 Services
```

**Build Order:**
1. confiance-parent (POM only)
2. common-lib (JAR library)
3. All 9 services (any order)

---

## Scripts Reference

### Local Development Scripts

**Start Services:**
```bash
docker-compose up -d --build
```

**Stop Services:**
```bash
docker-compose down
```

**View Logs:**
```bash
docker-compose logs -f [service-name]
```

**Rebuild Single Service:**
```bash
docker-compose up -d --build [service-name]
```

### Available Scripts (scripts/)

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `build-common-lib.sh` | Build common-lib locally | When common-lib changes |
| `clean-build.sh` | Clean build all services | Fresh start needed |
| `start-all.sh` | Start all services | Quick start (uses docker-compose) |
| `stop-all.sh` | Stop all services | Quick stop |

### GitHub Deployment Scripts

| Script | Purpose |
|--------|---------|
| `push-all-repos.sh` | Push all submodules to GitHub |
| `push-dockerfiles.sh` | Push Dockerfiles to all services |
| `push-security-fixes.sh` | Push security scan fixes |
| `git-setup.sh` | Initialize Git repositories |

See `scripts/README.md` for detailed documentation.

---

## Troubleshooting

### Local Development Issues

#### Services Won't Start

```bash
# Full cleanup
docker-compose down -v
docker system prune -f

# Remove old volumes
docker volume rm $(docker volume ls -q | grep confiance)

# Fresh start
docker-compose up -d --build
```

#### Port Conflicts

```bash
# Find what's using a port
lsof -i :8080
lsof -i :3306

# Kill process or change port in docker-compose.yml
```

#### MySQL Authentication Error

```bash
# This means old volume with different password
# Solution: Remove volume and restart
docker-compose down -v
docker volume rm confiance-backend_mysql-data
docker-compose up -d --build
```

#### Services Can't Connect to MySQL/Redis

**Symptoms:**
```
Connection refused: localhost:3306
Connection refused: localhost:6379
```

**Cause:** Services using localhost instead of service names

**Solution:** Using `docker-compose.yml` (not separated files)
- Services automatically use correct names
- No configuration needed

#### ARM64 Build Errors (Mac M1/M2/M3)

**Symptoms:**
```
no matching manifest for linux/arm64/v8
```

**Solution:** All Dockerfiles updated for ARM64
- `Dockerfile.template` uses `amazoncorretto:17`
- Individual service Dockerfiles use `amazoncorretto:17-alpine3.19`

### Flux Deployment Issues

#### Services Can't Connect to Infrastructure

**Problem:** Application services can't reach MySQL/Redis

**Solutions:**
1. Verify both apps in same Flux account
2. Check infrastructure is fully running
3. Test DNS: `nslookup confiancemysql.flux`
4. Verify `.flux` suffix in environment variables

#### Services Not Registering with Eureka

**Problem:** Eureka dashboard shows no services

**Solutions:**
1. Check Discovery Service is running: `http://<app-url>:8761`
2. Verify EUREKA_CLIENT_SERVICEURL_DEFAULTZONE
3. Check Discovery Service logs for errors

#### Database Connection Timeout

**Problem:** Services can't connect to MySQL

**Solutions:**
1. Verify MySQL is healthy in infrastructure app
2. Check database credentials match
3. Ensure firewall/security groups allow traffic

---

## API Documentation

### Authentication Endpoints

**Base URL:** `http://localhost:8080/api/auth` (Local)
**Base URL:** `http://<flux-url>:8080/api/auth` (Flux)

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john.doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "+1234567890"
}

Response: 201 Created
{
  "id": 1,
  "username": "john.doe",
  "email": "john@example.com",
  "roles": ["ROLE_USER"]
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john.doe",
  "password": "SecurePass123!"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "type": "Bearer",
  "username": "john.doe",
  "roles": ["ROLE_USER"]
}
```

### User Endpoints

**Base URL:** `http://localhost:8080/api/users`

```http
GET /api/users/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "username": "john.doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "roles": ["ROLE_USER"]
}
```

### Investment Endpoints

**Base URL:** `http://localhost:8080/api/investments`

```http
GET /api/investments
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "id": 1,
    "name": "Fixed Deposit",
    "type": "FIXED_DEPOSIT",
    "riskLevel": "LOW",
    "minInvestment": 1000.00,
    "expectedReturn": 5.5
  }
]
```

### Portfolio Endpoints

**Base URL:** `http://localhost:8080/api/portfolios`

```http
GET /api/portfolios/my-portfolio
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "userId": 1,
  "totalValue": 50000.00,
  "totalInvested": 45000.00,
  "totalReturns": 5000.00,
  "holdings": [...]
}
```

---

## RBAC System

### Roles

| Role | Description |
|------|-------------|
| ROLE_USER | Standard user access |
| ROLE_ADMIN | Full administrative access |
| ROLE_INVESTMENT_MANAGER | Manage investment products |
| ROLE_PORTFOLIO_MANAGER | Manage user portfolios |

### Permissions

| Permission | Description |
|------------|-------------|
| USER_READ | View user information |
| USER_WRITE | Create/update users |
| USER_DELETE | Delete users |
| INVESTMENT_READ | View investments |
| INVESTMENT_WRITE | Create/update investments |
| INVESTMENT_DELETE | Delete investments |
| PORTFOLIO_READ | View portfolios |
| PORTFOLIO_WRITE | Create/update portfolios |
| TRANSACTION_READ | View transactions |
| TRANSACTION_WRITE | Create transactions |
| TRANSACTION_APPROVE | Approve transactions |
| NOTIFICATION_SEND | Send notifications |
| ADMIN_ACCESS | Full system access |
| REPORT_GENERATE | Generate reports |

---

## Summary

### Quick Reference

**Local Development:**
```bash
docker-compose up -d --build    # Start
docker-compose logs -f          # Monitor
docker-compose down             # Stop
```

**Flux Deployment:**
1. Upload `flux/prod/flux-infrastructure.yml`
2. Wait for infrastructure to be healthy
3. Upload `flux/prod/flux-application.yml`
4. Verify on Flux dashboard

**Files:**
- `docker-compose.yml` - Local development
- `flux/prod/` - Production Flux deployment
- `flux/local/` - Local separated testing
- `scripts/` - Automation scripts

**Endpoints:**
- Eureka: :8761
- API Gateway: :8080
- Services: :8081-8086

---

**Version:** 2.0
**Last Updated:** January 4, 2026
**Status:** Production Ready ✅
**Platform:** ARM64 (Mac M1/M2/M3) Compatible

For detailed information on specific topics, see the individual guides in `flux/prod/` and `flux/local/`.
