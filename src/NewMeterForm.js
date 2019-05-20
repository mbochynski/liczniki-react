import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Header, Form } from "semantic-ui-react";

const NewMeterForm = ({ addNewMeter }) => {
  const [newMeterName, setNewMeterName] = useState("");

  return (
    <>
      <Header as="h1">Dodaj nowy licznik</Header>
      <Form>
        <Form.Field>
          <label>
            Nazwa:
            <input
              placeholder="Nazwa"
              value={newMeterName}
              onChange={e => setNewMeterName(e.target.value)}
              type="text"
            />
          </label>
        </Form.Field>
        <Button
          type="submit"
          onClick={() => {
            addNewMeter(newMeterName);
            setNewMeterName("");
          }}
        >
          Dodaj
        </Button>
      </Form>
    </>
  );
};

NewMeterForm.propTypes = {
  addNewMeter: PropTypes.func.isRequired,
};

export default NewMeterForm;
