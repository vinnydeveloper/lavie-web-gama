import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Login from './pages/Login'

export default function Routes(){
  const routes = createBrowserRouter([{
    path: '/',
    element: <Inicio />
  },
  {
    path: '/login',
    element: <Login />
  }])

  return <RouterProvider router={routes}/>

}