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
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
    <U.FlexBox>
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox>
           {/* TODO: change this onSubmit to account for only getting part of the form at each step  */}
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          
          <U.SmallInput
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          ></U.SmallInput>
          </form>
        </L.LoginBox>
      </U.FlexBox>
    </U.FlexBox>



          
    );
  }
}

export default SignupForm;
