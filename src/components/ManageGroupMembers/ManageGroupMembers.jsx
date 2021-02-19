import React, { useState, useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import * as U from '../../components/TuxComponents/UniversalComponents';
import styled from 'styled-components';
import CreateGroup from '../../components/CreateGroup/CreateGroup';
import ModifyGroup from '../ModifyGroup/ModifyGroup';
import { Flex, tux_blue, Poppins, solid_border } from '../TuxComponents/utilities';

const ManageGroupMembers = () => {
  const [createGroup, setCreateGroup] = useState(false);
  const { groups } = useContext(ManagerContext);
  return (
    <OutisdeFlex>
      <ColorBlock></ColorBlock>
      <div style={{ margin: `20px 20px 80px 40px` }}>
        <Heading3>Manage Group Members</Heading3>

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
    </OutisdeFlex>
  );
};

export default ManageGroupMembers;


const OutisdeFlex = styled.article`
    /* ${Flex({jc:'center',ai:'center'})}; */
    max-width: 1440px;
    margin: 24px auto;
    border: ${solid_border}
`;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const Heading3 = styled.h3`
    font: ${Poppins};
    font-weight: 600;
    line-height: 36px;
`;