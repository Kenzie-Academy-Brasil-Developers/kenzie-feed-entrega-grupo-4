import { forwardRef } from "react";
import styles from "./style.module.scss";

export const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.textAreaBox}>
      <textarea className="paragraph" ref={ref} {...rest}></textarea>
      {error ? <p className="paragraph small red">{error.message}</p> : null}
    </div>
  );
});
