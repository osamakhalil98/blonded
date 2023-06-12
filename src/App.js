import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import logo from "./assets/endless.webp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { generateJSXMeshGradient } from "meshgrad";

function App() {
  const random = generateJSXMeshGradient(3);
  const [randomBgColor, setRandomBgColor] = useState(random);

  return (
    <Fragment>
      <div style={randomBgColor} className="app-container">
        <div className={styles.blondedWrapper}>
          <img
            src={logo}
            alt={"blonded logo"}
            style={{
              shapeRendering: "crispEdges",
              imageResolution: "from-image",
              objectFit: "fill",
              filter:
                " invert(8%) sepia(13%) saturate(207%) hue-rotate(90deg) brightness(95%) contrast(80%)",
            }}
            width="250px"
            height="250px"
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              element={<Home setRandomColor={setRandomBgColor} />}
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
