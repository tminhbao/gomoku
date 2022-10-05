import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Square from "./components/Square/Square";
import Board from "./components/Board/Board";
import Game from "./components/Game/Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
