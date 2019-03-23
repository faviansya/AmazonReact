import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import axios from "axios";
import ListItem from "../Components/RecomendedDetails";
import Modal from "../Components/ModalDetails";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RecomendedList: [],
      qteye: 1,
      show: false
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/item/home",
      headers: {
        Authorization: "Bearer " + this.props.Bearer
      }
    };
    axios(req)
      .then(function(response) {
        self.setState({ RecomendedList: response.data.data });
        // console.log("ini data",self.state.RecomendedList);
      })
      .catch(function(error) {
        console.log(error);
      });

    const datao = this.props.GetDetails().then(() => {});
  };
  createQty = () => {
    let qty = [];
    for (let i = 1; i < this.props.itemQty + 1; i++) {
      qty.push(<option>{i}</option>);
    }
    return qty;
  };
  addToCart = () => {
    const self = this;
    const req = {
      method: "post",
      url: Host+"/user/api/cart",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        id: self.props.itemId,
        qty: self.state.qteye
      }
    };
    axios(req)
      .then(function(response) {
        // console.log("TAMBAH CARTT", self.props.Bearer);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  changeValue = event => {
    this.state.qteye = event.target.value;
    // console.log("QTY", this.state.qteye);
  };

  render() {
    const { RecomendedList } = this.state;
    // console.log("ITEM ID",this.props.itemIdForCheker)
    // console.log("Owner ID",this.props.myID)

    return (
      <div>
        <section className="section-topbar border-top padding-y-sm wow slideInUp">
          <div className="container-fluid">
            <span>Warung 999 The Best Of The Best</span> {"  "}
            <span className="text-success">Best Of The Year</span>
          </div>
        </section>
        <section className="section-content bg padding-y-sm">
          <div className="container-fluid">
            <div className="row wow slideInUp">
              <div className="col-xl-10 col-md-9 col-sm-12">
                <main className="card">
                  <div className="row no-gutters">
                    <aside className="col-sm-6 border-right">
                      <article className="gallery-wrap">
                        <div className="img-big-wrap">
                          <div>
                            {" "}
                            <a href={this.props.itemUrl} target="_blank" data-fancybox="">
                              <img src={this.props.itemUrl} />
                            </a>
                          </div>
                        </div>
                      </article>
                    </aside>
                    <aside className="col-sm-6">
                      <article className="card-body">
                        <h3 className="title mb-3">{this.props.itemName}</h3>

                        <div className="mb-3">
                          <var className="price h3 text-success">
                            <span className="currency">Rp. </span>
                            <span className="num">{this.props.itemPrice}</span>
                          </var>
                        </div>
                        <dl>
                          <dt>Deskripsi</dt>
                          <dd>
                            <p>{this.props.itemDescription} </p>
                          </dd>
                        </dl>
                        <dl className="row">
                          <dt className="col-sm-3">Kedaluwarsa</dt>
                          <dd className="col-sm-9">: {this.props.itemExp}</dd>

                          <dt className="col-sm-3">Kategori</dt>
                          <dd className="col-sm-9">
                            : {this.props.itemCategory}{" "}
                          </dd>

                          <dt className="col-sm-3">Dikirim Dari</dt>
                          <dd className="col-sm-9">
                            : {this.props.ownerCity}{" "}
                          </dd>
                        </dl>
                        <div className="rating-wrap">
                          <div className="label-rating">
                            {this.props.itemSold} Terjual{" "}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-5">
                            <dl className="dlist-inline">
                              <dt className="mr-1">Qty: </dt>
                              <dd>
                                <select
                                  className="form-control form-control-sm"
                                  style={{ width: "70px" }}
                                  onChange={e => this.changeValue(e)}
                                >
                                  {this.createQty()}
                                </select>
                              </dd>
                            </dl>
                          </div>
                        </div>
                        <hr />
                        <Link to="/cart" className="btn btn-success">
                          {" "}
                          Go To Your Cart
                        </Link>
                        <Modal
                          userID = {this.props.myID}
                          ItemID = {this.props.itemIdForCheker}
                         addTocart={this.addToCart} />
                      </article>
                    </aside>
                  </div>
                </main>
              </div>
              <Profile
                ownerid={this.props.ownerID}
                nama={this.props.ownerName}
                imagesource={this.props.ownerImagesource}
                level={this.props.ownerLevel}
                transaction={this.props.ownerTransaction}
              />
            </div>
            <div className="card mt-3">
              <div className="card-header">
                Rekomendasi Makanan Yang Mungkin Anda Suka
              </div>
              <div className="card-body row">
                {RecomendedList.map((item, key) => {
                  const arc_img =
                    item.urlimages === null
                      ? "User Not Upload Data"
                      : item.urlimages;
                  return (
                    <ListItem
                      id={item.id}
                      key={key}
                      title={item.name}
                      img={arc_img}
                      price={item.harga}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "Bearer,itemIdForCheker,myID,is_login,itemId, itemUrl, itemName, itemPrice, itemDescription, itemExp, itemCategory,ownerTransaction, itemSold, itemQty,ownerCity,ownerID,ownerName,ownerImagesource,ownerStatus,ownerLevel",
  actions
)(withRouter(Details));
