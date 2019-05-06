import { types } from "mobx-state-tree";
import MeterEntry from "./MeterEntry";

const Meter = types.model({
  name: types.string,
  entries: types.array(MeterEntry)
});

export default Meter;
