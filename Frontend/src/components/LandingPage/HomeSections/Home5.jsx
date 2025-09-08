import React, { useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section1 from '../ChartSection/CryptoMarketChart';
import Section2 from '../ChartSection/CryptoStockGraph';

const Home5 = () => {
  const sectionRef = useRef(null);
  const hasShownToast = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownToast.current) {
          toast.info('This Crypto Market & Stocks Analysis API has High DataSet so it takes a while to load, so please wait...Thank for being Patience', {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          hasShownToast.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      <div ref={sectionRef}>
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Home5;
