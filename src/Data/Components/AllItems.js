import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  changeItemId = () => {
    this.props.ChangeItemId(this.props.id);
  };
  
  render() {
    return (
        <div onClick={this.changeItemId} class="col-md-4 col-sm-6 col-lg-3 wow bounceIn">
          <Link to="/details" class="title">
            <figure class="card card-product">
              <div class="img-wrap">
                {" "}
                <img class="d-block h-100 w-100" src={this.props.img} />
              </div>
              <figcaption class="info-wrap">
                <Link to="" class="title" style={{ color: "black" }}>
                {this.props.title}
                </Link>
                <div class="price-wrap">
                  <span class="price-new" style={{ color: "forestgreen" }}>Rp. {this.props.price}</span>
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
