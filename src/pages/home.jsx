import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Home1 from '../components/LandingPage/Home1';
import Home2 from '../components/LandingPage/Home2';
import Home3 from '../components/LandingPage/Home3';
import Home4 from '../components/LandingPage/Home4';
import CryptoMarketChart from '../components/LandingPage/CryptoMarketChart';
import CryptoStockGraph from '../components/LandingPage/CryptoStockGraph';
import TeamCard from '../components/LandingPage/TeamCard';
import Testinomails from '../components/LandingPage/Testinomails';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | InvestIQ - Your Smart Investment Platform</title>
      </Helmet>

      <main>
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <CryptoMarketChart />
        <CryptoStockGraph />
        <TeamCard />
        <Testinomails />
      </main>

      <Footer />
    </>
  );
};

export default Home;
