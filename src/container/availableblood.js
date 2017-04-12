import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import DonorListCon from '../container/donorlist.js';
import {DonateAction} from "../store/actions/donate.js";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    dataList: state.DataReducer
  }

}

var bloodArray = ["All","A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]

class AvailableBloodCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      bloodGroup: "",
      bloodValue: 1,
    };
  }
  handleChangeFilter = (event, index, bloodValue) =>{ 
  this.handleChangeBlood();
  this.setState({ bloodGroup: bloodValue });
}

  handleChangeBlood(){
    this.props.dispatch(DonateAction.fetchingData(this.state.bloodGroup));
  }


  render() {
     console.log('this.props', this.props.DataReducer)
    return (
     

      <div>
        <div  >
          <SelectField ref = "bloodGroup"
            style={{ marginLeft: "40%" }}
            floatingLabelText="Blood Group"
            value={this.state.bloodGroup}
            onChange={this.handleChangeFilter}
          >
            {
              bloodArray.map((bloodlist) => {
                return <MenuItem key={bloodlist} value={bloodlist} primaryText={bloodlist} />
              })
            }

          </SelectField>
          {/*<button onClick={this.handleChangeBlood.bind(this)} >button</button>*/}
        </div>
        <br />
        <div>
       <Table >
          <TableHeader displaySelectAll={false} >
            <TableRow  >
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Cell No</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Blood Group</TableHeaderColumn>
              <TableHeaderColumn>Gender</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody style={{marginLeft:"20px"}}
          displayRowCheckbox={false}>

            {this.props.dataList.data.map((val, i) => {
              return (
                <TableRow style={{textAlign:"center"}} key={i}>
                  <TableRowColumn key={i}>{val.name}</TableRowColumn>
                  <TableRowColumn key={i}>{val.email}</TableRowColumn>
                  <TableRowColumn key={i}>{val.cellNo}</TableRowColumn>
                  <TableRowColumn key={i}>{val.address}</TableRowColumn>
                  <TableRowColumn key={i}>{val.bloodGroup}</TableRowColumn>
                  <TableRowColumn key={i}>{val.gender}</TableRowColumn>
                </TableRow>

              )
            }
            )}
          </TableBody>
        </Table>

          {/*<DonorListCon />*/}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AvailableBloodCon);