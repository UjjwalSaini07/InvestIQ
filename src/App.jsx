import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout.jsx";
// import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      {/* <div style={{ display: 'flex' }}>
        <Sidebar /> */}
        <Header/>
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </>
      {/* </div> */}
    </Router>
  );
}

export default App;
