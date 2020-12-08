import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import activityService from '../../services/activityService';
import styled from 'styled-components'
import authService from '../../services/authService'
// import activity from '../../../models/activity';

const ActivityCard = styled.div`
border: solid 2px black;
background-color: white;
align-items: center;
width: 300px;
margin: 10px auto;
`;

const Container = styled.div`
align-items: center;
text-align: center;
`

class TestingGround extends Component {
  state = { 
      activitys: activityService.getAll(),
      formData: {
        name: 'activity #9002',
        duration: 5,
        numberOfQuestions: 10,
        topics: ['Heuristics'],
        type: ['Multiple Choice'],
        media: 'https://picsum.photos/id/1/200/300',
        questions: [
          {
            problemStatement: 'This is the problem statement that I am updating',
            suggestion: 'Here is a suggestion if you are having trouble that I am updating',
            answers: [
              {
                label: 'answer #1',
                isCorrect: false,
              },
              {
                label: 'answer #2',
                isCorrect: true,
              },
              {
                label: 'answer #3',
                isCorrect: true,
              },
              {
                label: 'answer #4',
                isCorrect: false,
              },
            ],
          },
        ],
        isDraft: false,
        archived: false,
        _id: '5fc17b77171f00437b74f829'
      },
   } 
  
  async componentDidMount() {
    // activityService.update(this.state.formData)
    // activityService.create(this.state.formData)
    const activitys = await activityService.getAll();
    // this.setState ({ activitys: activitys.reverse() })
    this.setState ({ activitys: activitys })
  }

  handleAddactivity = async newactivityData => {
    const newactivity = await activityService.create(newactivityData);
    newactivity.createdBy = { name: this.props.user.name, _id: this.props.user._id}
    this.setState(state => ({
      activitys: [...state.activitys, newactivity]
    }), () => this.props.history.push('/activitys'));
  }


  // this can be reconnected when we link up the front end

  handleDeleteactivity = async activityId => {
    if (authService.getUser()) {
      await activityService.deleteOne(activityId);
      this.setState(state => ({
        activitys: state.activitys.filter(l => l._id !== activityId)
      }), () => 
      // this.props.history.push('/activitys')
      window.location.reload)
    } else {
      this.props.history.push('/')
    }
  }

  handleUpdateactivity = async updatedactivityData => {
    const updatedactivity = await activityService.update(updatedactivityData);
    const newactivitysArray = this.state.activitys.map(l =>
      l._id === updatedactivity._id? updatedactivity : l);
    this.setState(
      { activitys: newactivitysArray },
      () => this.props.history.push('/activitys')
    );
  }
  
  render() { 
    return ( 
      <Container>
        <h1> activitys </h1>
        {this.state.activitys.length > 0 ? (
          this.state.activitys.map((activity) => (
            <ActivityCard key={activity._id}>
              <Link 
              to={{
                pathname: `/activity/${activity._id}`}}>
                <span>{activity.name}</span>
              </Link>
              <button onClick={
                ()=> this.handleDeleteactivity(activity._id)
                // () => activityService.deleteOne(activity._id)
              }>Delete
                    </button>
              <button onClick={
                ()=>activityService.getOne(activity._id)}>Details</button>
            </ActivityCard>
          ))
        ) : (
          <h1>No activitys</h1>
        )}
        <Route 
          exact path='/activitys/create'
          handleAddactivity = {this.handleAddactivity}
        />
      </Container>
    )}
}
 
export default TestingGround;