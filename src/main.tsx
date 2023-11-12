import React from 'react'
import ReactDOM from 'react-dom/client'

import Homepage from './Homepage.tsx'
import ElementX from './pages/ElementX.tsx';
import RougeRacer from './pages/RougeRacer.tsx';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/games/",
    element: <Homepage />,
  },
  {
    path: "/games/rogue-racer",
    element: <RougeRacer />,
  },
  {
    path: "/games/element-x",
    element: <ElementX />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
