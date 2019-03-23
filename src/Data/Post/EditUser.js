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
      UserData: [],
      password: "",
      passwordconfirm: "",
      nama: "",
      urlimage: "",
      alamat: "",
      kota: "",
    };
  }
  componentDidMount = async (id) => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/me",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ UserData: response.data });
        self.setState({ password: response.data.password });
        self.setState({ passwordconfirm: response.data.password });
        self.setState({ nama: response.data.name });
        self.setState({ urlimage: response.data.urlimage });
        self.setState({ alamat: response.data.alamat });
        self.setState({ kota: response.data.kota });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  ChangeUser = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "put",
      url: Host+"/user/api",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      data: {
        password: self.state.password,
        passwordconfirm: self.state.passwordconfirm,
        nama: self.state.nama,
        urlimage: self.state.urlimage,
        alamat: self.state.alamat,
        kota: self.state.kota,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.ChangeAfterPutUser();
        self.props.history.push("/myprofile");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  changepasswordconfirm = e => {
    this.setState({ passwordconfirm: e.target.value });
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
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50">
          <div class="container clearfix">
            <strong><h2 class=" text-white">Edit User</h2></strong>
            <h5 class=" text-white">Edit Pada Field yang Anda inginkan Saja, Hehehe</h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="password">Password</label>
              <input
                onChange={e => {
                  this.changePassword(e);
                }}
                type="password"
                class="form-control"
                id="password"
                placeholder="Masukkan Password Baru"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="ConfirmPassword">Confirm Password</label>
              <input
                onChange={e => {
                  this.changepasswordconfirm(e);
                }}
                type="password"
                class="form-control"
                id="ConfirmPassword"
                placeholder="Masukkan Confirm Password Baru"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="nama">Nama</label>
              <input
                onChange={e => {
                  this.changenama(e);
                }}
                type="title"
                class="form-control"
                id="nama"
                placeholder={this.state.UserData.name}
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="urlimage">URL Image</label>
              <input
                onChange={e => {
                  this.changeurlimage(e);
                }}
                type="title"
                class="form-control"
                placeholder={this.state.UserData.urlimage}
                id="urlimage"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="urlimage">Alamat</label>
              <input
                onChange={e => {
                  this.changealamat(e);
                }}
                class="form-control"
                id="alamat"
                placeholder={this.state.UserData.alamat}
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="kota">Kota</label>
              <textarea
                class="form-control"
                id="kota"
                placeholder={this.state.UserData.kota}
                onChange={e => {
                  this.changekota(e);
                }}
              />
            </div>

            <div class="form-group ml-3">
              <button
                onClick={this.ChangeUser}
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
  "Bearer",
  actions
)(withRouter(EditItem));
