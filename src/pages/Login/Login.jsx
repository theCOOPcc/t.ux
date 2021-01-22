import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Login.css';
import authService from '../../services/authService';
import * as U from '../../components/TuxComponents/UniversalComponents'
import * as L from '../../components/TuxComponents/LoginComponents'

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
      <>
      <L.Main>
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox>
          <L.GoogleBox
          // this is the "href" go to google
            href="http://localhost:3001/api/auth/google"
            // href="https://tux-staging.herokuapp.com/api/auth/google"
          >
            <L.GoogleG src="/images/googleG.png"></L.GoogleG>
            <L.SignIn>Sign in with Google</L.SignIn>
          </L.GoogleBox>
        <form autoComplete="off" onSubmit={this.handleSubmit} >
          <U.Normal twenty center>or:</U.Normal>
          <U.Normal semiBold margin>Username or Email</U.Normal>
            <U.SmallInput
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            ></U.SmallInput>
            <br/><br/>
          <U.Normal semiBold margin>Password</U.Normal>
          <U.SmallInput
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          ></U.SmallInput>
          <U.FlexBox spaceBetween>
            {/* These are on hold until next sprint */}
            {/* TODO: Make ability to stay logged in */}
            {/* TODO: Create password reset */}
            {/* <U.FlexBox negMargin>
              <U.Checkbox></U.Checkbox>
              <U.Normal>Stay signed in</U.Normal>
            </U.FlexBox> 
            <U.LinkTo
              to="/passwordresetrequest"
            >Forgot Password?</U.LinkTo>*/}
          </U.FlexBox>
          <L.LoginBtn  
              disabled={
                email.length > 0 && pw.length > 0
                ? false
                : true
              }>Log In</L.LoginBtn>
        </form>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox signUp>
        <U.Normal>Need an Account?&nbsp;</U.Normal>
        <U.LinkTo
          to="/signup"
        >Sign Up</U.LinkTo>
      </U.FlexBox>
    </L.Main>
    </>
    );
  }
}

export default Login;
