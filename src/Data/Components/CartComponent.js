import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class CartComponent extends Component {
  deleteCart = id => {
    this.props.DeleteCarte(id);
  };
  JumlahUang = (qty, price) => {
    const money = qty * price;
    return <var class="price">Rp. {money}</var>;
  };
  changeIDCart = id => {
    this.props.ChangeCartId(id);
  };

  render() {
    const Style = {
      CartID: this.props.id,
      background: {
        backgroundColor: ""
      },
      pesan: "",
      status: ""
    };
    if (this.props.status == "PAID") {
      Style.background.backgroundColor = "yellowgreen";
      Style.pesan = "Beli Lagi";
      Style.status = "Dibayar";
    } else {
      Style.background.backgroundColor = "";
      Style.pesan = "Bayar";
      Style.status = "";
    }
    return (
      <tr style={Style.background}>
        <td >
          <figure class="media">
            <div class="img-wrap">
              <img src={this.props.img} class="img-thumbnail img-sm" />
            </div>
            <figcaption class="media-body">
              <h6 class="title text-truncate">
                <u> {this.props.title}</u>{" "}
              </h6>
              <dl class="dlist-inline small">
                <dt>Jumlah: </dt>
                <dd> {this.props.qty}</dd>
              </dl>
              <dl class="dlist-inline small">
                <dt>Berat: </dt>
                <dd> {this.props.berat} Grams</dd>
              </dl>
            </figcaption>
          </figure>
        </td>
        <td width="120" >
          <h5>{Style.status}</h5>
        </td>
        <td width="120">Qty: {this.props.qty}</td>
        <td>
          <div class="price-wrap">
            {this.JumlahUang(this.props.qty, this.props.price)}
            <small class="text-muted">(Rp. {this.props.price} each)</small>
          </div>
        </td>

        <td class="text-right">
          <Link
            to="/transaksi"
            class="btn btn-success"
            onClick={() => {
              this.changeIDCart(this.props.id);
            }}
          >
            {" "}
            {Style.pesan}
          </Link>

          <button
            onClick={() => {
              this.changeIDCart(this.props.id);
            }}
            class="btn ml-1 btn-outline-danger"
            data-toggle="modal"
            data-target="#ModalForDetails"
          >
            {" "}
            <i className="fa fa-shopping-cart" /> ×{" "}
          </button>
          <div
            class="modal fade"
            id="ModalForDetails"
            tabindex="-1"
            role="dialog"
            aria-labelledby="ModalForDetailsTitle"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Delete Cart Item
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
                <div class="modal-body">
                  Do You Really Want To Delete Choosen Cart?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => {
                      this.deleteCart(this.props.CartID);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(
  "CartID",
  actions
)(withRouter(CartComponent));
