import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Carts from './pages/Carts';
import Login from './pages/Login';
import NewProducts from './pages/NewProducts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/', element: <Home /> },

      { path: '/carts', element: <Carts /> },
      { path: '/products', element: <Products /> },
      { path: '/products/new', element: <NewProducts /> },

      { path: '/login', element: <Login /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
