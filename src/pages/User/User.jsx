import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    // const { } = this.props;
    return (
      <>
        <h1>User Landing Page</h1>
        <Link
          to="/corytestingground"
          >Testing Ground 
        </Link>
      </>
    );
  }
}

export default User;
