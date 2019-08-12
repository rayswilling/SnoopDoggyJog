import React, { Component } from 'react';
import Signup from './auth/SignUp';
import SignIn from './auth/SignIn';

import { PageSwitcher, PageSwitcherTitle } from './auth/PageSwitch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='App__Aside' />

          <div className='App__Form'>
            <PageSwitcher />
            <PageSwitcherTitle />

            <Route exact path='/sign-up' component={Signup} />

            <Route exact path='/sign-in' component={SignIn} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
