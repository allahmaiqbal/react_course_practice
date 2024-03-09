import { useEffect, useRef } from "react";
import { creationConnection } from "../utils/chat";
export default function VideoPlayer({ src, isPlaying }) {
  const playRef = useRef(null);

  useEffect(() => {
    const connect = creationConnection();
    connect.connect();
    if (isPlaying) {
      // console.log("video play()");
      playRef.current.play();
    } else {
      // console.log("video pause()");
      playRef.current.pause();
    }
    return () => {
      connect.disconnect();
    };
  }, [isPlaying]);

  return (
    <>
      <video ref={playRef} src={src} />
    </>
  );
}
