import React from "react";
import { observer } from "mobx-react";
import modelOf from "./utils/modelOf";
import Meter from "./models/Meter";
import { Header, Table } from "semantic-ui-react";

const MeterEntries = ({ meter }) => (
  <>
    <Header as="h1">Tabela odczytów</Header>
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Data</Table.HeaderCell>
          <Table.HeaderCell>Odczyt</Table.HeaderCell>
          <Table.HeaderCell>Różnica</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {meter.entriesWithDiff.map(entry => {
          return (
            <Table.Row key={`${entry.date}${entry.value}`}>
              <Table.Cell>{String(entry.date)}</Table.Cell>
              <Table.Cell>{entry.value}</Table.Cell>
              <Table.Cell>{entry.diff}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </>
);

MeterEntries.propTypes = {
  meter: modelOf(Meter),
};

export default observer(MeterEntries);
