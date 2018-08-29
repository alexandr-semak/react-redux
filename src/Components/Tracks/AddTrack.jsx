import React, { Component } from "react";
import { connect } from "react-redux";

class AddTrack extends Component {
  AddPlaylist = () => {
    console.log("funcAddtrack", this.playlistkInput.value);
    if (this.playlistkInput.value !== " ") {
      this.props.onAddPlaylist(this.playlistkInput.value);
    }
    this.playlistkInput.value = " ";
  };

  render() {
    return (
      <div>
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
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  onAddPlaylist: playlistName => {
    dispatch({ type: "ADD_PLAYLIST", payload: playlistName });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrack);
