import React, { Component } from 'react';
import {TextField, Paper, RaisedButton} from "material-ui";
import {hashHistory} from "react-router";
import { SigninAction} from '../store/actions/login.js'
import {connect} from 'react-redux';
import SignUp from "../container/signup.js";
import {Link} from 'react-router'


function mapStateToProps(state){
  return {
    isLogin: state.LoginReducer.isLogin
  }
}


class LogInCon extends Component {


handleLogin(){
  console.log('abc');
  var credentials = {};
    credentials.email = this.refs.email.getValue();
    credentials.password = this.refs.pass.getValue();
    this.props.dispatch( SigninAction.login(credentials));
  }



  render() {
    return (
         <div
                style={{
                width: "600px",
                margin: "50px auto",
                textAlign: "center",
                borderRadius:"20px"
            }}>
                <Paper zDepth={3} >

                    <h2 style={{backgroundColor:"#00BCD4", height:"50px",marginTop:"0px",paddingTop:"20px",color:"white"}}>Login</h2>
                    <div style={{padding:"10px"}}>
                    <TextField floatingLabelText="Email" ref="email" fullWidth={true}/>
                    <br/>
                    <TextField
                        floatingLabelText="Password"
                        ref="pass"
                        type="password"
                        fullWidth={true}/>
                    <br/>
                    <RaisedButton
                        fullWidth={true}
                        onClick = {
                            this.handleLogin.bind(this)
                        }
                    >Login</RaisedButton>
                    <Link to="/signup"><p style={{textAlign:"right"}}>Create Account</p></Link>
                    </div>
                </Paper>
            </div>
    );
  }
}

export default connect(mapStateToProps)(LogInCon);