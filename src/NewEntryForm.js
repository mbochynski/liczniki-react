import React, { useState } from "react";

const NewEntryForm = ({ meter }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        meter.addEntry(Number(value), new Date(date));
      }}
    >
      <label>
        Nowy wpis
        <input
          name="value"
          type="number"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </label>
      <label>
        data
        <input
          name="date"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </label>
      <button type="submit">Zapis</button>
    </form>
  );
};

export default NewEntryForm;
