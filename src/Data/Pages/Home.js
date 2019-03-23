import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Items from "../Components/Item";
import axios from "axios";
import Carousel from "../Components/Carousel";
import Samping from "../Components/HomeSamping";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/item/home",
      headers: {
        Authorization: "Bearer " + this.props.Bearer
      }
    };
    axios(req)
      .then(function(response) {
        self.setState({ itemList: response.data.data });
        // console.log(self.state.itemList);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const pesan = {
      login:"",
      barang:"",
    }
    if(!this.props.is_login){
      pesan.login=<center><div><h1>Silahkan Login Untuk Melihat Konten</h1></div></center>;
      pesan.barang ="";
    }
    else{
      pesan.login="";
      pesan.barang = <span> ... Rekomendasi Barang</span>;
    }
    const { itemList } = this.state;
    return (
      <div>
        <section class="section-main bg padding-top-sm">
          <div class="container-fluid">
            <div class="row-sm ml-1 mr-1 wow bounceInUp">
              <Carousel />
              <aside class="col-md-4">
                <Samping
                  pesan="Selamat Datang di Warung 999"
                  judul="Disini Anda Dapat Bertransaksi Dengan User Lain."
                  Image="https://indodjaja.com/1mages/999-Logo.png"
                />
                <Samping
                  pesan="Tersedia"
                  judul="Makanan Berat,Lauk,Nasi, Minuman"
                  Image="https://indodjaja.com/1mages/HomeFood/2.jpg"
                />
                <Samping
                  pesan=""
                  judul="Dan Masih Banyak Lainnya"
                  Image="https://indodjaja.com/1mages/HomeFood/3.jpg"
                />
                <Samping
                  pesan=""
                  judul="Happy Shopping"
                  Image="https://indodjaja.com/1mages/HomeFood/5.jpg"
                />
              </aside>
            </div>
          </div>
        </section>

        <section class="section-content bg padding-y-sm">
          <div class="container">
            <div class="padding-y-sm">
                {pesan.barang}
            </div>
            {pesan.login}
            <div class="row-sm">
              {itemList.map((item, key) => {
                const arc_img =
                  item.urlimages === null
                    ? "User Not Upload Data"
                    : item.urlimages;
                return (
                  <Items
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
      </div>
    );
  }
}

export default connect(
  "Bearer,is_login",
  actions
)(withRouter(Home));
