import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class MasalahPenjualan extends Component {
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
            <h2 class=" text-white">Laporan Masalah Penjualan</h2>
          </div>
        </section>

        <div class="container mt-5" onClick={e => { e.preventDefault(); }}>
          <form >
            <div class="form-group col-lg-6">
              <label for="exampleFormControlInput1">Judul</label>
              <input
                type="title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukkan Judul Laporan Penjualan Anda"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="exampleFormControlInput1">Link Penjualan</label>
              <input
                type="title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukkan Link Penjualan/Barang"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="exampleFormControlTextarea1">
                Ceritakan Masalah Penjualan Anda
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Ceritakan Masalah Penjualan Anda Disini"
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
)(withRouter(MasalahPenjualan));
