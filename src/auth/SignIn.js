import React from 'react';

import useSignUpForm from '../CustomHooks';

const Signup = () => {
  // The form is finally ready! It does everything a normal form should be able to do. It will wait untill all
  // the required inputs are filled by the user. Then when the user clicks on the button, it will trigger the submit event.
  // Also when the user types something in an input field, it will store that value in a state variable.
  // But you as the user are not able to see anything happening in the browser when the button is clicked.
  // If you remember, we had passed the callback function as a parameter to the handleSubmit function.
  // So I can simply define this callback function in the Signup.js file like this:

  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { handleSubmit, handleInputChange, inputs } = useSignUpForm(signup);

  return (
    // First, let’s add the handleSubmit function to the form‘s onSubmit attribute.

    <form onSubmit={handleSubmit}>
      <div>
        <label> First Name </label>
        <input
          type='text'
          name='firstName'
          onChange={handleInputChange}
          value={inputs.firstName}
          required
        />
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={handleInputChange}
          value={inputs.lastNate}
          required
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type='email'
          name='email'
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password1'
          onChange={handleInputChange}
          value={inputs.password1}
        />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type='password'
          name='password2'
          onchange={handleInputChange}
          value={inputs.password2}
        />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};
export default Signup;
