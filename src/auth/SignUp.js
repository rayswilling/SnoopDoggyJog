// This form does everything a normal form should be able to do. It will wait untill all
// the required inputs are filled by the user. Then when the user clicks on the button, it will trigger the submit event.
// Also when the user types something in an input field, it will store that value in a state variable.
// But you as the user are not able to see anything happening in the browser when the button is clicked.
// If you remember, we had passed the callback function as a parameter to the handleSubmit function.
// So I can simply define this callback function in the Signup.js file like this:

import React, { Component } from 'react';

import handleInputChange from '../Hooks/handleInputChange';
// import handleSubmit from '../Hooks/handleSubmit';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
      postcode: ''
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      // First, let’s add the handleSubmit function to the form‘s onSubmit attribute.

      <form onSubmit={this.handleSubmit}>
        <div>
          <label className='FormField__Label' htmlFor='firstname'>
            First Name
          </label>
          <input
            type='text'
            id='firstname'
            name='firstName'
            onChange={this.handleInputChange}
            value={this.state.firstName}
            placeholder='Enter your first name'
            className='FormField__Input'
            required
          />
          <br />
          <br />

          <label className='FormField__Label' htmlFor='lastname'>
            Last Name
          </label>
          <input
            type='text'
            id='lastname'
            name='lastName'
            onChange={this.handleInputChange}
            value={this.state.lastName}
            placeholder='Enter your last name'
            className='FormField__Input'
            required
          />
        </div>
        <br />
        <div>
          <label className='FormField__Label' htmlFor='email'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder='Enter your email address'
            className='FormField__Input'
            required
          />
        </div>
        <br />
        <div>
          <label className='FormField__Label' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password1'
            name='password1'
            onChange={this.handleInputChange}
            value={this.state.password1}
            className='FormField__Input'
            placeholder='Enter a password'
          />
        </div>
        <br />
        <div>
          <label className='FormField__Label' htmlFor='password2'>
            Re-enter Password
          </label>
          <input
            type='password'
            id='password2'
            name='password2'
            onChange={this.handleInputChange}
            value={this.state.password2}
            className='FormField__Input'
            placeholder='Re-enter your password'
          />
        </div>
        <br />
        <div>
          <label className='FormField__Label' htmlFor='postcode'>
            Post Code
          </label>
          <input
            type='text'
            id='postcode'
            name='postcode'
            onChange={this.handleInputChange}
            value={this.state.postcode}
            placeholder='Enter your post code'
            className='FormField__Input'
            required
          />
        </div>
        <br />
        <button className='FormField__Button' type='submit'>
          Sign Up
        </button>
      </form>
    );
  }
}
export default SignUp;
