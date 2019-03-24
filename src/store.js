import createStore from "unistore";
import axios from "axios";
import _ from "lodash";
import { Host } from "./Host"

const initialState = {
  is_login: false,
  Bearer: "",
  nama: "",
  imagesource: "",
  status: "",
  level: "",
  myTransaction:"",
  myID:"",
  //item
  itemIdForCheker: "",
  itemId: "",
  itemUrl: "",
  itemName: "",
  itemPrice: "",
  itemDescription: "",
  itemExp: "",
  itemCategory: "",
  itemSold: "",
  itemQty: "",
  itemOwner: "",
  ownerID: "",
  ownerUsername: "",
  ownerName: "",
  ownerImagesource: "",
  ownerStatus: "",
  ownerLevel: "",
  ownerCity: "",
  ownerTransaction: "",
  MyitemList: [],
  //all Item
  SuperAllItem: [],
  userID: "",
  category: "",
  categoryItem: [],
  CartID: "",
  newTransaction:[],
  newTransactionCount:0,
};

export const store = createStore(initialState);
export const actions = store => ({
  postLogout: state => {
    store.setState({ newTransactionCount: 0 });
    store.setState({ is_login: false });
    store.setState({ Bearer: "" });
    store.setState({ nama: "" });
    store.setState({ imagesource: " " });
    store.setState({ status: "" });
    store.setState({ level: "" });
  },
  ChangeCartId: (state,id) => {
    store.setState({ CartID: id });
  },

  changeCategory: async (state, kategori) => {
    const req = {
      method: "get",
      url: Host + "/user/api/item/kategori",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      },
      params: {
        kategori: kategori
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ categoryItem: response.data.data });
        // console.log("Category Item", response.data.data);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  },
  ChangeItemId: (state, id) => {
    store.setState({ itemId: id });
  },
  ChangeUserId: (state, id) => {
    store.setState({ userID: id });
  },
  changenewTransactionCount: (state, id) => {
    store.setState({ newTransactionCount: (store.getState().newTransactionCount -1) });
  },
  ChangeMyitem: async (state) => {
    const GetItemsData = {
      method: "get",
      url: Host+ "/user/api/item/myitems",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(GetItemsData)
      .then(function(response) {
        store.setState({ MyitemList: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  ChangeAfterPutUser: async (state) =>{
    const getUserData = {
      method: "get",
      url: Host+ "/user/api/me",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(getUserData)
      .then(function(response) {
        store.setState({ nama: response.data.name });
        store.setState({ imagesource: response.data.urlimage });
        store.setState({ status: response.data.status });
        store.setState({ level: response.data.level });
        store.setState({ myTransaction: response.data.transaction });      
        store.setState({ ownerID: response.data.id });
        store.setState({ ownerTransaction: response.data.transaction });
        store.setState({ ownerUsername: response.data.username });
        // console.log("MASOK TOKEN", store.getState().Bearer);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  },

  Login: async (state, username, password) => {
    //Login To Get Bearer Token

    const req = {
      method: "post",
      url: Host+ "/api/login",
      params: {
        username: username,
        password: password
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ Bearer: response.data.token });
        // console.log("MASOK TOKEN", response);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });

    //Get User Data
    const getUserData = {
      method: "get",
      url: Host+ "/user/api/me",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(getUserData)
      .then(function(response) {
        store.setState({ is_login: true });
        store.setState({ myID: response.data.id });
        store.setState({ nama: response.data.name });
        store.setState({ imagesource: response.data.urlimage });
        store.setState({ status: response.data.status });
        store.setState({ level: response.data.level });
        store.setState({ ownerID: response.data.id });
        store.setState({ ownerTransaction: response.data.transaction });
        store.setState({ ownerUsername: response.data.username });
        store.setState({ myTransaction: response.data.transaction });      

        // console.log("MASOK TOKEN", store.getState().Bearer);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });

    const GetItemsData = {
      method: "get",
      url: Host+ "/user/api/item/myitems",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(GetItemsData)
      .then(function(response) {
        store.setState({ MyitemList: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });

      const GetNewTransaction = {
        method: "get",
        url: Host + "/api/transaction/seller",
        headers: {
          Authorization: "Bearer " + store.getState().Bearer,
        }
      };
      await axios(GetNewTransaction)
        .then(function(response) {
          store.setState({ newTransaction: response.data.Data });
          // newTransactionCount
          {store.getState().newTransaction.map((item, key) => {
            if(item.deliver == "undeliver"){
              store.setState({ newTransactionCount: (store.getState().newTransactionCount + 1) });
          }
          })};
          console.log(store.getState().newTransactionCount);

        })
        .catch(function(error) {
          console.log(error);
        });
  },
  GetDetails: async state => {
    const req = {
      method: "get",
      url:
        Host+ "/user/api/item/" + store.getState().itemId,
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ itemIdForCheker: response.data.Item.post_by });
        store.setState({ itemUrl: response.data.Item.urlimages });
        store.setState({ itemName: response.data.Item.name });
        store.setState({ itemPrice: response.data.Item.harga });
        store.setState({ itemDescription: response.data.Item.deskripsi });
        store.setState({ itemExp: response.data.Item.kadaluwarsa });
        store.setState({ itemCategory: response.data.Item.kategori });
        store.setState({ itemSold: response.data.Item.terjual });
        store.setState({ itemQty: response.data.Item.stok });
        store.setState({ ownerID: response.data.user.id });
        store.setState({ ownerName: response.data.user.name });
        store.setState({ ownerImagesource: response.data.user.urlimage });
        store.setState({ ownerStatus: response.data.user.status });
        store.setState({ ownerLevel: response.data.user.level });
        store.setState({ ownerCity: response.data.user.kota });
        store.setState({ ownerTransaction: response.data.user.transaction });
        // console.log("MASOK TOKEN", response);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  },
  GetAllItems: async state => {
    const req = {
      method: "get",
      url: Host+ "/user/api/item",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ SuperAllItem: response.data });
        // console.log("All Item", store.getState().SuperAllItem);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  },
  searchItems : async (state,keyword) => {
    // console.log(keyword);
    if(keyword.length > 2){
      try{
        const req = {
            method: "get",
            url: Host+ "/user/api/item/search",
            headers: {
              Authorization: "Bearer " + store.getState().Bearer
            },
            params: {
                nama: keyword
              }
          };
        const response = await 
        axios(req)
        // console.log(response.data.data);
        store.setState({ categoryItem: response.data.data });
      }
      catch(error){
        console.log(error);
      }
    }
  }
});
