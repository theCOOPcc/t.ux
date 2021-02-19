
import React, { useState, useEffect, useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import activityAPI from '../../services/activityService';
import ActivityInvite from '../ActivityInvite/ActivityInvite';
import styled, { css } from 'styled-components';
import { Flex, solid_border, Poppins, tux_blue, pop_reg } from '../TuxComponents/utilities';
import { Button350, Button280 } from '../TuxComponents/elements';

const ManagerActivities = () => {
  const {
    groups,
    setGroups,
    selectedGroupIndex,
    setSelectedGroupIndex,
    sendEmailInvite,
  } = useContext(ManagerContext);

  
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
      <OutsideBox>
        <ColorBlock></ColorBlock>
        <Heading3>
          Activities
        </Heading3>
        {activities.length > 0 &&
          activities.map((activity, idx) => (
            <Box>
                  <Icon src="/images/icons/Heuristic.svg"></Icon>
                  <Text key={idx}>
                    {activity.name}
                  </Text>
                  <MgrButton onClick={() => setIsOpen(!isOpen)}>
                    Assign
                  </MgrButton>
                  {/* <U.NakedBtn preview>Preview</U.NakedBtn> */}
              <hr></hr>
            </Box>
          ))}
      </OutsideBox>
    </>
  );
};

export default ManagerActivities;


const OutsideBox = styled.article`
    max-width: 1440px;
    /* ${Flex({jc:'center',ai:'center',fd:'column'})}; */
    border: ${solid_border};
    border-radius: 5px;
    /* margin: 10px 60px 10px 60px; */
    margin: 0 auto;
    width: 100%;
    padding-bottom: 20px;
`;

// const FlexBox = styled.div`
//     ${Flex({fd:'column',ai:'center',jc:'center'})};
//     width: 100%;

//     /* ${props => props.space && css`
//         justify-content: space-between;
//     `} */
// `;

// const FlexCenter = styled.div`
//     ${Flex({jc:'center',ai:'center'})};

//     ${props => props.space && css`
//         align-items: space-between;
//     `}
// `;

const Box = styled.div`
    ${Flex({ai:'center'})};
    border-bottom: ${solid_border};
    margin: 0 33px;
`;

const Heading3 = styled.h3`
    font: ${Poppins};
    font-weight: 600;
    line-height: 36px;
    margin-left: 30px;
    text-align: left;
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

const MgrButton = styled(Button280)`
    width: 245px;
    margin-left: auto;
    margin-right: 0;
`;