import React from 'react';
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Sidebar from './components/sidebar.jsx';
import Home from './pages/home.jsx';

const App = () => {
  return (
    <div  className="App">
      <>
      <Sidebar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </>
    </div>
  );
};

export default App;


// import React from 'react';

// function App() {
//   return (
//     <div style={{ alignContent: "center", textAlign: "center", padding: "20px" }}>
//       <h1>InvestIQ - Fintech App</h1>
//     </div>
//   );
// }

// export default App;
