import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SigninPage } from './pages/SiginPage';
import { LoginPage } from './pages/LoginPage';
import { BlogPages } from './pages/BlogPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signin",
    element: <SigninPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/blogs",
    element: <BlogPages/>,
  },
 
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


