import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";

import Button from "./Button";

export default function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90">
      {children}
      <form action="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
