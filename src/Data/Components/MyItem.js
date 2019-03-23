import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyItem extends Component {
  changeItemId = () => {
    this.props.ChangeItemId(this.props.id);
    console.log("CHANGE ITEM ID")
  };
  deleteItem = id => {
    this.props.DeletedItem(id);
  };
  EditItem = () => {
    this.props.ChangeItemId(this.props.id);
    this.props.history.push("/edititem");
  };
  render() {
    return (
      <div
        onClick={this.changeItemId}
        class="col-md-4 col-lg-4 col-sm-6 wow bounceInUp"
      >
        <div class="title">
          <figure class="card card-product">
            <Link to="/details">
              <div class="img-wrap">
                <img class="d-block w-100 h-100" src={this.props.img} />
              </div>
              <figcaption class="info-wrap" style={{ color: "Black" }}>
                {this.props.title}
                <div class="price-wrap" style={{ color: "green" }}>
                  <span class="price-new">Rp. {this.props.price}</span>
                </div>
              </figcaption>
            </Link>
            <div
              onClick={() => {
                this.EditItem(this.props.id);
              }}
              class="ml-2 mb-2 mr-2 btn btn-warning"
            >
              {" "}
              Edit
            </div>
            <div
              type="button"
              onClick={() => {
                // this.deleteItem(this.props.id);
              }}
              class="ml-2 mb-2 mr-2 btn btn-danger"
              data-toggle="modal"
              data-target="#ModalForDetails"
            >
              {" "}
              Delete
            </div>
          </figure>
        </div>
        <sec>
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
                    Delete Choosen Item
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
                <div class="modal-body">Apakah Anda benar Benar Mau Delete Item Yang Dipilih?</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      this.deleteItem(this.props.itemId);
                    }}
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </sec>
      </div>
    );
  }
}

export default connect(
  "itemId",
  actions
)(withRouter(MyItem));
