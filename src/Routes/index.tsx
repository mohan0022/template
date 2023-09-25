import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Views/AuthScreens/Login";
import Dashboard from "../Views/HomeScreens/Dashboard/Dashboard";
import { AuthPrivateRoute, DashboardPrivateRoute } from "./PrivateRoutes";

export const RoutePaths = [
  {
    path: "/",
    element: <AuthPrivateRoute />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];
