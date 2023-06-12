import React, { useEffect } from "react";
import { useKeyPress } from "../hooks";
import { randomIndex } from "../utilities";
import { lyrics } from "../data";
import { useState } from "react";
import { randomBrightGradient } from "../utilities/colors";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { generateJSXMeshGradient } from "meshgrad";

export default function ({ setRandomColor }) {
  const FIVE_SECONDS_IN_MILLIS = 1000 * 5;
  let intervalId = 0;
  const [lyricIndex, setLyricIndex] = useState(randomIndex(lyrics.length));

  const incrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex + 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, FIVE_SECONDS_IN_MILLIS);
    const randomBgColor = generateJSXMeshGradient(3);
    setRandomColor(randomBgColor);
  };

  const decrementLyricIndex = () => {
    setLyricIndex((lyricIndex) => lyricIndex - 1);
    clearInterval(intervalId);
    intervalId = setInterval(incrementLyricIndex, FIVE_SECONDS_IN_MILLIS);
    const randomBgColor = generateJSXMeshGradient(3);
    setRandomColor(randomBgColor);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = setInterval(incrementLyricIndex, FIVE_SECONDS_IN_MILLIS);

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
  console.log(song);

  return (
    <div>
      <p
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          cursor: "pointer",
          textDecoration: "underline",
          fontStyle: "italic",
        }}
        onClick={() => navigate("/about")}
      >
        Details
      </p>
      <h2
        style={{
          backgroundImage: randomBrightGradient(),
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          paddingTop: "2px",
          textAlign: "center",
          fontFamily: "blonde",
        }}
        className={styles.title}
      >
        Frank /ocean /Lyrics
      </h2>

      <div className={styles.container}>
        <div className={styles.lineContainer}>
          <h1
            className={styles.line}
            style={{ background: randomBrightGradient() }}
          >
            “{delimitedLine}”
          </h1>
        </div>

        <div className={styles.songContainer}>
          <h2 className={styles.song}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(song).start();
              }}
              options={{ delay: 0.5 }}
              key={song}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}
