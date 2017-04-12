import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/index.js'
// component
import Main from "./component/main.js";
import SignUp from './component/signup.js';
import LogIn from './component/login.js';
import DashBoard from './component/dashboard.js';
import DonateBlood from './component/donateblood.js';
//import DonorList from './component/donorlist.js';
import AvailableBlood from './component/availableblood.js'
import { DonateAction } from './store/actions/donate.js'

// component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

store.dispatch(DonateAction.fetchingData());



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route component={Main} path="/">
          <IndexRoute component={LogIn} />
          <Route path="login" component={LogIn}></Route>
          <Route path="signup" component={SignUp}></Route>
          <Route path="donate" component={DonateBlood}></Route>
          <Route path="dashboard" component={DashBoard}></Route>
          <Route path="availableblood" component={AvailableBlood}></Route>
          {/*<Route path="donorlist" component={DonorList}></Route>*/}

        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
