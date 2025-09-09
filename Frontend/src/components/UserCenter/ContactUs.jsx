import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const toastId = toast.info("Please wait, Content is loading...", {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: true,
    });

    setTimeout(() => {
      toast.dismiss(toastId);
    }, 5000);

    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => setIsLoading(false);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="help-center"
      className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
    >
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="text-center mb-2">
        <motion.div variants={textVariant(0.4)} initial="hidden" animate="show">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Contact Form
          </h2>
        </motion.div>
        <motion.div variants={textVariant(1)} initial="hidden" animate="show">
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto opacity-90">
            Easily connect with us through our contact page. Submit your
            details, and we’ll respond promptly to assist you.
          </p>
        </motion.div>
        <motion.div variants={textVariant(1.4)} initial="hidden" animate="show">
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
          <p className="text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      )}
      <div className="ml-2">
        <div
          className={`visme_d ${isLoading ? "hidden" : "block"}`}
          data-title="InvestIQ-ContactForm"
          data-url="pvok9zx4-investiq-contactform"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="116086"
        ></div>
      </div>
    </section>
  );
}
