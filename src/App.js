import React, { Component } from "react";
import AddTrack from "./Components/Tracks/AddTrack";
import Clients from "./Components/Clients";

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <AddTrack />
        <hr />
        <Clients />
      </div>
    );
  }
}

export default App;
