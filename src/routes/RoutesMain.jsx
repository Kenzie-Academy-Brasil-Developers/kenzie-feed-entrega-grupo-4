import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AllPostsPage } from "../pages/AllPostsPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/allPosts" element={<AllPostsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
