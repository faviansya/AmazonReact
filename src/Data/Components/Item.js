import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  changeItemId = ()=>{
    this.props.ChangeItemId(this.props.id)
  }
  render() {
    return (
      <div onClick={this.changeItemId} class="col-md-4 col-lg-4 col-sm-6 wow bounceInUp">
        <Link to="/details" class="title">
          <figure class="card card-product">
            <div class="img-wrap">
              <img
                class="d-block w-100 h-100"
                src={this.props.img}
              />
            </div>
            <figcaption class="info-wrap" style={{ color: "Black" }}>
              {this.props.title}
              <div class="price-wrap" style={{ color: "green" }}>
                <span class="price-new">Rp. {this.props.price}</span>
                {/* <del class="price-old">Rp. 99.000</del> */}
              </div>
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
