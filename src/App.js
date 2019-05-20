import React from "react";
import { observer } from "mobx-react";
import Meter from "./Meter";
import NewMeterForm from "./NewMeterForm";
import MeterCollection from "./models/MeterCollection";
import modelOf from "./utils/modelOf";
import MeterSelector from "./MeterSelector";
import "semantic-ui-css/semantic.min.css";
import style from "./App.module.css";

const App = ({ meterCollection }) => {
  return (
    <div className={style.App}>
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
