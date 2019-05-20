import React, { useState } from "react";
import { Form, Header } from "semantic-ui-react";

const NewEntryForm = ({ meter }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <Header as="h1">Dodaj nowy odczyt</Header>
      <Form
        onSubmit={event => {
          event.preventDefault();
          meter.addEntry(Number(value), new Date(date));
        }}
      >
        <Form.Field>
          <label>
            wartość:
            <input
              name="value"
              type="number"
              value={value}
              onChange={event => setValue(event.target.value)}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label>
            data:
            <input
              name="date"
              type="date"
              value={date}
              onChange={event => setDate(event.target.value)}
            />
          </label>
        </Form.Field>
        <Form.Button type="submit">Zapisz</Form.Button>
      </Form>
    </>
  );
};

export default NewEntryForm;
