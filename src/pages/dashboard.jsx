import React, { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoStockDashboard from "../components/dashboard/cryptostockdashboard";

function Dashboard() {
  const dashboardRef = useRef(null);
  const hasShownToast = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownToast.current) {
          toast.info(
            "Dashboard API has very high Traffic so it takes few minutes to load sometimes, so please be patience or check it out after few minutes...",
            {
              position: "top-right",
              autoClose: 12000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            }
          );
          hasShownToast.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);

  return (
    <main ref={dashboardRef}>
      <ToastContainer />
      <CryptoStockDashboard />
    </main>
  );
}

export default Dashboard;
