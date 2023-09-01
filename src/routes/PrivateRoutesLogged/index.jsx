import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutesLogged = () => {
  const { token } = JSON.parse(localStorage.getItem("@UserData")) || {};

  return !token ? <Outlet /> : <Navigate to="dashboard" />;
};
