import img from "../RegisterPage/arrow.svg";
import { useNavigate } from "react-router-dom";
import { FormText } from "../../componets/forms/FormText";
import { FormPassword } from "../../componets/forms/FormPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import React from "react";
import { UserContext } from "../../providers/userContext";
import { useContext } from "react";
// import styles from "./style.module.scss";


export const RegisterPage = () => {
    const navigate = useNavigate();
    const { registerUser } = useContext(UserContext);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(formSchema),
    });
  
    const submitForm = (formData) => {
      registerUser(formData);
    };
  
    return (
      <main>
        <img src={img} alt="return" />
        <button onClick={() => navigate("/")}>Voltar</button>
        <section>
          <h1>Cadastre um usuário</h1>
          <span>Preencha os campos corretamente para fazer login</span>
  
          <div>
            <form onSubmit={handleSubmit(submitForm)}>
              <FormText
                id={"name"}
                type={"text"}
                placeholder={"Name"}
                {...register("name")}
                error={errors.name}
              />
  
              <FormText
                id={"email"}
                type={"email"}
                placeholder={"Name"}
                {...register("email")}
                error={errors.email}
              />
              <FormPassword
                id={"password"}
                placeholder={"Senha"}
                {...register("password")}
                error={errors.password}
              />
              <FormPassword
                placeholder={"Confirmar senha"}
                {...register("confirmPassword")}
                error={errors.confirmPassword}
              />
              <div>
                <button type="submit">Cadastrar-se</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  };