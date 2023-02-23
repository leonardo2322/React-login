import { BrowserRouter as Routers, Routes, Route, Link , createBrowserRouter, RouterProvider} from 'react-router-dom'
import Test from '../pages/login.jsx'
import Home from '../pages/home'
import { Me } from '../pages/me'
import RouterSecurity from '../components/RouterSecurity.jsx'
const Approuter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Test />
        },
        {
            path:"/home/:id",
            element: <RouterSecurity>
                <Home />
            </RouterSecurity> 
        },
        {
            path:"/home",
            element: <Me />
        },
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Approuter