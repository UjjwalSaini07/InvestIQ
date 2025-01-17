import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Sidebar from './components/sidebar.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/home" element={<Home />}>
      <Route index element={<Home />} />
    </Route>
    </>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
