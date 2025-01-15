import React from 'react';

function HeadingWithParagraph() {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', color: 'blue' }}>Welcome to My Website</h1>
      <p style={{ fontSize: '1.5rem', color: 'green' }}>
        This is a simple paragraph to describe the content of the website.
      </p>
    </div>
  );
}

export default HeadingWithParagraph;

// import React from "react";
// import "../styles/home.scss";
// import gradient from "../assets/gradient.png";
// import PhoneDemo from "../assets/PhoneDemo.png";
// import { motion } from "framer-motion";

// function MainComponent() {
//   return (
//     <div className="main-flex">
//       <div className="gradient-div">
//         <img
//           src={gradient}
//           className="gradient"
//           alt="Gradient background"
//         />
//         <motion.img
//           src={PhoneDemo}
//           className="iphone"
//           alt="iPhone Demo"
//           initial={{ y: -10 }}
//           animate={{ y: 10 }}
//           transition={{
//             type: "spring",
//             repeatType: "reverse",
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default MainComponent;

