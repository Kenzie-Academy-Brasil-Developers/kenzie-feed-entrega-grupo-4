import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <input ref={ref} {...rest} />
      {error ? <p className="paragraph small red">{error.message}</p> : null}
    </div>
  );
});
