import { types } from "mobx-state-tree";
import MeterEntry from "./MeterEntry";

const Meter = types
  .model({
    name: types.string,
    entries: types.array(MeterEntry),
  })
  .actions(self => ({
    addEntry(value, date) {
      self.entries.push(
        MeterEntry.create({
          value,
          date,
        })
      );
    },
  }));

export default Meter;
