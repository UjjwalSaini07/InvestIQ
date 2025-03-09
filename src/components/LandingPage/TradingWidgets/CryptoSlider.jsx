import React, { useEffect } from "react";

const CryptoSlider = () => {
  useEffect(() => {
    const widgetContainer = document.querySelector(".tradingview-widget-container__widget-2");
    if (widgetContainer && widgetContainer.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          { description: "Solana", proName: "COINBASE:SOLUSD" },
          { description: "Dogecoin", proName: "BINANCE:DOGEUSDT" },
          { description: "Tether", proName: "BITKUB:USDTTHB" },
          { description: "XRP", proName: "CRYPTOCAP:XRP" },
          { description: "BNB", proName: "CRYPTOCAP:BNB" },
          { description: "Cardano", proName: "COINBASE:ADAUSD" },
          { description: "Pi Network", proName: "OKX:PIUSD" },
          { description: "Leo Token", proName: "BITFINEX:LEOUSD" },
          { description: "Trump", proName: "MEXC:TRUMPUSDT" },
          { description: "SEI", proName: "COINBASE:SEIUSD" },
          { description: "Stacks", proName: "COINBASE:STXUSD" },
          { description: "The Graph", proName: "COINBASE:GRTUSD" },
          { description: "World Coin", proName: "OKX:WLDUSD" },
          { description: "Chain Link", proName: "BINANCE:LINKUSDT" },
          { description: "OP", proName: "BINANCE:OPUSDT" },
          { description: "GoldUSD", proName: "PYTH:XAUUSD" },
          { description: "ONDO", proName: "KUCOIN:ONDOUSDT" },
          { description: "SUI", proName: "CRYPTO:SUIUSD" },
          { description: "LiteCoin", proName: "BINANCE:LTCUSDT" },
          { description: "Hashgragh", proName: "BINANCE:HBARUSDT" },
          { description: "Near", proName: "BINANCE:NEARUSDT" },
          { description: "Gala", proName: "BINANCE:GALAUSDT" },
          { description: "Tron", proName: "BINANCE:TRXUSDT" }
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
    <div className="flex justify-center items-center mb-5">
      <div className="tradingview-widget-container rounded-xl overflow-hidden shadow-lg" style={{ width: "100%" }}>
        <div className="tradingview-widget-container__widget-2"></div>
      </div>
    </div>
  );
};

export default CryptoSlider;
