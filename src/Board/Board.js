import React from "react";
import "./Board.css";

const Board = ({ squares, handleSquareChange }) => (
  <div className="Board">
    <div className="Board__row">
      <Square
        squareContent={squares[0]}
        onClick={() => handleSquareChange(0)}
      ></Square>
      <Square
        squareContent={squares[1]}
        onClick={() => handleSquareChange(1)}
      ></Square>
      <Square
        squareContent={squares[2]}
        onClick={() => handleSquareChange(2)}
      ></Square>
    </div>
    <div className="Board__row">
      <Square
        squareContent={squares[3]}
        onClick={() => handleSquareChange(3)}
      ></Square>
      <Square
        squareContent={squares[4]}
        onClick={() => handleSquareChange(4)}
      ></Square>
      <Square
        squareContent={squares[5]}
        onClick={() => handleSquareChange(5)}
      ></Square>
    </div>
    <div className="Board__row">
      <Square
        squareContent={squares[6]}
        onClick={() => handleSquareChange(6)}
      ></Square>
      <Square
        squareContent={squares[7]}
        onClick={() => handleSquareChange(7)}
      ></Square>
      <Square
        squareContent={squares[8]}
        onClick={() => handleSquareChange(8)}
      ></Square>
    </div>
  </div>
);

const Square = ({ squareContent, onClick }) => {
  const hasContent = squareContent ? "Square__content--has-content" : "";

  return (
    <div className="Square" onClick={onClick}>
      <span className={`Square__content ${hasContent}`}>{squareContent}</span>
    </div>
  );
};

export default Board;
