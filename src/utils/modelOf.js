// https://github.com/mobxjs/mobx-state-tree/issues/365
import { isStateTreeNode } from "mobx-state-tree";

export default function modelOf(type) {
  const fn = (props, propName) => {
    if (isStateTreeNode(props[propName]) && type.is(props[propName])) {
      return null;
    }
    return new Error(`Invalid value for prop ${propName}`);
  };
  fn.isRequired = (props, propName) =>
    !(propName in props)
      ? new Error(`Missing prop ${propName} in props`)
      : fn(props, propName);
  return fn;
}
