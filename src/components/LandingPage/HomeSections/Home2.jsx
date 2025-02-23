import React, { useState } from "react";
import vid1 from "../../../assets/Landing/Home2Compo/Trade1.mp4";
import vid2 from "../../../assets/Landing/Home2Compo/Trade2.mp4";
import img1 from "../../../assets/Landing/Home2Compo/Trade3.png";
import img2 from "../../../assets/Landing/Home2Compo/Trade4.png";
import img3 from "../../../assets/Landing/Home2Compo/Trade5.png";
import img4 from "../../../assets/Landing/Home2Compo/Trade6.png";

const Home2 = () => {
  const [currentMedia, setCurrentMedia] = useState({ type: "video", src: vid1 });
  const [activeButton, setActiveButton] = useState(null);

  const handleMediaChange = (type, src, label) => {
    setCurrentMedia({ type, src });
    setActiveButton(label);
  };

  const containerStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "0.5rem",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const headlineStyle = {
    fontSize: "4.2rem",
    fontWeight: "bold",
    marginBottom: "0.2rem",
  };

  const subheadlineStyle = {
    fontSize: "1.4rem",
    color: "#8b949e",
    marginBottom: "2rem",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const buttonStyle = {
    color: "#c9d1d9",
    fontSize: "0.9rem",
    fontWeight: "bold",
    padding: "0.75rem 1rem",
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonActiveStyle = {
    backgroundColor: "#4b5058",
    transform: "scale(1.05)",
  };

  const tradeIdeaBoxStyle = {
    borderRadius: "16px",
    padding: "0.7rem",
    textAlign: "center",
    width: "75%",
    margin: "0 auto",
    boxShadow: "0 6px 16px rgba(88, 166, 255, 0.5)",
    border: "2px solid #58a6ff",
  };

  const mediaStyle = {
    width: "100%",
    height: "80%",
    borderRadius: "12px",
    objectFit: "cover",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div style={headlineStyle}>Where the world does markets</div>
      <div style={subheadlineStyle}>
        Join 90 million traders and investors taking the future into their own hands.
      </div>
      <nav style={navStyle}>
        {["Chart", "SChart","Trade", "Screen", "Analyze", "Learn"].map((label, index) => (
          <button
            key={index}
            style={{
              ...buttonStyle,
              ...(activeButton === label && buttonActiveStyle),
            }}
            onClick={() =>
              handleMediaChange(
                label === "Chart" || label === "SChart" ? "video" : "image",
                label === "Chart" ? vid1 : label === "SChart" ? vid2 : label === "Trade" ? img1 : label === "Screen" ? img2 : label === "Analyze" ? img3 : img4,
                label
              )
            }
          >
            {label}
          </button>
        ))}
      </nav>
      <div style={tradeIdeaBoxStyle}>
        {currentMedia.type === "video" ? (
          <video
            src={currentMedia.src}
            style={mediaStyle}
            autoPlay
            loop
          />
        ) : (
          <img src={currentMedia.src} alt="Trade Ideas" style={mediaStyle} />
        )}
      </div>
    </div>
  );
};

export default Home2;
