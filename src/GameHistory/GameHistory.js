import React from "react";
import "./GameHistory.css";

const GameHistory = ({ gameHistory, currentStep, setCurrentStep }) => (
  <div className="GameHistory">
    {gameHistory.map((s, i) => (
      <button
        disabled={currentStep === i}
        className="btn GameHistory__button"
        onClick={() => setCurrentStep(i)}
      >{`Go to step #${i}`}</button>
    ))}
  </div>
);

export default GameHistory;
