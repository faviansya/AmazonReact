import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class PenjualTerbaikComponent extends Component {
  changeUser = () => {
    this.props.ChangeUserId(this.props.id);
  };
  render() {
    return (
      <div onClick={this.changeUser} class="col-sm-12 col-lg-4 col-md-6 wow fadeIn">
        <div class="col-lg-8 text-center">
          <div>
            <i class="fa fa-trophy" style={{ color: "gold" }} /> Terbaik{" "}
            <i class="fa fa-trophy" style={{ color: "gold" }} />
          </div>
          <div class="card">
            <div class="card-header ">Profil Penjual</div>
            <div class="card-body small">
              <div style={{ fontSize: "15px" }}>
                {" "}
                <u>
                  <b>{this.props.title}</b>
                </u>
              </div>
              <Link to="/profile" class="img-wrap mt-3">
                {" "}
                <img src={this.props.img} height="130px" style={{ borderRadius: "40%" }} />
              </Link>
              <hr />
              Level: {this.props.level} <br />
              Barang Terkirim: {this.props.transaksi}
              <hr />
              Menerima {this.props.transaksi} Pembeli
              <hr />
              Asal Kota: {this.props.kota} <br />
              Respon Penjual: 100%
              <br />
              <hr />
              <Link to="/profile">Kunjungi Profil</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(PenjualTerbaikComponent));
