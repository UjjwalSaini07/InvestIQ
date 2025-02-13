import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{
        color: "#fff",
        padding: "25px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "300px", textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="./logo.png" alt="Logo" style={{ width: "55px" }} />
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
            //   color: "#FFD700",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            InvestIQ
          </h2>
        </div>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            opacity: "0.85",
            marginTop: "12px",
          }}
        >
          Analyze stocks and crypto trends with advanced tools. Stay informed with insights, real-time news, and analysis.
        </p>
      </div>

      <div
        style={{
          flex: "1",
          maxWidth: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontSize: "20px",
            marginBottom: "18px",
            fontWeight: "600",
            color: "#EDE7F6",
          }}
        >
          Quick Links
        </h4>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {["Washlist", "Profile", "Dashboard"].map((text, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: "0.8",
                  transition: "0.3s",
                  fontSize: "16px",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "1")}
                onMouseOut={(e) => (e.target.style.opacity = "0.8")}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          flex: "1",
          maxWidth: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontSize: "20px",
            marginBottom: "18px",
            fontWeight: "600",
            color: "#EDE7F6",
          }}
        >
          Help Zone
        </h4>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {["About Us", "Contact Us", "Help Center"].map((text, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: "0.8",
                  transition: "0.3s",
                  fontSize: "16px",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "1")}
                onMouseOut={(e) => (e.target.style.opacity = "0.8")}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ maxWidth: "350px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "22px",
            marginBottom: "18px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Subscribe to Our Newsletter
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            overflow: "hidden",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              background: "transparent",
              outline: "none",
              fontSize: "15px",
              color: "#fff",
            }}
          />
          <button
            style={{
              padding: "10px 25px",
              backgroundColor: "#0582e8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              borderRadius: "25px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4A148C")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0582e8")}
          >
            Subscribe
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
          }}
        >
          {[FaGithub, FaXTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  transition: "0.3s",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
                onMouseOver={(e) => (e.target.style.color = "#6A0DAD")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                <Icon />
              </a>
            )
          )}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "20px",
          width: "100%",
          textAlign: "center",
          paddingTop: "12px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            opacity: "0.8",
          }}
        >
          © 2025 InvestIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
