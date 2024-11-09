import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className="bg-zinc-800 px-3 py-2 block my-2 w-full"
    >
      {props.children}
    </textarea>
  );
});
