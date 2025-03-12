import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import companiesData from "./Cap2Companies.json";

const Cap2Stock = () => {
  const [companies, setCompanies] = useState(companiesData);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isMarketOpenHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Checking- Monday to Friday (day 1-5) and 9am-4pm (9-16)
    return day >= 1 && day <= 5 && hour >= 9 && hour < 16;
  };

  const getStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/fetchStocksData"
      );
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stocks:", error.message);
      setError("Failed to fetch stocks data. Please try again later...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStocks();
    const intervalId = setInterval(() => {
      if (isMarketOpenHours()) {
        getStocks();
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updatedCompanies = companies.map((company) => {
      const matchedStock = stocks.find((s) => s.ticker === company.ticker);
      if (matchedStock) {
        const percentageChange = (
          ((matchedStock.current_price - matchedStock.previous_close) /
            matchedStock.previous_close) *
          100
        ).toFixed(2);

        return {
          ...company,
          price: matchedStock.current_price,
          change: `${percentageChange}%`,
          changeColor: percentageChange > 0 ? "text-green-500" : "text-red-500",
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
  }, [stocks]);

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollSpeed = -1; // Reverse the scrolling direction

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="font-sans p-6 text-white">
      <h2 className="text-3xl font-bold mb-5 flex items-center transition-colors duration-300 hover:text-blue-500">
        Mid Cap Stocks
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill="currentColor"
          className="ml-2 transition-colors duration-300 hover:fill-blue-500"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-hidden gap-5 py-2 whitespace-nowrap rounded-2xl"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[235px] max-h-full rounded-2xl shadow-lg bg-white bg-opacity-10 p-3 bg-[#FFFFFF12] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-bold text-center">
                {company.name}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-sm font-semibold">
                {company.price ? `₹ ${company.price}` : "N/A"}
              </div>
              <div className={`text-sm font-bold ${company.changeColor}`}>
                {company.change ? company.change : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cap2Stock;
