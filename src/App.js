import React, { Component } from "react";
import NewEntryForm from "./NewEntryForm";
import { observer } from "mobx-react";

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

        <button>licznik 1</button>
        <button>licznik 2</button>
        <button>licznik 3</button>

        <hr />

        <div>
          <NewEntryForm meter={this.props.meter} />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Odczyt</th>
                <th>średnia dzienna</th>
              </tr>
            </thead>
            <tbody>
              {this.props.meter.entries.map(entry => {
                return (
                  <tr>
                    <td>{String(entry.date)}</td>
                    <td>{entry.value}</td>
                    <td>[diff]</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default observer(App);
