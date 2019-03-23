import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class BestThingComponent extends Component {
  render() {
    return (
      <section class="section-intro padding-y-lg background-jumbo layer-jumbo">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <article class="white text-center mb-5">
              <h1 class="display-3">{this.props.judul}</h1>
              <p>{this.props.konten}</p>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(BestThingComponent));
