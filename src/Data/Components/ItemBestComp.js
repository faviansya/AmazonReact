import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class ItemTerbaikComponent extends Component {
  changeItemId = () => {
    this.props.ChangeItemId(this.props.id);
  };
  render() {
    return (
      <div
        onClick={this.changeItemId}
        class="col-md-4 col-lg-4 col-sm-6 wow rubberBand"
      >
        <Link to="/details" class="title green-font">
          <div class="green-font">
            <i class="fa fa-trophy" style={{ color: "gold" }} /> Terbaik{" "}
            <i class="fa fa-trophy" style={{ color: "gold" }} />
          </div>
          <figure class="card card-product">
            <div class="img-wrap">
              {" "}
              <img class="d-block h-100 w-100" src={this.props.img} />
            </div>
            <figcaption class="info-wrap">
              {this.props.title}
              <br />
              <div class="price-wrap" />
              Terjual: {this.props.terjuala}
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
)(withRouter(ItemTerbaikComponent));
