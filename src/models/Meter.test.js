import Meter from "./Meter";

let meter;
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(Array.from(Array(100), _ => [])),
    })
  );

  meter = Meter.create({
    id: "identifier9876",
    name: "MeterName",
    entries: [],
  });
});

it("should try to reach external API after being created", () => {
  expect(global.fetch).toHaveBeenCalledWith(
    "http://localhost:3080/entriesCollection"
  );
});

it("should add a new entry using an action", () => {
  expect(meter.entries).toHaveLength(0);
  meter.addEntry(33.44, Date.now());
  expect(meter.entries).toHaveLength(1);
  expect(meter.entries[0].value).toBe(33.44);
});
