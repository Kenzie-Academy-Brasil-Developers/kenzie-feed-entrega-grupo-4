import LoadingIcon from "../../assets/loading.gif";
import styles from "./style.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <img src={LoadingIcon} alt="carregando" />
    </div>
  );
};
