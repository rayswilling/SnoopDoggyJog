import React, { Component } from 'react';

import handleInputChange from '../Hooks/handleInputChange';
import handleSubmit from '../Hooks/handleSubmit';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      // First, let’s add the handleSubmit functo000000n to the form‘s onSubmit attribute.

      <form onSubmit={this.handleSubmit}>
        <div>
          <label className='FormField__Label' htmlFor='name'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder='Enter your email address'
            className='FormField__Input'
            required
          />
        </div>
        <br />
        <div>
          <label className='FormField__Label' htmlFor='name'>
            Password
          </label>
          <input
            type='password'
            id='password1'
            onChange={this.handleInputChange}
            value={this.state.password}
            className='FormField__Input'
            placeholder='Enter a password'
          />
        </div>
        <br />
        <button className='FormField__Button' type='submit'>
          Sign In
        </button>
      </form>
    );
  }
}
export default SignInForm;
