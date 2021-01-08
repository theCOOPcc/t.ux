import React from 'react';
import * as U from '../TuxComponents/UniversalComponents';

const GroupUserTable = ({groups, selectedGroupIndex}) => {
  const selectedGroup = groups[selectedGroupIndex]
  const {invited} = selectedGroup
  return ( <U.Table>
    <thead>
      <U.TableRow> 
        <U.TableHeader left colspan="1">Student Name</U.TableHeader>
        <U.TableHeader left colspan="1">Email</U.TableHeader>
        <U.TableHeader colspan="1">Delete</U.TableHeader>
      </U.TableRow>
    </thead>
    <tbody>
      {invited.length > 0 ? (
        invited.map((user, index) => (
          <U.TableRow>
            <U.TableData>{user.name && user.name.length > 0 ? user.name : '--- not sign up ---'}</U.TableData>
            <U.TableData>{user.email}</U.TableData>
            <U.TableData left><U.Icon25 src="/images/icons/trash.svg"></U.Icon25></U.TableData>
          </U.TableRow>
        ))
      ) : (
        <>No users yet</>
      )}
    </tbody>
  </U.Table> );
}
 
export default GroupUserTable;