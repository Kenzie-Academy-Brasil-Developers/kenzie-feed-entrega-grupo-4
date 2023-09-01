import banner from "../../assets/Banner.jpeg";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LoginForm } from "../../components/Forms/LoginForm";
import styles from "./style.module.scss";

export const LoginPage = () => {
  return (
    <DefaultTemplate>
      <div className={styles.container}>
        <section className={styles.banner}>
          <img src={banner} alt="" />
        </section>
        <section className={styles.form}>
          <h1 className="title two black textCenter">Acesse o KenzieFeed</h1>
          <span className="paragraph black textCenter">
            Preencha os campos corretamente para fazer login
          </span>
          <LoginForm />
        </section>
      </div>
    </DefaultTemplate>
  );
};
