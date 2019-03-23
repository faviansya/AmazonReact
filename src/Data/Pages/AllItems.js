import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import AllItems from "../Components/AllItems";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class GetAllItem extends Component {
  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/" }} />;
  }
    return (
      <section class="section-content bg padding-y-sm">
        <div class="container">
          <div class="padding-y-sm">
            <span>112 Barang "Ditemukan"</span>
          </div>
          <div class="row-sm">
            {this.props.categoryItem.map((item, key) => {
              const arc_img =
                item.urlimages === null
                  ? "User Not Upload Data"
                  : item.urlimages;
              return (
                <AllItems
                  id={item.id}
                  key={key}
                  title={item.name}
                  img={arc_img}
                  price={item.harga}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  "Bearer,category,categoryItem,is_login",
  actions
)(withRouter(GetAllItem));
