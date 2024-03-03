import { useState } from "react";
import "./App.css";
import CarFrinds from "./component/CatFrinds";

function App() {
  const [show, setShow] = useState(true);
  // const handleShow = () => {
  //   setShow((pre) => !pre);
  // };
  return (
    <>
      {show && <CarFrinds />}
      <button onClick={() => setShow((pre) => !pre)}>
        {show ? "show" : "hide"}
      </button>
    </>
  );
}

export default App;
