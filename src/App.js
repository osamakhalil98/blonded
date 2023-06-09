import React, { Fragment, useState } from "react";
import { randomColor } from "./utilities";
import styles from "./style.module.css";
import logo from "./assets/endless.webp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Player from "./music/player";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const random = randomColor();
  const [randomBgColor, setRandomBgColor] = useState(random);
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: randomBgColor,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          flexWrap: "nowrap",
          margin: "0px",
          padding: "0px",
          overflow: "auto",
        }}
      >
        <div className={styles.blondedWrapper}>
          <img
            src={logo}
            alt={"blonded logo"}
            style={{
              shapeRendering: "crispEdges",
              imageResolution: "from-image",
              objectFit: "fill",
              filter:
                "invert(44%) sepia(13%) saturate(3207%) hue-rotate(70deg) brightness(95%) contrast(80%)",
            }}
            width="250px"
            height="250px"
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Home
                  setRandomColor={setRandomBgColor}
                  randomBgColor={randomBgColor}
                />
              }
              path="*"
            />
            <Route element={<About />} path="/about" />
          </Routes>
        </BrowserRouter>
        {/* <Player song={song} /> */}
      </div>
    </Fragment>
  );
}

export default App;
