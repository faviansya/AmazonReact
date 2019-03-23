import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogTransaction: []
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/api/transaction",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ LogTransaction: response.data.Data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <center>
          <div class="container">
            <div class="row">
              <div class="col-2">Item ID<hr /></div>
              <div class="col-2">Owner ID<hr /></div>
              <div class="col-2">User ID<hr /></div>
              <div class="col-2">Item QTY<hr /></div>
              <div class="col-2">Status<hr /></div>
              
            </div>
          </div>
        </center>
        {this.state.LogTransaction.map((item, key) => {
          return (
            <center>
              <div class="container">
                <div class="row">
                  <div class="col-2">{item.item_id}</div>
                  <div class="col-2">{item.owner_id}</div>
                  <div class="col-2">{item.user_id}</div>
                  <div class="col-2">{item.qty}</div>
                  <div class="col-2">{item.status}</div>
                  <hr />
                </div>
              </div>
            </center>
          );
        })}
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(Item));
