import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import Items from "../Components/Item";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Host } from "../../Host"

class OtherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      userOwner: "",
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host+ "/user/api/item",
      headers: {
        Authorization:
          "Bearer " + this.props.Bearer
      },
      params: {
        user_id: this.props.userID
      }
    };
    axios(req)
      .then(function(response) {
        self.setState({ itemList: response.data.DataItem });
        self.setState({ userOwner: response.data.DataUser });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <section class="section-topbar border-top padding-y-sm">
          <div class="container-fluid">
            <span>Warung 999 The Best Of The Best</span> &nbsp{" "}
            <span class="text-success">Best Of The Year</span>
          </div>
        </section>

        <section class="section-content bg padding-y-sm">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-10 col-md-9 col-sm-12">
                <div class="card">
                  <div class="card-header">Item Pelapak</div>
                  <div class="card-body row">
                    {this.state.itemList.map((item, key) => {
                      const arc_img =
                        item.urlimages === null
                          ? "User Not Upload Data"
                          : item.urlimages;
                      return (
                        <Items
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
              <Profile
                nama={this.state.userOwner.name}
                imagesource={this.state.userOwner.urlimage}
                level={this.state.userOwner.level}
                transaction={this.state.userOwner.transaction}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "Bearer,userID,is_login,ownerID,myTransaction",
  actions
)(withRouter(OtherProfile));
