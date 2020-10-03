import React, { useState } from "react";
import "./App.css";
import Board from "./Board/Board";
import GameHistory from "./GameHistory/GameHistory";

const emptyValues = Array(9).fill(null);

function App() {
  // Managed state
  const [gameHistory, setGameHistory] = useState([emptyValues]);
  const [currentStep, setCurrentStep] = useState(0);

  // Derived State
  const nextValue = calculateNextValue(gameHistory[currentStep]);
  const winner = calculateWinner(gameHistory[currentStep]);
  const statusBarMessage = calculateStatus(winner, nextValue, currentStep);

  // Handlers
  const handleSquareChange = (index) => {
    if (gameHistory[currentStep][index] || winner) return;

    const gameHistoryCopy = gameHistory.slice(0, currentStep + 1);
    const newSquare = [...gameHistoryCopy[currentStep]];
    newSquare[index] = nextValue;
    gameHistoryCopy.push(newSquare);

    setGameHistory(gameHistoryCopy);
    setCurrentStep(currentStep + 1);
  };

  const handleRestart = () => {
    setGameHistory([emptyValues]);
    setCurrentStep(0);
  }

  return (
    <div className="App">
      <span className="App__status">{statusBarMessage}</span>
      <div className="App__flex-row">
        <Board
          squares={gameHistory[currentStep]}
          handleSquareChange={handleSquareChange}
        ></Board>
        <GameHistory
          gameHistory={gameHistory}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        ></GameHistory>
      </div>
      <button className="btn" onClick={handleRestart}>Restart</button>
    </div>
  );
}

function calculateNextValue(squares) {
  const xAmount = squares.filter((square) => square === "X").length;
  const oAmount = squares.filter((square) => square === "O").length;

  if (oAmount > xAmount) return "X";

  return "O";
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function calculateStatus(winner, nextValue, currentStep) {
  if (winner) return `Winner is ${winner}`;
  if (currentStep === 9) return `Draw`;

  return `Next move: ${nextValue}`;
}

export default App;
