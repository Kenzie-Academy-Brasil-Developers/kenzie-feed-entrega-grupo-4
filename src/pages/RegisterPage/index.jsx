import { Link } from "react-router-dom";
import React from "react";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const RegisterPage = () => {
  return (
    <main>
      <Link to={"/"}>Voltar</Link>
      <section>
        <h1>Cadastre um usuário</h1>
        <span>Preencha os campos corretamente para fazer login</span>

        <div>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};
