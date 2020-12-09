import React, { Component } from 'react';

// The page the student lands on when they actually take the activity.
// The Activity data will be sent through props and then set to state.
// Would do the same thing that preview activity page does plus..
// recording the students responses.
// timing their responses
// Sending that completed or partially completed activity responses data to the database.

class ActivityInProgress extends Component {
  state = {
    // data: props.location.state.activity
  };

  render() {
    return <h1>Activity In Progress page</h1>;
  }
}

export default ActivityInProgress;
