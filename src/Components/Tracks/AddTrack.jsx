import React, { Component } from "react";
import { connect } from "react-redux";

class AddTrack extends Component {
  state = {};
  render() {
    console.log(this.props.testStore);
    const { testStore } = this.props;
    return (
      <div>
        <input type="text" />
        <button>AddTrack</button>
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
  dispatch => ({})
)(AddTrack);
