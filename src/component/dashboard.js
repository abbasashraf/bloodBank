import React, { Component } from 'react';
import {DonateAction} from "../store/actions/donate";

class DashBoard extends Component {

     componentDidMount(){
var loginState = this.props.LoginReducer.isLogin;
  console.log(this.props, "tis.p")
this.props.dispatch(DonateAction.checkLogin(loginState));
}
  render() {
    return (
      <div >
        <h1 style={{ textAlign: "center", backgroundColor:"#00BCD4", color:"white", margin:"20px auto", paddingTop:"20px", width:"600px", height:"60px" }}>WelCome To BloodBank</h1>
      </div>
    );
  }
}

export default DashBoard;