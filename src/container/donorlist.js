import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { DonateAction } from '../store/actions/donate.js'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    dataList: state.DataReducer
  }

}


class DonorListCon extends Component {
  render() {
    console.log(this.props, "asdasd");
    return (
      <div>
        
        <br />
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(DonorListCon);