import React from "react";
import Square from "./Square";
import Board from "./Board";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(25).fill(null),
          lastMove: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      styleSquare: Array(25).fill("square"),
      ascend: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var styleSquare = this.state.styleSquare.slice();
    const lastMove = [i % 5, Math.floor(i / 5)];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const winner = calculateWinner(squares);

    this.setState({
      history: (history = history.concat([
        {
          squares: squares,
          lastMove: lastMove,
        },
      ])),
      stepNumber: history.length - 1,
      xIsNext: !this.state.xIsNext,
    });

    if (winner) {
      this.onWin(winner, styleSquare);
    }
  }

  onWin(winner, styleSquare) {
    styleSquare[winner[0]] = "win";
    styleSquare[winner[1]] = "win";
    styleSquare[winner[2]] = "win";
    styleSquare[winner[3]] = "win";
    styleSquare[winner[4]] = "win";

    this.setState({
      styleSquare: styleSquare,
    });
  }

  jumpTo(step) {
    var history = this.state.history.slice(0, step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var styleSquare = this.state.styleSquare.slice();
    const winner = calculateWinner(squares);

    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });

    if (winner) {
      this.onWin(winner, styleSquare);
    } else {
      this.setState({
        styleSquare: Array(25).fill("square"),
      });
    }
  }

  toggle() {
    this.setState({
      ascend: !this.state.ascend,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const toggle = this.state.ascend ? "Ascending" : "Descending";

    const moves = history.map((step, move) => {
      if (this.state.ascend) {
        move = history.length - 1 - move; //Display descending
      }

      const desc = move
        ? "Go to move #" +
          move +
          " at position (" +
          history[move].lastMove.toString() +
          ")"
        : "Go to game start";
      if (move == this.state.stepNumber) {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              <b>{desc}</b>
            </button>
          </li>
        );
      } else {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      }
    });

    let status;
    if (winner) {
      status = "Winner: " + current.squares[winner[0]];
    } else if (!current.squares.includes(null)) {
      status = "Its a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            styleSquare={this.state.styleSquare}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={this.toggle}>{toggle}</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
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
