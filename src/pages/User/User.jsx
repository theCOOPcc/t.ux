import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import authService from '../../services/authService';
import Profile from '../../pages/Profile/Profile';
import Signup from '../../pages/Signup/Signup';

class User extends Component {
  state = { user: authService.getUser(), type: 'user' };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  
  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar
          user={user}
          type={this.state.type}
          // handleSignupOrLogin={this.handleSignupOrLogin}
          handleLogout={this.handleLogout}
        />
        {user ? <h1>User Landing PAge</h1> : <Signup type={this.state.type} />}
      </>
    );
  }
}

export default User;
