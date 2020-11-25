import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import managerAuthService from '../../services/managerAuthService';
import PreviewLesson from '../PreviewLesson/PreviewLesson';
import CreateLesson from '../CreateLesson/CreateLesson';
import Signup from '../Signup/Signup';

class Manager extends Component {
  state = { manager: managerAuthService.getManager(), type: 'manager' };

  handleLogout = () => {
    managerAuthService.logout();
    this.setState({ manager: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ manager: managerAuthService.getManager() });
  };

  render() {
    const { manager } = this.state;
    return (
      <>
        <NavBar
          user={manager}
          type={this.state.type}
          handleLogout={this.handleLogout}
        />
        {manager ? <h1>Manager Landing Page</h1> : <Signup type={this.state.type} />}
        <a href='/lessons/create'>
          <p>Create a lesson</p>
        </a>
        <Route 
          exact path='/lessons/create'
          render={() =>
          <CreateLesson />
          }
        />
      </>
    );
  }
}

export default Manager;
