import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import managerAuthService from '../../services/managerAuthService';
import PreviewLesson from '../PreviewLesson/PreviewLesson';
import CreateLesson from '../CreateLesson/CreateLesson';
import Lesson from '../Lesson/Lesson';
import Signup from '../Signup/Signup';
import ManagerProfile from '../../components/ManagerProfile/ManagerProfile';

class Manager extends Component {
  state = { manager: managerAuthService.getManager(), type: 'manager' };

  handleLogout = () => {
    managerAuthService.logout();
    this.setState({ manager: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ manager: managerAuthService.getManager() });
  };

  componentDidMount() {
    this.setState({ manager: managerAuthService.getManager() });
  }

  render() {
    const { manager } = this.state;
    return (
      <>
        <NavBar
          user={manager}
          type={this.state.type}
          handleLogout={this.handleLogout}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
        {manager ? (
          <h1>Manager Landing Page</h1>
        ) : (
          <Signup type={this.state.type} />
        )}
        <a href="/lessons">
          <p>See lessons</p>
        </a>
        <ManagerProfile data={manager} />

        {/* <Route 
          exact path='/lessons'
          render={() =>
          <Lesson />
          }
        /> */}
      </>
    );
  }
}

export default Manager;
