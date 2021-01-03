import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as U from '../../components/TuxComponents/UniversalComponents'

// The Manager Page will get information relative to the Manager (activities, reports, profile info) through props coming in from App.js
// It will set that information to state.
// It will render that information to the screen and allow the Manager/Teacher to take certain actions.

class Manager extends Component {
  state = {
    // TODO: set from props
    // i think the manager component, when it loads, can call the API itself. no need to call the api every time the app loads -cory
    results: '',
    activities: ['Heuristics', 'Accessability', 'Research Methodologies', 'UI Patterns'],
    groups: [
      {name: 'topaz',
      members: ['dan', 'caitlin']},
      {name: 'sei 7-27',
      members: []},
    ]
  };
  render() {
    return (
      <>
        <h1>Manager Landing Page</h1>
        {/* // TODO: Render information to screen from state. */}
        <U.FlexBox column>
          <U.Normal twenty4>Student Results</U.Normal>
          {this.state.results ? 
            <U.Normal>
              {this.state.results}
            </U.Normal> :
            <U.Normal greyed>
              You Have No Results Yet. Invite Students to an Activity to see their Progress.
            </U.Normal>
        }
        </U.FlexBox>
        <U.FlexBox column>
          <U.Normal twenty4>Activities</U.Normal>
          {this.state.activities.map((activity, idx) => 
            <U.FlexBox>
              <p>icon</p>
              <h1 key={idx}>{activity}</h1> 
              <button>Assign</button>
              <button>Preview</button>
            </U.FlexBox>
          )}
        </U.FlexBox>
        <U.FlexBox column>
          <U.Normal twenty4>Manage Group Members</U.Normal>
          {this.state.groups.map((group, idx) => 
            <U.FlexBox>
            <h1 key={idx}>{group.name}</h1>
            <table>
              <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
              <tr>
                {group.members.map(member =>
                  <U.FlexBox>
                    <td>{member}</td>
                    <td>{member}</td>
                    <td>trash can icon</td>
                  </U.FlexBox>
                  )}
              </tr>
            </table>
          </U.FlexBox>
          )}
        <U.Normal greyed>Add Students to Group</U.Normal>
        <input type='textarea' placeholder='Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc..' />
        <U.WideBtn teal>Add to Group</U.WideBtn>
        </U.FlexBox>
      </>
    );
  }
}

export default Manager;