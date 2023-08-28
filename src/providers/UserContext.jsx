import { createContext } from "react";
import { apiFeed } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const userLogin = async (dataLogin) => {
    try {
      const response = await apiFeed.post("/login", dataLogin);
      const userData = {
        userId: response.data.user.id,
        name: response.data.user.name,
        token: response.data.accessToken,
      };
      localStorage.setItem("@UserData", JSON.stringify(userData));
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
    }
  };
  
  const userRegister = async (formData, reset, setLoading) => {
    try {
      setLoading(true);
      await apiFeed.post("/users", formData);
      toast.success("Usuário criado com sucesso");
      reset();
      // navigate("/");
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        toast.error("Usuário já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@token-KenzieHub");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
