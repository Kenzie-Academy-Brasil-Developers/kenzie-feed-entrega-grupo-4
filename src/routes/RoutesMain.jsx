import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AllPostsPage } from "../pages/AllPostsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { EditPage } from "../pages/DashboardPage/EditPage";
import { ViewPost } from "../pages/ViewPost";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/editPage" element={<EditPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/allPosts" element={<AllPostsPage />} />
      <Route path="/viewpost" element={<ViewPost />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
