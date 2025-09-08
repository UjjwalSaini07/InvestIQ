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

  const isMarketOpenHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Checking- Monday to Friday (day 1-5) and 9am-4pm (9-16)
    return day >= 1 && day <= 5 && hour >= 9 && hour < 16;
  };

  const fetchStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://invest-iq-backend.vercel.app/api/v1/fetchStocksData"
        // "http://localhost:5000/api/v1/fetchStocksData"
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
    const intervalId = setInterval(() => {
      if (isMarketOpenHours()) {
        fetchStocks();
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
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
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-lg font-medium text-blue-500">Loading...</p>
        </div>
      )}
      {error ? (
        <>
          <div className="flex items-center justify-center ">
            <h2 className="text-3xl font-bold mb-4">
              Stocks Gainer/Losser Data
            </h2>
          </div>

          <div className="flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600 text-white p-4 rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="flex-shrink-0 mr-4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                className="w-12 h-12"
              >
                <circle style={{ fill: "#E04F5F" }} cx="256" cy="256" r="256" />
                <g>
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M147.592,316v-34.496h-61.48v-16.728l55.416-84.688h30.32v81.968h17.568v19.448h-17.568V316H147.592
        z M147.592,262.056V225.04c0-7.736,0.208-15.68,0.832-23.632h-0.832c-4.176,8.576-7.736,15.472-11.912,23l-24.88,37.224
        l-0.208,0.416h37V262.056z"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M298.976,247.208c0,43.696-17.144,71.088-49.552,71.088c-31.368,0-48.096-28.44-48.304-69.832
        c0-42.24,17.984-70.672,49.768-70.672C283.712,177.784,298.976,207.056,298.976,247.208z M227.048,248.464
        c-0.208,33.04,8.992,50.176,23.208,50.176c15.056,0,23-18.4,23-51.016c0-31.576-7.52-50.184-23-50.184
        C236.456,197.44,226.832,214.376,227.048,248.464z"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M371.736,316v-34.496h-61.48v-16.728l55.416-84.688h30.32v81.968h17.568v19.448h-17.568V316H371.736
        z M371.736,262.056V225.04c0-7.736,0.208-15.68,0.832-23.632h-0.832c-4.176,8.576-7.736,15.472-11.912,23l-24.88,37.224
        l-0.208,0.416h37V262.056z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Oops! Something went wrong.</h3>
              <p className="mt-2 text-sm">{error}</p>
            </div>
          </div>
        </>
      ) : (
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
                <div className="flex items-center justify-center">
                  <p className="w-[25rem] text-center p-3 text-gray-300 rounded-2xl shadow-lg font-semibold text-lg border border-gray-600">
                    🚫 No Gainer Available
                  </p>
                </div>
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
                <div className="flex items-center justify-center">
                  <p className="w-[25rem] text-center p-3 text-gray-300 rounded-2xl shadow-lg font-semibold text-lg border border-gray-600">
                    🚫 No Losser Available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockGainerLoser;
