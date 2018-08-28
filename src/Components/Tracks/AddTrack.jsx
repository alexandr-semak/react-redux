import React, { Component } from "react";
import { connect } from "react-redux";

class AddTrack extends Component {
  state = {};

  AddTrack = () => {
    console.log("funcAddtrack", this.trackInput.value);
    if (this.trackInput.value !== "") {
      this.props.onAddTrack(this.trackInput.value);
    }

    this.trackInput.value = "";
  };

  render() {
    console.log(this.props.testStore);
    const { testStore } = this.props;

    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.trackInput = input;
          }}
        />
        <button onClick={this.AddTrack}>AddTrack</button>
        <ul>
          {testStore.map((track, i) => (
            <li key={i}>{track}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: trackName => {
      dispatch({ type: "ADD_TRACK", payload: trackName });
    }
  })
)(AddTrack);
