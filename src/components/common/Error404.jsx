import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorContainer = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  zIndex: 1,
};

const splineModel = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
};

function Error404() {
  useEffect(() => {
    toast.info("You lost in the horizon and encountered Error 404. Press home.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div style={ErrorContainer}>
      <Spline 
        style={splineModel} 
        scene="https://prod.spline.design/Z6Qeg67mpVMSXmY2/scene.splinecode" 
      />
      <ToastContainer />
    </div>
  );
}

export default Error404;
