import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "../pages/login.jsx";
import Home from "../pages/home";
import { Me } from "../pages/me";
import RouterSecurity from "../components/RouterSecurity.jsx";
import ControlErrors from "../components/ControlErrors.jsx";
import Layout from "../components/Layout.jsx";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ControlErrors />,
      children: [
        {
          index: true,
          element: <Test />,
        },
        {
          path: "/home/",
          element: (
            <RouterSecurity>
              <Home />
            </RouterSecurity>
          ),
        },
        {
          path: "/Profile/",
          element: (
            <RouterSecurity>
              <Me />
            </RouterSecurity>
          ),
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approuter;
