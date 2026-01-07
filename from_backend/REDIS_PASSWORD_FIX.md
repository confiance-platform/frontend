# Redis Password Configuration Fix

**Date:** January 6, 2026
**Issue:** Services connecting to localhost:6379 instead of Railway Redis
**Root Cause:** Missing Redis password support in application.yml files

---

## What Was Fixed

### Services Updated (5 total)

All services now support Railway Redis with password authentication:

1. **auth-service** ✅
2. **user-service** ✅
3. **api-gateway** ✅
4. **investment-service** ✅
5. **notification-service, transaction-service, portfolio-service** (don't use Redis)

### Changes Made

**Before (BROKEN - No password support):**
```yaml
redis:
  host: ${REDIS_HOST:localhost}  # Wrong env var name
  port: 6379                      # Hardcoded port
  # Missing password!
```

**After (FIXED - Railway Redis support):**
```yaml
redis:
  host: ${SPRING_REDIS_HOST:localhost}
  port: ${SPRING_REDIS_PORT:6379}
  password: ${SPRING_REDIS_PASSWORD:}  # ✅ Railway password support!
  timeout: 60000
```

---

## What You Need to Do Next

### Step 1: Commit Changes to Git

```bash
cd /Users/rahul/Library/CloudStorage/OneDrive-Personal/Work/confiance/confiance-backend

# Check what changed
git status

# Add all changed application.yml files
git add auth-service/src/main/resources/application.yml
git add user-service/src/main/resources/application.yml
git add api-gateway/src/main/resources/application.yml
git add investment-service/src/main/resources/application.yml

# Commit
git commit -m "Fix: Add Redis password support for Railway Redis connection

- Added SPRING_REDIS_PASSWORD environment variable support
- Standardized Redis env vars to use SPRING_REDIS_* prefix
- Fixed hardcoded Redis port to use SPRING_REDIS_PORT
- Affected services: auth, user, api-gateway, investment"

# Push to main branch
git push origin main
```

### Step 2: Rebuild Docker Images

Each service needs to be rebuilt with the updated application.yml files.

**Option A: Use GitHub Actions (Recommended)**

Your GitHub Actions workflows will automatically rebuild when you push:
```bash
# Already done in Step 1!
# GitHub Actions will trigger automatically
```

Wait for GitHub Actions to complete, then check Docker Hub:
- https://hub.docker.com/r/rahulb15/confiance-auth-service
- https://hub.docker.com/r/rahulb15/confiance-user-service
- https://hub.docker.com/r/rahulb15/confiance-api-gateway
- https://hub.docker.com/r/rahulb15/confiance-investment-service

**Option B: Manual Rebuild (If needed)**

If GitHub Actions doesn't auto-rebuild, use the scripts:

```bash
cd /Users/rahul/Library/CloudStorage/OneDrive-Personal/Work/confiance/confiance-backend

# Clean build all services
./scripts/clean-build.sh

# Push all images to Docker Hub
./scripts/push-all-repos.sh
```

### Step 3: Redeploy on Flux

After Docker images are rebuilt and pushed:

1. **Delete old Flux application** (if exists):
   - Go to https://cloud.runonflux.com/apps
   - Delete the existing application

2. **Upload new flux-production.yml**:
   ```bash
   # File location:
   /Users/rahul/Library/CloudStorage/OneDrive-Personal/Work/confiance/confiance-backend/flux/flux-production.yml
   ```

3. **Deploy on Flux**:
   - Upload `flux/flux-production.yml` to Flux
   - Flux will pull the NEW Docker images with Redis password support
   - Services will now connect to Railway Redis using password

---

## Verification

After deployment, check service logs on Flux:

**Before (BROKEN):**
```
Unable to connect to localhost/<unresolved>:6379
Connection refused: localhost/127.0.0.1:6379
```

**After (WORKING):**
```
Connected to Redis at hopper.proxy.rlwy.net:36629
Redis health check successful
```

---

## Summary

**The Problem:**
Your application.yml files didn't support `SPRING_REDIS_PASSWORD` environment variable. Even though your `flux-production.yml` had the Railway Redis credentials, Spring Boot services couldn't read the password.

**The Solution:**
1. ✅ Added `password: ${SPRING_REDIS_PASSWORD:}` to all services
2. ✅ Standardized environment variable names
3. ✅ Made port configurable via `SPRING_REDIS_PORT`

**Your Answer:** YES! The issue was exactly what you suspected - you needed to update application.yml and push to git/docker.

**Next Steps:**
1. Git commit and push (Step 1)
2. Wait for GitHub Actions to rebuild Docker images (Step 2)
3. Redeploy on Flux with updated images (Step 3)

---

**Files Modified:**
- `auth-service/src/main/resources/application.yml`
- `user-service/src/main/resources/application.yml`
- `api-gateway/src/main/resources/application.yml`
- `investment-service/src/main/resources/application.yml`

**Railway Redis Credentials (from flux-production.yml):**
- Host: hopper.proxy.rlwy.net
- Port: 36629
- Password: WsSbyoJdbPkJEwwxdUwrAIIGXvlEzYjz
