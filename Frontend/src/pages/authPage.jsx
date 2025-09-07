import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

// import img1 from "../assets/Auth/Login-pana.svg";
import img1 from "../assets/Auth/AuthImg3.png";
import img2 from "../assets/Auth/Login-amico.svg";
import img3 from "../assets/Auth/Online-world-cuate.svg";
import img4 from "../assets/Auth/AuthImg1.png";
import img5 from "../assets/Auth/AuthImg2.png";
import Carousel from "../components/auth/Carousel";
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import ForgetPage from "../components/auth/ForgotPage";
import Otpverify from "../components/auth/OtpVerification";

const ReuseCompo = ({ children, animationVariants }) => (
  <motion.section
    className="w-full md:w-1/2 flex items-center justify-center"
    variants={animationVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
);

const MotionWrapper = ({ children, animationVariants }) => (
  <motion.section
    className="w-full md:w-1/2 items-center justify-center"
    variants={animationVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
);

export default function AuthPage() {
  const location = useLocation();
  const slides = [img1, img2, img3, img4, img5];
  const isSignIn = location.pathname === "/login";
  const isForget = location.pathname === "/forgot";
  const isOtpverify = location.pathname === "/verifyotp";

  const [prevPath, setPrevPath] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const isSwitching = prevPath !== location.pathname;
  const slideDirection = isSignIn ? -50 : 50;

  const animationVariants = {
    initial: { opacity: 0, x: isSwitching ? slideDirection : -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isSwitching ? -slideDirection : 50 },
  };

  return (
    <div className={`flex h-screen ${isMobile ? "flex-col" : "md:flex-row"}`}>
      <AnimatePresence mode="wait">
        {isSignIn ? (
          isMobile ? (
            <>
              <ReuseCompo animationVariants={animationVariants}>
                <Carousel slides={slides} />
              </ReuseCompo>
              <MotionWrapper animationVariants={animationVariants}>
                <LoginPage />
              </MotionWrapper>
            </>
          ) : (
            <>
              <MotionWrapper animationVariants={animationVariants}>
                <LoginPage />
              </MotionWrapper>
              <ReuseCompo animationVariants={animationVariants}>
                <Carousel slides={slides} />
              </ReuseCompo>
            </>
          )
        ) : isOtpverify ? (
          <>
            <ReuseCompo animationVariants={animationVariants}>
              <Carousel slides={slides} />
            </ReuseCompo>
            <ReuseCompo animationVariants={animationVariants}>
              <Otpverify />
            </ReuseCompo>
          </>
        ) : isForget ? (
          <>
            <ReuseCompo animationVariants={animationVariants}>
              <Carousel slides={slides} />
            </ReuseCompo>
            <ReuseCompo animationVariants={animationVariants}>
              <ForgetPage />
            </ReuseCompo>
          </>
        ) : (
          <>
            <ReuseCompo animationVariants={animationVariants}>
              <Carousel slides={slides} />
            </ReuseCompo>
            <MotionWrapper animationVariants={animationVariants}>
              <RegisterPage />
            </MotionWrapper>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
