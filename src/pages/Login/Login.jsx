import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import authService from '../../services/authService';
import managerAuthService from '../../services/managerAuthService';
import adminAuthSerivce from '../../services/adminAuthService';

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
    const { history } = this.props;
    const { user, type } = this.props.location.state;
    e.preventDefault();
    if (type === 'manager') {
      console.log('attempting to login as manager');
      try {
        await managerAuthService.login(this.state);
        // handleSignupOrLogin();
        history.push('/');
      } catch (err) {
        // Use a modal or toast in your apps instead of alert
        alert('Invalid Credentials!');
      }
    } else if (type === 'admin') {
      try {
        console.log('attempting to login as admin');
        await adminAuthSerivce.login(this.state);
        // Let <App> know a user has signed up!
        // handleSignupOrLogin();
        history.push('/admin');
      } catch (err) {
        // Use a modal or toast in your apps instead of alert
        alert('Invalid Credentials!');
      }
    } else {
      try {
        console.log('loggin in as user')
        await authService.login(this.state);
        // Let <App> know a user has signed up!
        // handleSignupOrLogin();
        // console.log(handleSignupOrLogin)
        // history.push('/user');
      } catch (err) {
        alert('Invalid Credentials!');
      }
    }
  };

  render() {
    const { email, pw } = this.state;
    const { type } = this.props.location.state;
    return (
      <main className="Login">
        {type === 'manager' ? (
          <h3>Manager Login</h3>
        ) : type === 'admin' ? (
          <h3>Admin Login</h3>
        ) : (
          <h3>User Login</h3>
        )}

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
