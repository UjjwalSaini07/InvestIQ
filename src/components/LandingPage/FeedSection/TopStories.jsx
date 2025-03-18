import React, { useEffect, useState } from "react";
import Error404 from "../../../assets/Landing/Error404.png";
import Logo from "../../../assets/InvestIQ_Logo.png";

const TopStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_NEWS_APIKEY;
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=stocks OR finance OR markets&language=en&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }

        const data = await response.json();
        setStories(data.articles);
      } catch (err) {
        setError("Failed to load Top Stories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const loadMoreRows = () => {
    setVisibleRows((prev) => prev + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg font-medium text-blue-500">
          Loading Stories...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex items-center justify-center mt-4">
          <h2 className="text-3xl font-bold mb-4">Top Stories</h2>
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
  }

  const storiesToShow = stories.slice(0, visibleRows * 3);

  return (
    <div className="bg-black text-white mb-14 -mt-8 p-6">
      <div className="flex flex-row items-center mb-4 space-x-2 hover:text-blue-500">
        <h1 className="text-3xl font-bold">Top Stories</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {storiesToShow.map((story, index) => (
          <a
            key={index}
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-2xl p-5 flex justify-between items-center shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-start space-x-4">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <img src={Logo} alt="flag" className="w-4 h-4 rounded-full" />
                  <span className="text-sm text-gray-400">
                    {new Date(story.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-400">
                    • {story.source.name}
                  </span>
                </div>
                <h2 className="text-lg font-semibold leading-snug line-clamp-2">
                  {story.title}
                </h2>
                <div className="flex items-center mt-2 space-x-1">
                  <span className="text-red-500">🔥</span>
                  <span className="text-sm text-gray-500">Trending</span>
                </div>
              </div>
            </div>
            <img
              src={story.urlToImage || Error404}
              alt={story.title}
              className="w-20 h-20 rounded-xl object-cover border border-gray-700"
            />
          </a>
        ))}
      </div>
      {storiesToShow.length < stories.length && (
        <div className="flex flex-row text-left mt-2 -mb-6 space-x-1 text-cyan-400 hover:text-blue-500">
          <span
            onClick={loadMoreRows}
            className="text-2sm text-cyan-400 cursor-pointer hover:underline hover:text-blue-700"
          >
            See more stocks-related feed
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default TopStories;
