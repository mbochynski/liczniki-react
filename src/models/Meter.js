import { types } from "mobx-state-tree";
import MeterEntry from "./MeterEntry";

const Meter = types
  .model({
    id: types.identifier,
    name: types.string,
    entries: types.array(MeterEntry),
  })
  .views(self => ({
    get entriesWithDiff() {
      let previousValue = 0;
      return self.entries
        .sort(({ date: dateA }, { date: dateB }) => dateA * 1 - dateB * 1)
        .map(({ value, date }) => {
          const withDiff = { value, date, diff: value - previousValue };
          previousValue = value;
          return withDiff;
        });
    },
  }))
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
