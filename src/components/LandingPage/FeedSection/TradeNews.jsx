import React, { useState, useEffect } from "react";
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
        const apiKey = import.meta.env.VITE_NEWS_APIKEY;
        if (!apiKey) {
          throw new Error("API Key is missing. Please check your environment configuration.");
        }

        const url = `https://newsapi.org/v2/everything?q=trading+stocks+bitcoin&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setNews(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const apiKey = import.meta.env.VITE_NEWS_APIKEY;
  //       const url = `https://newsapi.org/v2/everything?q=trading+stocks+bitcoin&from=us,in&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.statusText}`);
  //       }

  //       const data = await response.json();
  //       setNews(data.articles || []);
  //     } catch (err) {
  //       setError("Failed to load News. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);

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
    console.log(error);
    return (
      <>
        <div className="flex items-center justify-center mt-3">
          <h2 className="text-3xl font-bold mb-4">Crypto & Stocks News</h2>
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
    );

  return (
    <div className="bg-black flex flex-col">
      <div className="max-w-7xl mx-auto px-7 py-10 mb-12">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
          Latest <span className="text-blue-500">Stocks & Crypto</span> News
        </h1>

        {news.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No articles available.
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <button
              className="p-3 mr-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 1-.5.5H2.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {displayedNews.map((article, index) => (
                <div
                  key={index}
                  className="bg-black backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all transform hover:scale-100 hover:shadow-blue-500/50 flex flex-col h-full border border-gray-800"
                >
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
                    <h5 className="text-white text-lg font-semibold leading-tight">
                      {article.title}
                    </h5>
                    <p className="text-gray-400 mt-3 text-sm flex-grow">
                      {article.description || "No description available."}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-blue-500 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-600 transition font-semibold tracking-wide shadow-lg"
                    >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793L8.146 3.354a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeNews;
