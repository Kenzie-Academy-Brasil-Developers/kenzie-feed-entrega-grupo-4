import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button
          className={styles.buttonEye}
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? (
            <FaEye size={20} color="#00000080" />
          ) : (
            <FaEyeSlash size={20} color="#00000080" />
          )}
        </button>
      </div>
      {error ? <p className="paragraph small red">{error.message}</p> : null}
    </div>
  );
});
