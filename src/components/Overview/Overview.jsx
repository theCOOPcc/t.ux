
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Flex, orange_text, tux_blue } from '../TuxComponents/utilities';
import { Button280 } from '../TuxComponents/elements';
import { SessionContext } from '../../contexts/SessionContext';

const Overview = ({ user }) => {
  const { setStarted, name: activityName, time: activityTime, startTimer } = useContext(
    SessionContext
  );

  const handleStartSession = () => {
    setStarted(true);
    startTimer()
  };

  return (
    <>
      <Main>
      {/* <OuterBox> */}
        <ColorBlock/>
        <FlexBox >
          {user ? (
            <Heading1 overview>Welcome, {user.firstName}!</Heading1>
          ) : (
            <Heading1 overview>Welcome, ____!</Heading1>
          )}
          <Text>
            You're about to begin an activity assigned by your instructor on the{' '}
            <strong>{activityName}.</strong>
          </Text>
          <Text bold>What to expect:</Text>
          <List>Content you've learned inside or outside the classroom.</List>
          <br></br>
          <List>Documentation of your progress to your instructor.</List>
          <br></br>
          <List>Check for understanding along the way.</List>
          <br></br>
          <List>Feedback that will help with your learning.</List>
          <br></br>
          <Text overview>
            Time to complete activity is <strong>{activityTime} min</strong>

          </Text>
          <Text overview>Begin when you're ready. Good luck!</Text>
        </FlexBox>
        <Button280 onClick={() => setStarted(true)}>
          Begin
        </Button280>
      {/* </OuterBox> */}

      </Main>
    </>
  );
};

export default Overview;

const Main = styled.main`
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	margin: 0 auto;
	max-width: 1440px;
`;

const OuterBox = styled.div`
    ${Flex({fd:'column'})};
`;

const FlexBox = styled.div`
    ${Flex({fd:'column'})};
    /* font-size: 35px;
    line-height: 24px; */
    padding: 50px;
`;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const Heading1 = styled.h1`
  color: ${orange_text};
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  font-size: 35px;
  line-height: 24px;
  color: var(--overview-orange);
  font-weight: bold;
`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 30px;

  ${props => props.bold && css`
      font-weight: 700;
    `}
`;

const List = styled.li`
  font: var(--pop-reg);
  line-height: 30px;
`;