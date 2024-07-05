// src/index.js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './routes';
import { UserProvider } from './contexts/UserContext';

import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider> {/* Envolve o RouterProvider */}
      <RouterProvider router={router} />
    </UserProvider> 
  </React.StrictMode>
);