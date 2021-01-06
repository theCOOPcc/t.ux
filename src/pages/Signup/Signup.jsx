import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import './Signup.css';
import * as U from '../../components/TuxComponents/UniversalComponents'

class Signup extends Component {
  state = {
    message: '',
    type: this.props.type
  }
  
  updateMessage = (msg) => {
    this.setState({message: msg}); 
  }

  render() {

    return (
      <main>
        <SignupForm {...this.props} type={this.state.type} updateMessage={this.updateMessage} />
        <U.Normal>{this.state.message}</U.Normal>
      </main>
    );
  }
}

export default Signup;