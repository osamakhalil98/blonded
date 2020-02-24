import React from 'react';
import { randomElement } from './utilities';
import { lyrics } from './data';

function App() {
  const randomLyric = randomElement(lyrics);

  return (
    <div>
      <h1>{randomLyric.line}</h1>
      <h2>{randomLyric.song}</h2>
    </div>
  );
}

export default App;
