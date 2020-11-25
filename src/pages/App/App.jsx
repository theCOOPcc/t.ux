import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Blog from '../Blog/Blog';
import About from '../About/About';
import User from '../User/User';
import Manager from '../Manager/Manager';
import Admin from '../Admin/Admin';
import Lesson from '../Lesson/Lesson'
import CreateLesson from '../CreateLesson/CreateLesson'

import './App.css';

class App extends Component {
  // state={}

  render() {
    return (
      <>
        {/* App.js / route will default to the Manager page as per request from Aaron. */}
        <Route exact path="/" render={() => <Manager />} />
        {/* // Routes to other User Types */}
        <Route exact path="/user" render={() => <User />} />
        {/* <Route exact path="/manager" render={() => <Manager />} /> */}
        <Route exact path="/admin" render={() => <Admin />} />

        {/* // Signup & Login Routes */}
        <Route
          exact
          path="/signup"
          render={({ history, location }) => (
            <Signup
              type="user"
              location={location}
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history, location }) => (
            <Login
              history={history}
              location={location}
            />
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
