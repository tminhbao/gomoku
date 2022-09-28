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
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
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
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}

export default Board;
