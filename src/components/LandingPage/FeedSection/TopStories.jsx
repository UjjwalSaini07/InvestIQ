import React, { useEffect, useState } from "react";

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
        setError(err.message);
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
      <div className="text-white text-center mt-10">Loading stories...</div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  const storiesToShow = stories.slice(0, visibleRows * 3);

  return (
    <div className="bg-black text-white mb-14 p-6">
      <div className="flex flex-row items-center space-x-2 hover:text-blue-500">
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
                  <img
                    src="https://via.placeholder.com/20"
                    alt="flag"
                    className="w-4 h-4 rounded-full"
                  />
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
              src={story.urlToImage || "https://via.placeholder.com/150"}
              alt={story.title}
              className="w-20 h-20 rounded-xl object-cover border border-gray-700"
            />
          </a>
        ))}
      </div>
      {storiesToShow.length < stories.length && (
        <div className="flex flex-row text-left mt-2 -mb-6 space-x-1 hover:text-blue-500">
          <span
            onClick={loadMoreRows}
            className="text-sm text-gray-400 cursor-pointer hover:underline hover:text-blue-500"
          >
            See more stocks-related feed
          </span>
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
      )}
    </div>
  );
};

export default TopStories;