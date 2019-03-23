import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class PertanyaanUmum extends Component {
  render() {
    if (!this.props.is_login) {
        return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div>
        <section class="section-pagetop bg-dark-50">
          <div class="container clearfix">
            <h2 class=" text-white">Pertanyaan-Pertanyaan Umum</h2>
          </div>
        </section>
        <section class="section-name bg-white padding-y wow slideInUp">
          <div class="container">
            <header class="section-heading">
              <h2 class="title-section">
                Apakah Bertransaksi Pada Platform ini Aman?
              </h2>
            </header>

            <p>
              Ya Sangat aman, kami memberikan Teknologi terbaik masa kini yaitu
              ReactJs
            </p>
          </div>
        </section>
        <section class="section-name bg padding-y wow slideInUp">
          <div class="container">
            <h4>Bagaimana Cara Membayar?</h4>
            <p>
              Anda Dapat melihat pada tab Cara Transaksi, Kami Menyediakan
              Berbagai Macam Cara Bertransaksi
            </p>
          </div>
        </section>
        <section class="section-name bg-white padding-y wow slideInUp">
          <div class="container">
            <header class="section-heading">
              <h2 class="title-section">
                Apakah Pada Platform Ini Hanya Tersedia Makanan?
              </h2>
            </header>
            <p>
              Ya, Jenis E-Commerce Ini Yaitu FoodCommerce, kami menyediakan
              platform untuk user agar dapat bertransaksi dengan user lainnya.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(PertanyaanUmum));
