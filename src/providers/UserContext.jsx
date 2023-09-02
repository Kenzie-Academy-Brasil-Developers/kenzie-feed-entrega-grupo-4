import { createContext } from "react";
import { apiFeed } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const userLogin = async (dataLogin) => {
    try {
      const response = await apiFeed.post("login", dataLogin);
      const userData = {
        userId: response.data.user.id,
        name: response.data.user.name,
        token: response.data.accessToken,
      };
      localStorage.setItem("@UserData", JSON.stringify(userData));
      navigate("dashboard");
      toast.success("Logado com sucesso!");
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
    }
  };

  const userRegister = async (formData) => {
    try {
      const { data } = await apiFeed.post("users", formData);
      toast.success("Usuário criado com sucesso");
      navigate("/loginPage");
    } catch (error) {
      if (error.response.data === "Email already exists") {
        toast.error("Usuário já cadastrado");
      }
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@UserData");
    toast.warning("Deslogado com sucesso");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
