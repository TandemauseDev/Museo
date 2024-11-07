import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Menu from './components/Menu.jsx';
import Inicio from './pages/Inicio.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/register.jsx'
import Piezas from './pages/Piezas.jsx'
import Admin from './pages/admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>,
    children: [
      { index: true, element: <App /> },
      { path: 'Inicio', element: <Inicio /> },
      { path: 'Login', element: <Login /> },
      { path: 'Registro', element: <Register/> },
      { path: 'Piezas', element: <Piezas/> },
      { path: 'admin', element: <Admin/> },

      




    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
);
