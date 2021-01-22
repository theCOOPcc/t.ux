import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const CreateGroup = ({
  setNewGroupName,
  newGroupName,
  handleCreateGroup,
  createGroup,
  setCreateGroup,
}) => {
  
  const createNewGroup = () => {
    handleCreateGroup();
    setCreateGroup(!createGroup);
  };
  return (
    <>
      <U.Heading3>Group: None</U.Heading3>
      <label>Group Name </label>
      <input
        type="text"
        placeholder="Add group name here"
        onChange={(e) => setNewGroupName(e.target.value)}
        value={newGroupName}
      />
      <U.NakedBtn create onClick={createNewGroup}>
        Create Group
      </U.NakedBtn>
    </>
  );
};

export default CreateGroup;
