import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Blog from '../Blog/Blog';
import About from '../About/About';
import User from '../User/User';
import Lesson from '../Lesson/Lesson';
import CreateLesson from '../CreateLesson/CreateLesson';

import './App.css';

class App extends Component {
  // state={}

  render() {
    return (
      <>
        <Route exact path="/" render={() => <User />} />

        {/* // Signup & Login Routes */}
        <Route
          exact
          path="/signup"
          render={({ history, location }) => (
            <Signup location={location} history={history} />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history, location }) => (
            <Login history={history} location={location} />
          )}
        />

        {/* // General Routes */}
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/lessons" render={() => <Lesson />} />
        <Route exact path="/lessons/create" render={() => <CreateLesson />} />
      </>
    );
  }
}

export default App;
