import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/Landing/Home3Compo/TradeImg1.jpeg";
import img2 from "../../../assets/Landing/Home3Compo/TradeImg2.jpeg";
import img3 from "../../../assets/Landing/Home3Compo/TradeImg3.jpg";
import img4 from "../../../assets/Landing/Home3Compo/TradeImg4.jpeg";
import img5 from "../../../assets/Landing/Home3Compo/TradeImg5.jpg";
import img6 from "../../../assets/Landing/Home3Compo/TradeImg6.jpeg";
import img7 from "../../../assets/Landing/Home3Compo/TradeImg7.jpg";
import img8 from "../../../assets/Landing/Home3Compo/TradeImg8.jpg";
import img9 from "../../../assets/Landing/Home3Compo/TradeImg9.jpeg";
import img10 from "../../../assets/Landing/Home3Compo/TradeImg10.jpg";

const StatCard = ({ number, suffix, label, highlight, startCount }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 25,
      duration: 2000,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div
      className="p-4 text-center w-64 transition-transform duration-300"
      data-aos="fade-left"
    >
      <h2 className="text-[3rem] font-bold m-0 text-white" data-aos="fade-down">
        <CountUp start={0} end={startCount ? number : 0} duration={10} />
        {suffix}
      </h2>
      <p className="text-gray-300 my-2 text-[1.1rem]">
        {label.split(highlight).map((text, index) => (
          <span key={index}>
            {text}
            {index < label.split(highlight).length - 1 && (
              <span className="text-indigo-500">{highlight}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

const Section = ({ title, description, children }) => {
  return (
    <section
      style={{
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          marginBottom: "8px",
          fontFamily: "'Noto Serif', serif",
          color: "#fff",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "8px", color: "#ccc" }}>
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {children}
      </div>
    </section>
  );
};

const SlidingImageGallery = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
    images[(startIndex + 3) % images.length],
  ];

  const descriptions = [
    "Reliable & Trustworthy platform",
    "Expert insights with Advance Logic",
    "Advanced analytics Tools for Perfection",
    "User-friendly tools with Key Insights",
    "Secure & Fast trading Analytic Platform",
    "Comprehensive data",
    "Innovative script & Key Logic Ideas",
    "Global Market Data",
    "Access from Anywhere get Real Time Data",
    "Cutting-edge techonlogy used",
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 25,
      duration: 2500,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handlePrev}
        data-aos="fade-down"
        style={{
          cursor: "pointer",
          padding: "8px",
          transition: "background-color 0.3s",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </button>
      <div
        data-aos="fade-right"
        style={{
          display: "flex",
          gap: "20px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "2000px",
        }}
      >
        {visibleImages.map((image, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              width: "300px",
              height: "480px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "80%",
                borderRadius: "18px",
                objectFit: "cover",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 6px 16px rgba(88, 166, 255, 0.5)";
                e.target.style.border = "2px solid #58a6ff";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.border = "none";
              }}
            />
            <p
              style={{
                color: "#ccc",
                marginTop: "8px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              {descriptions[(startIndex + index) % descriptions.length]}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        data-aos="fade-down"
        style={{
          cursor: "pointer",
          padding: "8px",
          transition: "background-color 0.3s",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </button>
    </div>
  );
};

const TradingViewStats = () => {
  const stats = [
    {
      number: 90,
      suffix: "+",
      label: "Traders and investors trust our platform for informed decisions.",
      highlight: "Traders",
    },
    {
      number: 1,
      suffix: "#",
      label:
        "The Top website for comprehensive investing insights and resources.",
      highlight: "Top website",
    },
    {
      number: 350,
      suffix: "+",
      label:
        "Our website features numerous crypto and stock analysts providing expert insights.",
      highlight: "crypto and stock",
    },
    {
      number: 50,
      suffix: "+",
      label:
        "Our users actively share custom scripts and innovative ideas for better trading and analysis.",
      highlight: "scripts",
    },
  ];

  const slidingImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const statsRef = useRef();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div>
        <Section
          title={
            <>
              Love in every <span style={{ display: "block" }}>#INVEST-IQ</span>
            </>
          }
          description="Trusted by hundreds of traders and investors."
        >
          <div ref={statsRef} className="flex flex-row">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                highlight={stat.highlight}
                startCount={startCount}
              />
            ))}
          </div>
        </Section>
      </div>

        <Section
          title="Why Choose INVEST-IQ?"
          description="Empowering hundreds of users with cutting-edge tools and unmatched reliability."
        >
            <SlidingImageGallery images={slidingImages} />
        </Section>
    </div>
  );
};

export default TradingViewStats;
