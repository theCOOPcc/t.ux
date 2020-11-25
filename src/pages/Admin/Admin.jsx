import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import adminAuthService from '../../services/adminAuthService';
import Signup from '../Signup/Signup';

class Admin extends Component {
  state = { admin: adminAuthService.getAdmin(), type: 'admin' };

  handleLogout = () => {
    adminAuthService.logout();
    this.setState({ admin: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ admin: adminAuthService.getUser() });
  };

  render() {
    const { admin } = this.state;
    return (
      <>
        <NavBar
          user={admin}
          type={this.state.type}
          handleLogout={this.handleLogout}
        />
        {admin ? (
          <h1>Admin Landing Page</h1>
        ) : (
          <Signup type={this.state.type} />
        )}
      </>
    );
  }
}

export default Admin;
