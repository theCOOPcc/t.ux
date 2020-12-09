import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The User Page will get information relative to the user (activities, reports, profile info) through props coming in from App.js
// It will set that information to state.
// It will render that information to the screen and allow the User/Student to take certain actions.

class User extends Component {
  state = {
    // TODO: set from props
  };
  render() {
    return (
      <>
        <h1>User Landing Page</h1>
        {/* // TODO: Render information to screen from state. */}
        <Link to="/corytestingground">Testing Ground</Link>
      </>
    );
  }
}

export default User;
