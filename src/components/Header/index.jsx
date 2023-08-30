import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <header>
        <div className={styles.headerBox}>
          <img src={Logo} alt="LogoKenzieFeed" onClick={() => navigate("/")} />
          <button className="btn-small" onClick={() => navigate("/loginPage")} >Acessar</button>
        </div> 
      </header>
    </div>
  );
};
