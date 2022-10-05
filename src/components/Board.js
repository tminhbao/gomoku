import React from "react";
import Square from "./Square";
function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        styleSquare={props.styleSquare[i]}
      />
    );
  }
  // function render() {
  //   const index = [
  //     [0, 1, 2, 3, 4],
  //     [5, 6, 7, 8, 9],
  //     [10, 11, 12, 13, 14],
  //     [15, 16, 17, 18, 19],
  //     [20, 21, 22, 23, 24],
  //   ];
  //   const rows = index.map((i) => {
  //     var cells = i.map((j) => {
  //       return <label key={j.toString()}>{renderSquare(j)}</label>;
  //     });
  //     return (
  //       <div key={i.toString()} className="board-row">
  //         {cells}
  //       </div>
  //     );
  //   });

  //   // return <div>{rows}</div>;
  // }

  const index = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
  ];
  const rows = index.map((i) => {
    var cells = i.map((j) => {
      return <label key={j.toString()}>{renderSquare(j)}</label>;
    });
    return (
      <div key={i.toString()} className="board-row">
        {cells}
      </div>
    );
  });

  return <div>{rows}</div>;
}

export default Board;
