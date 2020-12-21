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
    <U.FlexBox>
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox>
          <L.GoogleBox
          // this is the "href" go to google
            to=""
          >
            <L.GoogleG src="/images/googleG.png"></L.GoogleG>
            <L.SignIn>Sign in with Google</L.SignIn>
          </L.GoogleBox>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <L.Normal or>or:</L.Normal>
          <L.Normal five00>Username or Email</L.Normal>
            <U.SmallInput
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            ></U.SmallInput>
            <br/><br/>
          <L.Normal five00>Password</L.Normal>
          <U.SmallInput
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          ></U.SmallInput>
          <U.FlexBox spaceBetween>
            <U.FlexBox negMargin>
              <U.Checkbox></U.Checkbox>
              <L.Normal>Stay signed in</L.Normal>
            </U.FlexBox>
            <U.LinkTo
              to="/forgotpassword"
            >Forgot Password?</U.LinkTo>
          </U.FlexBox>
          <U.WideBtn greyed>Log In</U.WideBtn>
        </form>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox signUp>
        <L.Normal>Need an Account?</L.Normal>
        <U.LinkTo
          to="/signup"
        >Sign Up</U.LinkTo>
      </U.FlexBox>
    </U.FlexBox>
      // <main className="Login">
      //   {/* this will be a route to our slack oauth link */}
      //   <div className='slacklogin'>
      //   <a href="">
      //     <h1>Sign in with slack</h1>
      //   </a>
      //   </div>
      //   <h2>Or:</h2>
      //   <div className="container">
      //   <form autoComplete="off" onSubmit={this.handleSubmit}>
      //     <label htmlFor="email">Email:</label>
      //     <br></br>
      //     <input
      //       type="text"
      //       autoComplete="off"
      //       id="email"
      //       value={email}
      //       name="email"
      //       onChange={this.handleChange}
      //       />
      //       <br></br>
      //       <label htmlFor="password">Password:</label>
      //       <br></br>
      //     <input
      //       type="password"
      //       autoComplete="off"
      //       id="password"
      //       value={pw}
      //       name="pw"
      //       onChange={this.handleChange}
      //       />
      //       <br></br>
      //       <input type='checkbox' />Stay signed in
      //       {/* This will be a route to the password reset page */}
      //       <a href="/passwordresetrequest">Forgot Password?</a>
      //       <br></br>
      //     <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
      //     {/* <Link className="btn red" to="/">
      //       Cancel
      //     </Link> */}
      //   </form>
      //   </div>
      //       <h5>Need an Account? <span><a href='/signup'>Sign Up</a></span></h5>
      // </main>
    );
  }
}

export default Login;
