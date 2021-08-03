
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { tux_blue, pop_semiBold } from '../TuxComponents/utilities';
import TopicBox from '../TuxComponents/elements/TopicBox/TopicBox'
import AssistanceBox from '../TuxComponents/elements/AssistanceBox/AssistanceBox'
import { SessionContext } from '../../contexts/SessionContext';
import { PageBackground } from '../TuxComponents/elements/PageBackgrounds/PageBackgrounds'

const Overview = ({ user }) => {
  const { setStarted, name: activityName, time: activityTime } = useContext(
    SessionContext
  );

  return (
      <PageBackground>
      <Main>
        <ColorBlock/>
        <FlexBox >
          {user ? (
            <Heading1 overview>Welcome to T.ux, {user.firstName}! Select a learning path that best suits your needs below:</Heading1>
          ) : (
            <Heading1 overview>Welcome to T.ux, ____! Select a learning path that best suits your needs below:</Heading1>
          )}
          </FlexBox>
          <AssistanceBox></AssistanceBox>
          <FlexBox >
          <Heading1>Or... Select a topic below to learn more about a specific aspect of UX Design:</Heading1>
          </FlexBox>
        <TopicBox> 
        </TopicBox>
      </Main>
      </PageBackground>

  );
};

export default Overview;

const Main = styled.main`
	margin: 0 auto;
	max-width: 1440px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 9px rgb(0 0 0 / 25%);
  height: 600px;
  width: 60%;
  padding-left: 40px 40px;
`;



const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
    
`;

const Heading1 = styled.h1`
font: ${pop_semiBold};
font-size: 18px;
padding: 40px;
`;





