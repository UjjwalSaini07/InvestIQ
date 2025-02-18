import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/common/Layout";
import Header from './components/common/Header';
import Home from './pages/Home.jsx';
import Compare from './pages/Compare.jsx';
import HelpCenter from './components/UserCenter/HelpCenter.jsx';
import './App.scss';

function App() {
  return (
    <Router>
        <Header/>
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/helpcenter" element={<HelpCenter />} />
            </Route>
          </Routes>
        </>
    </Router>
  );
}

export default App;
