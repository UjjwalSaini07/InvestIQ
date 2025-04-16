# Python setup
FROM python:3.13.3-slim AS python-scraping

# Set working directory
WORKDIR /app

# Copy Python files
COPY utils/ScrapedData/DataWebScrapping.py /app/
COPY utils/ScrapedData/requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Node.js setup for backend
FROM node:22.14.0

# Set working directory for backend
WORKDIR /app

# Copy Node.js backend files
COPY package.json package-lock.json /app/
COPY . /app/

# Install Node.js dependencies
RUN npm install

# Copy the Python scraper into the Node.js environment
COPY --from=python-scraping /app /python-scraping

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "run", "dev"]
