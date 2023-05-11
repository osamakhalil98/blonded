import React, { useEffect } from "react";
import { useKeyPress } from "../hooks";
import { randomIndex } from "../utilities";
import { lyrics } from "../data";
import { useState } from "react";
import Typewriter from "react-simple-typewriter";
import { randomBrightGradient, randomColor } from "../utilities/colors";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function ({ setRandomColor }) {
  const TEN_SECONDS_IN_MILLIS = 1000 * 10;
  let intervalId = 0;
  const [lyricIndex, setLyricIndex] = useState(randomIndex(lyrics.length));

  const incrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex + 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);
    const randomBgColor = randomColor();
    setRandomColor(randomBgColor);
  };

  const decrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex - 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);
    const randomBgColor = randomColor();
    setRandomColor(randomBgColor);
  };

  useEffect(() => {
    intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useKeyPress(incrementLyricIndex, "ArrowRight");
  useKeyPress(decrementLyricIndex, "ArrowLeft");
  const lyricSafeIndex = Math.abs(lyricIndex) % lyrics.length;
  const lyric = lyrics[lyricSafeIndex];

  const { line, song } = lyric;
  const delimitedLine = line.replace(/ /g, " / ");
  const navigate = useNavigate();

  return (
    <div>
      <p
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => navigate("/about")}
      >
        Details
      </p>
      <h2 className="lyrics-title">Frank /ocean /Lyrics</h2>
      <div className={styles.container}>
        <h1
          className={styles.line}
          style={{ background: randomBrightGradient() }}
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
      </div>
    </div>
  );
}
