import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; // Optional icon for toggling

function Info({ title, desc }) {
  const [toggle, setToggle] = useState(false);

  const shortDesc = (
    <>
      {desc.slice(0, 300)}
      <span
        style={{
          color: "#007BFF",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "color 0.3s ease-in-out",
        }}
        onClick={() => setToggle(true)}
      >
        {" "}
        Read More
      </span>
    </>
  );

  const longDesc = (
    <>
      {desc}
      <span
        style={{
          color: "#007BFF",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "color 0.3s ease-in-out",
        }}
        onClick={() => setToggle(false)}
      >
        {" "}
        Read Less
      </span>
    </>
  );

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "680px",
        transition: "all 0.3s ease",
      }}
    >
      <h1
        style={{
          fontSize: "1.7rem",
          margin: 0,
          color: "#fff",
          fontWeight: "600",
          letterSpacing: "0.5px",
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: "1rem 0",
          color: "#fff",
          lineHeight: "1.6",
          fontSize: "1rem",
          fontFamily: "'Arial', sans-serif",
          textAlign: "justify",
        }}
      >
        {desc.length > 300 ? (toggle ? longDesc : shortDesc) : desc}
      </p>
    </div>
  );
}

export default Info;
