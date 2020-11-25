import React, { Component } from 'react';
import GroupService from '../../services/groupService'

class GroupPage extends Component {
    state = { 
        groups: []
     }
    
    async componentDidMount() {
        const groups = await GroupService.getAll();
        this.setState({ groups: groups.reverse() })
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h1>Groups Index</h1>
            </React.Fragment>
         );
    }
}
 
export default GroupPage;