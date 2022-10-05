import logo from "./logo.svg";
import "./App.css";
import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB87bvqwHYENd__Y5zwQyLL780WcgvyONc",
  authDomain: "gomoku-refactoring-f3aef.firebaseapp.com",
  projectId: "gomoku-refactoring-f3aef",
  storageBucket: "gomoku-refactoring-f3aef.appspot.com",
  messagingSenderId: "625771383292",
  appId: "1:625771383292:web:fd506443065f24e6804a79",
  measurementId: "G-0Y4HTBCCF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
