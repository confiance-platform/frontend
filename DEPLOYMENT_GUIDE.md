# Confiance Frontend - Complete Deployment Guide

**Last Updated:** January 7, 2026
**Version:** 1.0.0
**Status:** Production Ready ✅

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [CI/CD Pipeline](#cicd-pipeline)
4. [Local Development](#local-development)
5. [Docker Deployment](#docker-deployment)
6. [Flux Deployment](#flux-deployment)
7. [Kubernetes Deployment](#kubernetes-deployment)
8. [Environment Configuration](#environment-configuration)
9. [Troubleshooting](#troubleshooting)

---

## Project Overview

### What is Confiance Frontend?

Confiance Frontend is a modern React-based web application built with Vite, providing a comprehensive user interface for the Confiance financial investment platform.

### Technology Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.0
- **Styling:** Bootstrap 5.3.3, SASS
- **State Management:** React Context + TanStack Query
- **Form Handling:** React Hook Form + Zod validation
- **Charts:** ApexCharts, Chart.js
- **Container:** Docker + Nginx
- **CI/CD:** GitHub Actions
- **Deployment:** Docker Hub, Flux, Kubernetes

### Key Features

- **Modern UI:** Responsive dashboard with Bootstrap 5
- **JWT Authentication:** Secure token-based authentication
- **Real-time Charts:** Investment and portfolio analytics
- **Form Validation:** Comprehensive client-side validation
- **File Management:** Advanced file upload with FilePond
- **Data Tables:** Interactive tables with sorting and filtering
- **Multi-language Support:** Built-in internationalization
- **Production Ready:** Optimized builds with code splitting

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Confiance Frontend                    │
│                  (React + Vite + Nginx)                  │
└───────────────────────┬─────────────────────────────────┘
                        │
                        │ HTTPS/REST API
                        │
┌───────────────────────▼─────────────────────────────────┐
│                   API Gateway (8080)                     │
│              Confiance Backend Services                  │
└──────────────────────────────────────────────────────────┘
```

### Build Process

```
Source Code (React/JSX)
       ↓
Vite Build (ESBuild + Rollup)
       ↓
Optimized Static Assets (dist/)
       ↓
Nginx Container
       ↓
Production Deployment
```

---

## CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline consists of three main jobs:

#### 1. Build and Test
- Checks out code
- Sets up Node.js 20
- Installs dependencies with npm ci
- Runs ESLint
- Builds the application
- Uploads build artifacts

#### 2. Docker Build and Push (on main/develop)
- Builds multi-platform Docker image (amd64 + arm64)
- Tags with branch name, commit SHA, and latest
- Pushes to Docker Hub
- Uses layer caching for faster builds

#### 3. Security Scan (on main/develop)
- Pulls the built Docker image
- Runs Trivy vulnerability scanner
- Uploads results to GitHub Security tab
- Fails on CRITICAL/HIGH vulnerabilities

### Required Secrets

Configure these in GitHub repository settings (Settings → Secrets and variables → Actions):

```
DOCKER_USERNAME - Your Docker Hub username
DOCKER_PASSWORD - Your Docker Hub password or access token
```

### Workflow Triggers

- **Push to main/develop:** Full CI/CD pipeline
- **Pull Request:** Build and test only
- **Manual trigger:** Available in GitHub Actions tab

---

## Local Development

### Prerequisites

- **Node.js:** 20.x or higher
- **npm:** 9.x or higher
- **Docker:** 20.10+ (optional, for containerized development)
- **Git:** Latest version

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd confiance-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### Development with Docker

```bash
# Start development container
docker-compose -f docker-compose.dev.yml up

# Access at http://localhost:5173
# Hot reload is enabled
```

---

## Docker Deployment

### Building the Docker Image

```bash
# Build the image
docker build -t confiance-frontend:latest .

# Build with custom tag
docker build -t confiance-frontend:v1.0.0 .
```

### Running the Container

```bash
# Run with docker-compose (recommended)
docker-compose up -d

# Or run directly
docker run -d \
  --name confiance-frontend \
  -p 3000:80 \
  confiance-frontend:latest

# Access at http://localhost:3000
```

### Docker Compose

**Production:**
```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build
```

**Development:**
```bash
# Start dev server with hot reload
docker-compose -f docker-compose.dev.yml up

# Access at http://localhost:5173
```

### Multi-Platform Build

```bash
# Build for both amd64 and arm64
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t rahulb15/confiance-frontend:latest \
  --push \
  .
```

---

## Flux Deployment

### Prerequisites

1. **Flux Account:** https://cloud.runonflux.com
2. **Docker Image:** Pushed to Docker Hub
3. **Resource Requirements:**
   - CPU: 0.5 cores
   - RAM: 512 MB
   - Storage: 10 GB

### Deployment Steps

#### Step 1: Push Docker Image

```bash
# Tag the image
docker tag confiance-frontend:latest rahulb15/confiance-frontend:latest

# Push to Docker Hub
docker push rahulb15/confiance-frontend:latest
```

#### Step 2: Deploy to Flux

1. Go to https://cloud.runonflux.com/apps/register/configure
2. Select **Import** option
3. Upload `deployment/flux/flux-deployment.yml`
4. Configure settings:
   - **App Name:** `confiance-frontend`
   - **Docker Image:** `rahulb15/confiance-frontend:latest`
   - Review resource allocations
5. Click **Deploy**
6. Monitor deployment progress

#### Step 3: Configure Environment

Update environment variables in the Flux dashboard:
- `VITE_API_BASE_URL` - Your backend API URL
- `NODE_ENV` - Set to `production`

#### Step 4: Verify Deployment

- Check application is RUNNING in Flux dashboard
- Access via the provided Flux URL
- Test health endpoint: `http://<flux-url>/health`
- Verify API connectivity

### Updating the Deployment

```bash
# 1. Build new image
docker build -t rahulb15/confiance-frontend:latest .

# 2. Push to Docker Hub
docker push rahulb15/confiance-frontend:latest

# 3. Restart app in Flux dashboard
# Flux will pull the latest image automatically
```

---

## Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (1.24+)
- kubectl configured
- Docker image pushed to registry

### Deploy to Kubernetes

```bash
# Apply all configurations
kubectl apply -f deployment/kubernetes/deployment.yml

# Check deployment status
kubectl get deployments
kubectl get pods
kubectl get services

# Check logs
kubectl logs -f deployment/confiance-frontend

# Scale deployment
kubectl scale deployment confiance-frontend --replicas=5
```

### Components Created

1. **Deployment:** 3 replicas with health checks
2. **Service:** LoadBalancer type
3. **ConfigMap:** Environment configuration
4. **HPA:** Auto-scaling (2-10 pods based on CPU/memory)

### Monitoring

```bash
# Watch pod status
kubectl get pods -w

# Check HPA status
kubectl get hpa

# View events
kubectl get events --sort-by='.lastTimestamp'

# Port forward for local access
kubectl port-forward service/confiance-frontend 8080:80
```

---

## Environment Configuration

### Environment Files

- `.env.development` - Local development
- `.env.production` - Production build
- `.env.example` - Template with all variables

### Available Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint | `http://localhost:8080/api/v1` |
| `VITE_APP_NAME` | Application name | `Confiance Financial Platform` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |
| `VITE_ENABLE_LOGS` | Enable console logs | `true` (dev), `false` (prod) |

### Setting Environment Variables

**Development:**
```bash
# .env.development
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_ENABLE_LOGS=true
```

**Production:**
```bash
# .env.production
VITE_API_BASE_URL=https://api.confiance.com/api/v1
VITE_ENABLE_LOGS=false
```

**Docker:**
```yaml
environment:
  - NODE_ENV=production
  - VITE_API_BASE_URL=https://api.confiance.com/api/v1
```

---

## Troubleshooting

### Build Errors

**Error: Cannot find module**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: Out of memory during build**
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Docker Issues

**Error: docker build fails**
```bash
# Check Docker is running
docker ps

# Clear build cache
docker builder prune -a

# Rebuild without cache
docker build --no-cache -t confiance-frontend:latest .
```

**Error: Container exits immediately**
```bash
# Check logs
docker logs confiance-frontend

# Run interactively to debug
docker run -it confiance-frontend:latest sh
```

### Nginx Issues

**Error: 404 on page refresh**
- This is fixed in `nginx.conf` with `try_files $uri $uri/ /index.html`
- Ensures SPA routing works correctly

**Error: Static assets not loading**
```bash
# Verify files are in container
docker exec confiance-frontend ls -la /usr/share/nginx/html

# Check nginx config
docker exec confiance-frontend cat /etc/nginx/conf.d/default.conf
```

### GitHub Actions Issues

**Error: Docker login failed**
- Verify `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are set
- Check Docker Hub credentials are valid
- Ensure 2FA is disabled or use access token

**Error: Security scan fails**
- Check if image was successfully pushed
- Verify image tag matches
- Review Trivy scan results in Actions logs

### Deployment Issues

**Problem: Application not accessible**
- Check container is running: `docker ps`
- Verify port mapping: `docker port confiance-frontend`
- Check firewall rules
- Review nginx logs: `docker logs confiance-frontend`

**Problem: API calls failing**
- Verify `VITE_API_BASE_URL` is set correctly
- Check CORS settings on backend
- Ensure backend is accessible from frontend
- Check browser console for errors

---

## Best Practices

### Security

1. **Use non-root user** - Dockerfile runs Nginx as non-root
2. **Security headers** - Configured in nginx.conf
3. **HTTPS only** - Use reverse proxy (Cloudflare, nginx) for SSL
4. **Environment variables** - Never commit secrets to Git
5. **Regular updates** - Keep dependencies updated

### Performance

1. **Code splitting** - Configured in vite.config.js
2. **Asset optimization** - Images compressed, lazy loading
3. **Caching** - Nginx caches static assets for 1 year
4. **Gzip compression** - Enabled in nginx.conf
5. **CDN** - Use CDN for static assets in production

### Monitoring

1. **Health checks** - `/health` endpoint configured
2. **Logging** - Nginx access and error logs
3. **Metrics** - Use Prometheus + Grafana
4. **Alerts** - Set up alerts for downtime
5. **APM** - Consider Sentry or similar for error tracking

---

## Quick Reference

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Docker
```bash
docker-compose up -d           # Start container
docker-compose logs -f         # View logs
docker-compose down            # Stop container
docker-compose up -d --build   # Rebuild and start
```

### GitHub Actions
- Push to `main` or `develop` triggers full CI/CD
- Pull requests run build and test only
- Check Actions tab for workflow status

### Deployment
- **Docker Hub:** Images at `rahulb15/confiance-frontend`
- **Flux:** Use `deployment/flux/flux-deployment.yml`
- **Kubernetes:** Use `deployment/kubernetes/deployment.yml`

---

## Summary

### What's Included

✅ Dockerfile (multi-stage, optimized, ARM64 compatible)
✅ GitHub Actions CI/CD pipeline
✅ Docker Compose (production and development)
✅ Nginx configuration
✅ Flux deployment configuration
✅ Kubernetes deployment manifests
✅ Security scanning with Trivy
✅ Health checks and monitoring
✅ Comprehensive documentation

### Current Status

- Build: ✅ Working
- Docker: ✅ Working
- GitHub Actions: ✅ Configured
- Security Scan: ✅ Configured
- Flux Deployment: ✅ Ready
- Kubernetes: ✅ Ready

---

**Version:** 1.0.0
**Last Updated:** January 7, 2026
**Maintained By:** Confiance Platform Team
