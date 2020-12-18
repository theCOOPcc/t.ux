import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The Admin Page will get information relative to the Admin (activities, reports, profile info) through props coming in from App.js
// It will set that information to state.
// It will render that information to the screen and allow the Admin/Owner to take certain actions.

class Admin extends Component {
  state = {
    // TODO: set from props
  };
  render() {
    return (
      <>
        <h1>Admin Landing Page</h1>
        {/* // TODO: Render information to screen from state. */}
      </>
    );
  }
}

export default Admin;
