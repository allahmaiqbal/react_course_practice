import { useRef, useState } from "react";

export default function SopeWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let intervelRef = useRef(null);

  const handleStart = () => {
    setNow(Date.now());
    setStartTime(Date.now());
    intervelRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervelRef.current);
  };
  let secoundPass = 0;
  if (startTime != null && now != null) {
    secoundPass = (now - startTime) / 1000;
  }
  return (
    <>
      <p>{secoundPass.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
