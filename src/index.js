import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Meter from "./models/Meter";

const meter = Meter.create({
  name: "MST test",
  entries: [
    {
      value: 123.321,
      date: Date.now(),
    },
    {
      value: 432.321,
      date: Date.now(),
    },
  ],
});

ReactDOM.render(<App meter={meter} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
