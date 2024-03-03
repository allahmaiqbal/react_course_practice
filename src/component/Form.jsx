import { useRef } from "react";

export default function Form() {
  const focusRef = useRef(null);
  const handlerFocus = () => {
    focusRef.current.focus();
  };
  return (
    <>
      <input ref={focusRef} type="text" />
      <button onClick={handlerFocus}>Click</button>
    </>
  );
}
