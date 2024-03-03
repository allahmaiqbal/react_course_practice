import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const focusRef = useRef(null);
  const handlerFocus = () => {
    focusRef.current.focus();
  };
  return (
    <>
      <MyInput type={"text"} ref={focusRef} />

      <button onClick={handlerFocus}>Click</button>
    </>
  );
}
