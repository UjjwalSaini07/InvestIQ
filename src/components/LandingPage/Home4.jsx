import React, { useEffect } from 'react';
import Section1 from './Section4Stocks/Cap1Stock';
import Section2 from './Section4Stocks/Cap2Stock';

const Home4 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
      <div>
        <Section1 />
        <Section2 />
      </div>
  );
};

export default Home4;