import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading] = useState(false);

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputContainer}>
        <Input
          type={"text"}
          placeholder={"Nome"}
          {...register("name")}
          error={errors.name}
          disabled={loading}
        />
        <Input
          type={"email"}
          placeholder={"E-mail"}
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
      </div>
      <div className={styles.inputContainer}>
        <InputPassword
          placeholder={"Senha"}
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <InputPassword
          placeholder={"Confirmar senha"}
          {...register("confirm_password")}
          error={errors.confirm_password}
          disabled={loading}
        />
      </div>
      <button type="submit" className="btn-medium">
        {!loading ? "Cadastre-se" : "Cadastrando..."}
      </button>
    </form>
  );
};

