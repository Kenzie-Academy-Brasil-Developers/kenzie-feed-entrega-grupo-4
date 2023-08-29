import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
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
      <div>
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
      <button type="submit">
        {!loading ? "Cadastre-se" : "Cadastrando..."}
      </button>
    </form>
  );
};
