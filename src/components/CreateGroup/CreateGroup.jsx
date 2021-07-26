import React, { useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import styled from 'styled-components';

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
      <Heading3>Group: None</Heading3>
      <label for="groupName">Group Name </label>
      <input
        type="text"
        placeholder="Add group name here"
        onChange={(e) => setNewGroupName(e.target.value)}
        value={newGroupName}
        id="groupName"
      />
      <NakedBtn onClick={createNewGroup}>
        Create Group
      </NakedBtn>
    </>
  );
};

export default CreateGroup;


const Heading3 = styled.h3`
  font: 500 24px 'Poppins', sans-serif;
  line-height: 36px;

  `;

  const NakedBtn = styled.button`
  border: none;
  background-color: transparent;
  align-items: center;
  text-align: center;
  color: var(--link-text);
    font: var(--pop-bolder);
    cursor: pointer;

  `;
