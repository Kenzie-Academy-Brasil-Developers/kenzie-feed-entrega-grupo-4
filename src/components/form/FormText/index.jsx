import { forwardRef } from "react";

export const FormText = forwardRef(({ ...rest }, ref) => {
  return (
    <fieldset>
        <input ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
    </fieldset>
  );
});
