import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import logo from "../assets/logo192.png";
import Controls from "./controls";
import "./player.css";
export default function Player({ song }) {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="music-container">
      <div className="player-container col-md-3 mt-4 mb-3">
        <div className={animate === true ? `song-cover-on` : `song-cover-off`}>
          <img src={logo} className="song-img" />
        </div>
        <h2 className="text-center song-name">endless--radio</h2>
        <Controls
          className="controls mx-auto bg-dark"
          song={song}
          musicState={(animate) => setAnimate(animate)}
        ></Controls>
      </div>
    </div>
  );
}
