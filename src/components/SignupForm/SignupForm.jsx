import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import * as S from '../StyledComponents/SignupComponents'

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, 
      // handleSignupOrLogin 
    } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        {/* <S.Container>
          <S.Title>TUX</S.Title>
          <S.Enter>Enter an email</S.Enter>
          <S.Message>We'll use this email to set up your account.</S.Message>
           TODO: change this onSubmit to account for only getting part of the form at each step 
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <S.Container>
              <S.emailInput 
                placeholder="Email Address"
              />
              <S.Button>Continue</S.Button>
            </S.Container>
          </form>
          <S.loginMessage>Have an account? <Link>Log in</Link></S.loginMessage>
        </S.Container> */}
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <label htmlFor="name">Name</label>
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
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <button disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link> 
        </form>
      </div>
    );
  }
}

export default SignupForm;
