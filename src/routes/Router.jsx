import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/pages/Auth/ProtectedRoutes";

// lazy
const Chat = lazy(() => import("../pages/Chat"));

const Router = (props) => {
  const route = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute {...props} />,
      children: [
        {
          path: "/",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
