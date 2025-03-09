import React, { useEffect } from "react";

const StockSlider = () => {
  useEffect(() => {
    const widgetContainer = document.querySelector(".tradingview-widget-container__widget");
    if (widgetContainer && widgetContainer.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: "TSLA", proName: "NASDAQ:TSLA" },
          { description: "NVDA", proName: "NASDAQ:NVDA" },
          { description: "AAPL", proName: "NASDAQ:AAPL" },
          { description: "AMZN", proName: "NASDAQ:AMZN" },
          { description: "META", proName: "NASDAQ:META" },
          { description: "MSTR", proName: "NASDAQ:MSTR" },
          { description: "MSFT", proName: "NASDAQ:MSFT" },
          { description: "AVGO", proName: "NASDAQ:AVGO" },
          { description: "GOOGL", proName: "NASDAQ:GOOGL" },
          { description: "NFLX", proName: "NASDAQ:NFLX" },
          { description: "ALIBABA", proName: "NYSE:BABA" },
          { description: "SOFI", proName: "NASDAQ:SOFI" },
          { description: "WALMART", proName: "NYSE:WMT" },
          { description: "JPMRGN", proName: "NYSE:JPM" },
          { description: "NIKE", proName: "NYSE:NKE" },
          { description: "ADOBE", proName: "NASDAQ:ADBE" },
          { description: "MCD", proName: "NYSE:MCD" },
          { description: "ORCL", proName: "NYSE:ORCL" },
          { description: "MONGODB", proName: "NASDAQ:MDB" },
          { description: "UNITY", proName: "NYSE:U" },
          { description: "Starbucks", proName: "NASDAQ:SBUX" },
          { description: "CISCO", proName: "NASDAQ:CSCO" },
          { description: "AMEXP", proName: "NYSE:AXP" },
          { description: "ROYAL", proName: "NYSE:RCL" },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "regular",
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
    <div className="tradingview-widget-container rounded-xl overflow-hidden shadow-lg py-6">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default StockSlider;
