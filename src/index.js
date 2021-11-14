import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Restart({ onClick }) {

  return (
    <button className="restart" onClick={onClick}>
      Restart
    </button>
  );
}

function Game() {
  const [ squares, setSquares ] = useState(Array(42).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  const nextSymbol = isXNext ? "R" : "Y";
  const winner = calculateWinner(squares);
//checking for winner or draw otherwise just returns next player
  function getStatus() {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Next player: " + nextSymbol;
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);
//toggles the turns
          setIsXNext(!isXNext); 
        }}
      />
    );
  }
//restart button
  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(42).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }
//7 by 6 game board
  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
          </div>
          <div className="board-row">
            {renderSquare(7)}
            {renderSquare(8)}
            {renderSquare(9)}
            {renderSquare(10)}
            {renderSquare(11)}
            {renderSquare(12)}
            {renderSquare(13)}
          </div>
          <div className="board-row">
            {renderSquare(14)}
            {renderSquare(15)}
            {renderSquare(16)}
            {renderSquare(17)}
            {renderSquare(18)}
            {renderSquare(19)}
            {renderSquare(20)}
          </div>
          <div className="board-row">
            {renderSquare(21)}
            {renderSquare(22)}
            {renderSquare(23)}
            {renderSquare(24)}
            {renderSquare(25)}
            {renderSquare(26)}
            {renderSquare(27)}
        </div>
        <div className="board-row">
            {renderSquare(28)}
            {renderSquare(29)}
            {renderSquare(30)}
            {renderSquare(31)}
            {renderSquare(32)}
            {renderSquare(33)}
            {renderSquare(34)}
        </div>
        <div className="board-row">
            {renderSquare(35)}
            {renderSquare(36)}
            {renderSquare(37)}
            {renderSquare(38)}
            {renderSquare(39)}
            {renderSquare(40)}
            {renderSquare(41)}
        </div>
        </div>
        <div className="game-info">{getStatus()}</div>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const possibleLines = [
    //horizontal all combinations
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    //vertical all combinations
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
  ];
// Checks to make sure that the lines are one colour only. All yellow or all red
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c, d] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}