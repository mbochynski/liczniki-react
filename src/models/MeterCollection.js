import { types } from "mobx-state-tree";
import Meter from "./Meter";
import nanoid from "nanoid";

const MeterCollection = types
  .model("MeterCollection", {
    meters: types.array(Meter),
    selectedMeter: types.maybe(types.reference(Meter)),
  })
  .actions(self => ({
    addNewMeter(name) {
      if (!name) {
        return;
      }
      self.meters.push({
        id: nanoid(),
        name,
      });
    },
    selectMeter(id) {
      self.selectedMeter = id;
    },
  }));

export default MeterCollection;
