import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ujjwal from "../../assets/Landing/BoyImage.jpg";
import gayatri from "../../assets/Landing/GirlImage.jpg";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-2"
    >
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="text-center mb-12">
        <motion.div variants={textVariant(0.4)} initial="hidden" animate="show">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            About Invest IQ
          </h2>
        </motion.div>
        <motion.div variants={textVariant(0.8)} initial="hidden" animate="show">
          <p className="text-lg text-white mt-4 max-w-3xl mx-auto opacity-90">
            Invest IQ delivers real-time cryptocurrency and stock analysis,
            empowering smarter investments with advanced tools, comprehensive
            data, and intuitive design.
          </p>
        </motion.div>
        <motion.div variants={textVariant(1)} initial="hidden" animate="show">
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        <motion.div variants={textVariant(1.2)} initial="hidden" animate="show">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
            <motion.div
              variants={textVariant(1.7)}
              initial="hidden"
              animate="show"
            >
              <h3 className="text-2xl font-bold">Comprehensive Insights</h3>
            </motion.div>
            <motion.div
              variants={textVariant(2)}
              initial="hidden"
              animate="show"
            >
              <p className="mt-2 opacity-90">
                Access real-time cryptocurrency and stock analysis with detailed
                metrics, empowering you to make informed investment decisions
                confidently.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={textVariant(2.4)} initial="hidden" animate="show">
          <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
            <motion.div
              variants={textVariant(2.5)}
              initial="hidden"
              animate="show"
            >
              <h3 className="text-2xl font-bold">Comparison & News Feed</h3>
            </motion.div>
            <motion.div
              variants={textVariant(3)}
              initial="hidden"
              animate="show"
            >
              <p className="mt-2 opacity-90">
                Compare market trends effortlessly and stay informed with
                curated news feeds tailored to your investment interests,
                business, forex and needs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={textVariant(3.5)} initial="hidden" animate="show">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
            <motion.div
              variants={textVariant(4)}
              initial="hidden"
              animate="show"
            >
              <h3 className="text-2xl font-bold">Dashboard & Watchlist</h3>
            </motion.div>
            <motion.div
              variants={textVariant(4.4)}
              initial="hidden"
              animate="show"
            >
              <p className="mt-2 opacity-90">
                Customize your dashboard and build personalized watchlists to
                monitor your favorite stocks and crypto in one convenient place.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div variants={textVariant(4.6)} initial="hidden" animate="show">
        <div className="mt-16 text-center">
          <div>
            <motion.div
              variants={textVariant(4.9)}
              initial="hidden"
              animate="show"
            >
              <h3 className="text-4xl font-bold text-white">
                Meet Our Team - U & G Trailbrazzer
              </h3>
            </motion.div>
            <motion.div
              variants={textVariant(5.1)}
              initial="hidden"
              animate="show"
            >
              <p className="mt-4 text-lg text-white opacity-90">
                As the driving forces behind this remarkable vision, we combine
                innovation and creativity to revolutionize the future of
                investment solutions. Together, we are shaping a smarter, more
                dynamic approach to empower tomorrow's financial landscape.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={textVariant(5.4)}
            initial="hidden"
            animate="show"
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                variants={textVariant(5.8)}
                initial="hidden"
                animate="show"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex py-4 items-center text-white">
                  <div className="flex-shrink-0 flex flex-col items-center w-1/4">
                    <motion.div
                      variants={textVariant(6.1)}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4">
                        <img
                          src={ujjwal}
                          alt="Ujjwal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      variants={textVariant(6.3)}
                      initial="hidden"
                      animate="show"
                    >
                      <h4 className="text-2xl font-semibold mb-3">Ujjwal</h4>
                    </motion.div>
                    <motion.div
                      variants={textVariant(6.6)}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/UjjwalSaini07"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200 transition"
                        >
                          <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ujjwalsaini07/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200 transition"
                        >
                          <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex-grow w-3/4 mr-2">
                    <motion.div
                      variants={textVariant(6.9)}
                      initial="hidden"
                      animate="show"
                    >
                      <p className="text-2sm text-gray-200 leading-relaxed">
                        Creative Frontend Developer with UI/UX expertise,
                        skilled in backend API integration and modern
                        frameworks. Passionate about delivering responsive,
                        accessible, and performance-driven web applications that
                        balance aesthetics with functionality, while exploring
                        innovative solutions.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={textVariant(7.3)}
                initial="hidden"
                animate="show"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg py-4 flex items-center text-white">
                  <div className="flex-shrink-0 flex flex-col items-center w-1/4">
                    <motion.div
                      variants={textVariant(7.6)}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4">
                        <img
                          src={gayatri}
                          alt="Gayatri"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      variants={textVariant(7.9)}
                      initial="hidden"
                      animate="show"
                    >
                      <h4 className="text-2xl font-semibold mb-3">Gayatri</h4>
                    </motion.div>
                    <motion.div
                      variants={textVariant(8.2)}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/Gayatrisin123"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200 transition"
                        >
                          <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/gayatri-singh-5012b5301/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200 transition"
                        >
                          <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-3/4 mr-2">
                    <motion.div
                      variants={textVariant(8.6)}
                      initial="hidden"
                      animate="show"
                    >
                      <p className="text-2sm text-gray-200 leading-relaxed">
                        Crafting elegant code and designs to solve complex
                        problems with creativity and precision. Dedicated to
                        delivering innovative, user-centric solutions,
                        optimizing workflows, and pushing technological
                        boundaries to turn ideas into impactful experiences that
                        empower businesses and delight users.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 text-center">
        <motion.div variants={textVariant(9)} initial="hidden" animate="show">
          <h3 className="text-4xl font-bold text-white">
            Explore Our Crypto and Stock Platform
          </h3>
        </motion.div>
        <motion.div variants={textVariant(9.4)} initial="hidden" animate="show">
          <p className="mt-4 text-lg text-white opacity-90">
            Discover Invest IQ effortlessly. Dive into features like insights,
            comparisons, and dashboards—all designed for seamless navigation.
          </p>
        </motion.div>
        <motion.div variants={textVariant(9.8)} initial="hidden" animate="show">
          <div className="mt-5">
            <Link
              to="/"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center text-white text-lg hidden md:block">
        <a
          className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 p-2 rounded"
          href="https://github.com/UjjwalSaini07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Ujjwal & Gayatri
        </a>
      </div>
    </section>
  );
}
