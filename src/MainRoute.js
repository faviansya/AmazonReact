import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from "./Data/Pages/Home";
import Details from "./Data/Pages/Details";
import AllItems from "./Data/Pages/AllItems";
import PenjualTerbaik from "./Data/Pages/PenjualTerbaik";
import BarangTerbaik from "./Data/Pages/BarangTerbaik";
import Cart from "./Data/Pages/Cart";
import Myprofile from "./Data/Pages/MyProfile";
import OtherProfile from "./Data/Pages/OtherProfile";
import EditItem from "./Data/Post/EditItem";
import PostItem from "./Data/Post/PostItem";
import PostUser from "./Data/Post/PostUser";
import PutUser from "./Data/Post/EditUser";

import Traksaksi from "./Data/Pages/Transaksi";
import LogTraksaksi from "./Data/Pages/LogTransaksi";
import LogSeller from "./Data/Pages/SellerLogger";

import PatNolPat from "./Data/Components/404";

import StaticPembayaranAtm from "./Data/StaticPage/CaraPembayaran";
import StaticPembayaranIndomaret from "./Data/StaticPage/BayarIndomaret";
import StaticPembayaranMbanking from "./Data/StaticPage/BayarMbangking";
import StaticPertanyaanUmum from "./Data/StaticPage/PertanyaanUmum";
import StaticMasalahPelapak from "./Data/StaticPage/MasalahPelapak";
import StaticMasalahPenjualan from "./Data/StaticPage/MasalahPenjualan";
import Contacts from "./Data/StaticPage/Contacts";
import SellerLogger from './Data/Pages/SellerLogger';

const MainRoute = () => {
    return(
        <Switch>
            {/* Get */}
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/details" component = {Details}/>
            <Route exact path = "/allitems" component = {AllItems}/>
            <Route exact path = "/bestplayer" component = {PenjualTerbaik}/>
            <Route exact path = "/bestitem" component = {BarangTerbaik}/>
            <Route exact path = "/cart" component = {Cart}/>
            <Route exact path = "/myprofile" component = {Myprofile}/>
            <Route exact path = "/profile" component = {OtherProfile}/>
            {/* Edit */}
            <Route exact path = "/edititem" component = {EditItem}/>
            <Route exact path = "/edituser" component = {PutUser}/>
            {/* Post */}
            <Route exact path = "/postitem" component = {PostItem}/>
            <Route exact path = "/daftar" component = {PostUser}/>
            {/* Transaction */}
            <Route exact path = "/transaksi" component = {Traksaksi}/>
            <Route exact path = "/logtransaksi" component = {LogTraksaksi}/>
            <Route exact path = "/sellerlog" component = {LogSeller}/>
            {/* Static Page */}
            <Route exact path = "/pembayaranAtm" component = {StaticPembayaranAtm}/>
            <Route exact path = "/pembayaranIndomaret" component = {StaticPembayaranIndomaret}/>
            <Route exact path = "/pembayaranMBanking" component = {StaticPembayaranMbanking}/>
            <Route exact path = "/pertanyaanumum" component = {StaticPertanyaanUmum}/>
            <Route exact path = "/masalahpelapak" component = {StaticMasalahPelapak}/>
            <Route exact path = "/masalahpenjualan" component = {StaticMasalahPenjualan}/>
            <Route exact path = "/contact" component = {Contacts}/>

            <Route component = {PatNolPat}/>
        </Switch>
    )
}

export default MainRoute;
