import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemData: [],
      username: "",
      password: "",
      nama: "",
      urlimage: "",
      alamat: "",
      kota: "",
    };
  }

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host+"/user/api/register",
      data: {
        username: self.state.username,
        password: self.state.password,
        nama: self.state.nama,
        urlimage: self.state.urlimage,
        alamat: self.state.alamat,
        kota: self.state.kota,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.Login(self.state.username,self.state.password)
        self.props.history.push("/myprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changeUsername = e => {
    this.setState({ username: e.target.value });
  };
  changepassword = e => {
    this.setState({ password: e.target.value });
  };
  changenama = e => {
    this.setState({ nama: e.target.value });
  };
  changeurlimage = e => {
    this.setState({ urlimage: e.target.value });
  };

  changealamat = e => {
    this.setState({ alamat: e.target.value });
  };
  changekota = e => {
    this.setState({ kota: e.target.value });
  };

  render() {
    let dummy = {};
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50" style={{backgroundImage:`url("https://indodjaja.com/1mages/Banner/foodBanner.jpg")`}}>
          <div class="container clearfix" >
            <strong><h2 class=" text-dark" > <label style={{backgroundColor:"greenyellow"}}>Daftar Baru</label></h2></strong>
            <h5 class=" text-dark"><label style={{backgroundColor:"greenyellow"}}>Isikan Semua Keterangan Anda Dibawah</label></h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="username">Masukkan Username</label>
              <input
                onChange={e => {
                  this.changeUsername(e);
                }}
                type="title"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Url">Masukkan Password</label>
              <input
                onChange={e => {
                  this.changepassword(e);
                }}
                type="password"
                class="form-control"
                id="Url"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Url">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="Url"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="nama">Masukkan Nama</label>
              <input
                onChange={e => {
                  this.changenama(e);
                }}
                type="title"
                class="form-control"
                id="nama"
                placeholder="Nama"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="urlimage">Masukkan URL Image Anda</label>
              <input
                onChange={e => {
                  this.changeurlimage(e);
                }}
                type="title"
                class="form-control"
                placeholder="Urlimage"
                id="urlimage"
                required
                />
            </div>

            <div class="form-group col-lg-6">
              <label for="alamat">Masukkan Alamat</label>
              <textarea
                class="form-control"
                id="alamat"
                rows="5"
                placeholder="Alamat"
                onChange={e => {
                  this.changealamat(e);
                }}
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="kota">Masukkan Kota</label>
              <input
                onChange={e => {
                  this.changekota(e);
                }}
                type="title"
                class="form-control"
                id="kota"
                placeholder="Kota"
                required
              />
            </div>

            <div class="form-group ml-3">
              <button
                onClick={this.PostItem}
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
)(withRouter(PostItem));
