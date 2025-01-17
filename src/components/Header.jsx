import React, { useEffect, useState } from "react";

function Header() {
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
        <a href="/watchlist" style={{ textDecoration: "none" }}>
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
        <a href="/watchlist" style={{ textDecoration: "none" }}>
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
      </div>
    </div>
  );
}

export default Header;
