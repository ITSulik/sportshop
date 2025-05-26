# Step 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies cleanly
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest of the app and build it
COPY . .
RUN npm run build

# Step 2: Production stage (Nginx to serve build)
FROM nginx:alpine AS production

# Copy built files from previous stage to Nginx HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
