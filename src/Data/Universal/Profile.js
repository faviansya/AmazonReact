import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  changeUser = () => {
    console.log("OwnerID",this.props.ownerid)
    this.props.ChangeUserId(this.props.ownerid);
  };
  render() {
    return (
      <aside className="col-xl-2 col-md-3 col-sm-12 text-center wow fadeInUp" >
        <div className="card" >
          <Link onClick={this.changeUser} to="/profile">
            <div className="card-header" style={{color:"black"}}>Profil Penjual</div>
            <div className="card-body small">
              <div >
                <u>
                  <b style={{color:"black"}}>{this.props.nama}</b>
                </u>
              </div>
              <Link to="/profile" className="img-wrap mt-3">
                <img src={this.props.imagesource} height="130px" />
              </Link>
              <hr />
              <div style={{color:"black"}}>
              <label >
              Level: {this.props.level}
              </label>
              <br />
              Transaksi: {this.props.transaction}
              <hr />
              Menerima {this.props.transaction} Pembeli
              <hr />
              Respon Penjual: 100%
              <br />
              <hr />
              </div>
              {/* <Link href="">Kunjungi Profil</Link> */}
            </div>
          </Link>
        </div>
      </aside>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Profile));
