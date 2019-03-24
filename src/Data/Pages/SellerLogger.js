import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogSeller: []
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/transaction/seller",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ LogSeller: response.data.Data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  ConfirmTransaction = async (ID,Deliver) => {
    const self = this;
    const id = ID;
    const deliver = Deliver;
    const req = {
      method: "get",
      url: Host + "/api/transaction/confirm",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        transaction_id: id
      }
    };
    await axios(req)
      .then(async function(response) {
        const req = {
          method: "get",
          url: Host + "/api/transaction/seller",
          headers: {
            Authorization: "Bearer " + self.props.Bearer
          }
        };
        await axios(req)
          .then(function(response) {
            self.setState({ LogSeller: response.data.Data });
            if(deliver == "undeliver"){
              self.props.changenewTransactionCount();
            }
            console.log("Response",id);
          })
          .catch(function(error) {
            console.log(error);
          });
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
              <div class="col-2">
                Item ID
                <hr />
              </div>
              {/* <div class="col-2">Owner ID<hr /></div> */}
              <div class="col-2">
                Pembeli
                <hr />
              </div>
              <div class="col-2">
                Item QTY
                <hr />
              </div>
              <div class="col-2">
                Status
                <hr />
              </div>
              <div class="col-2">
                Delivery Status
                <hr />
              </div>
              <div class="col-2">
                Confirmation
                <hr />
              </div>
            </div>
          </div>
        </center>
        {this.state.LogSeller.map((item, key) => {
          const style = {
            button: ""
          };
          if (item.deliver == "delivered") {
            style.button = "btn btn-success col-2 h-50";
          } else {
            style.button = "btn btn-secondary col-2 h-50";
          }
          return (
            <center>
              <div class="container">
                <div class="row mt-2">
                  <div class="col-2">{item.item_id}</div>
                  {/* <div class="col-2">{item.owner_id}</div> */}
                  <div class="col-2">{item.user_id}</div>
                  <div class="col-2">{item.qty}</div>
                  <div class="col-2">{item.status}</div>
                  <div class="col-2">{item.deliver}</div>
                  <button
                    type="button"
                    class={style.button}
                    onClick={() => {
                      this.ConfirmTransaction(item.id,item.deliver);
                    }}
                  >
                    Confirm
                  </button>
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
  "Bearer,newTransactionCount",
  actions
)(withRouter(Item));
