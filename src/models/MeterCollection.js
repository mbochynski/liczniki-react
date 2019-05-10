import { types } from "mobx-state-tree";
import Meter from "./Meter";

const MeterCollection = types
  .model({
    meters: types.array(Meter),
    selectedMeter: types.maybe(types.reference(Meter)),
  })
  .actions(self => ({
    selectMeter(id) {
      self.selectedMeter = id;
    },
  }));

export default MeterCollection;
