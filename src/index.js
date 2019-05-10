import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MeterCollection from "./models/MeterCollection";

const meterCollection = MeterCollection.create({
  meters: [
    {
      id: "asdf",
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
    },
    {
      id: "fdsa",
      name: "MST test 2",
      entries: [
        {
          value: 3.321,
          date: Date.now(),
        },
        {
          value: 2.321,
          date: Date.now(),
        },
      ],
    },
  ],
});

ReactDOM.render(
  <App meterCollection={meterCollection} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
