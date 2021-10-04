import React, { useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'
import {SessionContext} from '../../contexts/SessionContext'
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import SideNav from '../../components/TuxComponents/layouts/SideNav';
import Overview from '../../components/Overview/Overview';
import styled from 'styled-components';
import { Flex, pageBackground } from '../../components/TuxComponents/utilities';

const Activity = () => {
  const { started } = useContext(SessionContext);
  const {user} = useContext(UserContext)

  return (
    <>
      {/* Overview is no longer part of the activity flow */}
      {/* TODO: remove Overview from this page without breaking the app */}
      {started === null ? (
        <Overview user={user}/>
      ) : (
        <ActivityPageBackground>
        <Main>
          <ActivityHeader />
          <ActivityBody />
          <SideNav />
        </Main>
        </ActivityPageBackground>
      )}
    </>
  );
};

export default Activity;

const Main = styled.main`
display: grid;
grid-template-columns: 6fr 300px;
grid-template-rows: 60px 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;
padding: 20px 39px 15px;
margin: 0 auto;
/* position: relative; */
max-width: 1440px;
`;

const ActivityPageBackground = styled.div`
background-color: ${pageBackground};

`;