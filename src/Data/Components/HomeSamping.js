import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class HomeSamping extends Component {
  render() {
    return (
      <div class="card mb-3">
        <figure class="itemside">
          <div class="aside">
            <div class="img-wrap p-2 border-right">
              <img
                class="img-sm"
                src={this.props.Image}
              />
            </div>
          </div>
          <figcaption class="text-wrap align-self-center">
            <h6>{this.props.pesan}</h6>
            <h6 class="title">{this.props.judul} </h6>
            {/* <Link to="#">Lihat Lebih</Link> */}
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(HomeSamping));
