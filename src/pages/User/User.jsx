import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import authService from '../../services/authService';
import Signup from '../../pages/Signup/Signup';
import CreateLesson from '../CreateLesson/CreateLesson';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <h1>User Landing Page</h1>
      </>
    );
  }
}

export default User;
