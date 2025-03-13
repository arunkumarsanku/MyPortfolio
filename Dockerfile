# Step 1: Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the application for production
RUN npm run build

# Step 2: Production Stage with Distroless + Caddy
FROM gcr.io/distroless/static:nonroot

WORKDIR /app

# Copy built frontend files
COPY --from=build /app/dist /app

# Copy Caddy (lightweight web server)
COPY --from=caddy:2.7.4-alpine /usr/bin/caddy /usr/bin/caddy

# Expose port 80
EXPOSE 80

# Serve files using Caddy
CMD ["/usr/bin/caddy", "file-server", "--root", "/app", "--listen", ":80"]
