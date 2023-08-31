import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import LogoError from "../../assets/LogoError.gif";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.errorGif}>
            <span>4</span>
            <img src={LogoError} alt="" />
            <span>4</span>
          </h1>
          <p>Página não encontrada</p>
          <button className="btn-medium" onClick={() => navigate("/")}>
            Voltar a página inicial
          </button>
        </div>
      </div>
    </main>
  );
};
