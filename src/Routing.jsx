import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import App from './App.jsx';
import home from './pages/home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    {/* // <Route path="/" element={<App />}> */}
      <Route index element={<home />} /> 
    </Route>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
