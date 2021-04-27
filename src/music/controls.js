import React, { useRef, useState } from "react";
import "./controls.css";
import nights from "./songs/NIGHTS.mp3";
import endless from "./songs/endless.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";

export default function Controls({ song, musicState }) {
  const audio = useRef("audio_tag");
  const [ctrl, setCtrl] = useState("paused");
  const toggle = () => {
    if (audio.current.paused) {
      audio.current.play();
      setCtrl("playing");
      musicState(true);
    } else {
      audio.current.pause();
      setCtrl("paused");
      musicState(false);
    }
  };
  return (
    <div className="controls-container d-flex">
      <div className="mx-auto mb-2">
        <audio ref={audio} type="audio/mpeg" src={endless}></audio>
        {/*<button
          className="btn ctrl-btn"
          style={
            ctrl === "playing" ? { fontSize: "30px" } : { fontSize: "20px" }
          }
        >
          <FaFastBackward />
        </button>*/}
        <button
          className="btn ctrl-btn"
          onClick={() => toggle()}
          style={
            ctrl === "playing" ? { fontSize: "30px" } : { fontSize: "20px" }
          }
        >
          {ctrl === "playing" ? <FaPause /> : <FaPlay />}
        </button>
        {/*<button
          className="btn ctrl-btn"
          style={
            ctrl === "playing" ? { fontSize: "30px" } : { fontSize: "20px" }
          }
        >
          <FaFastForward />
        </button>*/}
      </div>
    </div>
  );
}
