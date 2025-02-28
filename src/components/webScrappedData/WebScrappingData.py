import requests
from bs4 import BeautifulSoup
import json
import time
import os

# Get the absolute path of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Path to the ticker JSON file
ticker_file_path = os.path.join(current_dir, 'IndianStockTicker.json')

# Path to the output JSON file
output_file = os.path.join(current_dir, 'StocksData.json')

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
try:
    with open(ticker_file_path, 'r') as ticker_file:
        tickers = json.load(ticker_file)
except Exception as e:
    print(f"Error loading ticker file: {e}")
    tickers = []

# Load existing data from the JSON file if it exists
if os.path.exists(output_file) and os.path.getsize(output_file) > 0:
    try:
        with open(output_file, 'r') as json_file:
            all_stock_data = json.load(json_file)
    except json.JSONDecodeError:
        all_stock_data = []
else:
    all_stock_data = []

# Create a dictionary for quick lookup of existing data by ticker
existing_data = {stock["ticker"]: stock for stock in all_stock_data}

batch_size = 20

# Fetch data in batches
for i in range(0, len(tickers), batch_size):
    batch = tickers[i:i + batch_size]
    batch_data = []

    for ticker in batch:
        stock_data = fetch_stock_data(ticker, "NSE")
        if "error" not in stock_data:
            # Overwrite existing data for the same ticker
            existing_data[ticker] = stock_data
        batch_data.append(stock_data)
        time.sleep(2)  # Delay to avoid rate limits

    # Write updated data to the JSON file after every batch
    with open(output_file, 'w') as json_file:
        json.dump(list(existing_data.values()), json_file, indent=4)

    print(f"Batch {i // batch_size + 1} processed")

print(f"All stock data updated in {output_file}")