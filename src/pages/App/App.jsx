import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Blog from '../Blog/Blog';
import About from '../About/About';
import User from '../User/User';
import NavBar from '../../components/NavBar/NavBar';
import Lesson from '../Lesson/Lesson';
import CreateLesson from '../CreateLesson/CreateLesson';
import IndexLessons from '../IndexLessons/IndexLessons';
import authService from '../../services/authService';
import Landing from '../Landing/Landing';
import PreviewLesson from '../PreviewLesson/PreviewLesson';
import './App.css';

import ReactGA from 'react-ga';

// const trackingId = "" // Google analytics tracking id
// ReactGA.initialize(trackingId)
// ReactGA.set({
//   userId: this.state.user.id
// })

class App extends Component {
  state = { user: authService.getUser() };

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
          render={() => (user ? <User user={user} /> : <Landing />)}
        />

        {/* // Signup & Login Routes */}
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

        {/* // General Routes */}
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/lessons" render={() => <IndexLessons />} />
        <Route exact path="/lessons/create" render={() => <CreateLesson />} />
        <Route
          exact
          path="/preview-lesson"
          render={({ location }) => <PreviewLesson location={location} />}
        />
      </>
    );
  }
}

export default App;
