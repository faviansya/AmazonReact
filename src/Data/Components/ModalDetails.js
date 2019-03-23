import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Modal extends Component {

  render() {
    const hasil = {
      pesan:"",
      ButtonAdd:                
      <button
      onClick={this.props.addTocart}
      type="button"
      class="btn btn-primary"
      data-dismiss="modal"
      >
      Add
    </button>,
    }
    if(this.props.userID == this.props.ItemID){
      hasil.pesan = "THIS IS YOUR OWN ITEM You Cant Add Your Own Item!";
      hasil.ButtonAdd= "";
    }
    else{
      hasil.pesan = "Mau Menambahkan Ke Cart?";
    };
    return (
      <sec>
        <button
          type="button"
          class="btn ml-1 btn-outline-success"
          data-toggle="modal"
          data-target="#ModalForDetails"
        >
          <i className="fa fa-shopping-cart" /> Add To Cart{" "}
        </button>

        <div
          class="modal fade"
          id="ModalForDetails"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ModalForDetailsTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add To Cart
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">{hasil.pesan}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                {hasil.ButtonAdd}

              </div>
            </div>
          </div>
        </div>
      </sec>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Modal));
