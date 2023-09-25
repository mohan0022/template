import { Navigate, Outlet } from "react-router";

export const AuthPrivateRoute = () => {
  return localStorage.getItem("logindata") === "" ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
};

export const DashboardPrivateRoute = () => {
  return localStorage.getItem("logindata") !== "" ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};
