import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function MyComponent() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow((t) => !t)}>
        {show ? "show" : "hide"}
      </button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      {show && (
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      )}

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Play" : "Pause"}
      </button>
    </>
  );
}
