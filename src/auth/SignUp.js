// This form does everything a normal form should be able to do. It will wait untill all
// the required inputs are filled by the user. Then when the user clicks on the button, it will trigger the submit event.
// Also when the user types something in an input field, it will store that value in a state variable.
// But you as the user are not able to see anything happening in the browser when the button is clicked.
// If you remember, we had passed the callback function as a parameter to the handleSubmit function.
// So I can simply define this callback function in the Signup.js file like this:

import React, { Component } from 'react';

// import handleSubmit from '../handle/handleSubmit';

import handleInputChange from '../handlers/handleInputChange';

import firebase from '@firebase/app';
require('firebase/auth');

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
      postCode: '',
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password1,
      password2,
      postCode,
    } = this.state;

    const user = {
      firstName,
      lastName,
      email,
      password1,
      password2,
      postCode,
    };

    const signedInUser = firebase.auth().currentUser;
    if (signedInUser) {
      console.log('user logged in:', signedInUser);
    } else {
      console.log('user logged out');
    }

    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password1.length < 4) {
      alert('Please enter a password.');
      return;
    }
    if (password1 !== password2) {
      alert("Passwords don't match");
    } else if (postCode.substring(0, 2) !== 'SW') {
      alert('Postcode must be in South West London');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password1)
        .then(cred => {
          console.log(cred);
        });
      firebase
        .firestore()
        .collection('user')
        .add({ user })
        .then(cred => {
          console.log('ADDED TO USERS COLLECTION!');
        });
    }
  }

  render() {
    return (
      // First, let’s add the handleSubmit function to the form‘s onSubmit attribute.

      <form onSubmit={this.handleSignUp}>
        <div>
          <label className="FormField__Label" htmlFor="firstname">
            First Name
          </label>
          <input
            ref={ref => {
              this.firstName = ref;
            }}
            type="text"
            id="firstname"
            name="firstName"
            onChange={this.handleInputChange}
            value={this.state.firstName}
            placeholder="Enter your first name"
            className="FormField__Input"
            required
          />
          <br />
          <br />

          <label className="FormField__Label" htmlFor="lastname">
            Last Name
          </label>
          <input
            ref={ref => {
              this.lastName = ref;
            }}
            type="text"
            id="lastname"
            name="lastName"
            onChange={this.handleInputChange}
            value={this.state.lastName}
            placeholder="Enter your last name"
            className="FormField__Input"
            required
          />
        </div>
        <br />
        <div>
          <label className="FormField__Label" htmlFor="email">
            Email Address
          </label>
          <input
            ref={ref => {
              this.email = ref;
            }}
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
            ref={ref => {
              this.password = ref;
            }}
            type="password"
            id="password1"
            name="password1"
            onChange={this.handleInputChange}
            value={this.state.password1}
            className="FormField__Input"
            placeholder="Enter a password"
          />
        </div>
        <br />
        <div>
          <label className="FormField__Label" htmlFor="password2">
            Re-enter Password
          </label>
          <input
            ref={ref => {
              this.password2 = ref;
            }}
            type="password"
            id="password2"
            name="password2"
            onChange={this.handleInputChange}
            value={this.state.password2}
            className="FormField__Input"
            placeholder="Re-enter your password"
          />
        </div>
        <br />
        <div>
          <label className="FormField__Label" htmlFor="postCode">
            Post Code
          </label>
          <input
            ref={ref => {
              this.postCode = ref;
            }}
            type="text"
            id="postCode"
            name="postCode"
            onChange={this.handleInputChange}
            value={this.state.postCode}
            placeholder="Enter your post code"
            className="FormField__Input"
            required
          />
        </div>
        <br />
        <button className="FormField__Button" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}
export default SignUp;
