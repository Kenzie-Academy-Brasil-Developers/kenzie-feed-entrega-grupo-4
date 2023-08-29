import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const InputPassword = forwardRef(({ error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <div>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </button>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
