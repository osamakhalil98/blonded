import React, { useState, useEffect } from 'react';
import { randomElement, randomColor } from './utilities';
import { lyrics } from './data';

function App() {
  const [lyric, setLyric] = useState({
    line: 'Blonded',
    song: 'Frank Ocean Lyrics',
  });

  const randomizeLyric = () => {
    const randomLyric = randomElement(lyrics);
    setLyric(randomLyric);
  };

  useEffect(() => {
    const TEN_SECONDS_IN_MILLIS = 1000 * 10;

    const intervalId = setInterval(randomizeLyric, TEN_SECONDS_IN_MILLIS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { line, song } = lyric;
  const delimitedLine = line.replace(/ /g, ' / ');

  return (
    <div style={{ ...styles.container, backgroundColor: randomColor() }}>
      <h1 style={styles.line}>“{delimitedLine}”</h1>
      <h2 style={styles.song}>{song}</h2>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  line: {
    margin: 96,
    textAlign: 'center',
    fontFamily: 'blonde',
    color: 'white',
    fontSize: 50,
  },
  song: {
    textAlign: 'center',
    fontFamily: 'monospace',
    color: 'white',
    fontSize: 35,
  },
};

export default App;
