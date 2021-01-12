import React from 'react';

const GroupUserTable = ({groups, selectedGroupIndex}) => {
  const selectedGroup = groups[selectedGroupIndex]
  const {invited} = selectedGroup
  return ( <table>
    <thead>
      <tr> 
        <th colspan="1">Student Name</th>
        <th colspan="1">Email</th>
        <th colspan="1">Delete</th>
      </tr>
    </thead>
    <tbody>
      {invited.length > 0 ? (
        invited.map((user, index) => (
          <tr>
            <td>{user.name && user.name.length > 0 ? user.name : '--- --- ---'}</td>
            <td>{user.email}</td>
            <td>delete button</td>
          </tr>
        ))
      ) : (
        <>No users yet</>
      )}
    </tbody>
  </table> );
}
 
export default GroupUserTable;