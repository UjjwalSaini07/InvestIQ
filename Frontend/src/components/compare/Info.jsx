import React, { useState } from "react";

function Info({ title, desc }) {
  const [toggle, setToggle] = useState(false);

  const shortDesc = (
    <>
      {desc.slice(0, 300)}
      <span
        className="text-blue-500 cursor-pointer font-bold transition-colors duration-300"
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
        className="text-blue-500 cursor-pointer font-bold transition-colors duration-300"
        onClick={() => setToggle(false)}
      >
        {" "}
        Read Less
      </span>
    </>
  );

  return (
    <div className="p-4 rounded-lg max-w-2xl transition-all duration-300">
      <h1 className="text-2xl text-white font-semibold tracking-wide text-center mb-4">
        {title}
      </h1>
      <p className="text-white text-justify leading-7 text-base font-sans">
        {desc.length > 300 ? (toggle ? longDesc : shortDesc) : desc}
      </p>
    </div>
  );
}

export default Info;
