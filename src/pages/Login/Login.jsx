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
    e.preventDefault();
    try {
      console.log('loggin in as user');
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      // handleSignupOrLogin();
      // console.log(handleSignupOrLogin)
      // history.push('/user');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main className="Login">
        <h3>User Login</h3>

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/">
            Cancel
          </Link>
        </form>
      </main>
    );
  }
}

export default Login;
