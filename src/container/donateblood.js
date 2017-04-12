import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {DonateAction} from "../store/actions/donate.js";
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    data: state.DataReducer
  }

}

var arr = ["male", "female"];
var bloodArr = ["A+","B+","AB+","O+","A-","B-","AB-","O-"]

class DonateBloodCon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: "",
      value: 1,
      bloodGroup: "",
      bloodValue: 1,
    }
  }

  handleChange = (event, index, value) => this.setState({ gender: value });
  handleChangeBlood = (event, index, bloodValue) => this.setState({ bloodGroup: bloodValue });

  handleDonateSubmit(e) {
    console.log('abc');
    e.preventDefault();
    var donater = {};
    donater.name = this.refs.name.getValue();
    donater.email = this.refs.email.getValue();
    donater.cellNo = this.refs.cellNo.getValue();
    donater.address = this.refs.address.getValue();
    donater.gender = this.state.gender;
    donater.bloodGroup = this.state.bloodGroup;
    console.log(donater);


    this.props.dispatch(DonateAction.addFirebase(donater));
    // console.log(donater);
  }


  render() {
    return (
      <div style={{
        width: "600px",
        margin: "50px auto",
        lineHeight: "2em",
        borderRadius: "20px"
      }}>
        <Paper zDepth={1} >
          <h2 style={{ paddingLeft: "10px", backgroundColor: "#00BCD4", height: "50px", marginTop: "0px", paddingTop: "20px", color: "white" }}>Donate Blood</h2>

          <div style={{ padding: "10px" }}>
            <form onSubmit={this.handleDonateSubmit.bind(this)}>
              <TextField ref="name"
                hintText="Name"
              /><br />
              <TextField ref="email"
                hintText="Email"
              /><br />
              <TextField ref="cellNo"
                hintText="Cell Number"
              />

              <TextField ref="address"
                hintText="Address"
                fullWidth={true}
              />

              <SelectField
                floatingLabelText="Select Gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
              {
                arr.map((gen)=>{
                  return <MenuItem key={gen} value={gen} primaryText={gen} />
                })
              }
              </SelectField>



              <br />
              <SelectField ref="bloodGroup"
                floatingLabelText="Blood Group"
                value={this.state.bloodGroup}
                onChange={this.handleChangeBlood}
                style={{ width: "400px" }}
              >
                {
                bloodArr.map((bloodlist)=>{
                  return <MenuItem key={bloodlist} value={bloodlist} primaryText={bloodlist} />
                })
              }
              </SelectField>
              <br />
              <RaisedButton onClick={this.handleDonateSubmit.bind(this)} label="Submit" primary={true} style={{ margin: "2px" }} />
            </form>

          </div>
        </Paper>

      </div>

    );
  }
}

export default connect(mapStateToProps)(DonateBloodCon);