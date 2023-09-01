import banner from "../../assets/Banner.jpeg";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main__login}>
        <div className="container">
          <section className={styles.sectionLogin__container}>
            <figure className={styles.bannerLogin__container}>
              <img src={banner} alt="" />
            </figure>
            <div className={styles.accessLoginForm}>
              <h1>Acesse o KenzieFeed</h1>
              <span className="paragraph small textCenter">
                Preencha os campos corretamente para fazer login
              </span>
              <LoginForm />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
