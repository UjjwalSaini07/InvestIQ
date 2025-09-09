import React, { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import CryptoStockDashboard from "../components/dashboard/cryptostockdashboard";

function Dashboard() {
  const dashboardRef = useRef(null);
  const hasShownToast = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownToast.current) {
          toast.info(
            "Dashboard API has very high Traffic so it takes a few minutes to load sometimes. Please be patient or check it out again later...",
            {
              position: "top-right",
              autoClose: 12000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
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
      observer.disconnect(); // ✅ safer cleanup than unobserve
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | InvestIQ</title>
      </Helmet>
      <main ref={dashboardRef}>
        <CryptoStockDashboard />
      </main>
    </>
  );
}

export default Dashboard;
