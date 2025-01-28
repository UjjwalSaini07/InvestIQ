import React from "react";
import CountUp from "react-countup";

const StatCard = ({ number, suffix, label, highlight }) => {
  return (
    <div
      style={{
        padding: "5px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        width: "220px",
        margin: "0 10px",
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
        <CountUp end={number} duration={3} />
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
        padding: "30px 10px",
        backgroundColor: "#000",
        textAlign: "center",
        marginBottom: "5px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "#ccc", fontSize: "1.2rem", marginBottom: "20px" }}>
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

const TradingViewStats = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Stats Section */}
      <Section title="Love in every #INVESTIQ" description="Trusted by hundreds of traders, and investors.">
        <StatCard
          number={90}
          suffix="M+"
          label="Traders and investors use our platform."
          highlight="Traders"
        />
        <StatCard
          number={1}
          suffix="#"
          label="Top website in the world when it comes to all things investing."
          highlight="Top website"
        />
        <StatCard
          number={1.5}
          suffix="M+"
          label="Mobile reviews with a 4.9 average rating. No other fintech apps are more loved."
          highlight="Mobile reviews"
        />
        <StatCard
          number={10}
          suffix="M+"
          label="Custom scripts and ideas shared by our users."
          highlight="scripts"
        />
      </Section>

      {/* New Feature Section */}
      <Section
        title="Why Choose TradingView?"
        description="Empowering millions of users with cutting-edge tools and unmatched reliability."
      >
    
      </Section>
    </div>
  );
};

export default TradingViewStats;





