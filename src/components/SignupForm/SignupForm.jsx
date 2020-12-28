import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
// import * as S from '../TuxComponents/SignupComponents'
import * as U from '../TuxComponents/UniversalComponents'
import * as L from '../TuxComponents/LoginComponents'

class SignupForm extends Component {
  state = {
    firstName: '',
    lastName: '',
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
    const { firstName, lastName, email, password, passwordConf } = this.state;
    return !(firstName && lastName && email && password === passwordConf);
  }

  render() {
    const { firstName, lastName, email, password, passwordConf } = this.state;
    return (
      <>
    <U.FlexBox>
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox flexStart>
            {/* TODO: change this onSubmit to account for only getting part of the form at each step   */}
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          <U.Normal semiBold large margin50>Enter an Email</U.Normal>
          <U.Normal eighteen>We'll use this email to set up your account.</U.Normal>
          <U.Normal semiBold>Email Address</U.Normal>
          <U.SmallInput
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          ></U.SmallInput>
          <U.WideBtn 
            extraWide 
            disabled={email.length > 0 ? false : true}
          >
            Continue
            </U.WideBtn>          
          </form>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox signUp>
        <U.Normal>Need an Account?</U.Normal>
        <U.LinkTo
          to="/signup"
        >Sign Up</U.LinkTo>
      </U.FlexBox>
    </U.FlexBox>
      {/* TODO: Delete this strict equality and replace with Formik Validation */}
      {email === "karen@23carnies.com" && 
    <U.FlexBox>
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox wide flexStart>
          <U.Normal semiBold margin50 large>Create New Account</U.Normal>
          <U.Normal>We're glad to have you onboard! Fill in<br/>the information below to get started.</U.Normal>
          
          <U.FlexBox flexMargin>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>First Name</U.Normal>
              <U.SmallInput
                type="text"
                autoComplete="off"
                id="firstName"
                value={firstName}
                name="firstName"
                onChange={this.handleChange}
              ></U.SmallInput>
            </U.FlexBox>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>Last Name</U.Normal>
              <U.SmallInput
                type="text"
                autoComplete="off"
                id="lastName"
                value={lastName}
                name="lastName"
                onChange={this.handleChange}
              ></U.SmallInput>
            </U.FlexBox>
          </U.FlexBox>
          
          <U.FlexBox marginTop>
          <U.FlexBox column>
              <U.Normal semiBold alignLeft>Password</U.Normal>
              <U.SmallInput
                type="text"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={this.handleChange}
              ></U.SmallInput>
            </U.FlexBox>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>Confirm Password</U.Normal>
              <U.SmallInput
                type="password"
                autoComplete="off"
                id="passwordConf"
                value={passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              ></U.SmallInput>
            </U.FlexBox>
          </U.FlexBox>
          <U.WideBtn disabled>Create Account</U.WideBtn>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox login>
        <U.Normal alignRight>Have an Account?&nbsp;</U.Normal>
        <U.LinkTo
          to="/login"
        >Log In</U.LinkTo>
      </U.FlexBox>
    </U.FlexBox>
      
      }
      </>


          
    );
  }
}

export default SignupForm;
