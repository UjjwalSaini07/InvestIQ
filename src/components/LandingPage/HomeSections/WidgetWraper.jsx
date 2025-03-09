import React, { useEffect } from 'react';
import Section1 from '../TradingWidgets/CryptoSlider';
import Section2 from "../TradingWidgets/AdvanceTradingChart";
import Section3 from "../TradingWidgets/StockSlider";

const WidgetWraper = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
      <div>
        <Section1/>
        <Section2 />
        <Section3 />
      </div>
  );
};

export default WidgetWraper;