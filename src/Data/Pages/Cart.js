import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CartComponent from "../Components/CartComponent"
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class AllItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartList: [],
      CartUser: "",
      Jumlah:"",
    };
  }
  
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+"/user/api/cart",
      headers: {
        Authorization: "Bearer " + this.props.Bearer
      }
    };
    axios (req)
      .then(function(response) {
        self.setState({ CartList: response.data.Cart });
        self.setState({ CartUser: response.data.User });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  DeleteCart = (id) => {
    const self = this;
    const req = {
      method: "delete",
      url: Host+"/user/api/cart",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        id: id
      }
    };
    axios (req)
      .then(function(response) {
        const Req = {
          method: "get",
          url: Host+"/proxy/user/api/cart",
          headers: {
            Authorization: "Bearer " + self.props.Bearer
          }
        };
        axios (Req)
          .then(function(response) {
            self.setState({ CartList: response.data.Cart });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <section class="section-content bg padding-y border-top">
        <div class="container-fluid">
          <div class="row">
            <main class="col-sm-12 col-lg-9 col-md-12">
              <div class="card wow bounceIn">
                <table class="table table-hover shopping-cart-wrap">
                  <thead class="text-muted">
                    <tr>
                      <th scope="col">Produk</th>
                      <td width="120">
            
                      </td>
                      <th scope="col" width="120">
                        Jumlah
                      </th>
                      <th scope="col" width="120">
                        Harga
                      </th>
                      <th scope="col" class="text-right" width="200">
                        Pilihan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.CartList.map((item, key) => {
                      const arc_img = item.urlimage === null ? "User Not Upload Data" : item.urlimage;
                      return (
                          <CartComponent
                              DeleteCarte={this.DeleteCart}
                              id={item.id}
                              key={key}
                              title={item.itemname}
                              img={arc_img}
                              price ={item.harga}
                              berat ={item.berat}
                              qty ={item.qty}
                              status = {item.status}
                          />
                      );
                  })}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  "Bearer,is_login",
  actions
)(withRouter(AllItem));
