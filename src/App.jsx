import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout.jsx";
import Header from './components/header.jsx';
import Home from './pages/Home.jsx';
import Compare from './pages/Compare.jsx';
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
            </Route>
          </Routes>
        </>
    </Router>
  );
}

export default App;
