# Confiance Financial Platform - Complete Guide

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)

A comprehensive financial investment platform built with React, Vite, and Spring Boot microservices.

---

## 📋 Table of Contents

1. [Quick Start](#-quick-start)
2. [Production Deployment](#-production-deployment)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Environment Configuration](#-environment-configuration)
6. [Docker Setup](#-docker-setup)
7. [GitHub Actions CI/CD](#-github-actions-cicd)
8. [Deployment Options](#-deployment-options)
9. [API Documentation](#-api-documentation)
10. [Troubleshooting](#-troubleshooting)
11. [Project Structure](#-project-structure)

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:5173
```

### Demo Credentials

| Role        | Email                  | Password    |
|-------------|------------------------|-------------|
| Super Admin | admin@confiance.com    | Admin@123   |
| Admin       | admin2@confiance.com   | Admin@123   |
| User        | user@confiance.com     | User@123    |

---

## 🌐 Production Deployment

### 3 Simple Steps to Deploy:

#### Step 1: Configure Backend URL ✅

Your backend URL is already configured in `.env.production`:
```bash
VITE_API_BASE_URL=https://confiance-application_8080.app.runonflux.io/api/v1
```

**To change:** Edit `.env.production` with your backend URL

#### Step 2: Set GitHub Secrets (One-time)

Go to GitHub → Settings → Secrets and variables → Actions:
- Add `DOCKER_USERNAME` = Your Docker Hub username
- Add `DOCKER_PASSWORD` = Your Docker Hub password/token

#### Step 3: Deploy!

```bash
git add .
git commit -m "Deploy to production"
git push origin main

# GitHub Actions automatically:
# 1. Builds app with production backend URL
# 2. Creates Docker image
# 3. Pushes to Docker Hub
```

#### Step 4: Run on Server

```bash
# Pull and run
docker pull yourusername/confiance-frontend:latest
docker run -d -p 80:80 confiance-frontend:latest

# Or use docker-compose
docker-compose up -d

# Access at http://your-server-ip
```

**That's it! Your frontend is live! 🎉**

---

## ✨ Features

### User Features
- 🏦 Portfolio Management - Track investments
- 📊 Real-time Analytics - Live charts
- 💰 Transaction History - View all transactions
- 👤 Profile Management - Update personal info
- 🔐 Secure Authentication - JWT with auto-refresh

### Admin Features
- 👥 User Management - View/edit users
- 📈 System Statistics - Dashboard analytics
- 🔍 Activity Monitoring - User activity logs
- 📝 Content Management - Manage platform content

### Super Admin Features
- 🛡️ Full System Control - Complete access
- 👨‍💼 Admin Management - Create/manage admins
- 📊 System Analytics - Comprehensive metrics
- ⚙️ Configuration - System settings

### Technical Features
- ⚡ Fast - Vite build tool
- 📱 Responsive - Mobile-first design
- 🔒 Secure - Security headers, HTTPS ready
- 🐳 Docker - Containerized deployment
- 🚀 CI/CD - Automated pipeline
- 🔄 Auto-refresh - Token refresh on expiry

---

## 🛠 Tech Stack

**Frontend:**
- React 18.3.1 with Vite 5.4
- Bootstrap 5.3.3 + SASS
- React Router v6
- TanStack Query (React Query)
- Axios for API calls
- React Hook Form + Zod validation
- ApexCharts + Chart.js
- Framer Motion animations

**Backend:**
- Spring Boot microservices
- Spring Security + JWT
- MySQL database
- Redis cache

**DevOps:**
- Docker + Nginx
- GitHub Actions CI/CD
- Trivy security scanning
- Multi-platform builds (AMD64 + ARM64)

---

## 🔧 Environment Configuration

### Development (.env.development)
```bash
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_APP_NAME=Confiance Financial Platform
VITE_APP_VERSION=1.0.0
VITE_ENABLE_LOGS=true
```

### Production (.env.production)
```bash
VITE_API_BASE_URL=https://confiance-application_8080.app.runonflux.io/api/v1
VITE_APP_NAME=Confiance Financial Platform
VITE_APP_VERSION=1.0.0
VITE_ENABLE_LOGS=false
```

**Important:** Vite builds these into your app at build time, so:
- Local dev uses `.env.development`
- Production build uses `.env.production`

---

## 🐳 Docker Setup

### Files Created

1. **Dockerfile** - Multi-stage production build
   ```dockerfile
   Stage 1: Node.js 20 Alpine - Build app
   Stage 2: Nginx 1.25 Alpine - Serve static files
   Result: ~50MB optimized image
   ```

2. **nginx.conf** - Production web server config
   - Gzip compression
   - Security headers
   - Asset caching (1 year)
   - SPA routing support
   - Health check endpoint

3. **.dockerignore** - Optimized build context
4. **docker-compose.yml** - Production deployment
5. **docker-compose.dev.yml** - Development with hot reload

### Build & Run Locally

```bash
# Build image
docker build -t confiance-frontend .

# Run container
docker run -p 3000:80 confiance-frontend

# Or use compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## 🔄 GitHub Actions CI/CD

### Workflow: `.github/workflows/ci-cd.yml`

**Automatic on every push:**

1. **Build & Test** (All branches)
   - Install dependencies
   - Run ESLint
   - Build application
   - Upload artifacts

2. **Docker Build & Push** (main/develop only)
   - Build multi-platform image (AMD64 + ARM64)
   - Tag with branch, commit SHA, latest
   - Push to Docker Hub
   - Layer caching for speed

3. **Security Scan** (main/develop only)
   - Pull built image
   - Run Trivy vulnerability scanner
   - Upload to GitHub Security tab
   - Fail on CRITICAL/HIGH issues

### Required GitHub Secrets

Set in: Repository → Settings → Secrets and variables → Actions

```
DOCKER_USERNAME - Your Docker Hub username
DOCKER_PASSWORD - Your Docker Hub password or access token
```

---

## 📦 Deployment Options

### Option 1: Docker Hub + Any Server (Recommended)

```bash
# 1. Push to GitHub (auto-builds)
git push origin main

# 2. On server, pull and run
docker pull yourusername/confiance-frontend:latest
docker run -d -p 80:80 confiance-frontend:latest
```

### Option 2: Docker Compose

```bash
# Production
docker-compose up -d

# Development (hot reload)
docker-compose -f docker-compose.dev.yml up
```

### Option 3: Flux Network

```bash
# 1. Upload: deployment/flux/flux-deployment.yml
# 2. Update image name to yours
# 3. Deploy via Flux dashboard
```

### Option 4: Kubernetes

```bash
# 1. Update deployment/kubernetes/deployment.yml
kubectl apply -f deployment/kubernetes/deployment.yml

# Check status
kubectl get pods
kubectl get services
```

---

## 📡 API Documentation

### Authentication Endpoints

**Base URL:** `{VITE_API_BASE_URL}`

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "phoneNumber": "+1234567890"
}

Response: 201 Created
{
  "id": 1,
  "email": "john@example.com",
  "roles": ["ROLE_USER"]
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "refreshToken": "eyJhbGciOiJIUzUxMiJ9...",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "roles": ["ROLE_USER"]
  }
}
```

#### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer <refresh-token>

Response: 200 OK
{
  "token": "new-access-token",
  "refreshToken": "new-refresh-token"
}
```

### User Endpoints

#### Get Profile
```http
GET /users/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "roles": ["ROLE_USER"]
}
```

### Investment Endpoints

#### Get All Investments
```http
GET /investments
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

#### Get User Portfolio
```http
GET /portfolios/my-portfolio
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "userId": 1,
  "totalValue": 50000.00,
  "totalInvested": 45000.00,
  "totalReturns": 5000.00
}
```

---

## 🐛 Troubleshooting

### Build Fails with "Cannot find module"

**Cause:** Case sensitivity issue (Mac vs Linux)

**Solution:** Check import paths match folder names exactly
- Folders: `Services`, `Components`, `Pages`, `Route` (capital letters)
- Example: Use `import from '../Services/authService'` not `'../services/authService'`

### Backend API Not Working

**Solution 1:** Check `.env.production`
```bash
# Must include /api/v1 at the end
VITE_API_BASE_URL=https://your-backend.com/api/v1
```

**Solution 2:** Verify backend is running and accessible

**Solution 3:** Check CORS settings on backend

### GitHub Actions Failing

**Check Secrets:**
- Go to Settings → Secrets and variables → Actions
- Verify `DOCKER_USERNAME` and `DOCKER_PASSWORD` are set correctly

**Check Docker Hub:**
- Login to Docker Hub manually
- Verify credentials work

### Docker Build Fails

```bash
# Clear Docker cache
docker builder prune -a

# Rebuild without cache
docker build --no-cache -t confiance-frontend .
```

### Container Exits Immediately

```bash
# Check logs
docker logs confiance-frontend

# Run interactively
docker run -it confiance-frontend sh
```

### CORS Errors

**Solution:** Configure backend CORS settings to allow your frontend domain

```java
// Backend: Allow frontend origin
@CrossOrigin(origins = "https://your-frontend-domain.com")
```

### Port Already in Use

```bash
# Find process using port
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
docker run -p 3001:80 confiance-frontend
```

---

## 📁 Project Structure

```
confiance-frontend/
├── .github/
│   └── workflows/
│       └── ci-cd.yml              # CI/CD pipeline
│
├── deployment/
│   ├── flux/
│   │   └── flux-deployment.yml   # Flux config
│   └── kubernetes/
│       └── deployment.yml         # K8s manifests
│
├── public/                        # Static assets
│   └── assets/
│       ├── css/
│       ├── images/
│       ├── js/
│       └── vendor/
│
├── src/
│   ├── Components/               # Reusable components
│   │   ├── ProtectedRoute.jsx   # Route protection
│   │   ├── RoleGate.jsx         # Role-based rendering
│   │   └── PermissionGate.jsx   # Permission checks
│   │
│   ├── Pages/
│   │   ├── LandingPage/         # Public landing
│   │   ├── AuthPages/           # Login/Signup
│   │   │   ├── SignIn/
│   │   │   └── SignUp/
│   │   └── Dashboard/           # Dashboards
│   │       ├── UserDashboard/
│   │       ├── AdminDashboard/
│   │       └── SuperAdminDashboard/
│   │
│   ├── Services/                # API services
│   │   ├── apiClient.js         # Axios instance
│   │   ├── authService.js       # Auth APIs
│   │   └── userService.js       # User APIs
│   │
│   ├── context/                 # React Context
│   │   └── AuthContext.jsx      # Auth state
│   │
│   ├── utils/                   # Utilities
│   │   └── tokenManager.js      # JWT handling
│   │
│   ├── Route/                   # Routing
│   │   ├── index.jsx            # Main routes
│   │   └── AuthRoutes.jsx       # Route configs
│   │
│   ├── Layout/                  # Layout components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   └── Footer/
│   │
│   ├── Data/                    # Static data
│   │   └── Sidebar/
│   │
│   └── main.jsx                 # App entry point
│
├── .dockerignore               # Docker ignore
├── .env.development            # Dev environment
├── .env.production             # Prod environment
├── Dockerfile                  # Docker image
├── docker-compose.yml          # Production compose
├── docker-compose.dev.yml      # Dev compose
├── nginx.conf                  # Nginx config
├── package.json                # Dependencies
├── vite.config.js              # Vite config
└── README.md                   # This file
```

---

## 🔐 Authentication & Authorization

### JWT Token Management

**Access Token:**
- Stored in localStorage
- Expires in 15 minutes
- Used for API requests

**Refresh Token:**
- Stored in localStorage
- Expires in 7 days
- Used to get new access token

**Auto-refresh:**
- Axios interceptor detects 401 errors
- Automatically calls refresh endpoint
- Retries original request

### Role-Based Access Control (RBAC)

**Roles:**
- `ROLE_USER` - Standard users
- `ROLE_ADMIN` - Administrators
- `ROLE_SUPER_ADMIN` - Super administrators

**Route Protection:**
```jsx
<ProtectedRoute>
  <UserDashboard />
</ProtectedRoute>
```

**Role-based Rendering:**
```jsx
<RoleGate roles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
  <AdminPanel />
</RoleGate>
```

**Permission Checks:**
```jsx
<PermissionGate permission="USER_WRITE">
  <EditUserButton />
</PermissionGate>
```

---

## 🔄 Updating Production

### Deploy New Changes

```bash
# 1. Make changes
# 2. Test locally
npm run build
npm run preview

# 3. Commit and push
git add .
git commit -m "Update: description"
git push origin main

# 4. Wait for GitHub Actions (~2-3 min)
# 5. On server, update
docker pull yourusername/confiance-frontend:latest
docker-compose up -d --force-recreate

# Done! New version is live
```

---

## 📝 Available Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Docker
docker build -t confiance-frontend .          # Build image
docker run -p 3000:80 confiance-frontend      # Run container
docker-compose up -d                          # Start with compose
docker-compose down                           # Stop containers
docker-compose logs -f                        # View logs

# Deployment
git push origin main                          # Auto-deploy via GitHub Actions
```

---

## 🔒 Security Features

### Frontend Security
- ✅ JWT token authentication
- ✅ Auto token refresh
- ✅ Protected routes
- ✅ Role-based access control
- ✅ Permission-based rendering
- ✅ XSS protection (React)
- ✅ CSRF tokens (if needed)

### Docker/Nginx Security
- ✅ Security headers (X-Frame-Options, X-XSS-Protection)
- ✅ Content-Type sniffing prevention
- ✅ Referrer policy
- ✅ HTTPS ready (add SSL certificate)
- ✅ Asset caching with immutable flag
- ✅ Gzip compression

### CI/CD Security
- ✅ Automated vulnerability scanning (Trivy)
- ✅ GitHub Security tab integration
- ✅ Build fails on critical issues
- ✅ Dependency scanning
- ✅ Secret management

---

## 📊 Performance

### Build Optimization
- Code splitting with Vite
- Tree shaking
- Minification
- Gzip compression
- Asset caching

### Bundle Size
- Total: ~2MB (gzipped: ~600KB)
- React chunks: ~577KB
- Vendor chunks: ~314KB
- App code: ~165KB

### Docker Image
- Size: ~50MB
- Multi-stage build
- Alpine Linux base
- Production-only files

---

## 🎯 Production Checklist

Before deploying to production:

- [ ] `.env.production` has correct backend URL
- [ ] GitHub secrets configured (DOCKER_USERNAME, DOCKER_PASSWORD)
- [ ] Code pushed to main/develop branch
- [ ] GitHub Actions workflow passed
- [ ] Docker image on Docker Hub
- [ ] Backend API accessible
- [ ] Backend CORS configured for frontend domain
- [ ] SSL certificate configured (for HTTPS)
- [ ] Domain DNS configured (optional)
- [ ] Health checks working
- [ ] Error tracking setup (optional: Sentry)
- [ ] Analytics setup (optional: Google Analytics)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Support & Help

### Common Issues

**Problem:** Build fails
- Check import case sensitivity
- Verify all dependencies installed

**Problem:** Backend not connecting
- Check `.env.production` URL
- Verify backend is running
- Check CORS settings

**Problem:** Docker issues
- Clear Docker cache: `docker builder prune -a`
- Check Docker logs: `docker logs <container>`

### Getting Help

- Check this README first
- Review error logs (browser console, Docker logs, GitHub Actions)
- Verify environment configuration
- Check backend connectivity

---

## 🚀 What's Included

### ✅ Complete Setup
- Modern React app with Vite
- JWT authentication with auto-refresh
- Role-based access control
- Responsive Bootstrap UI
- Production-ready Docker setup
- Automated CI/CD pipeline
- Security scanning
- Multi-platform support
- Comprehensive documentation

### ✅ Ready for Production
- Optimized builds
- Security headers
- Asset caching
- Health checks
- Auto-deployment
- Multiple deployment options

---

**Made with ❤️ by Confiance Team**

**Version:** 1.0.0 | **Last Updated:** January 8, 2026 | **Status:** Production Ready ✅
