# Confiance Platform - Complete Setup & Fix Guide

**Last Updated:** January 3, 2026
**Status:** All Systems Operational ✅

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Complete Timeline of Fixes](#complete-timeline-of-fixes)
4. [GitHub Actions CI/CD Setup](#github-actions-cicd-setup)
5. [Multi-Repository Structure](#multi-repository-structure)
6. [Build & Deployment Order](#build--deployment-order)
7. [Scripts Reference](#scripts-reference)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [API Documentation](#api-documentation)
10. [RBAC System](#rbac-system)

---

## Project Overview

### What is Confiance?

Confiance is a comprehensive microservices-based financial investment platform built with Spring Boot and Spring Cloud.

### Key Features

- **Microservices Architecture** - 9 independently deployable services
- **JWT Authentication** - Stateless token-based security
- **Role-Based Access Control (RBAC)** - 14 fine-grained permissions
- **Investment Management** - Multiple investment product types
- **Transaction Processing** - Complete financial transaction lifecycle
- **Portfolio Analytics** - Real-time portfolio tracking
- **Email Notifications** - Automated notification system
- **Service Discovery** - Eureka-based service registration
- **API Gateway** - Centralized routing and security

### Technology Stack

- **Framework**: Spring Boot 3.2.1, Spring Cloud 2023.0.0
- **Security**: Spring Security, JWT (JJWT 0.12.3)
- **Database**: MySQL 8.0.33
- **Cache**: Redis
- **Build**: Maven 3.11.0
- **Java**: 17
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Registry**: GitHub Packages (Maven), Docker Hub (Images)

---

## Architecture

### Microservices

| Service | Port | Purpose | Repository |
|---------|------|---------|------------|
| Discovery Service | 8761 | Eureka service registry | confiance-discovery-service |
| Config Service | 8888 | Centralized configuration | confiance-config-service |
| API Gateway | 8080 | Routing, load balancing | confiance-api-gateway |
| Auth Service | 8081 | Authentication, JWT tokens | confiance-auth-service |
| User Service | 8082 | User management, RBAC | confiance-user-service |
| Notification Service | 8083 | Email notifications | confiance-notification-service |
| Investment Service | 8084 | Investment products | confiance-investment-service |
| Transaction Service | 8085 | Financial transactions | confiance-transaction-service |
| Portfolio Service | 8086 | Portfolio management | confiance-portfolio-service |

### Dependencies

```
confiance-parent (POM)
       ↓
common-lib (JAR library)
       ↓
All 9 Services
```

---

## Complete Timeline of Fixes

This section documents all issues encountered and their resolutions with timestamps.

### Issue 1: Parent POM Not Found
**Date:** January 3, 2026 - Morning
**Time:** ~05:00 UTC

**Problem:**
```
Could not find artifact com.confiance:confiance-backend:pom:1.0.0
```

**Root Cause:**
- Services referenced parent POM as `confiance-backend`
- Parent POM wasn't published to GitHub Packages
- Services couldn't resolve parent dependency

**Solution:**
1. Renamed root `pom.xml` artifactId from `confiance-backend` to `confiance-parent`
2. Updated all service POMs to reference `confiance-parent`
3. Added GitHub Packages repository configuration
4. Published `confiance-parent` to GitHub Packages

**Files Modified:**
- `pom.xml` (root) - artifactId changed
- All service `pom.xml` files - parent reference updated
- All service `pom.xml` files - repositories added

**Result:** ✅ Parent POM successfully published and accessible

---

### Issue 2: Common-lib Not Found
**Date:** January 3, 2026 - Morning
**Time:** ~05:30 UTC

**Problem:**
```
Could not find artifact com.confiance:common-lib:jar:1.0.0 in github-parent
Could not find artifact com.confiance:common-lib:jar:1.0.0 in github-common
Could not find artifact com.confiance:common-lib:jar:1.0.0 in central
```

**Root Cause:**
- `common-lib` not published to GitHub Packages
- All services depend on `common-lib`
- No workflow existed to publish `common-lib`

**Solution:**
1. Created `common-lib/.github/workflows/publish.yml`
2. Configured Maven-only publish (no Docker build)
3. Added GitHub Packages authentication
4. Published `common-lib` to GitHub Packages
5. Set package visibility to PUBLIC

**Files Created:**
- `common-lib/.github/workflows/publish.yml`

**Result:** ✅ Common-lib successfully published and accessible

---

### Issue 3: Deprecated Artifact Actions (v3)
**Date:** January 3, 2026 - Morning
**Time:** ~06:00 UTC

**Problem:**
```
This request has been automatically failed because it uses a deprecated
version of actions/upload-artifact: v3
```

**Root Cause:**
- All workflows using `actions/upload-artifact@v3`
- GitHub deprecated v3, requires v4
- Breaking changes in v4 API

**Solution:**
Updated all service workflows:
1. `actions/upload-artifact@v3` → `actions/upload-artifact@v4`
2. `actions/download-artifact@v3` → `actions/download-artifact@v4`

**Files Modified:**
- All `.github/workflows/ci-cd.yml` files in 9 services

**Result:** ✅ All artifact actions updated to v4

---

### Issue 4: Multi-Repository Not Updating
**Date:** January 3, 2026 - Morning
**Time:** ~06:30 UTC

**Problem:**
- Workflow changes made locally
- Changes not appearing in GitHub
- Pushing from root didn't update services

**Root Cause:**
- Multi-repo architecture with Git submodules
- Each service is a separate Git repository
- Pushing from root only updates main repo, not submodules

**Solution:**
1. Documented multi-repo structure
2. Created `push-all-repos.sh` script
3. Script goes into each submodule and pushes individually

**Files Created:**
- `MULTI_REPO_GUIDE.md`
- `push-all-repos.sh`

**Result:** ✅ All submodules successfully pushed to GitHub

---

### Issue 5: Docker Build Failed - No Dockerfile
**Date:** January 3, 2026 - Afternoon
**Time:** ~12:00 UTC

**Problem:**
```
ERROR: failed to read dockerfile: open Dockerfile: no such file or directory
```

**Root Cause:**
- GitHub Actions had `docker-build-and-push` jobs
- Maven builds passed successfully
- No Dockerfile existed in any service repository

**Solution:**
Created individual Dockerfiles for all 9 services:

**Dockerfile Features:**
- Uses `eclipse-temurin:17-jre-alpine` (lightweight)
- Copies JAR built by GitHub Actions
- Runs as non-root user (`spring:spring`) for security
- Service-specific port configuration
- Health checks for container monitoring
- Simple single-stage build

**Files Created:**
- `discovery-service/Dockerfile`
- `config-service/Dockerfile`
- `api-gateway/Dockerfile`
- `auth-service/Dockerfile`
- `user-service/Dockerfile`
- `notification-service/Dockerfile`
- `investment-service/Dockerfile`
- `transaction-service/Dockerfile`
- `portfolio-service/Dockerfile`
- `push-dockerfiles.sh` (automation script)

**Result:** ✅ All Docker builds now succeed

---

### Issue 6: Security Scan Failed
**Date:** January 3, 2026 - Afternoon
**Time:** ~13:00 UTC

**Problem 1:**
```
Error: CodeQL Action major versions v1 and v2 have been deprecated.
Please update all occurrences of the CodeQL Action to v3.
```

**Problem 2:**
```
Warning: Resource not accessible by integration
Error: Resource not accessible by integration
```

**Root Causes:**
1. Workflows using deprecated `github/codeql-action/upload-sarif@v2`
2. `security-scan` job missing `security-events: write` permission

**Solution:**
1. Updated CodeQL action from v2 to v3
2. Added permissions block to security-scan jobs:
```yaml
permissions:
  contents: read
  security-events: write
```

**Files Modified:**
- All `.github/workflows/ci-cd.yml` files in 9 services

**Files Created:**
- `fix-security-scan.py` (automation script)
- `push-security-fixes.sh` (deployment script)

**Result:** ✅ Security scans now upload results successfully

---

## GitHub Actions CI/CD Setup

### Current Status: FULLY OPERATIONAL ✅

All GitHub Actions workflows are now working correctly with:
- Maven builds
- Docker image builds
- Security scanning
- Package publishing

### Workflow Jobs

Each service has a complete CI/CD pipeline:

**1. build-and-test**
- Checks out code
- Sets up JDK 17
- Configures GitHub Packages authentication
- Downloads `confiance-parent` and `common-lib`
- Builds JAR with Maven
- Runs unit tests
- Uploads JAR artifact

**2. docker-build-and-push** (only on main branch)
- Downloads JAR artifact
- Builds Docker image from Dockerfile
- Tags with `latest` and commit SHA
- Pushes to Docker Hub
- Uses layer caching for faster builds

**3. security-scan** (only on main branch)
- Runs Trivy vulnerability scanner
- Generates SARIF report
- Uploads results to GitHub Security tab
- Fails on CRITICAL/HIGH vulnerabilities

### Required Secrets

Configure these in GitHub repository settings:

```
DOCKER_USERNAME - Docker Hub username
DOCKER_PASSWORD - Docker Hub password or access token
GITHUB_TOKEN - Automatically provided by GitHub Actions
```

---

## Multi-Repository Structure

Your project uses a **multi-repo architecture** with Git submodules:

```
confiance-backend/               ← Main/umbrella repo
├── confiance-parent/            ← Separate Git repo (submodule)
├── common-lib/                  ← Separate Git repo (submodule)
├── discovery-service/           ← Separate Git repo (submodule)
├── config-service/              ← Separate Git repo (submodule)
├── api-gateway/                 ← Separate Git repo (submodule)
├── auth-service/                ← Separate Git repo (submodule)
├── user-service/                ← Separate Git repo (submodule)
├── notification-service/        ← Separate Git repo (submodule)
├── investment-service/          ← Separate Git repo (submodule)
├── transaction-service/         ← Separate Git repo (submodule)
└── portfolio-service/           ← Separate Git repo (submodule)
```

### Important Notes

**When making changes:**
- Pushing from main directory only updates umbrella repo
- Must push from inside each submodule directory
- Use automation scripts in `scripts/` folder

**Repository URLs:**
- https://github.com/confiance-platform/confiance-parent
- https://github.com/confiance-platform/confiance-common-lib
- https://github.com/confiance-platform/confiance-discovery-service
- https://github.com/confiance-platform/confiance-config-service
- https://github.com/confiance-platform/confiance-api-gateway
- https://github.com/confiance-platform/confiance-auth-service
- https://github.com/confiance-platform/confiance-user-service
- https://github.com/confiance-platform/confiance-notification-service
- https://github.com/confiance-platform/confiance-investment-service
- https://github.com/confiance-platform/confiance-transaction-service
- https://github.com/confiance-platform/confiance-portfolio-service

---

## Build & Deployment Order

**CRITICAL:** Services have dependencies. You **MUST** publish in this order:

```
1. confiance-parent (POM only)
       ↓
2. common-lib (JAR library)
       ↓
3. All 9 services (any order)
```

### Why Order Matters

- `common-lib` depends on `confiance-parent` POM
- **ALL services depend on `common-lib` JAR**
- If dependencies aren't published first, builds FAIL

### Deployment Steps

**Step 1: Publish confiance-parent** ✅ DONE
- Already published to GitHub Packages
- Package: `com.confiance.confiance-parent`
- Version: 1.0.0

**Step 2: Publish common-lib** ✅ DONE
- Published to GitHub Packages
- Package: `com.confiance.confiance-common-lib`
- Version: 1.0.0
- Visibility: PUBLIC

**Step 3: Build Services** ✅ DONE
- All 9 services building successfully
- Docker images published to Docker Hub
- Security scans passing

### Verifying Deployment

**Check Published Packages:**
Visit: https://github.com/orgs/confiance-platform/packages

You should see:
- ✅ `com.confiance.confiance-parent` (version 1.0.0)
- ✅ `com.confiance.confiance-common-lib` (version 1.0.0)

**Check Workflow Status:**
For each repository, check Actions tab:
- Green ✅ = Success
- Red ❌ = Failed (check logs)
- Yellow ⏳ = Running

---

## Scripts Reference

All automation scripts are located in the `scripts/` folder.

See `scripts/README.md` for detailed documentation on each script.

**Quick Reference:**

| Script | Purpose |
|--------|---------|
| `push-all-repos.sh` | Push all submodule changes to GitHub |
| `push-dockerfiles.sh` | Push Dockerfiles to all services |
| `push-security-fixes.sh` | Push security scan fixes |
| `fix-security-scan.py` | Update CodeQL and permissions |
| `start-all.sh` | Start all services locally |
| `stop-all.sh` | Stop all services locally |
| `clean-build.sh` | Clean build all services |
| `build-common-lib.sh` | Build and install common-lib |
| `docker-hub-push.sh` | Push Docker images to Docker Hub |

---

## Troubleshooting Guide

### Maven Build Errors

**Error: Could not find artifact com.confiance:confiance-parent**
- **Cause:** Parent POM not published or not PUBLIC
- **Solution:**
  1. Check https://github.com/orgs/confiance-platform/packages
  2. Verify `com.confiance.confiance-parent` exists
  3. Set visibility to PUBLIC

**Error: Could not find artifact com.confiance:common-lib**
- **Cause:** common-lib not published yet
- **Solution:**
  1. Publish common-lib first
  2. Ensure package is PUBLIC
  3. Retry service build

### Docker Build Errors

**Error: failed to read dockerfile: open Dockerfile: no such file or directory**
- **Cause:** Dockerfile missing from repository
- **Solution:** All services now have Dockerfiles (FIXED ✅)

### GitHub Actions Errors

**Error: deprecated version of actions/upload-artifact: v3**
- **Cause:** Using old artifact actions
- **Solution:** All services updated to v4 (FIXED ✅)

**Error: CodeQL Action v2 is deprecated**
- **Cause:** Using deprecated CodeQL action
- **Solution:** All services updated to v3 (FIXED ✅)

**Error: Resource not accessible by integration**
- **Cause:** Missing security-events permission
- **Solution:** Permissions added to all services (FIXED ✅)

### Submodule Issues

**Changes not appearing in GitHub**
- **Cause:** Pushing from root only updates main repo
- **Solution:** Use `scripts/push-all-repos.sh`

**Submodule shows modified but no changes**
- **Cause:** Submodule pointer needs updating
- **Solution:**
  ```bash
  git submodule update --remote
  git add <submodule>
  git commit -m "Update submodule pointer"
  ```

---

## API Documentation

### Authentication Endpoints

**Base URL:** `http://localhost:8080/api/auth`

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

### Investment Endpoints

**Base URL:** `http://localhost:8080/api/investments`

#### Get All Investments
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

#### Create Investment
```http
POST /api/investments
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "High Yield Bond",
  "type": "BOND",
  "riskLevel": "MEDIUM",
  "minInvestment": 5000.00,
  "expectedReturn": 7.5
}

Response: 201 Created
```

### Portfolio Endpoints

**Base URL:** `http://localhost:8080/api/portfolios`

#### Get User Portfolio
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

### Role-Permission Mapping

**ROLE_USER:**
- USER_READ (own data)
- INVESTMENT_READ
- PORTFOLIO_READ (own portfolio)
- TRANSACTION_READ (own transactions)
- TRANSACTION_WRITE (own transactions)

**ROLE_ADMIN:**
- All permissions

**ROLE_INVESTMENT_MANAGER:**
- INVESTMENT_READ
- INVESTMENT_WRITE
- INVESTMENT_DELETE
- REPORT_GENERATE

**ROLE_PORTFOLIO_MANAGER:**
- PORTFOLIO_READ
- PORTFOLIO_WRITE
- USER_READ
- TRANSACTION_READ
- REPORT_GENERATE

---

## Summary

### What Was Fixed (January 3, 2026)

1. ✅ Parent POM published to GitHub Packages
2. ✅ Common-lib published to GitHub Packages
3. ✅ All workflows updated from artifact v3 to v4
4. ✅ Dockerfiles created for all 9 services
5. ✅ Security scan fixed with CodeQL v3 and permissions
6. ✅ Multi-repo structure documented and automated
7. ✅ Complete CI/CD pipeline operational

### Current Status

All systems are fully operational:
- Maven builds: ✅ Working
- Docker builds: ✅ Working
- Security scans: ✅ Working
- Package publishing: ✅ Working
- Multi-repo pushes: ✅ Automated

### Quick Commands

```bash
# Start all services locally
cd scripts && ./start-all.sh

# Push all changes to GitHub
cd scripts && ./push-all-repos.sh

# Build common-lib locally
cd scripts && ./build-common-lib.sh

# View logs
docker-compose logs -f

# Stop all services
cd scripts && ./stop-all.sh
```

---

**For detailed script documentation, see:** `scripts/README.md`

**Last Updated:** January 3, 2026
**Maintained By:** Confiance Platform Team
