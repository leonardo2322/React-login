import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "../pages/login.jsx";
import Home from "../pages/home";
import { Me } from "../pages/me";
import RouterSecurity from "../components/RouterSecurity.jsx";
import ControlErrors from "../components/ControlErrors.jsx";
import Layout from "../components/Layout.jsx";
import { useSelector } from "react-redux";
const Approuter = () => {
  const user = useSelector((state) => state.user);
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
          path: "home/",
          element: (
            <RouterSecurity user={user.user}>
              <Home />
            </RouterSecurity>
          ),
        },
        {
          path: "Profile/",
          element: (
            <RouterSecurity user={user.user}>
              <Me />
            </RouterSecurity>
          ),
        },
      ],
    },
    {
      path: "/home/",
      element: (
        <RouterSecurity user={user.user}>
          <Home />
        </RouterSecurity>
      ),
      errorElement: <ControlErrors />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approuter;
