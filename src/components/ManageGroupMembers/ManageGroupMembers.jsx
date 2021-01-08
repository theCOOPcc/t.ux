import React, { useState } from 'react';
import GroupUserTable from '../../components/GroupUserTable/GroupUserTable';
import * as U from '../../components/TuxComponents/UniversalComponents';
import CreateGroup from '../../components/CreateGroup/CreateGroup';

const ManageGroupMembers = ({
  groups,
  selectedGroupIndex,
  textInput,
  handleTextInputChange,
  handleAddToGroup,
  newGroupName,
  setNewGroupName,
  handleCreateGroup,
  setSelectedGroupIndex,
}) => {
  const [createGroup, setCreateGroup] = useState(false);
  return (

    <U.FlexBox column>
      {/* <button onClick={() => setCreateGroup(!createGroup)}>Create Group</button> */}
      {/* <U.Normal twenty4>Manage Group Members</U.Normal> */}
      {/* <U.Heading3 bolder>Manage Group Members</U.Heading3> */}
      {/* {!groups.length > 0 && (
         <CreateGroup
           newGroupName={newGroupName}
           setNewGroupName={setNewGroupName}
           handleCreateGroup={handleCreateGroup}
         />
       )} */}
      {/* {createGroup && (
         <CreateGroup
           newGroupName={newGroupName}
           setNewGroupName={setNewGroupName}
           handleCreateGroup={handleCreateGroup}
           setCreateGroup={setCreateGroup}
           createGroup={createGroup}
         />
       )} */}
      {groups.length > 0 && createGroup === false && (
        <>
          <h2>Group:</h2>
          <U.Normal twenty>Group:</U.Normal>
          <select
            value={selectedGroupIndex}
            onChange={(e) => setSelectedGroupIndex(e.target.value)}
          >
            <option value=""></option>
            {groups.map((group, index) => (
              <option key={index} value={index}>
                {group.name}
              </option>
            ))}
          </select>
          {selectedGroupIndex && (
            <>
              {groups[selectedGroupIndex].invited.length > 0 && (
                 <GroupUserTable
                   groups={groups}
                   selectedGroupIndex={selectedGroupIndex}
                 />
                )}
              <U.FlexBox column flexStartJC>
                {/* <U.AddStudents>Add Students Group</U.AddStudents> */}
                {/* <U.TextArea
                  type="textarea"
                  value={textInput}
                  onChange={handleTextInputChange}
                  placeholder="Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc.."
                /> */}
              </U.FlexBox>
              <U.WideBtn teal onClick={handleAddToGroup}>
                Add To Group
              </U.WideBtn>
            </>
          )}
        </>
      )}
      {/* <U.FlexBox bordered managerDash notFlex> */}
      {/* <U.ColorBlock SubGridBlue></U.ColorBlock> */}
      {/* <div style={{margin: `20px 20px 80px 40px`}}> */}

    </U.FlexBox>
  );
};

export default ManageGroupMembers;
