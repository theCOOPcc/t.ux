import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import activityService from '../../services/activityService';
// import styled from 'styled-components';
import authService from '../../services/authService'

import {ActivityCard, SideBar, SideBarItem, SideBarLink, ActivitiesContainer, Header, Container} from '../../components/StyledComponents/ActivitiesComponents'

// Index activities will be a home for all of the activities for the manager to review.
// Filter the activities.
// Browse the activities.
// Assign the activity to a student.
// Delete the activity.



// const ToggleButtons = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

class IndexActivities extends Component {
  state = {
    activities: activityService.getAll(),
    // listView: true,
  };

  handleDeleteActivity = async activityId => {
    if (authService.getUser()) {
      await activityService.deleteOne(activityId);
      this.setState(state => ({
        activities: state.activities.filter(l => l._id !== activityId)
      }), () => 
      // this.props.history.push('/activities')
      window.location.reload)
    } else {
      this.props.history.push('/')
    }
  }

  async componentDidMount() {
    const activities = await activityService.getAll();
    this.setState({ activities: activities });
  }

  render() {
    const { activities } = this.state;
    return (
      <Container>
        <SideBar>
          <SideBarItem>
            <SideBarLink href="#">Activity</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <span>Activities</span>
          </SideBarItem>
          <SideBarItem>
            <span>Results</span>
          </SideBarItem>
          <SideBarItem>
            <span>Feedback</span>
          </SideBarItem>
        </SideBar>
        <ActivitiesContainer>
          <Header>
            <h1> Activities </h1>
          </Header>

          {/* // TODO: Toggle view to list view or grid view. */}
          {/* <ToggleButtons>
            <button onClick={this.handleToggleView}>List View</button>
            <button onClick={this.handleToggleView}>Grid View</button>
          </ToggleButtons> */}

          {activities.length > 0 ? (
            activities.map((activity) => (
              <ActivityCard>
                {/* // TODO: Insert Image */}
                <span>{activity.name}</span>
                <button>Assign</button>
                <button onClick={()=>this.handleDeleteActivity(activity._id)}>Delete</button>
                <Link to={{ pathname: '/preview-activity', state: { activity } }}>
                  Preview Activity
                </Link>
              </ActivityCard>
            ))
          ) : (
            <h1>No Activities</h1>
          )}
        </ActivitiesContainer>
      </Container>
    );
  }
}

export default IndexActivities;
