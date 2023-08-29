import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <p className="paragraph">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </div>
    </footer>
  );
};
