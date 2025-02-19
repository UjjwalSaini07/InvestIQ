import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import HelpCenter from "./components/UserCenter/HelpCenter";
import ContactUs from "./components/UserCenter/ContactUs";
import ProtectedRoute from "./components/utlis/ProtectedRoutes";
import "./App.scss";

function App() {
  const [user, setUser] = useState(false);

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
          </Route>

          <Route
            element={<ProtectedRoute condition={user} redirectTo="/signin" />}
          >
            <Route path="/dashboard" element={<HelpCenter />} />
            <Route path="/watchlist" element={<HelpCenter />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
