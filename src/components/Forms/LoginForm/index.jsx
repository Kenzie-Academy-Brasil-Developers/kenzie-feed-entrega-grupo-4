import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { UserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading] = useState(false);

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputContainer}>
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
      </div>
      <button className="btn-large" type="submit">
        {!loading ? "Entrar" : "Entrando..."}
      </button>
      <div className={styles.divRegister}>
        <span>Não é cadastrado?</span>
        <Link to={"/register"}>Cadastre-se</Link>
      </div>
    </form>
  );
};
