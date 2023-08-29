import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <fieldset>
      <div>
        <input type={isHidden ? "password" : "text"} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      {/* {error ? <p>{error.message}</p> : null} */}
    </fieldset>
  );
};
