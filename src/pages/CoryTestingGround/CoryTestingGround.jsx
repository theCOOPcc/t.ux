import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import activityService from '../../services/activityService';
import styled from 'styled-components'
import authService from '../../services/authService'
import userService from '../../services/userService'
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
      activities: activityService.getAll(),
      users: userService.getAllUsers(),
      user: {
        name: "Cory Test",
        email: "jt@dog.com",
        password: "abc123",
        assignments: [],
        _id: "5fc5428eed9ce66e6246e158",
        userPermissions: 100
      },
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

  handleTest = async () => {
    const user = {
      name: "Cory Test 2",
      email: "jt@dog.com",
      password: "abc123",
      assignments: [],
      _id: "5fc5428eed9ce66e6246e158",
      userPermissions: 100
    }
    const banana = await userService.updateUser(user)
    console.log(banana)
    const taco = await userService.getAllUsers()
    console.log(taco)
  }


  
  // async componentDidMount() {

  //   console.log(this.state.user)
  //   console.log(this.state.users)
    
  //   const banana = {
  //     name: "Cory Test",
  //     email: "jt@dog.com",
  //     password: "abc123",
  //     assignments: [],
  //     _id: "5fc5428eed9ce66e6246e158"
  //   }
  
  //   const updatedUser = await userService.updateUser(banana)
  //   console.log(updatedUser)
  
  // }

  // handleUpdateUser = async updatedUserData => {
  //   const updatedUser = await userService.updateUser(updatedUserData);
  //   const newUsersArray = this.state.users.map(u =>
  //     u._id === updatedUser._id? updatedUser : u);
  //   this.setState(
  //     { users: newUsersArray },
  //     window.location.reload
  //     // () => this.props.history.push('/users')
  //   );
  // }

  // handleAddActivity = async newActivityData => {
  //   const newactivity = await activityService.create(newActivityData);
  //   newactivity.createdBy = { name: this.props.user.name, _id: this.props.user._id}
  //   this.setState(state => ({
  //     activitys: [...state.activitys, newactivity]
  //   }), () => this.props.history.push('/activitys'));
  // }


  // // this can be reconnected when we link up the front end

  // handleDeleteactivity = async activityId => {
  //   if (authService.getUser()) {
  //     await activityService.deleteOne(activityId);
  //     this.setState(state => ({
  //       activitys: state.activitys.filter(l => l._id !== activityId)
  //     }), () => 
  //     // this.props.history.push('/activitys')
  //     window.location.reload)
  //   } else {
  //     this.props.history.push('/')
  //   }
  // }

  // handleUpdateActivity = async updatedActivityData => {
  //   const updatedactivity = await activityService.update(updatedActivityData);
  //   const newactivitiesArray = this.state.activities.map(l =>
  //     l._id === updatedactivity._id? updatedactivity : l);
  //   this.setState(
  //     { activities: newactivitiesArray },
  //     () => this.props.history.push('/activities')
  //   );
  // }
  
  render() { 
    return ( 
      <Container>
        <button onClick={this.handleTest}>update test user</button>
      </Container>
    )}
}
 
export default TestingGround;