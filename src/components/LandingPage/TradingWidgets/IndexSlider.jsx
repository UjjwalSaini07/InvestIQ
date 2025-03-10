import React, { useEffect } from "react";

const IndexSlider = () => {
  useEffect(() => {
    const widgetContainer = document.querySelector(".tradingview-widget-container__widget-4");
    
    if (widgetContainer && widgetContainer.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.textContent = JSON.stringify({
        symbols: [
          { description: "BTC", proName: "INDEX:BTCUSD" },
          { description: "USDT", proName: "CRYPTOCAP:USDT.D" },
          { description: "US100", proName: "CAPITALCOM:US100" },
          { description: "NDX 100", proName: "NASDAQ:NDX" },
          { description: "US USD index", proName: "CAPITALCOM:DXY" },
          { description: "NASDQ Composite", proName: "NASDAQ:IXIC" },
          { description: "Germany 40CFD", proName: "FOREXCOM:GER40" },
          { description: "US 500 Index", proName: "PEPPERSTONE:US500" },
          { description: "Germany 30", proName: "OANDA:DE30EUR" },
          { description: "EURO US", proName: "FX:EURUSD" },
          { description: "POUND US", proName: "FX:GBPUSD" },
          { description: "AUD USD", proName: "OANDA:AUDUSD" },
          { description: "NZD JPY", proName: "OANDA:NZDJPY" },
          { description: "EUR CAD", proName: "OANDA:EURCAD" },
          { description: "GBP NZD", proName: "OANDA:GBPNZD" },
          { description: "EURO SWISS", proName: "FX:EURCHF" },
          { description: "USD THB", proName: "OANDA:USDTHB" },
          { description: "USD INR", proName: "FX_IDC:USDINR" },
          { description: "USD SGD", proName: "OANDA:USDSGD" },
          { description: "USD ZAR", proName: "OANDA:USDZAR" },
          { description: "USD MXN", proName: "OANDA:USDMXN" },
          { description: "AUD HKD", proName: "OANDA:AUDHKD" },
          { description: "FED FUNDS", proName: "FRED:FEDFUNDS" },
          { description: "US INTR", proName: "ECONOMICS:USINTR" },
          { description: "WM2", proName: "FRED:WM2NS" },
          { description: "QQQ TRUST", proName: "NASDAQ:QQQ" },
          { description: "RUSSEL", proName: "AMEX:IWM" }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "dark",
        locale: "en"
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
      <div className="tradingview-widget-container__widget-4"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default IndexSlider;
