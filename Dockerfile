# Use Node.js v22.14.0
FROM node:22.14.0

# Set working directory for frontend
WORKDIR /app

# Copy frontend files
COPY package.json package-lock.json ./
COPY . .

# Install frontend dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install a lightweight HTTP server to serve the React app
RUN npm install -g serve

# Expose frontend port
EXPOSE 5173

# Start the frontend server using npm run dev
CMD ["npm", "run", "dev"]
