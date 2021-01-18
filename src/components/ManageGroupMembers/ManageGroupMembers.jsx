import React, { useState } from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';
import CreateGroup from '../../components/CreateGroup/CreateGroup';
import ModifyGroup from '../ModifyGroup/ModifyGroup';

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
    <U.FlexBox bordered managerDash notFlex>
      <U.ColorBlock SubGridBlue></U.ColorBlock>
      <div style={{ margin: `20px 20px 80px 40px` }}>
        <U.Heading3 bolder>Manage Group Members</U.Heading3>

        {!groups.length > 0 && (
          <CreateGroup
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            handleCreateGroup={handleCreateGroup}
          />
        )}
        {createGroup && (
          <CreateGroup
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            handleCreateGroup={handleCreateGroup}
            setCreateGroup={setCreateGroup}
            createGroup={createGroup}
          />
        )}
        {groups.length > 0 && createGroup === false && (
          <ModifyGroup
            selectedGroupIndex={selectedGroupIndex}
            setSelectedGroupIndex={setSelectedGroupIndex}
            groups={groups}
            handleAddToGroup={handleAddToGroup}
            createGroup={createGroup}
            setCreateGroup={setCreateGroup}
            textInput={textInput}
            handleTextInputChange={handleTextInputChange}
          />
        )}
      </div>
    </U.FlexBox>
  );
};

export default ManageGroupMembers;
