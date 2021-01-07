import React from 'react';

const GroupUserTable = ({groups}) => {
  return ( <table>
    <thead>
      <tr>
        <th colspan="1">Student Name</th>
        <th colspan="1">Email</th>
        <th colspan="1">Delete</th>
      </tr>
    </thead>
    <tbody>
      {groups[0].users.length > 0 ? (
        groups[0].users.map((user, index) => (
          <tr>
            <td>{user.name}</td>
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