import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import PenjualTerbaik from "../Components/PenjualBestComponent";
import Judul from "../Components/BestThingsComponent"
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class AllItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BestUser: []
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/bestuser",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    axios(req)
      .then(function(response) {
        self.setState({ BestUser: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Judul
          judul="Penjual Terbaik"
          konten="Pada Tiap Minggunya akan dipilih pelapak Terbaik, yang mana
          tiap Pelapak dapat melakukan penjualan sesuai target dan
          memiliki kualitas yang sangat baik serta tidak akan
          mengecewakan pelanggan."
        />
        <div class="container">
          <div class="row ml-5 mt-5">
            {this.state.BestUser.map((item, key) => {
              const arc_img =
                item.urlimage === null ? "User Not Upload Data" : item.urlimage;
              return (
                <PenjualTerbaik
                  id={item.id}
                  key={key}
                  title={item.name}
                  img={arc_img}
                  level={item.level}
                  kota={item.kota}
                  transaksi={item.transaction}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer,is_login",
  actions
)(withRouter(AllItem));
