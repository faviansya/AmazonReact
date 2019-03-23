import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  postLogin = function() {
    this.props.Login(this.state.username, this.state.password).then(() => {
      this.props.history.push("/myprofile");
    });
  };
  changeUser(e) {
    this.state.username = e.target.value;
  }
  changePassword(e) {
    this.state.password = e.target.value;
  }
  render() {
    if (!this.props.is_login) {
      return (
        <div class="col-auto col-lg-8">
          <div class="widget-header dropdown">
            <div class="icontext">
              <div class="icon-wrap">
                <i class=" icon-sm fa fa-user" style={{ color: "#94c347" }} />
              </div>
              <div class="text-wrap text-dark">
                Login to <br />
                My account <i class="fa fa-caret-down" />
              </div>
            </div>
            <div class="dropdown-menu" style={{ marginTop: "-2px" }}>
              <form class="px-4 py-3" onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="username"
                    class="form-control"
                    placeholder="Username"
                    onChange={e => this.changeUser(e)}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={e => this.changePassword(e)}
                  />
                </div>
                <button
                  onClick={e => this.postLogin()}
                  type="submit"
                  class="btn btn-success"
                >
                  Sign in
                </button>
                <Link to="/daftar">
                  <button type="submit" class="btn btn-outline-primary ml-1">
                    {" "}
                    Sign Up
                  </button>
                </Link>
              </form>

              <hr class="dropdown-divider" />
              <Link class="dropdown-item" to="/daftar">
                Don't Have account? Sign up
              </Link>
              <Link class="dropdown-item" to="">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <sec>
          <div class="col-auto col-lg-12">
            <div class="widget-header dropdown">
              <Link to="/myprofile" data-offset="20,10">
                <div class="icontext">
                  <div class="icon-wrap">
                    <i
                      class=" icon-sm fa fa-user"
                      style={{ color: "#94c347" }}
                    />
                  </div>
                  <div class="text-wrap text-dark">
                    Hello <br />
                    {this.props.nama} <i class="fa fa-heart" />
                  </div>
                </div>
              </Link>
              <div class="dropdown-menu" style={{ marginTop: "-2px" }}>
                <form class="px-4 py-3" onSubmit={e => e.preventDefault()}>
                  <center>
                    <Link to="/myprofile" data-offset="20,10">
                      <div class="form-group">
                        <img src={this.props.imagesource} height="130px" />
                      </div>
                    </Link>

                    <div class="form-group">
                      <label>Username: {this.props.ownerUsername}</label>
                      <br />
                      <label>Name: {this.props.nama}</label>
                      <br />
                      <label>Level: {this.props.level}</label>
                      <br />
                    </div>
                    <div class="form-group">
                      <Link to="/edituser">
                        <button type="button" class="btn btn-success w-100">
                          Edit Profile
                        </button>
                      </Link>
                    </div>
                    <div class="form-group">
                    <Link to="/logtransaksi">
                        <button type="submit" class="btn btn-info mr-2">
                          Log Transaksi
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          this.props.signout();
                          this.state.username = "";
                          this.state.password = "";
                        }}
                        type="submit"
                        class="btn btn-link"
                      >
                        Sign Out
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <Link to="/postitem" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
                  <i
                    className="icon-sm fa fa-plus"
                    style={{ color: "#94c347" }}
                  />
                </div>
                <div className="text-wrap text-dark">
                  Post <br /> Item
                </div>
              </div>
            </Link>
          </div>
        </sec>
      );
    }
  }
}

export default connect(
  "nama,level,is_login,ownerUsername,imagesource",
  actions
)(withRouter(Header));
