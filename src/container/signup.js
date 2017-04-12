import React, { Component } from 'react';
import {TextField, Paper, RaisedButton} from "material-ui";
import {loginAction} from '../store/actions';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        isSignUp: state.isSignUp
    }
}



class SignUpCon extends Component {

    handleSignUp(){
        var credentials = {};
        credentials.name = this.refs.name.getValue();
        credentials.email = this.refs.email.getValue();
        credentials.password = this.refs.pass.getValue();
        this.props.dispatch(loginAction.SignUp(credentials))
        
        
    }
  render() {
    return (
         <div
                style={{
                height:"200px",
                width: "600px",
                margin: "20px auto",
                textAlign: "center"
            }}>
                <Paper zDepth={3} >

                    <h2 style={{backgroundColor:"#00BCD4", height:"50px",margin:"0px",paddingTop:"20px",color:"white"}}>SignUp</h2>
                    <div style={{padding:"10px",}}>
                    <TextField floatingLabelText="Name" ref="name" fullWidth={true}/>
                    <br/>
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
                            this.handleSignUp.bind(this)
                        }
                    >SignUp</RaisedButton>
                    </div>
                </Paper>
            </div>
    );
  }
}

export default connect(mapStateToProps)(SignUpCon);