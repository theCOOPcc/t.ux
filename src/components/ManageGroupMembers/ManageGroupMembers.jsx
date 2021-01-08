import React from 'react';
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
  setSelectedGroupIndex
}) => {
  return (
    <U.FlexBox bordered managerDash notFlex>
    <U.ColorBlock SubGridBlue></U.ColorBlock>
    <div style={{margin: `20px 20px 80px 40px`}}>

    <U.Heading3 bolder>Manage Group Members</U.Heading3>
    {!groups.length > 0 && (
      <CreateGroup
        newGroupName={newGroupName}
        setNewGroupName={setNewGroupName}
        handleCreateGroup={handleCreateGroup}
      />
    )}
    {groups.length > 0 && (
      <>
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
              <GroupUserTable groups={groups} selectedGroupIndex={selectedGroupIndex}/>
            )}
            <U.FlexBox column flexStartJC>
            <U.AddStudents>Add Students Group</U.AddStudents>
            <U.TextArea
              type="textarea"
              value={textInput}
              onChange={handleTextInputChange}
              placeholder="Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc.."
            />
            </U.FlexBox >
            <U.WideBtn AddGroup enable onClick={handleAddToGroup}>
              Add To Group
            </U.WideBtn>
          </>
        )}
      </>
    )}
    </div>
    </U.FlexBox>
  );
};

export default ManageGroupMembers;
