import React, { useEffect } from 'react';
import Home1 from '../components/LandingPage/Home1.jsx';
import Home2 from '../components/LandingPage/Home2.jsx';
import Home3 from '../components/LandingPage/Home3.jsx';
import { Helmet } from 'react-helmet';

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | InvestIQ</title>
      </Helmet>
    
      <div>
        <Home1 />
        <Home2 />
        <Home3 />
      </div>
    </>
  );
};

export default Home;