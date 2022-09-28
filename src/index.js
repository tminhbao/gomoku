import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Square from "./components/Square";
import Board from "./components/Board";
import Game from "./components/Game";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALaF-HeR0R_D9Hzxalqzorrgkcq_i_m8",
  authDomain: "gomoku-8bcc8.firebaseapp.com",
  projectId: "gomoku-8bcc8",
  storageBucket: "gomoku-8bcc8.appspot.com",
  messagingSenderId: "76872501430",
  appId: "1:76872501430:web:c949535ca8c23fbcd8be17",
  measurementId: "G-CZXT4RRXHX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
