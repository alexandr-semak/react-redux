import React, { Component } from "react";
import { connect } from "react-redux";

class ClientsList extends Component {
  render() {
    return <div>ClientsList</div>;
  }
}

function mapStateToProps(state) {
  console.log(state.clients);
  return {
    clients: state.clients
  };
}

export default connect(mapStateToProps)(ClientsList);
