import React, { useEffect, useState } from "react";
import axios from "axios";

const isMarketOpenHours = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  // Checking- Monday to Friday (day 1-5) and 9am-4pm (9-16)
  return day >= 1 && day <= 5 && hour >= 9 && hour < 16;
};

const fetchStocksData = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          "https://invest-iq-backend.vercel.app/api/v1/fetchStocksData"
          // "http://localhost:5000/api/v1/fetchStocksData"
        );
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
        setError("Failed to fetch stocks data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
    const intervalId = setInterval(() => {
      if (isMarketOpenHours()) {
        fetchStocks();
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className="p-4">Loading stocks data...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Stocks Data</h1>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Ticker</th>
            <th className="border border-gray-300 px-4 py-2">Exchange</th>
            <th className="border border-gray-300 px-4 py-2">Current Price</th>
            <th className="border border-gray-300 px-4 py-2">Previous Close</th>
            <th className="border border-gray-300 px-4 py-2">Market Cap</th>
            <th className="border border-gray-300 px-4 py-2">High</th>
            <th className="border border-gray-300 px-4 py-2">Low</th>
            <th className="border border-gray-300 px-4 py-2">Dividend Yield</th>
            <th className="border border-gray-300 px-4 py-2">Face Value</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 ? (
            stocks.map((stock, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.ticker}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.exchange}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.current_price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.previous_close}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.market_cap}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.high}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.low}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.dividend_yield}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {stock.face_value}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No stocks data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default fetchStocksData;
