import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class RecomendedDetails extends Component {
  changeItemId = () => {
    this.props.ChangeItemId(this.props.id);
    this.props.GetDetails();
  };
  render() {
    return (
      <div
        onClick={this.changeItemId}
        className="col-md-4 col-sm-6 col-lg-2 wow zoomIn"
      >
        <Link to="/details" className="img-wrap">
          <figure className="item mb-3 text-center">
            {" "}
            <img src={this.props.img} className="img-md" />
            <figcaption className="info-wrap" style={{ color: "black" }}>
              {this.props.title}
              <div className="price-wrap mb-3">
                <span style={{ color: "forestgreen" }} className="price-new">Rp. {this.props.price}</span>{" "}
                {/* <del className="price-old">Rp. 31000</del> */}
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
)(withRouter(RecomendedDetails));
