import React from "react";
import NewEntryForm from "./NewEntryForm";
import MeterEntries from "./MeterEntries";

const Meter = ({ meter }) => {
  if (!meter) {
    return <p>Nie wybrano licznika</p>;
  }

  return (
    <>
      <NewEntryForm meter={meter} />
      <MeterEntries meter={meter} />
    </>
  );
};

export default Meter;
