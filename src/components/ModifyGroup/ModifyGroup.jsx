import React, { useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import styled from 'styled-components';
import GroupUserTable from '../../components/GroupUserTable/GroupUserTable';
import { Flex, } from '../TuxComponents/utilities';
import { Button280, } from '../TuxComponents/elements';

const ModifyGroup = ({ createGroup, setCreateGroup }) => {
  const {
    groups,
    selectedGroupIndex,
    setSelectedGroupIndex,
    handleAddToGroup,
    textInput,
    handleTextInputChange,
  } = useContext(ManagerContext);
  
  return (
    <>
      <OuterBox>
        <Text>Group:</Text>
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
            <FlexBox>
              <AddStudents>Add Students Group</AddStudents>
              <TextArea
                type="textarea"
                value={textInput}
                onChange={handleTextInputChange}
                placeholder="Enter email addresses seperated by commas (Ex:
              leo@gmail.com, dan@gmail.com, etc.."
              />
            </FlexBox>
            <Button280 onClick={handleAddToGroup}>
              Add To Group
            </Button280>
            <a href="" onClick={() => setCreateGroup(!createGroup)}>
              Create Group
            </a>
          </>
        )}
      </OuterBox>
    </>
  );
};

export default ModifyGroup;

const OuterBox = styled.div`
  ${Flex({fd:'column',ai:'center',jc:'center'})};

`;

const FlexBox = styled.div`
  ${Flex({fd:'column'})};

`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
  font-size: 20px;
`;

const AddStudents = styled.label`
  font: var(--table);
  font-weight: 600;
  line-height: 24px;
  color: rgba(51, 51, 51, 0.75);
  margin-top: 50px;
`;

const TextArea = styled.textarea`
  width: 580px;
  height: 100px;
  border-radius: 5px;
  text-align: left;
  padding: 10px;
`;