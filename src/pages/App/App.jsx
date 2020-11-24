import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import authService from '../../services/authService';
import Users from '../Users/Users';
import Student from '../Student/Student';
import RecapLesson from '../RecapLesson/RecapLesson';
import Profile from '../Profile/Profile';
import PreviewLesson from '../PreviewLesson/PreviewLesson';
import Lesson from '../Lesson/Lesson';
import Landing from '../Landing/Landing';
import Instructor from '../Instructor/Instructor';
import CreateLesson from '../CreateLesson/CreateLesson';
import Blog from '../Blog/Blog';
import AdminSignup from '../AdminSignup/AdminSingup';
import ManagerSignup from '../ManagerSignup/ManagerSignup'
import About from '../About/About';

import './App.css';

class App extends Component {
  state = {
    user: authService.getUser(),
  };

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
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/student"
          render={() => (
            <Student />
          )}
        />
        <Route
          exact
          path="/recap"
          render={() => (
            <RecapLesson />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Profile />
          )}
        />
        <Route
          exact
          path="/preview-lesson"
          render={() => (
            <PreviewLesson />
          )}
        />
        <Route
          exact
          path="/lesson"
          render={() => (
            <Lesson />
          )}
        />
        <Route
          exact
          path="/landing"
          render={() => (
            <Landing />
          )}
        />
        <Route
          exact
          path="/instructor"
          render={() => (
            <Instructor />
          )}
        />
        <Route
          exact
          path="/create-lesson"
          render={() => (
            <CreateLesson />
          )}
        />
        <Route
          exact
          path="/blog"
          render={() => (
            <Blog />
          )}
        />
        <Route
          exact
          path="/admin-singup"
          render={() => (
            <AdminSignup />
          )}
        />
        <Route
          exact
          path="/manager-singup"
          render={() => (
            <ManagerSignup />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About />
          )}
        />
      </>
    );
  }
}

export default App;
