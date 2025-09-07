import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Home1 from '../components/LandingPage/HomeSections/Home1';
import Home2 from '../components/LandingPage/HomeSections/Home2';
import Home3 from '../components/LandingPage/HomeSections/Home3';
import Home4 from '../components/LandingPage/HomeSections/Home4';
import Home5 from '../components/LandingPage/HomeSections/Home5';
import TeamCard from '../components/LandingPage/TeamSection/TeamCard';
import Testinomails from '../components/LandingPage/TeamSection/Testinomails';
import Footer from '../components/common/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | InvestIQ</title>
      </Helmet>

      <main className='overflow-x-hidden'>
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
        <TeamCard />
        <Testinomails />
      </main>

      <Footer />
    </>
  );
};

export default Home;
