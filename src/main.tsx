import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Capa } from './routes/Capa';
import { ErrorNotFound } from './components/ErrorNotFound';
import ToDo from './routes/ToDo';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Capa />
    ),
    errorElement: (
      <ErrorNotFound />
    ),
  },
  {
    path: "/to-do",
    element: (
      <ToDo />
    ),
    errorElement: (
      <ErrorNotFound />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)