// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { formSchema } from "./formSchema";
// import { UserContext } from "../../providers/userContext";
// import { useContext } from "react";
import { FormText } from "../../components/form/FormText";
import React from "react";

import { InputPassword } from "../../components/form/InputPassword";
// import styles from "./style.module.scss";

export const RegisterPage = () => {
  // const { registerUser } = useContext(UserContext);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(formSchema),
  // });

  const submitForm = (formData) => {
    registerUser(formData);
  };

  return (
    <main>
      <button onClick={() => navigate("/")}>Voltar</button>
      <section>
        <h1>Cadastre um usuário</h1>
        <span>Preencha os campos corretamente para fazer login</span>

        <div>
          <form>
            <FormText id={"name"} type={"text"} placeholder={"Nome"} />
            <FormText id={"email"} type={"email"} placeholder={"Email"} />
            <InputPassword
              id={"password"}
              type={"password"}
              placeholder={"Senha"}
            />
            <InputPassword
              id={"password"}
              type={"password"}
              placeholder={"Confirmar senha"}
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
