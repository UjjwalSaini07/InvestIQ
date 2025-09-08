import React, { useEffect, useState, useRef, memo } from 'react';

function ForexCrossRates() {
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
      container.current.innerHTML = ''; // Clear any previous content

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "width": 590,
          "height": 520,
          "currencies": [
            "EUR",
            "USD",
            "JPY",
            "AUD",
            "CAD",
            "NZD",
            "NOK",
            "MXN",
            "PHP",
            "MYR",
            "INR"
          ],
          "isTransparent": false,
          "colorTheme": "dark",
          "locale": "en",
          "backgroundColor": "#000000"
        }`;

      container.current.appendChild(script);
    }
  }, [height]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: `${height}px` }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(ForexCrossRates);
