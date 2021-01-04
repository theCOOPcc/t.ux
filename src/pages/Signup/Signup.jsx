import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';

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
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default Signup;