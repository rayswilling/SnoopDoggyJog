import React, { Component } from 'react';

import handleInputChange from '../handlers/handleInputChange';
// import handleSubmit from '../Hooks/handleSubmit';

import firebase from '@firebase/app';
require('firebase/auth');

class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleInputChange = handleInputChange.bind(this);
    this.handle = this.handleSignIn.bind(this);
  }

  handleSignIn(e) {
    e.preventDefault();
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default ProfilePage;
