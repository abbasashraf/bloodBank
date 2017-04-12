import React, { Component } from 'react';

import DonorListCon from '../container/donorlist.js';


class DonorList extends Component {
  render() {
    return (
            <div>
              <h3 style={{textAlign:"center", marginTop:"60px"}}>All Donar List</h3>
              <DonorListCon/>
            </div>
    );
  }
}

export default DonorList;