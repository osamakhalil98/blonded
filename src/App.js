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
          <img src={logo} alt={"blonded logo"} width="200px" height="200px" />
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              element={<Home setRandomColor={setRandomBgColor} />}
              path="/blonded"
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
