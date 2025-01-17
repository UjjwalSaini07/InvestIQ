import React from "react";
import { motion } from "framer-motion";

import "../styles/home.scss";
import TextSpan from "../components/TextSpan.jsx";
import gradient from "../assets/gradient.png";
import iphone from "../assets/PhoneDemo.png";

const styles = {
  heroHeadText:
    "font-black text-white lg:text-[78px] lg:leading-[110px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[35px] lg:leading-[40px]",
};

function MainComponent() {
  return (
    <div className="main-container">
      <div className="text-content">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          // style={{ fontFamily: "'Noto Serif', serif", fontSize: '5.8rem', fontWeight:'600', marginLeft: '2rem'}}
          style={{ fontFamily: "'Jacques Francois Shadow', serif", fontSize: '5.5rem', marginLeft: '2rem'}}
          className={`${styles.heroHeadText} text-white`}
        >         
        <span className="text-[#fff]">
          <TextSpan>I</TextSpan>
          <TextSpan>N</TextSpan>
          <TextSpan>V</TextSpan>
          <TextSpan>E</TextSpan>
          <TextSpan>S</TextSpan>
          <TextSpan>T</TextSpan>
        </span>
        {' '}
        <span className="text-[#fff]">
          IQ
        </span>

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
