FROM node:16.15-alpine AS builder
#ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json ./
RUN npm install
# Copy app files
COPY . ./
# Build the app
RUN ls -la /app/node_modules/.bin
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.6-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
