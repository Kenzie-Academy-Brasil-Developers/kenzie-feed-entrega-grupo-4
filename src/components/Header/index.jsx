import Logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <header>
        <div className={styles.headerBox}>
          <img src={Logo} alt="LogoKenzieFeed" />
          <button className="btn-solid-s">Acessar</button>
        </div>
      </header>
    </div>
  );
};
