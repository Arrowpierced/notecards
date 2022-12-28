import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import './App.css'
import {data} from './data.js'

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onMouseEnter={() => setIsFlipped(!isFlipped)} className="front">
        {card.front}
      </div>
      <div onMouseLeave={() => setIsFlipped(!isFlipped)} className="back">
        {card.back}
      </div>
    </ReactCardFlip>
  );
};

const App = () => {
  return (
    <div className="notecards">
      {data.map((card) => (
        <Card card={card} key={card.term} />
      ))}
    </div>
  );
};

export default App