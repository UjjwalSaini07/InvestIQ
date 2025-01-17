import React from "react";
import "../styles/home.scss";
import gradient from "../assets/gradient.png";
import iphone from "../assets/PhoneDemo.png";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="main-container">
      <div className="text-content">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Invest IQ
        </motion.h1>
      </div>
      <div className="image-container">
        <img src={gradient} className="gradient" alt="Background gradient" />
        <motion.img
          src={iphone}
          className="phone-image"
          alt="iPhone demo"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;


// Todo: Emergency Checking Only...
// import React from 'react';
// import Sidebar from '../components/sidebar';

// function HeadingWithParagraph() {
//   return (
//     <div>
//       <h1 style={{ fontSize: '3rem', color: 'blue' }}>Welcome to My Website</h1>
//       <p style={{ fontSize: '1.5rem', color: 'green' }}>
//         This is a simple paragraph to describe the content of the website.
//       </p>
//     </div>
//   );
// }

// export default HeadingWithParagraph;
