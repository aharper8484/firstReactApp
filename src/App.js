import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Adam",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, my name is {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: "Harper" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
