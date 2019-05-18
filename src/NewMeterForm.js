import React, { useState } from "react";
import PropTypes from "prop-types";

const NewMeterForm = ({ addNewMeter }) => {
  const [newMeterName, setNewMeterName] = useState("");

  return (
    <>
      <h1>Dodaj nowy licznik</h1>
      <label>
        Nazwa:
        <input
          value={newMeterName}
          onChange={e => setNewMeterName(e.target.value)}
          type="text"
        />
      </label>
      <button
        onClick={() => {
          addNewMeter(newMeterName);
          setNewMeterName("");
        }}
      >
        Dodaj
      </button>
    </>
  );
};

NewMeterForm.propTypes = {
  addNewMeter: PropTypes.func.isRequired,
};

export default NewMeterForm;
