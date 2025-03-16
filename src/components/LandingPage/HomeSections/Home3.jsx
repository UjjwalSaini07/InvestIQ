import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/Landing/Home3Compo/Img1.jpeg";
import img2 from "../../../assets/Landing/Home3Compo/Img2.jpeg";
import img3 from "../../../assets/Landing/Home3Compo/Img3.jpg";
import img4 from "../../../assets/Landing/Home3Compo/Img4.jpeg";
import img5 from "../../../assets/Landing/Home3Compo/Img5.jpg";
import img6 from "../../../assets/Landing/Home3Compo/Img6.jpeg";
import img7 from "../../../assets/Landing/Home3Compo/Img7.jpg";
import img8 from "../../../assets/Landing/Home3Compo/Img8.jpg";
import img9 from "../../../assets/Landing/Home3Compo/Img9.jpeg";
import img10 from "../../../assets/Landing/Home3Compo/Img10.jpg";

const StatCard = ({ number, suffix, label, highlight, startCount }) => {
  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
        width: "260px",
        transition: "transform 0.3s",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          margin: "0",
          color: "#fff",
        }}
      >
        <CountUp start={0} end={startCount ? number : 0} duration={10} />
        {suffix}
      </h2>
      <p style={{ color: "#ccc", margin: "10px 0", fontSize: "1.1rem" }}>
        {label.split(highlight).map((text, index) => (
          <span key={index}>
            {text}
            {index < label.split(highlight).length - 1 && (
              <span style={{ color: "#6b6bff" }}>{highlight}</span>
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
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#ccc" }}>
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
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
    images[(startIndex + 3) % images.length],
  ];

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
        style={{
          cursor: "pointer",
          padding: "8px",
          transition: "background-color 0.3s",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </button>
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "2000px",
        }}
      >
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "15px",
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
        ))}
      </div>
      <button
        onClick={handleNext}
        style={{
          cursor: "pointer",
          padding: "8px",
          transition: "background-color 0.3s",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
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
      label: "The Top website for comprehensive investing insights and resources.",
      highlight: "Top website",
    },
    {
      number: 350,
      suffix: "+",
      label: "Our website features numerous crypto and stock analysts providing expert insights.",
      highlight: "crypto and stock",
    },
    {
      number: 50,
      suffix: "+",
      label: "Our users actively share custom scripts and innovative ideas for better trading and analysis.",
      highlight: "scripts",
    },
  ];

  const slidingImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
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