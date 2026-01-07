# Confiance Financial Platform

Microservices-based financial investment platform built with Spring Boot and Spring Cloud.

**Version:** 3.0 | **Status:** Production Ready ✅

---

## Quick Start

### Local Development

```bash
cd flux
docker-compose -f docker-compose-local.yml up -d
```

Access: http://localhost:8080

### Production Deployment

Upload `flux/flux-production.yml` to https://cloud.runonflux.com

---

## Architecture

**Microservices (8):**
Discovery | Auth | User | Gateway | Investment | Transaction | Portfolio | Notification

**Infrastructure:**
- Local: MySQL & Redis in Docker
- Production: Railway MySQL & Redis + Flux Microservices

**Tech Stack:**
Java 17 | Spring Boot 3.2 | Spring Cloud | MySQL 8 | Redis 7 | Docker | GitHub Actions

---

## Documentation

- **Quick Start:** This file (README.md)
- **Complete Guide:** [PROJECT.md](PROJECT.md) ← Read this for everything!
- **Deployment:** [flux/README.md](flux/README.md)
- **Scripts:** [scripts/README.md](scripts/README.md)

---

## Common Commands

```bash
# Local development
cd flux && docker-compose -f docker-compose-local.yml up -d

# View logs
docker-compose -f docker-compose-local.yml logs -f

# Stop
docker-compose -f docker-compose-local.yml down

# Clean rebuild
./scripts/clean-build.sh

# Push to GitHub
./scripts/push-all-repos.sh
```

---

## Services & Ports

| Service | Port |
|---------|------|
| Eureka | 8761 |
| API Gateway | 8080 |
| Auth | 8081 |
| User | 8082 |
| Notification | 8083 |
| Investment | 8084 |
| Transaction | 8085 |
| Portfolio | 8086 |

---

## API Example

```bash
# Register
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"Test123!","firstName":"Test","lastName":"User"}'

# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"Test123!"}'
```

---

## Need Help?

**Read the complete guide:** [PROJECT.md](PROJECT.md)

Covers:
- Architecture details
- Local development setup
- Production deployment
- CI/CD pipeline
- API documentation
- Troubleshooting
- Best practices

---

**Platform:** Cross-cloud (Flux + Railway)
**License:** Proprietary
**Last Updated:** January 5, 2026