import React from "react";
import { observer } from "mobx-react";
import Meter from "./Meter";
import NewMeterForm from "./NewMeterForm";
import MeterCollection from "./models/MeterCollection";
import modelOf from "./utils/modelOf";
import MeterSelector from "./MeterSelector";

const App = ({ meterCollection }) => {
  return (
    <div className="App">
      <NewMeterForm addNewMeter={meterCollection.addNewMeter} />
      <MeterSelector meterCollection={meterCollection} />

      <hr />

      <Meter meter={meterCollection.selectedMeter} />
    </div>
  );
};

App.propTypes = {
  meterCollection: modelOf(MeterCollection),
};

export default observer(App);
