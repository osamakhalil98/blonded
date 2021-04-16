import React, { useState, useEffect } from "react";
import { useKeyPress } from "./hooks";
import { randomIndex, randomColor } from "./utilities";
import { lyrics } from "./data";
import styles from "./style.module.css";
import logo from "./assets/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

function App() {
  const TEN_SECONDS_IN_MILLIS = 1000 * 10;
  let intervalId = 0;
  const [lyricIndex, setLyricIndex] = useState(randomIndex(lyrics.length));

  const incrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex + 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);
  };

  const decrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex - 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);
  };

  useEffect(() => {
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useKeyPress(incrementLyricIndex, "ArrowRight");
  useKeyPress(decrementLyricIndex, "ArrowLeft");
  const handleTouchIncrement = () => {
    incrementLyricIndex();
  };

  const handleTouchDecrement = () => {
    decrementLyricIndex();
  };
  const lyricSafeIndex = Math.abs(lyricIndex) % lyrics.length;
  const lyric = lyrics[lyricSafeIndex];

  const { line, song } = lyric;
  const delimitedLine = line.replace(/ /g, " / ");

  return (
    <>
      <body style={{ backgroundColor: randomColor() }}>
        {/*} <div className={styles.blondedWrapper}>
          <img src={logo} alt={"blonded logo"} />
  </div>*/}
        <div className={styles.container}>
          <h1
            className={styles.line}
            style={{ backgroundColor: randomColor() }}
          >
            “{delimitedLine}”
          </h1>
          <h2 className={styles.song}>
            <Typewriter
              loop={false}
              cursor={false}
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={intervalId}
              words={[song]}
            />
          </h2>
          <div className="buttons-container d-md-block d-lg-none  pl-0 pr-0 m-0">
            <button
              className={`btn mr-5 ${styles.ctrl}`}
              onclick={handleTouchDecrement}
            >
              <p className={`mt-2 ${styles.p}`}> {"<"}</p>
            </button>
            <button
              className={`btn ml-3 ${styles.ctrl} mx-auto`}
              onclick={handleTouchIncrement}
            >
              <p className={`mt-2 ${styles.p}`}> {">"}</p>
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
