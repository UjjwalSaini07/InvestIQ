import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import companyLogos from "../../common/Companies_Logo.json";

const StockGainerLoser = () => {
  const [stocks, setStocks] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/fetchStocksData"
      );
      const data = response.data;

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received from API");
      }

      // Calculate percentage change and classify gainers and losers
      const updatedStocks = data.map((stock) => {
        const percentageChange =
          ((stock.current_price - stock.previous_close) /
            stock.previous_close) *
          100;
        return { ...stock, percentage_change: percentageChange };
      });

      const sortedGainers = updatedStocks
        .filter((stock) => stock.percentage_change > 0)
        .sort((a, b) => b.percentage_change - a.percentage_change)
        .slice(0, 6);

      const sortedLosers = updatedStocks
        .filter((stock) => stock.percentage_change < 0)
        .sort((a, b) => a.percentage_change - b.percentage_change)
        .slice(0, 6);

      setStocks(updatedStocks);
      setGainers(sortedGainers);
      setLosers(sortedLosers);
    } catch (err) {
      console.error("Error fetching stock data:", err);
      setError("Failed to load stock data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const renderStock = (stock) => {
    const matchingLogo = companyLogos.CompaniesLogo.find(
      (logo) => logo.ticker === stock.ticker
    );

    return (
      <div key={stock.ticker} className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={
              matchingLogo
                ? matchingLogo.logo
                : "https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1746057600&v=beta&t=9GSzc1PGYMupEZiyJnnSOx7ULZSd3vrYLxZ1VJ8YO_4"
            }
            alt={stock.ticker}
            className="w-12 h-12 object-contain rounded-full"
          />
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-semibold text-lg text-white ml-2">
                {stock.ticker}
              </p>
              <p className="text-xs text-gray-400 ml-2">{stock.exchange}</p>
            </div>
            {stock.percentage_change >= 0 ? (
              <div className="text-green-400 font-bold ml-2">
                <TrendingUpIcon />
              </div>
            ) : (
              <div className="text-red-400 font-bold ml-2">
                <TrendingDownIcon />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`px-4 py-1 rounded-full font-semibold text-sm ${
              stock.percentage_change >= 0 ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {stock.percentage_change.toFixed(2)}%
          </div>
          <p className="text-white font-bold ml-4">
            ₹{stock.current_price.toFixed(2)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 text-white -mt-3 mb-4">
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-row items-center">
            <h2 className="text-2xl font-bold mb-4">Stocks Gainer</h2>
            <div className="ml-2 -mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
          <div className="shadow divide-y divide-gray-700">
            {gainers.length > 0 ? (
              gainers.map(renderStock)
            ) : (
              <p className="text-center p-4 text-gray-400">
                No gainers available
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center">
            <h2 className="text-2xl font-bold mb-4">Stocks Losser</h2>
            <div className="ml-2 -mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
          <div className="shadow divide-y divide-gray-700">
            {losers.length > 0 ? (
              losers.map(renderStock)
            ) : (
              <p className="text-center p-4 text-gray-400">
                No losers available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockGainerLoser;
