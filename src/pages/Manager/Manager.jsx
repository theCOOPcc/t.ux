import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The Manager Page will get information relative to the Manager (activities, reports, profile info) through props coming in from App.js
// It will set that information to state.
// It will render that information to the screen and allow the Manager/Teacher to take certain actions.

class Manager extends Component {
  state = {
    // TODO: set from props
  };
  render() {
    return (
      <>
        <h1>Manager Landing Page</h1>
        {/* // TODO: Render information to screen from state. */}
      </>
    );
  }
}

export default Manager;