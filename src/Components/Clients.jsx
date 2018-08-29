import React, { Component } from "react";
import { connect } from "react-redux";
import ClientsList from "../containers/ClientsList";
import ClientsDetails from "../containers/ClientsDetails";

class Clients extends Component {
  render() {
    return (
      <div>
        <h2>Clients</h2>
        <div>
          <div>
            <h3>Clients: </h3>
            <ClientsList />
          </div>

          <div>
            <h3>ClientsDetail: </h3>
            <div>
              <ClientsDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
