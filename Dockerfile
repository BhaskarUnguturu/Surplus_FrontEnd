# Stage 1: Build the Angular app
FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy the built Angular app to Nginx's default html directory
COPY --from=build-stage /app/dist/your-angular-app-name /usr/share/nginx/html

# Expose the port on which Nginx will run
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
