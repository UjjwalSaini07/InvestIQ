import React, { useState, useEffect } from "react";
import axios from "axios";
import Error404 from "../../../assets/Landing/Error404.png";

const TradeNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news from API...");
        const response = await axios.get("https://invest-iq-backend.vercel.app/api/v1/news");
  
        if (!response.data || typeof response.data !== "object") {
          throw new Error("Invalid response format");
        }
  
        setNews(response.data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err); // Log full error
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);
  

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < news.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedNews = news.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg font-medium text-blue-500">Loading News...</p>
      </div>
    );

  if (error)
    return (
      <>
        <div className="flex items-center justify-center mt-3">
          <h2 className="text-3xl font-bold mb-4">Crypto & Stocks News</h2>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600 text-white p-4 rounded-2xl shadow-lg max-w-md mx-auto">
          <h3 className="text-lg font-bold">Oops! Something went wrong.</h3>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      </>
    );

  return (
    <div className="bg-black flex flex-col">
      <div className="max-w-7xl mx-auto px-7 py-10 mb-12">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
          Latest <span className="text-blue-500">Stocks & Crypto</span> News
        </h1>
        {news.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">No articles available.</div>
        ) : (
          <div className="flex items-center justify-between">
            <button
              className="p-3 mr-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              &larr;
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {displayedNews.map((article, index) => (
                <div key={index} className="bg-black backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all transform hover:scale-100 hover:shadow-blue-500/50 flex flex-col h-full border border-gray-800">
                  <div className="relative">
                    <img
                      src={article.urlToImage || Error404}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = Error404;
                      }}
                      className="w-full h-52 object-cover rounded-t-2xl"
                      alt={article.title || "No Image Available"}
                    />
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-br-lg shadow-md">
                      {article.source.name}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-gray-800/80 text-white text-xs font-bold uppercase py-1 px-3 rounded-tl-lg shadow-md">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h5 className="text-white text-lg font-semibold leading-tight">{article.title}</h5>
                    <p className="text-gray-400 mt-3 text-sm flex-grow">{article.description || "No description available."}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-auto bg-blue-500 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-600 transition font-semibold tracking-wide shadow-lg">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="p-3 ml-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={(currentPage + 1) * itemsPerPage >= news.length}
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeNews;
