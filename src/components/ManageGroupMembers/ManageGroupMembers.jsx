import React, { useState, useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import * as U from '../../components/TuxComponents/UniversalComponents';
import CreateGroup from '../../components/CreateGroup/CreateGroup';
import ModifyGroup from '../ModifyGroup/ModifyGroup';

const ManageGroupMembers = () => {
  const [createGroup, setCreateGroup] = useState(false);
  const { groups } = useContext(ManagerContext);
  return (
    <U.FlexBox bordered managerDash notFlex>
      <U.ColorBlock SubGridBlue></U.ColorBlock>
      <div style={{ margin: `20px 20px 80px 40px` }}>
        <U.Heading3 bolder>Manage Group Members</U.Heading3>

        {!groups.length > 0 && <CreateGroup setCreateGroup={setCreateGroup} />}
        {createGroup && (
          <CreateGroup
            setCreateGroup={setCreateGroup}
            createGroup={createGroup}
          />
        )}
        {groups.length > 0 && createGroup === false && (
          <ModifyGroup
            createGroup={createGroup}
            setCreateGroup={setCreateGroup}
          />
        )}
      </div>
    </U.FlexBox>
  );
};

export default ManageGroupMembers;
