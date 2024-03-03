import { useRef } from "react";

export default function Focus() {
  let changeRef = useRef(null);
  const changeHandler = () => {
    changeRef.current.textContent = "Allahuakbar";
    console.log(changeRef);
  };
  return (
    <>
      <h1 ref={changeRef}>Alhumduuillah.</h1>
      <button onClick={changeHandler}>Click</button>
    </>
  );
}
