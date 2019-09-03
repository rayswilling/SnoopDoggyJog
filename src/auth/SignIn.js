import React, { Component } from 'react';

import handleInputChange from '../handlers/handleInputChange';
import firebase from '@firebase/app';
require('firebase/auth');
// import handleSubmit from '../Hooks/handleSubmit';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignOut(e) {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }

  handleSignIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred, 'Signed In');
      });
  }

  render() {
    return (
      // First, let’s add the handleSubmit function to the form‘s onSubmit attribute.

      <form onSubmit={this.handleSignIn}>
        <div>
          <label className="FormField__Label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder="Enter your email address"
            className="FormField__Input"
            required
          />
        </div>
        <br />
        <div>
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            className="FormField__Input"
            placeholder="Enter a password"
          />
        </div>
        <br />
        <button className="FormField__Button" type="submit">
          Sign In
        </button>
        <br />
        <br />
        <button
          className="FormField__Button"
          onClick={this.handleSignOut}
        >
          Sign Out
        </button>
      </form>
    );
  }
}
export default SignInForm;
