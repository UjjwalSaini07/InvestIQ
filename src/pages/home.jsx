import React, { useEffect } from 'react';
import Home1 from '../components/LandingPage/Home1.jsx';
import Home2 from '../components/LandingPage/Home2.jsx';
import Home3 from '../components/LandingPage/Home3.jsx';
import Home4 from '../components/LandingPage/Home4.jsx';
import GraphPage from '../components/LandingPage/GraphSection.jsx';
import Team from '../components/LandingPage/TeamCard.jsx';
import Footer from '../components/Footer.jsx';
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
        <Home4 />
        <GraphPage />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Home;