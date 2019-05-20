import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    list: "",
    placeList: []
  };

  chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
  }

  handleListChange = event => {
    this.setState({
      list: event.target.value
    });
  };

  handleSubmit = event => {
    let placeList = this.state.list;
    placeList = placeList.split("\n");
    placeList = this.chunk(placeList, 4);

    this.setState({
      placeList: placeList
    });
  };

  displayList = event => {
    let tr = [];

    this.state.placeList.forEach((item, id) => {
      let row = [];
      item.forEach((col, colId) => {
        row.push(<td key={colId}>{col}</td>);
      });

      tr.push(<tr key={id}>{row}</tr>);
    });

    return tr;
  };

  render() {
    return (
      <div className="App">
        <textarea
          value={this.state.list}
          onChange={this.handleListChange}
          cols="30"
          rows="10"
        />
        <br />
        <button onClick={this.handleSubmit}>Transform</button>

        <hr />
        <br />
        <br />

        <table>
          <tbody>{this.displayList()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
