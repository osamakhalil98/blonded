import React, { useState } from "react";
import Controls from "./controls";
import "./player.css";

export default function Player({ song }) {
  const [animate, setAnimate] = useState(false);
  return (
    <div className={"music-container"}>
      <div className="player-container">
        {/* <div className={animate === true ? `song-cover-on` : `song-cover-off`}>
          <img src={logo} className="song-img" />
        </div> */}
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
