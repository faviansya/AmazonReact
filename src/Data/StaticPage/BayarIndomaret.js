import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class BayarIndomaret extends Component {
  render() {
      if (!this.props.is_login) {
        return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div>
        <section id="features" class="section-features bg2 padding-y-lg">
          <div class="container">
            <header class="section-heading text-center wow bounceInUp">
              <h2 class="title-section">Kami Memberi Jaminan </h2>
              <p class="lead">
                {" "}
                Pada Tiap Transaksinya Dilakukan Oleh Mesin Canggih{" "}
              </p>
            </header>

            <div class="row">
              <aside class="col-sm-12 col-md-12 col-lg-4 wow bounceInUp ">
                <figure class="itembox text-center">
                  <span class="icon-wrap icon-lg bg-secondary white">
                    <img height="86px" src="https://indodjaja.com/1mages/Pembayaran/Aman.png" alt="" />
                  </span>
                  <figcaption class="text-wrap">
                    <h4 class="title">Aman</h4>
                    <p>
                      Platform E-Commerce Kami Sangat Aman dan Menjamin
                      Kelancaran Pengguna Dalam Bertransaksi, Bebas Penipuan.
                    </p>
                  </figcaption>
                </figure>
              </aside>
              <aside class="col-sm-12 col-md-12 col-lg-4 wow bounceInUp">
                <figure class="itembox text-center">
                  <span class="icon-wrap icon-lg bg-secondary  white">
                    <img height="86px" src="https://indodjaja.com/1mages/Pembayaran/Cepat.png" alt="" />
                  </span>
                  <figcaption class="text-wrap">
                    <h4 class="title">Cepat</h4>
                    <p>
                      Kami Mengedepankan Pengiriman Menggunakan Kurir Yang Sudah
                      Terpercaya Sejak Jaman Dahulu{" "}
                    </p>
                  </figcaption>
                </figure>
              </aside>
              <aside class="col-sm-12 col-md-12 col-lg-4 wow bounceInUp">
                <figure class="itembox text-center">
                  <span class="icon-wrap icon-lg bg-secondary  white">
                    <img height="86px" src="https://indodjaja.com/1mages/Pembayaran/Mudah.png" alt="" />{" "}
                  </span>
                  <figcaption class="text-wrap">
                    <h4 class="title">Mudah</h4>
                    <p>
                      Platform E-Commerce kami Mudah Digunakan bagi semua
                      kalangan,Baik Awam Maupun Expert, Tinggal klik -> Bayar ->
                      Beres.{" "}
                    </p>
                  </figcaption>
                </figure>
              </aside>
            </div>
          </div>
        </section>
        <section
          id="content"
          class="section-content padding-y-lg wow zoomIn mt-5 col-sm-12 col-md-12"
        >
          <div class="container">
            <header class="section-heading text-center">
              <h2 class="title-section">Cara Bayar di Indomaret</h2>
              <p class="lead"> Transfer Dari Mbak-Mbak Indomaret </p>
            </header>

            <div class="row justify-content-center">
              <article class="col-md-6 text-center">
                <img width="100%" src="https://indodjaja.com/1mages/Pembayaran/BayarIndomaret.jpg" alt="" />
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(BayarIndomaret));
