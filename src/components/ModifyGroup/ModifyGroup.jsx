import React from 'react';
import GroupUserTable from '../../components/GroupUserTable/GroupUserTable';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ModifyGroup = ({
  selectedGroupIndex,
  setSelectedGroupIndex,
  groups,
  handleAddToGroup,
  createGroup,
  setCreateGroup,
  textInput,
  handleTextInputChange,
}) => {
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
            <U.WideBtn teal onClick={() => setCreateGroup(!createGroup)}>
              Create Group
            </U.WideBtn>
          </>
        )}
      </U.FlexBox>
    </>
  );
};

export default ModifyGroup;
