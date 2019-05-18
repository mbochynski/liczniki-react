import React from "react";
import { observer } from "mobx-react";
import modelOf from "./utils/modelOf";
import Meter from "./models/Meter";

const MeterEntries = ({ meter }) => (
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Odczyt</th>
        <th>średnia dzienna</th>
      </tr>
    </thead>
    <tbody>
      {meter.entriesWithDiff.map(entry => {
        return (
          <tr key={entry.date}>
            <td>{String(entry.date)}</td>
            <td>{entry.value}</td>
            <td>{entry.diff}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

MeterEntries.propTypes = {
  meter: modelOf(Meter),
};

export default observer(MeterEntries);
