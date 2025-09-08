import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const CryptoGainerLoser = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "inr",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );

        const sortedByChange = data.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );

        setGainers(sortedByChange.slice(0, 7));
        setLosers(sortedByChange.slice(-7).reverse());
      } catch (error) {
        console.error("Error fetching coin data:", error);
        setError("Failed to load Crypto data. Please try again later...");
      }
    };

    fetchCoinData();
    const interval = setInterval(fetchCoinData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const renderCoin = (coin) => (
    <div key={coin.id} className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <img src={coin.image} alt={coin.name} className="w-12 h-12" />
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold ml-1 text-xl text-white">{coin.name}</p>
            <p className="text-xs ml-1 text-gray-400">
              {coin.symbol.toUpperCase()}
            </p>
          </div>
          {coin?.price_change_percentage_24h >= 0 ? (
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
            coin?.price_change_percentage_24h >= 0
              ? "bg-green-500 text-white group-hover:bg-green-400"
              : "bg-red-500 text-white group-hover:bg-red-400"
          }`}
        >
          {coin?.price_change_percentage_24h?.toFixed(2)}%
        </div>
        <p className="text-white font-bold ml-6">
          ₹ {coin?.current_price?.toFixed(3)}
        </p>
      </div>
    </div>
  );

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
              Crypto-Coins Gainer/Losser Data
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
              <h2 className="text-2xl font-bold mb-4">Crypto Gainer</h2>
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

            <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
              {gainers.length > 0 ? (
                gainers.map((coin) => renderCoin(coin))
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
              <h2 className="text-2xl font-bold mb-4">Crypto Loser</h2>
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

            <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
              {losers.length > 0 ? (
                losers.map((coin) => renderCoin(coin))
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

export default CryptoGainerLoser;
