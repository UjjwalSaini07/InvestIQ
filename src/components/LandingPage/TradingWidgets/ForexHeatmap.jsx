import React, { useEffect } from "react";

const ForexHeatmap = () => {
  useEffect(() => {
    const widgetContainer = document.querySelector(".tradingview-widget-container__widget-1");
    if (widgetContainer && widgetContainer.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: 1400,
        height: 600,
        currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "NZD", "NOK", "DKK", "INR", "ARS"],
        isTransparent: false,
        colorTheme: "dark",
        locale: "en",
      });
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-6">
      <div className="tradingview-widget-container rounded-xl overflow-hidden shadow-lg">
        <div className="tradingview-widget-container__widget-1"></div>
      </div>
    </div>
  );
};

export default ForexHeatmap;
