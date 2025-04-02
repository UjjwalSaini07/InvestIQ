import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "./components/common/Layout";
import Header from "./components/common/Header";
import Preloader from "./components/common/Preloader";
import Home from "./pages/home";
import Compare from "./pages/compare";
import HelpCenter from "./components/UserCenter/HelpCenter";
import ContactUs from "./components/UserCenter/ContactUs";
import About from "./components/UserCenter/About";
import AuthPage from "./pages/authPage";
import Watchlist from "./pages/watchlist";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import { useSelector } from "react-redux";
import Error404 from "./components/common/Error404";
import LogoFetcher from "./components/extra/ForeignCompanyLogo";
import StockFetcher from "./components/extra/FetchingStockData";
import Tools from "./components/FinanceTools/FinanceTools";
import ChatBot from "./components/BOT/botpresschat";
import "./App.scss";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/forgot", "/verifyotp"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);
  const user = useSelector((state) => state.auth.user);
  const otpRequested = useSelector((state) => state.auth.otpRequested);

  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {!shouldHideHeader && <Header />}
          <div>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/logofetcher" element={<LogoFetcher />} />
                <Route path="/stockfetcher" element={<StockFetcher />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/chatwithbot" element={<ChatBot />} />
                {/* Auth Pages - Public */}
                <Route path="/login" element={<AuthPage />} />
                <Route path="/register" element={<AuthPage />} />
                <Route path="/forgot" element={<AuthPage />} />
                <Route path="/error404" element={<Error404 />} />
                <Route path="*" element={<Navigate to="/error404" />} />
              </Route>

              <Route element={<ProtectedRoute condition={user} redirectTo="/login" />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/watchlist" element={<Watchlist />} />
              </Route>
              <Route element={<ProtectedRoute condition={otpRequested} redirectTo="/register" />}>
                <Route path="/verifyotp" element={<AuthPage />} />
              </Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
