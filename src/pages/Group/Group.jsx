import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import groupService from '../../services/groupService'

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