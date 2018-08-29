import React, { Component } from "react";
import { connect } from "react-redux";

class AddTrack extends Component {
  state = {};

  AddTrack = () => {
    console.log("funcAddtrack", this.trackInput.value);
    if (this.trackInput.value !== " ") {
      this.props.onAddTrack(this.trackInput.value);
    }

    this.trackInput.value = "";
  };

  AddPlaylist = () => {
    this.props.onAddPlaylist(this.playlistkInput.value);
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

        <hr />

        <input
          type="text"
          ref={input => {
            this.playlistkInput = input;
          }}
        />
        <button onClick={this.AddPlaylist}>AddPlaylist</button>
        <ul>
          {this.props.playlists.map((playlist, i) => (
            <li key={i}>{playlist}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testStore: state.tracks,
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  onAddTrack: trackName => {
    dispatch({ type: "ADD_TRACK", payload: trackName });
  },
  onAddPlaylist: playlistName => {
    dispatch({ type: "ADD_PLAYLIST", payload: playlistName });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrack);
