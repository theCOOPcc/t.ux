import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import './Signup.css';
import * as U from '../../components/TuxComponents/UniversalComponents';

class Signup extends Component {
  state = {
    message: '',
    type: this.props.type,
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    // const {match} = this.props
    const { match } = this.props;
    const { groupId, email } = match.params;
    return (
      <main>
        <SignupForm
          {...this.props}
          type={this.state.type}
          updateMessage={this.updateMessage}
          groupId={groupId}
          email={email}
        />
        <U.Normal>{this.state.message}</U.Normal>
      </main>
    );
  }
}

export default Signup;
