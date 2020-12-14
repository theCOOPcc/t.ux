import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import authService from '../../services/authService';

class Login extends Component {
  state = {
    email: '',
    pw: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main className="Login">
        {/* this will be a route to our slack oauth link */}
        <div className='slacklogin'>
        <a href="">
          <h1>Sign in with slack</h1>
        </a>
        </div>
        <h2>Or:</h2>
        <div className="container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="password">Password:</label>
            <br></br>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            />
            <br></br>
            <input type='checkbox' />Stay signed in
            {/* This will be a route to the password reset page */}
            <a href="/passwordresetrequest">Forgot Password?</a>
            <br></br>
          <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
          {/* <Link className="btn red" to="/">
            Cancel
          </Link> */}
        </form>
        </div>
            <h5>Need an Account? <span><a href='/signup'>Sign Up</a></span></h5>
      </main>
    );
  }
}

export default Login;
