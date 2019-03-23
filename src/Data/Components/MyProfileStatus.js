import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyProfileStatus extends Component {
  render() {
    return (
      <aside class="col-xl-2 col-md-4 col-sm-12 text-center">
        <div class="card">
          <div class="card-header ">Status Kamu</div>
          <div class="card-body small">
            <div style={{ fontSize: "15px" }}>
              {" "}
              <u>
                <b>
                  <Link style={{ color: "black" }} to="" class="img-wrap">
                    {this.props.nama}
                  </Link>
                </b>
              </u>
            </div>
            Status Member <br />
            VIP-User <i class="fa fa-gem" style={{ color: "forestgreen" }} />
            <hr />
            Status VIP
            <hr />
            VIP Sampai 365 Hari <br />
            Respon Kamu Terhadap Penjualan: 100%
            <br />
            <hr />
            <Link to="/edituser">
            <button type="button" class="btn btn-success">
              Edit Profile
            </button>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(MyProfileStatus));
