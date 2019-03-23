import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import BestItem from "../Components/ItemBestComp";
import axios from "axios";
import Judul from "../Components/BestThingsComponent";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class BarangTerbaik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BestItem: []
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/item/bestitem",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    axios(req)
      .then(function(response) {
        self.setState({ BestItem: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Judul
          judul="Barang Terbaik"
          konten="Pada Tiap Minggunya akan dipilih barang-barang terbaik dari
                  pelapak, yang mana tiap barang tersebut memiliki kualitas yang
                  luar biasa bagus dan tidak akan mengecewakan pelanggan."
        />
        <section class="section-content bg padding-y-sm">
          <div class="container">
            <div class="row-sm text-center">
              {this.state.BestItem.map((item, key) => {
                const arc_img =
                  item.urlimages === null
                    ? "User Not Upload Data"
                    : item.urlimages;
                return (
                  <BestItem
                    id={item.id}
                    key={key}
                    title={item.name}
                    img={arc_img}
                    price={item.harga}
                    terjuala={item.terjual}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "Bearer,is_login",
  actions
)(withRouter(BarangTerbaik));
