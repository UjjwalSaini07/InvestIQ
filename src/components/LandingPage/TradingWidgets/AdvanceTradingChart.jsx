import React, { useEffect, useRef, useState, memo } from 'react';

function AdvanceTradingChart() {
  const container = useRef();
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setHeight(windowHeight - 100);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "CRYPTO:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "save_image": false,
        "watchlist": [
          "BITSTAMP:ETHUSD",
          "BINANCE:DOGEUSDT",
          "BITSTAMP:XRPUSD",
          "COINBASE:SOLUSD",
          "BINANCE:LINKUSDT",
          "BINANCE:LTCUSDT",
          "COINBASE:ADAUSD",
          "BINANCE:ATOMUSDT",
          "BINANCE:BNBUSD",
          "COINBASE:MATICUSD",
          "MEXC:PIUSDT",
          "COINBASE:SUIUSD",
          "BINANCE:ALGOUSDT",
          "BINANCE:ICPUSDT"
        ],
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="relative w-full bg-black"
      ref={container}
      style={{ height: `${height}px` }}
    >
      <div
        className="tradingview-widget-container__widget w-80% h-full"
      ></div>
      <div className="tradingview-widget-copyright mt-2 text-center text-white">
      </div>
    </div>
  );
}

export default memo(AdvanceTradingChart);