import React from "react";
import { observer } from "mobx-react";
import Meter from "./Meter";
import NewMeterForm from "./NewMeterForm";

const App = ({ meterCollection }) => {
  return (
    <div className="App">
      <div>
        <button type="button">nowy użytkownik</button>
        <label>
          mam token
          <input type="text" />
        </label>
        <button type="button">wejdz z tokenem</button>
      </div>
      <hr />
      <NewMeterForm addNewMeter={meterCollection.addNewMeter} />
      {meterCollection.meters.map(({ id: meterId, name: meterName }) => {
        return (
          <button
            key={meterId}
            onClick={() => {
              meterCollection.selectMeter(meterId);
            }}
          >
            {meterName}
          </button>
        );
      })}
      <hr />

      <Meter meter={meterCollection.selectedMeter} />
    </div>
  );
};

export default observer(App);
