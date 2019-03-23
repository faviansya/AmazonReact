import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class MasalahPelapak extends Component {
  SSubmit = (e)=>{
    e.preventDefault();
    alert("Kami Akan Segera Memproses Keluhan Anda");
  }
  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/" }} />;
  }
    return (
      <div>
        <section class="section-pagetop" style={{backgroundColor:"green"}}>
          <div class="container clearfix">
            <h2 class=" text-white">Laporan Pelapak Bermasalah</h2>
          </div>
        </section>

        <div class="container mt-5">
          <form onClick={(e)=>this.SSubmit(e)}>
            <div class="form-group col-lg-6">
              <label for="exampleFormControlInput1">Judul</label>
              <input
                type="title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukkan Judul Dan Tema Pengajuan"
              />
            </div>
            <div class="form-group col-lg-3">
              <label for="exampleFormControlInput1">Nama Pelapak</label>
              <input
                type="title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukkan Nama Pelapak"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="exampleFormControlTextarea1">
                Ceritakan Masalah Anda
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Ceritakan Masalah Anda Disini"
              />
            </div>
            <div class="form-group ml-3">
            <Link to="/">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(MasalahPelapak));
