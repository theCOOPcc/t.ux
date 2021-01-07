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
    <U.FlexBox column>
    <U.Normal twenty4>Manage Group Members</U.Normal>
    {!groups.length > 0 && (
      <CreateGroup
        newGroupName={newGroupName}
        setNewGroupName={setNewGroupName}
        handleCreateGroup={handleCreateGroup}
      />
    )}
    {groups.length > 0 && (
      <>
        <h2>Group:</h2>
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
              <GroupUserTable groups={groups} />
            )}
            <label>Add Students Group</label>
            <textarea
              type="textarea"
              value={textInput}
              onChange={handleTextInputChange}
              placeholder="Enter email addresses seperated by commas (Ex: leo@gmail.com, dan@gmail.com, etc.."
            />
            <U.WideBtn teal onClick={handleAddToGroup}>
              Add To Group
            </U.WideBtn>
          </>
        )}
      </>
    )}
  </U.FlexBox>
  );
};

export default ManageGroupMembers;
