import React, { useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';

import * as U from '../../components/TuxComponents/UniversalComponents';

const CreateGroup = ({ createGroup, setCreateGroup }) => {
  const { newGroupName, setNewGroupName, handleCreateGroup } = useContext(
    ManagerContext
  );
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
