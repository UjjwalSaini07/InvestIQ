import React, { useState, useEffect, useRef } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem",
        position: "sticky",
        top: 0,
        backgroundColor: "var(--black)",
        zIndex: 1000,
      }}
    >
      <h1 style={{ fontSize: "1.4rem", margin: 0, fontWeight: 600 }}>
        Invest IQ<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--grey)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Home
          </p>
        </a>
        <a href="/compare" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--grey)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Compare
          </p>
        </a>
        <a href="/watchlist" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--grey)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Watchlist
          </p>
        </a>
        <a href="/dashboard" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--grey)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Dashboard
          </p>
        </a>
        <a href="/about" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--grey)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            About
          </p>
        </a>

        <div 
          ref={dropdownRef}
          style={{ position: "relative", display: "inline-block" }}>
          <a
            href="#" style={{ textDecoration: "none" }}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            <p
              style={{ fontSize: "1.6rem", color: "var(--grey)", cursor: "pointer", }}
            >
              <i className="bi bi-person-fill"></i>
            </p>
          </a>
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "2.5rem",
                right: "-1rem",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                zIndex: 1000,
                padding: "0.6rem",
                width: "170px",
              }}
            >
              <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                <li style={{ margin: "0.5rem 0" }}>
                  <a
                    href="/sign-in"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1rem",
                      display: "block",
                    }}
                  >
                    Sign in / Sign Up
                  </a>
                </li>
                <li style={{ margin: "0.5rem 0" }}>
                  <a
                    href="/help-center"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1rem",
                      display: "block",
                    }}
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
