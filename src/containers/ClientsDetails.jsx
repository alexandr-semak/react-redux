import React, { Component } from "react";
import { connect } from "react-redux";

class ClientsDetails extends Component {
  render() {
    console.log(this.props.clientDetails);
    if (!this.props.clientDetails) {
      return <p>Выберите клиента</p>;
    }
    console.log(this.props.clientDetails);
    return (
      <div>
        <h1>
          {this.props.clientDetails.general.firstName +
            " " +
            this.props.clientDetails.general.lastName}
        </h1>
        <img src={this.props.clientDetails.general.avatar} alt="alt" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state.clientDetails);
  return {
    clientDetails: state.clientDetails
  };
}

export default connect(mapStateToProps)(ClientsDetails);
