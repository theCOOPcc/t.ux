import React, { useState, useEffect } from 'react';
import activityAPI from '../../services/activityService';
import ActivityInvite from '../ActivityInvite/ActivityInvite';
import styled, { css } from 'styled-components';
import { Flex, solid_border, Poppins, tux_blue, pop_reg } from '../utilities';
import { Button350 } from '../elements';

const ManagerActivities = ({
  groups,
  selectedGroupIndex,
  setSelectedGroupIndex,
  setGroups,
  sendEmailInvite
}) => {
  const [activities, setActivities] = useState('');
  const getActivities = async () => {
    const activities = activityAPI.getAll();
    return activities;
  };

  useEffect(() => {
    getActivities().then((activities) => setActivities(activities));
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <InviteModal
        show={show}
        handleClose={handleClose}
        groups={groups}
        setGroups={setGroups}
        selectedGroupIndex={selectedGroupIndex}
        setSelectedGroupIndex={setSelectedGroupIndex}
      /> */}
      <ActivityInvite 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      groups={groups}
      setGroups={setGroups}
      selectedGroupIndex={selectedGroupIndex}
      setSelectedGroupIndex={setSelectedGroupIndex}
      sendEmailInvite={sendEmailInvite}
      />
      <OutsideFlex>
        <ColorBlock></ColorBlock>
        <Heading3>
          Activities
        </Heading3>
        {activities.length > 0 &&
          activities.map((activity, idx) => (
            <FlexBox>
              <FlexBox space>
                <FlexCenter>
                  <Icon src="/images/icons/Heuristic.svg"></Icon>
                  <Text key={idx}>
                    {activity.name}
                  </Text>
                </FlexCenter>
                <FlexCenter>
                  <Button350 onClick={() => setIsOpen(!isOpen)}>
                    Assign
                  </Button350>
                  {/* <U.NakedBtn preview>Preview</U.NakedBtn> */}
                </FlexCenter>
              </FlexBox>
              <hr></hr>
              {/* <U.ColorBlock SubGridGrey /> */}
              {/* may need to make a subgridgrey div but think the hr might do it */}
            </FlexBox>
          ))}
      </OutsideFlex>
    </>
  );
};

export default ManagerActivities;


const OutsideFlex = styled.article`
    max-width: 1440px;
    ${Flex({jc:'center',ai:'center',fd:'column'})};
    border: ${solid_border};
    border-radius: 5px;
    margin: 10px 60px 10px 60px;
    width: 100%;
    padding-bottom: 20px;
`;

const FlexBox = styled.div`
    ${Flex({fd:'column',ai:'center',jc:'center'})};
    width: 100%;

    ${props => props.space && css`
        justify-content: space-between;
    `}
`;

const FlexCenter = styled.div`
    ${Flex({jc:'center',ai:'center'})};
`;

const Heading3 = styled.h3`
    font: ${Poppins};
    font-weight: 600;
    line-height: 36px;
    margin-left: 30px;
`;

const Text = styled.p`
    font: ${pop_reg};
    line-height: 20px;
    margin-left: 45px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 45px;
`;

// this is the same as in MgrGroup
const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;