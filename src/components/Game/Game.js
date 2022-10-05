import React, { useState } from "react";
import Square from "../Square/Square";
import Board from "../Board/Board";
import { render } from "@testing-library/react";
function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(25).fill(null),
      lastMove: null,
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [styleSquare, setStyleSquare] = useState(() =>
    Array(25).fill("square")
  );
  const [isAscend, setIsAscend] = useState(false);

  function handleClick(i) {
    setHistory(() => history.slice(0, stepNumber + 1));
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    setStyleSquare(() => styleSquare.slice());
    const lastMove = [i % 5, Math.floor(i / 5)];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (xIsNext) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    console.log(squares[i]);

    const winner = calculateWinner(squares);

    setHistory(() =>
      history.concat([
        {
          squares: squares,
          lastMove: lastMove,
        },
      ])
    );

    setStepNumber(() => history.length);
    setXIsNext(!xIsNext);

    if (winner) {
      onWin(winner, styleSquare);
    }
  }

  function onWin(winner, styleSquare) {
    styleSquare[winner[0]] = "win";
    styleSquare[winner[1]] = "win";
    styleSquare[winner[2]] = "win";
    styleSquare[winner[3]] = "win";
    styleSquare[winner[4]] = "win";

    setStyleSquare(styleSquare);
  }

  function jumpTo(step) {
    setHistory(() => history.slice(0, step + 1));
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    setStyleSquare(() => styleSquare.slice());
    const winner = calculateWinner(squares);

    setStepNumber(step);
    setXIsNext(step % 2 === 0);

    if (winner) {
      onWin(winner, styleSquare);
    } else {
      setStyleSquare(() => Array(25).fill("square"));
    }
  }

  function handleToggle() {
    setIsAscend(!isAscend);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  if (isAscend) {
    var toggle = "Ascending";
  } else {
    var toggle = "Descending";
  }

  const moves = history.map((step, move) => {
    if (isAscend) {
      move = history.length - 1 - move; //Display descending
    }

    const desc = move
      ? "Go to move #" +
        move +
        " at position (" +
        history[move].lastMove.toString() +
        ")"
      : "Go to game start";
    if (move == stepNumber) {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            <b>{desc}</b>
          </button>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    }
  });

  var status;
  if (winner) {
    status = "Winner: " + current.squares[winner[0]];
  } else if (!current.squares.includes(null)) {
    status = "Its a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          styleSquare={styleSquare}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={handleToggle}>{toggle}</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] == squares[d] &&
      squares[a] == squares[e]
    ) {
      return [a, b, c, d, e];
    }
  }
  return null;
}

export default Game;
