import { createContext } from "react";
import { apiFeed } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
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
