import React, { useState, useEffect } from 'react';
import { useKeyPress } from './hooks';
import { randomIndex, randomColor } from './utilities';
import { lyrics } from './data';

function App() {
  const [lyricIndex, setLyricIndex] = useState(randomIndex(lyrics.length));

  const incrementLyricIndex = () => {
    setLyricIndex(lyricIndex => lyricIndex + 1);
  };

  const decrementLyricIndex = () => {
    setLyricIndex(lyricIndex => lyricIndex - 1);
  };

  useEffect(() => {
    const TEN_SECONDS_IN_MILLIS = 1000 * 10;
    const intervalId = setInterval(incrementLyricIndex, TEN_SECONDS_IN_MILLIS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useKeyPress(incrementLyricIndex, 'ArrowRight');
  useKeyPress(decrementLyricIndex, 'ArrowLeft');

  const lyricSafeIndex = Math.abs(lyricIndex) % lyrics.length;
  const lyric = lyrics[lyricSafeIndex];

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
