import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import Logo from "../../assets/logo.gif";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <div className={styles.textContainer}>
        <p className="title-2">Página não encontrada</p>
        <img src={Logo} alt="" />
      </div>
      <button className={styles.button404} onClick={() => navigate("/")}>
        Voltar a página inicial
      </button>
    </div>
  );
};
