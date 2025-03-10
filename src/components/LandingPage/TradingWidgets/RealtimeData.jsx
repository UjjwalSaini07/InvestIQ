import React, { useEffect, useState, useRef, memo } from 'react';

function MarketQuotesChart() {
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
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "width": 680,
          "height": 400,
          "symbolsGroups": [
            {
              "name": "Indices",
              "originalName": "Indices",
              "symbols": [
                { "name": "FOREXCOM:SPXUSD", "displayName": "S&P 500 Index" },
                { "name": "FOREXCOM:NSXUSD", "displayName": "US 100 Cash CFD" },
                { "name": "FOREXCOM:DJI", "displayName": "Dow Jones Industrial Average Index" },
                { "name": "INDEX:NKY", "displayName": "Japan 225" },
                { "name": "INDEX:DEU40", "displayName": "DAX Index" },
                { "name": "FOREXCOM:UKXGBP", "displayName": "FTSE 100 Index" },
                { "name": "CRYPTOCAP:USDT.D", "displayName": "USDT" },
                { "name": "BLACKBULL:US30", "displayName": "US30" },
                { "name": "INDEX:ETHUSD", "displayName": "ETHUSD" }
              ]
            },
            {
              "name": "Futures",
              "originalName": "Futures",
              "symbols": [
                { "name": "CME_MINI:ES1!", "displayName": "S&P 500" },
                { "name": "CME:6E1!", "displayName": "Euro" },
                { "name": "COMEX:GC1!", "displayName": "Gold" },
                { "name": "NYMEX:CL1!", "displayName": "WTI Crude Oil" },
                { "name": "NYMEX:NG1!", "displayName": "Gas" },
                { "name": "CBOT:ZC1!", "displayName": "Corn" },
                { "name": "CME:BTC1!", "displayName": "BTCF" },
                { "name": "NYMEX:NG1!", "displayName": "NG" }
              ]
            },
            {
              "name": "Bonds",
              "originalName": "Bonds",
              "symbols": [
                { "name": "CBOT:ZB1!", "displayName": "T-Bond" },
                { "name": "CBOT:UB1!", "displayName": "Ultra T-Bond" },
                { "name": "EUREX:FGBL1!", "displayName": "Euro Bund" },
                { "name": "EUREX:FBTP1!", "displayName": "Euro BTP" },
                { "name": "EUREX:FGBM1!", "displayName": "Euro BOBL" }
              ]
            },
            {
              "name": "Forex",
              "originalName": "Forex",
              "symbols": [
                { "name": "FX:EURUSD", "displayName": "EUR to USD" },
                { "name": "FX:GBPUSD", "displayName": "GBP to USD" },
                { "name": "FX:USDJPY", "displayName": "USD to JPY" },
                { "name": "FX:USDCHF", "displayName": "USD to CHF" },
                { "name": "FX:AUDUSD", "displayName": "AUD to USD" },
                { "name": "FX:USDCAD", "displayName": "USD to CAD" },
                { "name": "FX_IDC:USDINR", "displayName": "USD to INR" },
                { "name": "OANDA:NZDUSD", "displayName": "NZD to USD" },
                { "name": "OANDA:EURJPY", "displayName": "EUR to JPY" },
                { "name": "OANDA:GBPAUD", "displayName": "GBP to AUD" },
                { "name": "FX:CHFJPY", "displayName": "CHF to JPY" }
              ]
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "colorTheme": "dark",
          "locale": "en",
          "backgroundColor": "rgba(0, 0, 0, 1)"
        }`;

      container.current.appendChild(script);
    }
  }, [height]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: `${height}px`, marginRight: '4rem' }}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(MarketQuotesChart);
