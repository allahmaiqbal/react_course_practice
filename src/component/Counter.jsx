import { useRef, useState } from "react";

export default function Counter() {
  let ref = useRef(0);
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((pre) => pre + 1);
    console.log((ref.current = ref.current + 1), "gdfg");
  };
  return (
    <>
      <button onClick={handleClick}>Click Here.{counter}</button>
    </>
  );
}
