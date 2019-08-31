import React, { Component } from 'react';

import handleInputChange from '../Hooks/handleInputChange';
import Axios from 'axios';

import { db } from '../App';

class CreatePet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: '',
      petType: '',
      petSize: '',
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { petName, petKind, petSize } = this.state;

    const pet = {
      petName,
      petType,
      petSize,
    };

    db.collection('pets').add(pet);
  }

  render() {
    return (
      // First, let’s add the handleeeeeeSubmit function to the form‘s onSubmit attribute.

      <form onSubmit={this.handleSubmit}>
        <div>
          <label className="FormField__Label" htmlFor="petname">
            Pet Name
          </label>
          <input
            ref={ref => {
              this.petName = ref;
            }}
            type="text"
            id="petname"
            name="petname"
            onChange={this.handleInputChange}
            value={this.state.petName}
            placeholder="Enter your pet's name"
            className="FormField__Input"
            required
          />
          <br />
          <br />

          <label className="FormField__Label" htmlFor="pettype">
            Pet Type
          </label>
          <input
            ref={ref => {
              this.petType = ref;
            }}
            type="text"
            id="pettype"
            name="pettype"
            onChange={this.handleInputChange}
            value={this.state.petType}
            placeholder="Type?"
            className="FormField__Input"
            required
          />
        </div>
        <br />
        <div>
          <label className="FormField__Label" htmlFor="petsize">
            Pet Size
          </label>
          <input
            ref={ref => {
              this.petSize = ref;
            }}
            type="text"
            id="petsize"
            name="petsize"
            onChange={this.handleInputChange}
            value={this.state.petSize}
            placeholder="What size is your pet"
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
