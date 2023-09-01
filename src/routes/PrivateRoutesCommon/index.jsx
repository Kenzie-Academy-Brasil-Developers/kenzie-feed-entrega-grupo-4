import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutesCommon = () => {
  const { token } = JSON.parse(localStorage.getItem("@UserData")) || {};

  return token ? <Outlet /> : <Navigate to="/loginPage" />;
};
