import React from "react";
import { motion } from "framer-motion";

import "../../../styles/home.scss";
import TextSpan from "../../common/TextSpan";
import iphone from "../../../assets/PhoneDemo.png";

const styles = {
  heroHeadText: "font-black text-white lg:text-[78px] lg:leading-[110px] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[35px] lg:leading-[40px]",
};

const textMotion = ({ 
  delay = 0, 
  duration = 1.25, 
  startY = -50, 
  startOpacity = 0, 
  endY = 0, 
  endOpacity = 1, 
  easingType = "spring" 
} = {}) => ({
  hidden: { y: startY, opacity: startOpacity },
  show: {
    y: endY,
    opacity: endOpacity,
    transition: {
      type: easingType,
      duration: duration,
      delay: delay,
    },
  },
});

const textMotionFromLeft = ({ 
  delay = 0, 
  duration = 1.25, 
  startX = -50, 
  startOpacity = 0, 
  endX = 0, 
  endOpacity = 1, 
  easingType = "spring" 
} = {}) => ({
  hidden: { x: startX, opacity: startOpacity },
  show: {
    x: endX,
    opacity: endOpacity,
    transition: {
      type: easingType,
      duration: duration,
      delay: delay,
    },
  },
});

const textMotionFromRight = ({ 
  delay = 0, 
  duration = 1.25, 
  startX = 50, 
  startOpacity = 0, 
  endX = 0, 
  endOpacity = 1, 
  easingType = "spring" 
} = {}) => ({
  hidden: { x: startX, opacity: startOpacity },
  show: {
    x: endX,
    opacity: endOpacity,
    transition: {
      type: easingType,
      duration: duration,
      delay: delay,
    },
  },
});

function Home1() {
  return (
    <div className="flex items-center justify-center h-screen -mt-14 p-4 bg-black">
      <div className="relative flex flex-col items-center justify-center text-center text-white w-full max-w-4xl">
        <motion.h1
          className={`${styles.heroHeadText} text-white p-0.5`}
          variants={ textMotionFromRight({ delay: 1.5, startX: 100 })} 
          initial="hidden" 
          animate="show"
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

        <motion.div variants={ textMotion({ delay: 2.2, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
          <div className="mt-6 px-6 py-1 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg animate-pulse">
            🚀 Join InvestIQ now and improve your trading & Investing skills 🚀
          </div>
        </motion.div>

        <motion.div variants={ textMotionFromLeft({ delay: 3, startX: -100 })} initial="hidden" animate="show">
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold">
            Rise To The Top <br />
            <motion.div variants={ textMotionFromRight({ delay: 3.5, startX: 100 })} initial="hidden" animate="show">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-text-glow">
                Master Market Precision.
              </span>
            </motion.div>
          </h1>
        </motion.div>

        <motion.div variants={ textMotion({ delay: 4.2, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Cryptocurrency and Stock Analysis trusted by 90+ investors, featuring real-time data, comparison tools, Advance Charts, watchlists, and an intuitive dashboard for seamless tracking.
          </p>
        </motion.div>

        <motion.div variants={ textMotion({ delay: 4.8, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* <motion.div variants={ textMotionFromLeft({ delay: 4.2, startX: -100 })} initial="hidden" animate="show"> */}
              <a
                href="/helpcenter"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                Get Started 🚀
              </a>
            {/* </motion.div> */}
            {/* <motion.div variants={ textMotionFromRight({ delay: 4.2, startX: 100 })} initial="hidden" animate="show"> */}
              <a
                href="/login"
                className="px-6 py-3 border-2 border-gradient-to-r from-purple-500 to-blue-400 rounded-full text-white font-medium shadow-lg hover:scale-105 transform transition-transform duration-300 flex items-center"
              >
                <span>Join Invest-IQ Now 🔐</span>
              </a>
            {/* </motion.div> */}
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div variants={ textMotion({ delay: 0.2, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
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
          </motion.div>
          <motion.div variants={ textMotion({ delay: 0.4, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
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
          </motion.div>
          <motion.div variants={ textMotion({ delay: 0.6, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
            <div
              className="absolute bottom-0 left-2 animate-float-glow"
              style={{ animationDuration: "7s" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5070/5070639.png"
                alt="Chart"
                className="w-20 h-20 opacity-80"
              />
            </div>
          </motion.div>
          <motion.div variants={ textMotion({ delay: 0.8, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
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
          </motion.div>
          <motion.div variants={ textMotion({ delay: 1, duration: 1, startY: -100, easingType: "easeOut" })} initial="hidden" animate="show">
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
          </motion.div>
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
