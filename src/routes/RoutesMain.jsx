import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AllPostsPage } from "../pages/AllPostsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { EditPage } from "../pages/DashboardPage/EditPage";
import { ViewPost } from "../pages/ViewPost";
import { PrivateRoutesLogged } from "./PrivateRoutesLogged";
import { PrivateRoutesCommon } from "./PrivateRoutesCommon";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutesLogged />}>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<HomePage />} />
      <Route path="/editPage" element={<EditPage />} />
      <Route path="/allPosts" element={<AllPostsPage />} />
      <Route path="/viewPost" element={<ViewPost />} />
      <Route path="*" element={<ErrorPage />} />

      <Route element={<PrivateRoutesCommon />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
