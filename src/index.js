import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { app, db } from "./firebase";
console.log(app.name);
console.log(db);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
