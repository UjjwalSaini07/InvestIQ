import React, { useEffect } from 'react';
import Section1 from './Section4Stocks/Cap1Stock';
import Section2 from './Section4Stocks/Cap2Stock';
import Section3 from './Section4Stocks/TradeNews';
import Section4 from './TopStories';
import Section5 from "./WorldInflation";
import Section6 from "./BarPattern";

const Home4 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
  );
};

export default Home4;