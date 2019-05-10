import React, { Component } from "react";
import NewEntryForm from "./NewEntryForm";
import { observer } from "mobx-react";
import Meter from "./Meter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button type="button">nowy użytkownik</button>
          <label>
            mam token
            <input type="text" />
          </label>
          <button type="button">wejdz z tokenem</button>
        </div>
        <hr />
        <label>
          nowy licznik
          <input type="text" />
        </label>
        {this.props.meterCollection.meters.map(
          ({ id: meterId, name: meterName }) => {
            return (
              <button
                onClick={() => {
                  this.props.meterCollection.selectMeter(meterId);
                }}
              >
                {meterName}
              </button>
            );
          }
        )}
        <hr />

        <Meter meter={this.props.meterCollection.selectedMeter} />
      </div>
    );
  }
}

export default observer(App);
