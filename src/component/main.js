import React, { Component } from 'react';
import {FlatButton, AppBar, IconButton} from "material-ui";
import {Link} from 'react-router';

//import DonateBlood from '../container/donateblood.js'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DonateBlood from '../component/donateblood';
import AvailableBlood from '../component/availableblood';
//import DonorList from '../component/donorlist'



const App = () => (
  <AppBar

    title={<span>Blood Bank</span>}
    iconElementRight={<span><Link to="/signup"><FlatButton label="SignUp" /></Link> <Link to="login"><FlatButton label="Login" /></Link></span>}
  />
);



class Main extends Component {

    constructor(props) {
    super(props);
    this.state = {open: false};
  }



  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div className="App">
          <App/>
          {this.props.children}
          {/*<DonateBlood/>*/}

          <div>
             <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
          <Drawer
          style={{}}
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <img src="donation.jpg" alt="blood donation"/>
          <h2 style={{backgroundColor:"#00BCD4",height:'50px',textAlign: "center",paddingTop:"14px"}}>Blood Donation</h2>
          <Link to="/donate"><MenuItem onTouchTap={this.handleClose}>Donar Blood</MenuItem></Link>
          <Link to="/availableblood"><MenuItem onTouchTap={this.handleClose}>Available blood</MenuItem></Link>
          {/*<Link to="/donorlist"><MenuItem onTouchTap={this.handleClose}>Donor List</MenuItem></Link>*/}
          <Link><MenuItem onTouchTap={this.handleClose}>Logout</MenuItem></Link>
        </Drawer>
          </div>

      </div>
    );
  }
}

export default Main;