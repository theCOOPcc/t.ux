import React, { useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';

import GroupUserTable from '../../components/GroupUserTable/GroupUserTable';
import * as U from '../../components/TuxComponents/UniversalComponents';

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
      <U.FlexBox column>
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
              <U.AddStudents>Add Students Group</U.AddStudents>
              <U.TextArea
                type="textarea"
                value={textInput}
                onChange={handleTextInputChange}
                placeholder="Enter email addresses seperated by commas (Ex:
              leo@gmail.com, dan@gmail.com, etc.."
              />
            </U.FlexBox>
            <U.WideBtn teal onClick={handleAddToGroup}>
              Add To Group
            </U.WideBtn>
            <a href="" onClick={() => setCreateGroup(!createGroup)}>
              Create Group
            </a>
          </>
        )}
      </U.FlexBox>
    </>
  );
};

export default ModifyGroup;
