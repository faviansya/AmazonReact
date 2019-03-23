import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import Items from "../Components/MyItem";
import AsideProfile from "../Components/MyProfileStatus";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host"

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyItem: []
    };
  }
  DeleteItem = id => {
    const self = this;
    const req = {
      method: "delete",
      url: Host+ "/user/api/item",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        id: id
      }
    };
    axios(req)
      .then(function(response) {
        self.props.ChangeMyitem();
        self.setState({ MyItem: self.props.MyitemList });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount = () => {
    const datao = this.props.ChangeAfterPutUser().then(() => {

    });
  };
  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    const self = this;
    self.state.MyItem = self.props;
    return (
      <div>
        <section class="section-content bg padding-y-sm wow fadeInUp">
          <div class="container-fluid">
            <div class="row">
              <Profile
                ownerid={this.props.ownerID}
                nama={this.props.nama}
                imagesource={this.props.imagesource}
                level={this.props.level}
                transaction={this.props.myTransaction}
              />
              <div class="col-xl-8 col-md-9 col-sm-12">
                <div class="card">
                  <div class="card-header">Item Saya</div>
                  <div class="card-body row">
                    {this.state.MyItem.MyitemList.map((item, key) => {
                      const arc_img =
                        item.urlimages === null
                          ? "User Not Upload Data"
                          : item.urlimages;
                      return (
                        <Items
                          DeletedItem={this.DeleteItem}
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
              <AsideProfile />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "nama,imagesource,status,level,MyitemList,ownerID,ownerTransaction,Bearer,is_login,myTransaction",
  actions
)(withRouter(MyProfile));
