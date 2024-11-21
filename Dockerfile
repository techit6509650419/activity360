# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
