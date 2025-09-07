import React, { useEffect, useState, useRef, memo } from 'react';

function SymbolOverviewChart() {
  const container = useRef();
  const [height, setHeight] = useState(window.innerHeight - 100);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = '';

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            ["Apple", "AAPL|1D"],
            ["Google", "GOOGL|1D"],
            ["Microsoft", "MSFT|1D"],
            ["NASDAQ:TSLA|1D"],
            ["NASDAQ:NVDA|1D"],
            ["NASDAQ:AMZN|1D"],
            ["NASDAQ:META|1D"],
            ["NASDAQ:AMD|1D"],
            ["NASDAQ:GOOGL|1D"],
            ["NYSE:BABA|1D"],
            ["NASDAQ:PYPL|1D"],
            ["NYSE:JPM|1D"]
          ],
          "chartOnly": false,
          "width": "46%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": true,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "headerFontSize": "medium",
          "gridLineColor": "rgba(0, 0, 0, 0.06)",
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;

      container.current.appendChild(script);
    }
  }, [height]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: `${height}px`, marginLeft: '2.5rem' }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(SymbolOverviewChart);
