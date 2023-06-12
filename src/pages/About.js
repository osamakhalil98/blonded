import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <p
        style={{
          textAlign: "center",
          fontFamily: "blonde",
          lineHeight: "2rem",
        }}
      >
        This/ is/ a/ simple/ web/ app/ to/ view/ and/ switch/ between/
        different/ frank/ ocean/ lyrics./ <br /> click/ left/ and/ right/ arrow/
        keys/ to/ control/ the/ current/ lyric/ if/ you're/ on/ desktop. <br />{" "}
        every/ five/ seconds/ the/ lyric/ changes <br />
        New/ Features/ are/ coming/ soon.
      </p>
      <br />
      <p
        onClick={() => navigate("/blonded")}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Home
      </p>
    </div>
  );
}
