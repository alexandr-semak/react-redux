import React, { Component } from "react";
import { connect } from "react-redux";
import { selectClient } from "../actions";
import { bindActionCreators } from "redux";

class ClientsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.clients.map((client, i) => (
            <li onClick={() => this.props.selectClient(client)} key={i}>
              <img src={client.general.avatar} alt="alt" />
              {client.general.firstName + " " + client.general.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.clients);
  return {
    clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectClient: selectClient }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsList);

// const mapDispatchToProps = dispatch => ({
//   onAddPlaylist: playlistName => {
//     dispatch({ type: "ADD_PLAYLIST", payload: playlistName });
//   }
// });
