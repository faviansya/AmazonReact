import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <section
            style={{
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "200px",
              backgroundImage:
                "url(https://indodjaja.com/1mages/footer/footerBar2.png)",
              backgroundSize: "100.1% 100%"
            }}
          >
            <div>
              <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" />
                </div>
              </div>
            </div>
          </section>

          <section id="footer">
            <div class="container text-center text-lg-left">
              <div class="row text-center text-xs-center text-center text-lg-left">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 footer-bottom1">
                  <div class="container">
                    <div class="row">
                      <img src="https://indodjaja.com/1mages/999-Logo.png" height="80px" width="42%" alt="" />
                    </div>
                  </div>
                  <div class="container">
                    <div
                      class="row mt-3"
                      style={{
                        color: "white",
                        fontSize: "13px",
                        letterSpacing: "1px"
                      }}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, consequuntur cumque. Quae dolor dolorem similique
                        ipsa unde nostrum eveniet, porro, eos odit, distinctio
                        nobis voluptas aliquam hic beatae laborum nihil?
                      </p>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row footer-bottom11">.</div>
                  </div>
                  <div class="container ">
                    <div
                      class="row mt-1"
                      style={{
                        color: "lightslategray",
                        fontSize: "13px",
                        letterSpacing: "1px"
                      }}
                    >
                      <label>
                        <span style={{ color: "greenyellow" }}>Kantor:</span>{" "}
                        Jl. Tambora Tidar Selatan
                      </label>
                    </div>
                    <div
                      class="row mt-1"
                      style={{
                        color: "lightslategray",
                        fontSize: "13px",
                        letterSpacing: "1px"
                      }}
                    >
                      <label>
                        <span style={{ color: "greenyellow" }}>Telephone:</span>{" "}
                        081-12345678
                      </label>
                    </div>
                    <div
                      class="row mt-1"
                      style={{
                        color: "lightslategray",
                        fontSize: "13px",
                        letterSpacing: "1px"
                      }}
                    >
                      <label>
                        <span style={{ color: "greenyellow" }}>E-Mail:</span>{" "}
                        Alterra@Alterra.id
                      </label>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row footer-bottom11">.</div>
                  </div>
                  <div class="container">
                    <div
                      class="row"
                      style={{
                        color: "white",
                        fontSize: "13px",
                        letterSpacing: "1px"
                      }}
                    >
                      <label>
                        <span>
                          <b>Layanan Kantor</b>
                        </span>{" "}
                      </label>
                    </div>
                    <div
                      class="row"
                      style={{ fontSize: "13px", letterSpacing: "1px" }}
                    >
                      <span style={{ color: "lightgray" }}>
                        Senin-Jum'at: 08.00-22.00
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 mt-5 mt-lg-0">
                  <div class="container">
                    <div class="row" style={{ fontSize: "15px" }}>
                      <div class="col-sm-12 col-md-12 col-lg-3 text-center text-lg-left">
                        <h5 class="footer-title">MY ACCOUNT</h5>
                        <ul class="list-unstyled quick-links">
                          <li>
                            <Link to="/myprofile">
                              <i class="fa fa-angle-right" /> My Account
                            </Link>
                          </li>
                          <li>
                            <Link to="/cart">
                              <i class="fa fa-angle-right" /> My Carts
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Home
                            </Link>
                          </li>
                          <li>
                            <Link to="/bestplayer">
                              <i class="fa fa-angle-right" /> Best Player
                            </Link>
                          </li>
                          <li>
                            <Link to="/bestitem">
                              <i class="fa fa-angle-right" /> Best Item
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-3 text-center text-lg-left">
                        <h5 class="footer-title">INFORMATION</h5>
                        <ul class="list-unstyled quick-links">
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Home
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Contact
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Pertanyaan Umum
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Masalah Pelapak
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Masalah Penjualan
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <i class="fa fa-angle-right" /> Cara Transaksi
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-12 col-12 col-lg-6 d-none d-lg-block">
                        <h5 class="footer-title-highlight">HIGHTLIGHT</h5>
                        <ul class="list-unstyled quick-links">
                          <div
                            class="row"
                            style={{ padding: "0px 20px 0px 20px" }}
                          >
                            <div class="col-sm-12 col-md-12 col-lg-6">
                              <li>
                                <img src="" alt="" style={{ width: "80%" }} />
                              </li>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6">
                              <li>
                                <img src="" alt="" style={{ width: "80%" }} />
                              </li>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-6">
                              <li>
                                <img src="" alt="" style={{ width: "80%" }} />
                              </li>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6">
                              <li>
                                <img src="" alt="" style={{ width: "80%" }} />
                              </li>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="row footer-bottom2"
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <ul class="list-unstyled list-inline social text-center">
                    <li class="list-inline-item">
                      <Link to="">
                        <i class="fab fa-facebook" />
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="">
                        <i class="fab fa-twitter" />
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="">
                        <i class="fab fa-instagram" />
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="">
                        <i class="fab fa-google" />
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="" target="_blank">
                        <i class="fa fa-envelope" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center"
                  style={{color:"white"}}
                >
                  <p>
                    <u>
                      <Link to="#">Warung 999 Sumbersari Malang</Link>
                    </u>{" "}
                    Merupakan Warung Terbaik (Amin) Se-Malang Raya. Kantor
                    Terletak Di, Jalan Tidar contact:081-99999999
                  </p>
                  <p class="h6">
                    copyCopyright{" "}
                    <Link class="text-green ml-2" to="" target="_blank">
                      @Alterra.id
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Footer));
