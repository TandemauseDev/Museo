import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Menu from './components/Menu.jsx';
import Inicio from './pages/Inicio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>,
    children: [
      { index: true, element: <App /> },
      { path: 'Inicio', element: <Inicio /> },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
);
