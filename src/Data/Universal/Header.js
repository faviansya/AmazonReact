import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import LoginBar from "./LoginBar";
import Search from "../Components/Search";

class Header extends Component {
  signout = () => {
    this.props.postSignout();
  };

  render() {
    return (
      <div>
        <header className="section-header">
          <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  className="logo"
                  src="https://indodjaja.com/1mages/999-Logo.png"
                  height="100%"
                  alt="Warung 999"
                  title="Warung 999"
                />
              </Link>
              <button
                className="navbar-toggler"
                style={{
                  background: "none",
                  border: "none",
                  backgroundColor: "white"
                }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarTop"
                aria-controls="navbarTop"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarTop">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {" "}
                      Best Player{" "}
                    </Link>
                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
                      <li>
                        <Link
                          className="dropdown-item medianav"
                          to="/bestplayer"
                          id="inside"
                        >
                          Penjual Terbaik
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/bestitem"
                          id="inside"
                        >
                          Barang Terbaik{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown" >
                    <Link to="" className="nav-link dropdown-toggle">
                      {" "}
                      Cara-Transaksi{" "}
                    </Link>

                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
                      <li>
                        <Link className="dropdown-item" to="/pembayaranAtm" id="inside">
                          Transer ATM
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pembayaranIndomaret" id="inside">
                          Bayar Di Indomaret{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pembayaranMBanking" id="inside">
                          M-Banking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="" className="nav-link dropdown-toggle">
                      {" "}
                      Hubungi CS{" "}
                    </Link>
                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
                      <li>
                        <Link className="dropdown-item" to="/pertanyaanumum" id="inside">
                          Pertanyaan Umum
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/masalahpelapak" id="inside">
                          Masalah Pelapak{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/masalahpenjualan" id="inside">
                          Masalah Penjualan{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="header-main shadow-sm">
            <div className="container">
              <div className="row-sm align-items-center">
                <div className="col-lg-4-24 col-sm-3">
                  <div className="category-wrap dropdown py-1">
                    <button
                      type="button"
                      className="btn btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-bars" /> Categories
                    </button>
                    <div className="dropdown-menu " style={{ marginTop: "-2px" }}>
                    <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("makanan");
                        }}
                      >
                        Makanan Berat{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("buah");
                        }}
                      >
                        Buah{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("gorengan");
                        }}
                      >
                        Gorengan{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("snack");
                        }}
                      >
                        Snack
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("minuman");
                        }}
                      >
                        Minuman{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("nasi");
                        }}
                      >
                        Nasi
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("sayuran");
                        }}
                      >
                        Sayuran{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allitems"
                        onClick={() => {
                          this.props.changeCategory("lauk");
                        }}
                      >
                        Lauk Pauk{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <Search />
                <div className="col-lg-7-24 col-12">
                  <div className="widgets-wrap float-right row no-gutters py-1">
                    <LoginBar signout={this.signout} />
                    <div className="col-lg-4 col-md-12">
                      <Link to="/cart" className="widget-header">
                        <div className="icontext">
                          <div className="icon-wrap">
                            <i
                              className="icon-sm fa fa-shopping-cart"
                              style={{ color: "#94c347" }}
                            />
                          </div>
                          <div className="text-wrap text-dark">
                            My <br /> Carts
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Header));
