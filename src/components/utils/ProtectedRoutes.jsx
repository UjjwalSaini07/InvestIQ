import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ condition, redirectTo }) => {
  return condition ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
