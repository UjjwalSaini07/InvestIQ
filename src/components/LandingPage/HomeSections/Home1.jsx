import React from "react";
import { motion } from "framer-motion";

import "../../../styles/home.scss";
import TextSpan from "../../common/TextSpan";
import iphone from "../../../assets/PhoneDemo.png";

const styles = {
  heroHeadText: "font-black text-white lg:text-[78px] lg:leading-[110px] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[35px] lg:leading-[40px]",
};

function Home1() {
  return (
    <div className="flex items-center justify-center h-screen -mt-14 p-4 bg-black">
      <div className="relative flex flex-col items-center justify-center text-center text-white w-full max-w-4xl">
        <motion.h1
          className={`${styles.heroHeadText} text-white p-0.5`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: "'Noto Serif', serif",
            fontSize: "5.8rem",
            fontWeight: "600",
            margin: "0",
          }}
        >
          <span className="text-[#fff]">
            <TextSpan>I</TextSpan>
            <TextSpan>N</TextSpan>
            <TextSpan>V</TextSpan>
            <TextSpan>E</TextSpan>
            <TextSpan>S</TextSpan>
            <TextSpan>T</TextSpan>
          </span>{" "}
          <span className="text-[#fff]">IQ</span>
        </motion.h1>

        <div className="mt-6 px-6 py-1 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg animate-pulse">
          🚀 Join InvestIQ now and improve your trading & Investing skills 🚀
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          Rise To The Top <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-text-glow">
            Master Market Precision.
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Cryptocurrency and Stock Analysis trusted by 90+ investors, featuring real-time data, comparison tools, Advance Charts, watchlists, and an intuitive dashboard for seamless tracking.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/helpcenter"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Get Started 🚀
          </a>
          <a
            href="/login"
            className="px-6 py-3 border-2 border-gradient-to-r from-purple-500 to-blue-400 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300 flex items-center"
          >
            <span>Join our InvestIQ 🔐</span>
          </a>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {/* Floating and Glowing Icons */}
          <div
            className="absolute top-8 -left-20 animate-float-glow"
            style={{ animationDuration: "5s" }}
          >
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
              alt="Bitcoin"
              className="w-14 h-14 opacity-80"
            />
          </div>
          <div
            className="absolute top-8 -right-20 animate-float-glow"
            style={{ animationDuration: "6s" }}
          >
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
              alt="Ethereum"
              className="w-14 h-14 opacity-80"
            />
          </div>
          <div
            className="absolute bottom-0 left-8 animate-float-glow"
            style={{ animationDuration: "7s" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5070/5070639.png"
              alt="Chart"
              className="w-16 h-16 opacity-80"
            />
          </div>
          <div
            className="absolute bottom-0 right-10 animate-float-glow"
            style={{ animationDuration: "8s" }}
          >
            <img
              src="https://www.iconpacks.net/icons/2/free-coin-icon-2159-thumb.png"
              alt="Coin"
              className="w-14 h-14 opacity-80"
            />
          </div>
          <div
            className="absolute -bottom-24 mx-auto left-1/2 transform -translate-x-1/2 animate-rocket-spin"
            style={{ animationDuration: "4s" }}
          >
            <img
              src="https://www.svgrepo.com/show/275999/rocket.svg"
              alt="Rocket"
              className="w-12 h-12 opacity-90"
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes glow {
            0%,
            100% {
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rocket {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-10deg);
            }
          }

          .animate-float-glow {
            animation: float 6s ease-in-out infinite,
              glow 2s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }

          .animate-rocket-spin {
            animation: rocket 5s ease-in-out infinite;
          }

          .animate-text-glow {
            animation: glow 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Home1;







// import React from "react";
// import { motion } from "framer-motion";

// import "../../../styles/home.scss";
// import TextSpan from "../../common/TextSpan";
// import iphone from "../../../assets/PhoneDemo.png";

// const styles = {
//   heroHeadText: "font-black text-white lg:text-[78px] lg:leading-[110px] mt-2",
//   heroSubText: "text-[#dfd9ff] font-medium lg:text-[35px] lg:leading-[40px]",
// };

// function Home1() {
//   return (
//     <div className="flex p-2">
//       <div className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden">
//         <div className="flex-1 max-w-1/2 items-center">
//           <motion.h1
//             className={`${styles.heroHeadText} text-white p-0.5`}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             style={{
//               fontFamily: "'Noto Serif', serif",
//               fontSize: "5.8rem",
//               fontWeight: "600",
//               marginLeft: "2rem",
//             }}
//           >
//             <span className="text-[#fff]">
//               <TextSpan>I</TextSpan>
//               <TextSpan>N</TextSpan>
//               <TextSpan>V</TextSpan>
//               <TextSpan>E</TextSpan>
//               <TextSpan>S</TextSpan>
//               <TextSpan>T</TextSpan>
//             </span>{" "}
//             <span className="text-[#fff]">IQ</span>
//           </motion.h1>
//         </div>

//         <div className="mb-4 px-6 py-1 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg animate-pulse">
//           🚀 Join Toptraders now and improve your trading skills 🚀
//         </div>

//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
//           Rise To The Top <br />
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-text-glow">
//             Top Traders are Made Here
//           </span>
//         </h1>

//         <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
//           Trade 60+ perpetual contracts, ace our Top Traders Beta Program, and
//           unlock up to 200,000 USDT in funding.
//         </p>

//         <div className="mt-6 flex flex-wrap justify-center gap-4">
//           <a
//             href="#"
//             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300"
//           >
//             Get Started 🚀
//           </a>
//           <a
//             href="#"
//             className="px-6 py-3 border-2 border-gradient-to-r from-purple-500 to-blue-400 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300 flex items-center"
//           >
//             <span>Join our Discord</span>
//             <img
//               src="discord-icon.svg"
//               alt="Discord"
//               className="ml-2 w-5 h-5"
//             />
//           </a>
//         </div>

//         <div className="absolute inset-0 pointer-events-none">
//           {/* Floating and Glowing Icons */}
//           <div
//             className="absolute top-16 left-12 animate-float-glow"
//             style={{ animationDuration: "5s" }}
//           >
//             <img
//               src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
//               alt="Bitcoin"
//               className="w-14 h-14 opacity-80"
//             />
//           </div>
//           <div
//             className="absolute top-32 right-16 animate-float-glow"
//             style={{ animationDuration: "6s" }}
//           >
//             <img
//               src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
//               alt="Ethereum"
//               className="w-14 h-14 opacity-80"
//             />
//           </div>
//           <div
//             className="absolute bottom-24 left-20 animate-float-glow"
//             style={{ animationDuration: "7s" }}
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5070/5070639.png"
//               alt="Chart"
//               className="w-16 h-16 opacity-80"
//             />
//           </div>
//           <div
//             className="absolute bottom-16 right-28 animate-float-glow"
//             style={{ animationDuration: "8s" }}
//           >
//             <img
//               src="https://www.iconpacks.net/icons/2/free-coin-icon-2159-thumb.png"
//               alt="Coin"
//               className="w-14 h-14 opacity-80"
//             />
//           </div>
//           <div
//             className="absolute bottom-12 mx-auto left-1/2 transform -translate-x-1/2 animate-rocket-spin"
//             style={{ animationDuration: "4s" }}
//           >
//             <img
//               src="https://www.svgrepo.com/show/275999/rocket.svg"
//               alt="Rocket"
//               className="w-16 h-16 opacity-90"
//             />
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes float {
//             0%,
//             100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-15px);
//             }
//           }

//           @keyframes glow {
//             0%,
//             100% {
//               filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
//             }
//             50% {
//               filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
//             }
//           }

//           @keyframes spin {
//             0% {
//               transform: rotate(0deg);
//             }
//             100% {
//               transform: rotate(360deg);
//             }
//           }

//           @keyframes rocket {
//             0%,
//             100% {
//               transform: translateY(0) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-20px) rotate(-15deg);
//             }
//           }

//           .animate-float-glow {
//             animation: float 6s ease-in-out infinite,
//               glow 2s ease-in-out infinite;
//           }

//           .animate-spin-slow {
//             animation: spin 10s linear infinite;
//           }

//           .animate-rocket-spin {
//             animation: rocket 5s ease-in-out infinite;
//           }

//           .animate-text-glow {
//             animation: glow 3s ease-in-out infinite;
//           }
//         `}</style>
//       </div>

//       {/* <div className="image-container">
//         <motion.img
//           src={iphone}
//           className="phone-image"
//           alt="iPhone demo"
//           initial={{ y: -10 }}
//           animate={{ y: 10 }}
//           transition={{
//             type: "smooth",
//             repeatType: "mirror",
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />
//       </div> */}
//     </div>
//   );
// }

// export default Home1;

// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative bg-black min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
//       {/* Top Badge */}
//       <div className="mb-4 px-6 py-1 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg animate-pulse">
//         🚀 Join Toptraders now and improve your trading skills 🚀
//       </div>

//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
//         Rise To The Top <br />
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-text-glow">
//           Top Traders are Made Here
//         </span>
//       </h1>

//       {/* Subheading */}
//       <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
//         Trade 60+ perpetual contracts, ace our Top Traders Beta Program, and
//         unlock up to 200,000 USDT in funding.
//       </p>

//       {/* Buttons */}
//       <div className="mt-6 flex flex-wrap justify-center gap-4">
//         <a
//           href="#"
//           className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300"
//         >
//           Get Started 🚀
//         </a>
//         <a
//           href="#"
//           className="px-6 py-3 border-2 border-gradient-to-r from-purple-500 to-blue-400 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300 flex items-center"
//         >
//           <span>Join our Discord</span>
//           <img
//             src="discord-icon.svg"
//             alt="Discord"
//             className="ml-2 w-5 h-5"
//           />
//         </a>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Floating and Glowing Icons */}
//         <div
//           className="absolute top-16 left-12 animate-float-glow"
//           style={{ animationDuration: "5s" }}
//         >
//           <img
//             src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
//             alt="Bitcoin"
//             className="w-14 h-14 opacity-80"
//           />
//         </div>
//         <div
//           className="absolute top-32 right-16 animate-float-glow"
//           style={{ animationDuration: "6s" }}
//         >
//           <img
//             src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
//             alt="Ethereum"
//             className="w-14 h-14 opacity-80"
//           />
//         </div>
//         <div
//           className="absolute bottom-24 left-20 animate-float-glow"
//           style={{ animationDuration: "7s" }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/5070/5070639.png"
//             alt="Chart"
//             className="w-16 h-16 opacity-80"
//           />
//         </div>
//         <div
//           className="absolute bottom-16 right-28 animate-float-glow"
//           style={{ animationDuration: "8s" }}
//         >
//           <img
//             src="https://www.iconpacks.net/icons/2/free-coin-icon-2159-thumb.png"
//             alt="Coin"
//             className="w-14 h-14 opacity-80"
//           />
//         </div>
//         <div
//           className="absolute bottom-12 mx-auto left-1/2 transform -translate-x-1/2 animate-rocket-spin"
//           style={{ animationDuration: "4s" }}
//         >
//           <img
//             src="https://www.svgrepo.com/show/275999/rocket.svg"
//             alt="Rocket"
//             className="w-16 h-16 opacity-90"
//           />
//         </div>
//       </div>

//       {/* Custom CSS */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes glow {
//           0%,
//           100% {
//             filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
//           }
//           50% {
//             filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
//           }
//         }

//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes rocket {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(-15deg);
//           }
//         }

//         .animate-float-glow {
//           animation: float 6s ease-in-out infinite, glow 2s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin 10s linear infinite;
//         }

//         .animate-rocket-spin {
//           animation: rocket 5s ease-in-out infinite;
//         }

//         .animate-text-glow {
//           animation: glow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;
