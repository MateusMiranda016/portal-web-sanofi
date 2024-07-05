// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/Auth'; 

const ProtectedRoute = ({ children, route }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />; 
  }

  return children;
};

export default ProtectedRoute;