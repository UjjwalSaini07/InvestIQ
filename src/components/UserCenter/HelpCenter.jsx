import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../@/ui/button";
import video1 from "../../assets/Landing/Home2Compo/TradeVidColorShift.mp4";
import video2 from "../../assets/Landing/Home2Compo/Trade2.mp4";
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold, PiNumberFourBold, PiNumberFiveBold, PiNumberSixBold, } from "react-icons/pi";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const steps = [
  {
    title: "Create Your InvestIQ Account",
    description:
      "Sign up or log in to access your personalized dashboard and start building your crypto and stock watchlist.",
    icon: <PiNumberOneBold className="text-white text-[1.8rem]" />,
  },
  {
    title: "Set Up Your Watchlist",
    description:
      "Add your favorite stocks and cryptocurrencies to monitor real-time price movements and trends.",
    icon: <PiNumberTwoBold className="text-white text-[1.8rem]" />,
  },
  {
    title: "Stay Informed with Market Feeds",
    description:
      "Access business news and insights to stay updated on factors influencing the markets.",
    icon: <PiNumberThreeBold className="text-white text-[1.8rem]" />,
  },
  {
    title: "Compare Cryptos and Stocks",
    description:
      "Evaluate assets side-by-side with advanced comparison tools and make informed decisions.",
    icon: <PiNumberFourBold className="text-white text-[1.8rem]" />,
  },
  {
    title: "Analyze Trends with Graphs",
    description:
      "Use powerful graphing tools and AI-driven insights to identify trends and optimize strategies.",
    icon: <PiNumberFiveBold className="text-white text-[1.8rem]" />,
  },
  {
    title: "Backtest and Scale Your Strategies",
    description:
      "Test your trading strategies in a secure environment and scale confidently with data-driven insights.",
    icon: <PiNumberSixBold className="text-white text-[1.8rem]" />,
  },
];

export default function HelpCenter() {
  return (
    <section
      id="help-center"
      className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
    >
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="text-center mb-12">
        <motion.div variants={textVariant(0.4)} initial="hidden" animate="show">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            How It Works
          </h2>
        </motion.div>
        <motion.div variants={textVariant(0.9)} initial="hidden" animate="show">
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto opacity-90">
            A simple, efficient way to analysis of Stock and Crpto Market. Follow these
            steps to get started.
          </p>
        </motion.div>
        <motion.div variants={textVariant(1.1)} initial="hidden" animate="show">
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-20">
          <motion.div
            variants={textVariant(1.8)}
            initial="hidden"
            animate="show"
            className="relative rounded-3xl shadow-2xl overflow-hidden group transition-all duration-700 transform hover:scale-105"
          >
            <div className="absolute inset-0 group-hover:opacity-40"></div>
            <video
              src={video1}
              alt="Help Center Template"
              className="w-full h-auto object-cover object-center"
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            variants={textVariant(2.5)}
            initial="hidden"
            animate="show"
            className="relative rounded-3xl shadow-2xl overflow-hidden group transition-all duration-700 transform hover:scale-105 mt-6"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40"></div>
            <video
              src={video2}
              alt="Help Center Template 2"
              className="w-full h-auto object-cover object-center"
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
        </div>

        <div className="space-y-10 relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-80"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={textVariant(index + 0.7)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-6 text-white group"
            >
              <div className="w-12 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg transform transition-all group-hover:scale-110">
                {step.icon}
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={textVariant(7)}
            initial="hidden"
            animate="show"
            className="mt-10 text-center"
          >
            <Button
              size="sm"
              className="transform hover:scale-110 transition-transform duration-300 shadow-xl"
            >
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Let's Explore
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
