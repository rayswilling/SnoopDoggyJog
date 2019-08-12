import React, { Component } from 'react';
import logo from './logo.svg';
import Signup from './auth/SignIn';
import { PageSwitcher, PageSwitcherTitle } from './auth/PageSwitch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Aside' />

        <div className='App__Form'>
          <PageSwitcher />
          <PageSwitcherTitle />
          <Signup />
        </div>
      </div>
    );
  }
}

export default App;
