import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom'
import activityService from '../../services/activityService';
import styled from 'styled-components'
import authService from '../../services/authService'
import userService from '../../services/userService'
import tokenService from '../../services/tokenService'
import { user, activityData } from '../../SampleData/SampleData'
import groupService from '../../services/groupService';

// const ActivityCard = styled.div`
// border: solid 2px black;
// background-color: white;
// align-items: center;
// width: 300px;
// margin: 10px auto;
// `;

const Container = styled.div`
align-items: center;
text-align: center;
`

class TestingGround extends Component {
  state = { 
   } 

  handlePromotion = async () => {
    let promotion = await authService.getUser()
    console.log('user', promotion)
    promotion.userPermissions = 100
    console.log('now 100', promotion)
    this.handlePermissionChange(promotion)
    const newUser = authService.getUser()
    console.log('ding', newUser)
  }

  handleDemotion = async () => {
    let promotion = await authService.getUser()
    console.log('user', promotion)
    promotion.userPermissions = 0
    console.log('now 100', promotion)
    this.handlePermissionChange(promotion)
    const newUser = authService.getUser()
    console.log('ding', newUser)
  }

  handlePermissionChange = async (promotion) => {
    console.log('callback')
    let promotedUser = await userService.updateUser(promotion)
    console.log('promoted', promotedUser)
  }

  handleGetAllUsers = async () => {
    const myToken = await tokenService.getToken()
    console.log('my token handle function', myToken)
    const allUsers = await userService.getAllUsers();
    console.log(allUsers)
  }

  handleAssignActivity = async () => {
    const activity = await activityService.getOne('5fce85093399a6d182c2bf7e')
    const activityUser = await userService.getUser('5fd790083bf7c9788417821c')
    activityUser.assignments.push(activity)
    await userService.updateUser(activityUser)
    console.log('activity assigned', activityUser)
  }
  
  handleAddGroup = async () => {
  const groupData = {
    name: "Test Group 4",
    dateStarted: 2020-12-21,
    endingDate: 2020-12-22,
    users: [],
    createdBy: ""
  }
  const createGroup = await groupService.create(groupData)
  console.log('create group', createGroup)
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
        <button onClick={this.handleGetAllUsers}>get users</button>
        <button onClick={this.handlePromotion}>Promote Me</button>
        <button onClick={this.handleDemotion}>Demote Me</button>
        <button onClick={this.handleAddGroup}>add group</button>
        <button onClick={this.handleAssignActivity}>assign JT</button>
        <a href='http://localhost:3000/logout'>Log Out</a>
        <h1>Cory Rules</h1>
      </Container>
    )}
}
 
export default TestingGround;