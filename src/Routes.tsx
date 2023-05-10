import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import CadastroPsicologo from './pages/CadastroPsicologo'

export default function Routes() {
  const routes = createBrowserRouter([{
    path: '/',
    element: <Inicio />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <CadastroPsicologo />
  }])

  return <RouterProvider router={routes} />

}