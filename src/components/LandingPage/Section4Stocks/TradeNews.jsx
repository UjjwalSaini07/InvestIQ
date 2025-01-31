import React, { useState, useEffect } from "react";

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_APIKEY;
        const url = `https://newsapi.org/v2/everything?q=trading+stocks+bitcoin&from=us,in&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Filter articles to only include those with images
        const filteredNews = data.articles?.filter(article => article.urlToImage) || [];
        setNews(filteredNews);
      } catch (err) {
        setError(err.message);
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
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-700">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 mt-4 text-lg">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="max-w-7xl mx-auto px-7 py-10">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          📰 Latest News on{" "}
          <span className="text-blue-500">Stocks & Bitcoin</span>
        </h1>

        {news.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No articles with images available at the moment.
          </div>
        ) : (
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              className="p-3 mr-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
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

            {/* News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {displayedNews.map((article, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 flex flex-col h-full"
                >
                  <div className="relative">
                    <img
                      src={article.urlToImage}
                      className="w-full h-52 object-cover"
                      alt={article.title}
                    />
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-br-lg shadow-md">
                      {article.source.name}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-gray-900 text-white text-xs font-bold uppercase py-1 px-3 rounded-tl-lg shadow-md">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h5 className="text-white text-lg font-semibold">
                      {article.title}
                    </h5>
                    <p className="text-gray-400 mt-2 text-sm flex-grow">
                      {article.description || "No description available."}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              className="p-3 ml-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
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

export default NewsComponent;
