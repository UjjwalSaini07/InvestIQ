import React, { useEffect } from 'react';
import Home1 from '../components/LandingPage/Home1.jsx';
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
      </div>
    </>
  );
};

export default Home;