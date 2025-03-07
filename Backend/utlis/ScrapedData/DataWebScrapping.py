import requests
from bs4 import BeautifulSoup
import json
import time
import os
from pymongo import MongoClient

# MongoDB Configuration
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "investiqdb"
COLLECTION_NAME = "Stocks"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

current_dir = os.path.dirname(os.path.abspath(__file__))

def fetch_stock_data(ticker, exchange):
    url = f'https://www.screener.in/company/{ticker}/'
    response = requests.get(url)
    if response.status_code != 200:
        return {"error": f"Failed to fetch data. Status code: {response.status_code}"}

    soup = BeautifulSoup(response.text, 'html.parser')

    def get_text(selector):
        element = soup.select_one(selector)
        return element.text.strip() if element else None

    def parse_numeric(value):
        try:
            return float(value.replace(',', '').strip('₹').strip('%')) if value else None
        except ValueError:
            return None

    try:
        market_cap = get_text("li:-soup-contains('Market Cap') .number")
        current_price = get_text("li:-soup-contains('Current Price') .number")
        high_low = get_text("li:-soup-contains('High / Low') .nowrap.value")
        stock_pe = get_text("li:-soup-contains('Stock P/E') .number")
        dividend_yield = get_text("li:-soup-contains('Dividend Yield') .number")
        roce = get_text("li:-soup-contains('ROCE') .number")
        roe = get_text("li:-soup-contains('ROE') .number")
        face_value = get_text("li:-soup-contains('Face Value') .number")

        high, low = None, None
        if high_low and ' / ' in high_low:
            high, low = map(parse_numeric, high_low.split(' / '))

        # Fetch Previous Close data from Google Finance
        google_finance_url = f'https://www.google.com/finance/quote/{ticker}:{exchange}'
        google_response = requests.get(google_finance_url)
        google_soup = BeautifulSoup(google_response.text, 'html.parser')
        previous_close = None

        previous_close_element = google_soup.select_one("div.gyFHrc div.P6K39c")
        if previous_close_element:
            previous_close = parse_numeric(previous_close_element.text)

        return {
            "ticker": ticker,
            "exchange": exchange,
            "market_cap": parse_numeric(market_cap),
            "current_price": parse_numeric(current_price),
            "previous_close": previous_close,
            "high": high,
            "low": low,
            "stock_pe": parse_numeric(stock_pe),
            "dividend_yield": parse_numeric(dividend_yield),
            "roce": parse_numeric(roce),
            "roe": parse_numeric(roe),
            "face_value": parse_numeric(face_value)
        }

    except Exception as e:
        return {"error": f"Failed to parse stock data: {e}"}

# Load tickers from file
ticker_file_path = os.path.join(current_dir, 'IndianStockTicker.json')

try:
    with open(ticker_file_path, 'r') as ticker_file:
        tickers = json.load(ticker_file)
except Exception as e:
    print(f"Error loading ticker file: {e}")
    tickers = []

batch_size = 20

# Fetch data in batches
for i in range(0, len(tickers), batch_size):
    batch = tickers[i:i + batch_size]

    for ticker in batch:
        stock_data = fetch_stock_data(ticker, "NSE")
        if "error" not in stock_data:
            collection.update_one(
                {"ticker": stock_data["ticker"]},  # Find document by ticker
                {"$set": stock_data},  # Update with new data
                upsert=True  # Insert if not found
            )
        time.sleep(2)  # Delay to avoid rate limits

    print(f"Batch {i // batch_size + 1} processed")

print("All stock data updated in MongoDB.")

# Close MongoDB connection
client.close()
