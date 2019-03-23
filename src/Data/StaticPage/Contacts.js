import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class Contact extends Component {
  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/" }} />;
  }
    return (
      <section
        id="intro"
        class="section-intro bg-secondary pt-5 wow bounceInUp"
        style={{marginBottom:"-50px"}}
      >
        <div class="container">
          <div class="row d-flex" style={{minHeight:"600px"}}>
            <div class="col-sm-6 d-flex align-items-center">
              <header class="intro-wrap text-white">
                <h2 class="display-3"> Contact Us </h2>
                <p class="lead">Warung 999 Team Always Serve With Heart</p>
                <p class="lead">Phone : +62 81-123456789</p>
                <p class="lead">Find Us :</p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.8286246769638!2d112.60989648804589!3d-7.966413999639625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnNTkuMSJTIDExMsKwMzYnMzcuNiJF!5e0!3m2!1sen!2sid!4v1552214496580"
                  width="400"
                  height="400"
                  frameborder="0"
                  style={{border:"0"}}
                  allowfullscreen
                />
              </header>
            </div>
            <div class=" col-sm-6 text-right d-sm-none d-sm-none d-lg-block">
              <img
                src="https://indodjaja.com/1mages/contact/contact.png"
                class="img-fluid my-5"
                width="300"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(Contact));
