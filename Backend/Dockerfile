# Python setup
FROM python:3.13.3-slim AS python-scraping

# working directory
WORKDIR /app

# Copy Python files
COPY utils/ScrapedData/DataWebScrapping.py ./
COPY utils/ScrapedData/requirements.txt ./

# Install Python dependencies
RUN pip install -r requirements.txt

# Node.js setup for backend
FROM node:22.14.0

# working directory for backend
WORKDIR /app

# Copy Node.js backend files
COPY package.json package-lock.json ./
COPY . .

# Install Node.js dependencies
RUN npm install

# Copy the Python scraper into the Node.js environment
COPY --from=python-scraping /app /python-scraping

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "run", "dev"]
