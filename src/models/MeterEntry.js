import { types, getParent } from "mobx-state-tree";

const MeterEntry = types.model("MeterEntry", {
  id: types.identifier,
  value: types.number,
  date: types.Date,
});

export default MeterEntry;
