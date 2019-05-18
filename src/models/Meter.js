import { flow, types, applySnapshot } from "mobx-state-tree";
import MeterEntry from "./MeterEntry";
import { format } from "date-fns";

const Meter = types
  .model({
    id: types.identifier,
    state: "idle",
    name: types.string,
    entries: types.array(MeterEntry),
  })
  .views(self => ({
    get entriesWithDiff() {
      let previousValue = 0;
      return self.entries
        .slice()
        .sort(({ date: dateA }, { date: dateB }) => dateA * 1 - dateB * 1)
        .map(({ value, date }) => {
          const withDiff = {
            value: value.toFixed(2),
            date: format(date, "DD/MM/YYYY"),
            diff: (value - previousValue).toFixed(2),
          };
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

    // lifecycle hooks
    afterCreate: flow(function*() {
      const entryNumber = Math.floor(Math.random() * 100);

      self.state = "loading";
      try {
        const response = yield fetch("http://localhost:3080/entriesCollection");
        const json = yield response.json();
        applySnapshot(self.entries, json[entryNumber]);
        self.state = "ready";
      } catch (error) {
        console.error("Failed to fetch meter entries", error);
        self.state = "error";
      }
    }),
  }));

export default Meter;
