import './App.css';
import React, { useState } from 'react';
import Ui from './component/Ui';
import Memorycards from './component/Memorycards';

function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  function play(e) {
    setImages(images + e.target.src);
    if (images.includes(e.target.src)) {
      if (score > bestScore) return setBestScore(score);
      setScore(0);
      setImages([]);
    } else {
      setScore(score + 1);
    }
  }
  return (
    <div className="App">
      <Ui score={score} bestScore={bestScore} />
      <Memorycards play={play} />
    </div>
  );
}

export default App;
