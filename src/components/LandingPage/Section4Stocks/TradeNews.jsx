import React, { useEffect } from "react";

const TradingNews = () => {
  useEffect(() => {
    // Create the script element to load TradingView's News widget
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-news.js";
    script.async = true;

    // Setting the widget's configuration as a JSON object
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "isTransparent": false,
      "width": "100%",
      "height": "400",
      "locale": "en"
    });

    // Find the container div by its id and append the script
    const widgetContainer = document.getElementById("tradingview-widget-container");
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    // Cleanup the script when the component unmounts
    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = ""; // Clean up the widget when the component is unmounted
      }
    };
  }, []);

  return (
    <div>
      <h1>Finance News</h1>
      <div
        id="tradingview-widget-container"
        style={{
          width: "100%",
          height: "400px",
          border: "1px solid #ddd",
          marginTop: "20px",
        }}
      >
        {/* The TradingView widget will be injected here */}
      </div>
    </div>
  );
};

export default TradingNews;
