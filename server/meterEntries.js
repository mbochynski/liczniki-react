const Chance = require("chance");
const chance = new Chance();

module.exports = () => {
  let preValue = 0;
  const entries = Array.from(Array(100), () => ({
    date: chance.date(),
  }))
    .sort(({ date: dateA }, { date: dateB }) => dateA * 1 - dateB * 1)
    .map(({ date }) => {
      const newValue =
        preValue + chance.floating({ fixed: 3, min: 1, max: 100 });
      preValue = newValue;

      return { date, value: newValue };
    });

  return { entries };
};
