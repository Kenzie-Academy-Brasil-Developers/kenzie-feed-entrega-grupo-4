import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const FormPassword = forwardRef(({ ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <fieldset>
        <div>
          <input
            type={isHidden ? "password" : "text"}
            ref={ref}
            {...rest}
          />
          <button
            type="button"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
        </div>
        {error ? <p>{error.message}</p> : null}
    </fieldset>
  );
});
