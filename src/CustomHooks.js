// Whatdo I want my custom hook to do for me.
// First, it should use the built-in useState hook to keep track
// of all input values inside our form. So make
// sure that I import this hook from react.

import React, { useState } from 'react';

// The functional component will then take callback as an input parameter.
// Callback is a function that gets called whenever the user submits the form.

const useSignUpForm = callback => {
  // We will then use the useState hook to initialize a state variable and its
  //   setter function.

  const [inputs, setInputs] = useState({});
  // create a function that manages the submit event. This function should simply
  // prevent the default behavior of the browser (which is usually to refresh the page)
  // and call the callback function.

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  // Similarly, we need a function that manages the event where the user gives some input.
  // This event will be triggered every time the user enters some input.
  // We will also use the setInputs function from the hook to update the inputs state variable with the user’s input.

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useSignUpForm;
