import React from "react";
import Square from "./Square";
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        styleSquare={this.props.styleSquare[i]}
      />
    );
  }
  // Two loops to create the board! Took so long to do this so don't forget it!!!
  render() {
    const index = [
      // [0, 1, 2],
      // [3, 4, 5],
      // [6, 7, 8],
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];
    const rows = index.map((i) => {
      var cells = i.map((j) => {
        return <label key={j.toString()}>{this.renderSquare(j)}</label>;
      });
      return (
        <div key={i.toString()} className="board-row">
          {cells}
        </div>
      );
    });

    return <div>{rows}</div>;
  }
}

function calculateWinner(squares) {
  const lines = [
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
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

export default Board;
