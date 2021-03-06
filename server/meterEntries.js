const Chance = require("chance");
const nanoid = require("nanoid");
const chance = new Chance();

const generateSingleMeterEntries = () => {
  let preValue = 0;

  const entries = Array.from(Array(50), () => ({
    date: chance.date() * 1,
  }))
    .sort(({ date: dateA }, { date: dateB }) => dateA - dateB)
    .map(({ date }) => {
      const newValue =
        preValue + chance.floating({ fixed: 3, min: 1, max: 100 });
      preValue = newValue;

      return { date, value: newValue, id: nanoid() };
    });

  return entries;
};

module.exports = () => {
  const entriesCollection = Array.from(Array(100), generateSingleMeterEntries);

  return { entriesCollection };
};
