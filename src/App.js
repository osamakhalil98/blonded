import React from 'react';
import { randomElement, randomColor } from './utilities';
import { lyrics } from './data';

function App() {
  const { line, song } = randomElement(lyrics);
  const backgroundColor = randomColor();

  const delimitedLine = line.replace(/ /g, ' / ');

  return (
    <div style={{ ...styles.container, backgroundColor }}>
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
