import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class Traknsaksi extends Component {
  constructor(props) {
    super(props);
  }
  DoingTransaction = async () => {
    const self = this;
    const req = {
      method: "post",
      url: Host + "/api/transaction",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        cart_id: self.props.CartID
      }
    };
    axios(req)
      .then(function(response) {
        if (response.data.status == "Success") {
          self.props.history.push("/");
          alert("Pembayaran Berhasil");
        } else {
          alert("Pembayaran Gagal\nStatus:" + response.data.Pesan + "\nKami Akan Memperingatkan Penjual");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  BacktoHome = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div class="container">
        <div class="col-12">
          <button
            onClick={() => {
              this.DoingTransaction();
            }}
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >
            Bayar
          </button>
          <button
            onClick={() => {
              this.BacktoHome();
            }}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  "CartID,is_login",
  actions
)(withRouter(Traknsaksi));
