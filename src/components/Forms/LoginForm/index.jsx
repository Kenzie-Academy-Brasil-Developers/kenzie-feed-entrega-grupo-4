import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type={"email"}
        placeholder={"E-mail"}
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        placeholder={"Senha"}
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <button type="submit">{!loading ? "Entrar" : "Entrando..."}</button>
      <span> Não é cadastrado?</span>
      <Link to={"/register"}>Cadastre-se</Link>
    </form>
  );
};
