import { Link } from "react-router-dom";
import React from "react";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { MdArrowBack } from "react-icons/md";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <DefaultTemplate>
      <main>
        <div className={styles.containerBox}>
          <Link to={"/loginPage"} className="btn-outline icon">
            <MdArrowBack size={24} />
            <span>Voltar</span>
          </Link>
          <section>
            <h1 className="title two black">Cadastre um usuário</h1>
            <span>Preencha os campos corretamente para fazer login</span>
            <div>
              <RegisterForm />
            </div>
          </section>
        </div>
      </main>
    </DefaultTemplate>
  );
};
