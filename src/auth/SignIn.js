import React from 'react';

import useSignUpForm from '../CustomHooks';

const SignIn = () => {
  const signin = () => {
    alert(`User Signed in!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { handleSubmit, handleInputChange, inputs } = useSignUpForm(signin);

  return (
    // First, let’s add the handleSubmit function to the form‘s onSubmit attribute.

    <form onSubmit={handleSubmit}>
      <div>
        <label className='FormField__Label' htmlFor='name'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          onChange={handleInputChange}
          value={inputs.email}
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
          name='password1'
          onChange={handleInputChange}
          value={inputs.password1}
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
};
export default SignIn;
