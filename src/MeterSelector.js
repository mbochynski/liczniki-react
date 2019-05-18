import React from "react";
import { observer } from "mobx-react";
import modelOf from "./utils/modelOf";
import MeterCollection from "./models/MeterCollection";

const MeterSelector = ({ meterCollection }) => {
  return (
    <>
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
    </>
  );
};

MeterSelector.propTypes = {
  meterCollection: modelOf(MeterCollection),
};

export default observer(MeterSelector);
