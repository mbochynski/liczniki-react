import React, { useState } from "react";
import PropTypes from "prop-types";

const NewMeterForm = ({ addNewMeter }) => {
  const [newMeterName, setNewMeterName] = useState("");

  return (
    <>
      <label>
        nowy licznik
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
