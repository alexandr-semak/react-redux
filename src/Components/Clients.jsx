import React, { Component } from "react";
import { connect } from "react-redux";

class Clients extends Component {
  render() {
    return (
      <div>
        <h2>Clients</h2>
        <div>
          <div>
            <h3>Clients: </h3>
            <ul>
              <li>Client</li>
            </ul>
          </div>

          <div>
            <h3>ClientsDetail: </h3>
            <div>Details</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
