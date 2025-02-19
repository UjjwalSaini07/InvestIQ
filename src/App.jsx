import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import HelpCenter from "./components/UserCenter/HelpCenter";
import ContactUs from "./components/UserCenter/ContactUs";
import AuthPage from "./pages/authPage";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import { useSelector } from "react-redux";
import "./App.scss";

function App() {
  const user = useSelector((state) => state.auth.user);
  const otpRequested = useSelector((state) => state.auth.otpRequested);

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="/contactus" element={<ContactUs />} />
            {/* Auth Pages - Public */}
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/forgot" element={<AuthPage />} />
          </Route>

          <Route
            element={<ProtectedRoute condition={user} redirectTo="/login" />}
          >
            <Route path="/dashboard" element={<ContactUs />} />
            <Route path="/watchlist" element={<ContactUs />} />
          </Route>
          <Route
            element={
              <ProtectedRoute condition={otpRequested} redirectTo="/register" />
            }
          >
            <Route path="/verifyotp" element={<AuthPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
