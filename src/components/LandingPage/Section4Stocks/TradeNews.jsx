import React, { useState, useEffect } from "react";

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_APIKEY; // Use process.env.REACT_APP_NEWS_APIKEY for Create React App
        const url = `https://newsapi.org/v2/everything?q=trading+stocks+bitcoin&from=us,in&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setNews(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="news-container">
      <h1 className="text-xl font-bold">Trading Stocks & Bitcoin News</h1>
      <ul className="space-y-4">
        {news.map((article, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <h2 className="font-semibold">{article.title}</h2>
            </a>
            <p className="text-gray-600">{article.description}</p>
            <span className="text-sm text-gray-500">
              {article.source.name} - {new Date(article.publishedAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
