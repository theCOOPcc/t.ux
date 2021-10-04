
import React, { useState, useEffect, useContext } from 'react';
import { ManagerContext } from '../../contexts/ManagerContext';
import activityAPI from '../../services/activityService';
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

  return (
    <>
      <OutsideBox>
        <ColorBlock></ColorBlock>
        <Heading2>
          Activities
        </Heading2>
        {activities.length > 0 &&
          activities.map((activity, idx) => (
            <Box>
                  <Icon src="/images/icons/Heuristic.svg" alt="checklist icon"></Icon>
                  <Text key={idx}>
                    {activity.name}
                  </Text>
                  <MgrButton onClick={() => setIsOpen(!isOpen)}>
                    Assign
                  </MgrButton>
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
    margin: 0 auto;
    width: 100%;
    padding-bottom: 20px;
`;

const NakedBtn = styled.button`
  border: none;
  background-color: transparent;
  align-items: center;
  text-align: center;
      font-size: 12px;
      line-height: 18px;
      margin-right: 60px;
`;

const Box = styled.div`
    ${Flex({ai:'center'})};
    border-bottom: ${solid_border};
    margin: 0 33px;
`;

const Heading2 = styled.h2`
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