import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MeterCollection from "./models/MeterCollection";
import { onSnapshot, onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

const meterCollection = MeterCollection.create({
  meters: [],
});

makeInspectable(meterCollection);

// onSnapshot(meterCollection, snapshot => {
//   console.log("snapshot", snapshot);
// });

// onPatch(meterCollection, patch => {
//   console.log("patch", patch);
// });

ReactDOM.render(
  <App meterCollection={meterCollection} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
