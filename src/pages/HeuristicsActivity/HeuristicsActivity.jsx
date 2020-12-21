import React, { Component } from 'react';
import {Link} from 'react-router-dom'


// TODO:This will be a major route to /activity/heuristics. Which will live in the App.js router.

// TODO:This page will display the introduction information.

// TODO:This page will have a sidebar with 10 subpage items, which will require routes in app.js for now.  
// Down the line can we localize all of the routes specific to this activity in its own Router? Is that necessary?      

// TODO:Each section will have questions and answers of their own, we will have to hold the correct value for each answer somewhere in state or local to the button?

// TODO: Track user inputs using React Tracking Library.

// TODO: When everything is done, we can save those answers to the database if necessary and we have extra time.

//TODO: display a timer for each question
//TODO: track the time spent on each question
//TODO: Submit all relevant data (recordedActivity data) on the final page.


class HeuristicsActivity extends Component {
  state = {
    // which answer buttons are clicked in order to enable and disable answer buttons
    // some state variable to track whether or not next is active or disabled, next is only active after a user answers a question.
    // will have some state to record the activity.
    // possibly something to track which subpage we are on in order to highlight/grey the sidebar items.
    // Blur pops up for correct and incorrect answers
  };

  render() {
    return <h1>Activity In Progress page</h1>;
  }
}

export default HeuristicsActivity;
