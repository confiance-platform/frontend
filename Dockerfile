# Multi-stage build for React/Vite Frontend (ARM64 Compatible)

# Stage 1: Build the application
FROM node:20-alpine AS build
WORKDIR /app

# --- Build-time configuration ---
# Override the API base URL at build time with:
#   docker build --build-arg VITE_API_BASE_URL=http://host.docker.internal:8080/api/v1 ...
# Vite bakes VITE_* env vars into the bundle at build time, so the value must
# be supplied here (you cannot change it at container runtime).
ARG VITE_API_BASE_URL=http://localhost:8080/api/v1
ARG VITE_APP_NAME="Confiance Financial Platform"
ARG VITE_APP_VERSION=1.0.0
ARG VITE_ENABLE_LOGS=false
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL \
    VITE_APP_NAME=$VITE_APP_NAME \
    VITE_APP_VERSION=$VITE_APP_VERSION \
    VITE_ENABLE_LOGS=$VITE_ENABLE_LOGS

# Copy package manifests first (better layer caching)
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies) needed for the Vite build
RUN npm ci

# Copy source
COPY . .

# Build the application (Vite copies /public into /dist automatically).
# We disable loading .env.production so the ARG/ENV values above win.
RUN rm -f .env.production && npm run build

# Stage 2: Production image with Nginx
FROM nginx:1.25-alpine

# Drop default server block and install our hardened one
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built SPA (dist already contains the merged /public assets).
# Source files may have restrictive macOS permissions (700), which Docker
# preserves and which would make the unprivileged `nginx` worker user unable
# to read them (-> HTTP 403 on every asset). Normalise to world-readable.
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R a+rX /usr/share/nginx/html \
    && find /usr/share/nginx/html -type d -exec chmod 755 {} + \
    && find /usr/share/nginx/html -type f -exec chmod 644 {} +

# Run nginx as non-root (nginx:1.25-alpine already has the nginx user).
# The alpine image's nginx master still binds port 80 via capabilities.
EXPOSE 80

# Use 127.0.0.1 not localhost — wget in alpine resolves localhost to ::1,
# but nginx `listen 80` binds IPv4 only, so IPv6 probes get ECONNREFUSED.
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
