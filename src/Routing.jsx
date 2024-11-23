import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<App />} /> */}
    </Route>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
