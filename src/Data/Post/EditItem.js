import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemData: [],
      nama: "",
      urlimages: "",
      harga: "",
      kategori: "",
      kondisi: "",
      deskripsi: "",
      berat: "",
      stok: "",
      kadaluwarsa: ""
    };
  }
  componentDidMount = async id => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/item/" + self.props.itemId,
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ ItemData: response.data.Item });
        self.setState({ nama: response.data.Item.name });
        self.setState({ urlimages: response.data.Item.urlimages });
        self.setState({ harga: response.data.Item.harga });
        self.setState({ kategori: response.data.Item.kategori });
        self.setState({ kondisi: response.data.Item.kondisi });
        self.setState({ deskripsi: response.data.Item.deskripsi });
        self.setState({ berat: response.data.Item.berat });
        self.setState({ stok: response.data.Item.stok });
        self.setState({ kadaluwarsa: response.data.Item.kadaluwarsa });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  ChangeItems = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "put",
      url: Host+"/user/api/item",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        id: self.props.itemId
      },
      data: {
        nama: self.state.nama,
        urlimage: self.state.urlimages,
        harga: self.state.harga,
        kategori: self.state.kategori,
        kondisi: self.state.kondisi,
        deskripsi: self.state.deskripsi,
        berat: self.state.berat,
        stok: self.state.stok,
        kadaluwarsa: self.state.kadaluwarsa
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.ChangeMyitem();
        self.props.history.push("/myprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changeName = e => {
    this.setState({ nama: e.target.value });
  };
  changeurlimages = e => {
    this.setState({ urlimages: e.target.value });
  };
  changeharga = e => {
    this.setState({ harga: e.target.value });
  };
  changekategori = e => {
    this.setState({ kategori: e.target.value });
  };
  changekondisi = e => {
    this.setState({ kondisi: e.target.value });
  };
  changedeskripsi = e => {
    this.setState({ deskripsi: e.target.value });
  };
  changeberat = e => {
    this.setState({ berat: e.target.value });
  };
  changestok = e => {
    this.setState({ stok: e.target.value });
  };
  changekadaluwarsa = e => {
    this.setState({ kadaluwarsa: e.target.value });
  };
  render() {
    let dummy = {};
    return (
      <div class="card mb-3">
        <section class="section-pagetop">
          <div class="container clearfix">
            <strong>
              <h2 class=" text-white">Edit Item</h2>
            </strong>
            <h5 class=" text-white">
              Edit Pada Field yang Anda inginkan Saja, Hehehe
            </h5>
          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="Nama">Nama Item</label>
              <input
                onChange={e => {
                  this.changeName(e);
                }}
                type="title"
                class="form-control"
                id="Nama"
                placeholder={this.state.ItemData.name}
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Url">Url Image</label>
              <input
                onChange={e => {
                  this.changeurlimages(e);
                }}
                type="title"
                class="form-control"
                id="Url"
                placeholder={this.state.ItemData.urlimages}
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="harga">Harga</label>
              <input
                onChange={e => {
                  this.changeharga(e);
                }}
                type="number"
                class="form-control"
                id="harga"
                placeholder={this.state.ItemData.harga}
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="kategori">Kategori</label>
              <select
                onChange={e => {
                  this.changekategori(e);
                }}
                class="form-control form-control-sm"
                placeholder={this.state.ItemData.kategori}
                id="kategori"
              >
                <option>makanan</option>
                <option>buah</option>
                <option>gorengan</option>
                <option>snack</option>
                <option>minuman</option>
                <option>nasi</option>
                <option>sayuran</option>
                <option>lauk</option>
              </select>
            </div>

            <div class="form-group col-lg-6">
              <label for="kondisi">Kondisi</label>
              <select
                onChange={e => {
                  this.changekondisi(e);
                }}
                class="form-control form-control-sm"
                id="kondisi"
                placeholder={this.state.ItemData.kondisi}
              >
                <option>Baru Dimasak</option>
                <option>Kalengan</option>
              </select>
            </div>

            <div class="form-group col-lg-6">
              <label for="exampleFormControlTextarea1">Deskripsi</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder={this.state.ItemData.deskripsi}
                onChange={e => {
                  this.changedeskripsi(e);
                }}
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="berat">Berat</label>
              <input
                onChange={e => {
                  this.changeberat(e);
                }}
                type="number"
                class="form-control"
                id="berat"
                placeholder={this.state.ItemData.berat}
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="stok">Stok</label>
              <input
                onChange={e => {
                  this.changestok(e);
                }}
                type="number"
                class="form-control"
                id="stok"
                placeholder={this.state.ItemData.stok}
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="kadaluwarsa">Kadaluwarsa</label>
              <input
                onChange={e => {
                  this.changekadaluwarsa(e);
                }}
                type="title"
                class="form-control"
                id="kadaluwarsa"
                placeholder={this.state.ItemData.kadaluwarsa}
              />
            </div>

            <div class="form-group ml-3">
              <button
                onClick={this.ChangeItems}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "itemId,Bearer",
  actions
)(withRouter(EditItem));
