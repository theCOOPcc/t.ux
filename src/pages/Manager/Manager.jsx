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
    groups: [{ 
      name: 'topaz',
      members: [{
        name: 'Dan Boterashvili',
        email: 'dan@gmail.com'
       }, {
        name: 'Aaron Neeley',
        email: 'aaron@gmail.com'
       },
       {
        name: 'Catilin Hartung',
        email: 'caitlin@gmail.com'
       }]
    }, {
      name: 'sei 7-27',
      members: [{
        name: 'Cory Spicer',
        email: 'cory@gmail.com'
      },{
        name: 'Karen Lobin Perkins',
        email: 'karen@gmail.com'
      }]},
    ]
  };
  render() {
    return (
      <>
        {/* // TODO: Render information to screen from state. */}
        <U.FlexBox  bordered managerDash column>
          <U.ColorBlock SubGridBlue />
          <U.Heading3 alignLeft bolder>Student Results</U.Heading3>
          {this.state.results ? 
          <React.Fragment>
            <U.Normal center greyed>
              {this.state.results}
            </U.Normal> 
          </React.Fragment> :
            <React.Fragment>
            <U.FlexBox>
              <U.Normal twentyThirty center greyed>
                You Have No Results Yet. 
                <br></br>
                Invite Students to an Activity to see their Progress.
              </U.Normal>
            </U.FlexBox>
            </React.Fragment>
        }
        </U.FlexBox>
        <U.FlexBox bordered managerDash column>
        <U.ColorBlock SubGridBlue></U.ColorBlock>
          <U.Heading3 alignLeft bolder >Activities</U.Heading3>
          {this.state.activities.map((activity, idx) => 
          <U.FlexBox column wide>
            <U.FlexBox wide spaceBetween>
              <U.FlexBox alignLeft>
                <U.Normal marginLeft>icon</U.Normal>
                <U.Normal marginLeft twenty8 key={idx}>{activity}</U.Normal> 
              </U.FlexBox>
              <U.FlexBox alignRight>
                <U.WideBtn preview teal>Assign</U.WideBtn>
                <U.NakedBtn preview>Preview</U.NakedBtn>
              </U.FlexBox>
            </U.FlexBox>
              <U.ColorBlock SubGridGrey />
            </U.FlexBox>
          )}
        </U.FlexBox>
        <U.FlexBox bordered managerDash column>
          <U.ColorBlock SubGridBlue />
          <U.Heading3 alignLeft bolder>Manage Group Members</U.Heading3>
          {this.state.groups.map((group, idx) => 
            <U.FlexBox column wide >
              <U.FlexBox alignLeft>
                <U.Heading3 >Group:</U.Heading3><U.Heading3 blue>{group.name}</U.Heading3>
              </U.FlexBox>
            <U.FlexBox wide spaceBetween>
            <table>
              <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
              <tr>
                {group.members.map(member =>
                  <U.FlexBox bottomBordered wide spaceBetween>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>trash can icon</td>
                  </U.FlexBox>
                  )}
              </tr>
            </table>
          </U.FlexBox>
          </U.FlexBox>
          )}
        <U.FlexBox column>
          <U.FlexBox column alignLeft>
            <U.Normal greyed sixteen>Add Students to Group</U.Normal>
            <input type='textarea' placeholder='Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc..' />
          </U.FlexBox>
          <U.WideBtn preview teal>Add to Group</U.WideBtn>
        </U.FlexBox>
        </U.FlexBox>
      </>
    );
  }
}

export default Manager;