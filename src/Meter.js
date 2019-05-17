import React from "react";
import NewEntryForm from "./NewEntryForm";

const Meter = ({ meter }) => {
  if (!meter) {
    return <p>No meter selected</p>;
  }

  return (
    <>
      <div>
        <NewEntryForm meter={meter} />
      </div>
      <div>
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
                <tr key={entry.date * 1}>
                  <td>{String(entry.date)}</td>
                  <td>{entry.value}</td>
                  <td>{entry.diff}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Meter;
