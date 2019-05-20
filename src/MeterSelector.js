import React from "react";
import { observer } from "mobx-react";
import modelOf from "./utils/modelOf";
import MeterCollection from "./models/MeterCollection";
import { Header, Button } from "semantic-ui-react";

const MeterSelector = ({ meterCollection }) => {
  return (
    <>
      <Header as="h1">Wybierz licznik</Header>
      {meterCollection.meters.map(({ id: meterId, name: meterName }) => {
        return (
          <Button
            key={meterId}
            onClick={() => {
              meterCollection.selectMeter(meterId);
            }}
          >
            {meterName}
          </Button>
        );
      })}
    </>
  );
};

MeterSelector.propTypes = {
  meterCollection: modelOf(MeterCollection),
};

export default observer(MeterSelector);
