import React, { Component } from "react";

class App extends Component {
  render() {
    console.dir(this.props);
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
          <label>
            Nowy wpis
            <input type="number" />
          </label>
          <label>
            data
            <input type="date" />
          </label>
          <button>Zapis</button>
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
              <tr>
                <td>23-03-1990</td>
                <td>123456.654</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
