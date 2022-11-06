import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css';
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Create from "./Pages/Create";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        index: true
      },
      {
        path: '/detail',
        element: <Detail/>
      },
      {
        path: '/create-product',
        element: <Create/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
