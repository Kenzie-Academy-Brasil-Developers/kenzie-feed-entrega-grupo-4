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

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
