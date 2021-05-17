import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import group from '../../../models/group';
import groupService from '../../services/groupService'

// Up in the air right now.

class GroupPage extends Component {
    state = { 
        groups: []
     }
    
    async componentDidMount() {
        const groups = await GroupService.getAll();
        this.setState({ groups: groups.reverse() })
    }

    handleAddGroup = async newGroupData => {
        const newGroup = await groupService.create(newGroupData)
        newGroup.createdBy = { name: this.state.user.name, _id: this.state.user._id }
        this.setState(state => ({
            groups: [...state.groups, newGroup]
        }), () => this.props.history.push('/groups'))
    }

    handleDeleteGroup = async id => {
        if (authService.getUser()) {
          await groupService.deleteOne(id);
          this.setState(state => ({
            groups: state.groups.filter(g => g._id !== id)
          }), () => this.props.history.push('/groups'));
        } else {
          this.props.history.push('/')
        }
      }
    
    handleUpdateLesson = async updatedGroupData => {
        const updatedGroup = await groupService.update(updatedGroupData);
        const newGroupsArray = this.state.groups.map(g =>
          g._id === updatedGroup._id? updatedGroup : g);
        this.setState(
          { groups: newGroupsArray },
          () => this.props.history.push('/groups')
        );
      }
    
    render() { 
        return ( 
            <React.Fragment>
                <h1>Groups Index</h1>
                <a href='/groups/create'>
                    <p>Create a group</p>
                </a>
                <Route 
                    exact path='/groups/create'
                />
            </React.Fragment>
         );
    }
}
 
export default GroupPage;