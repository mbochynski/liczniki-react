import { types } from "mobx-state-tree";

const MeterEntry = types.model({
  value: types.number,
  date: types.Date,
});

export default MeterEntry;
