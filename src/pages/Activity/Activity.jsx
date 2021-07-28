import React, { useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'
import {SessionContext} from '../../contexts/SessionContext'
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import SideNav from '../../components/TuxComponents/layouts/SideNav';
import Overview from '../../components/Overview/Overview';
import styled from 'styled-components';
import { PageBackground } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';

const Activity = () => {
  const { started } = useContext(SessionContext);
  const {user} = useContext(UserContext)

  return (
    <Main>
      {/* Overview is no longer part of the activity flow */}
      {/* TODO: remove Overview from this page without breaking the app */}
      {started === null ? (
        <Overview user={user}/>
      ) : (
        <>
          <ActivityHeader />
          <ActivityBody />
          <SideNav />
        </>
      )}
    </Main>
  );
};

export default Activity;

const Main = styled.main`
display: grid;
grid-template-columns: 6fr 300px;
grid-template-rows: 60px 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;
background: #e9e9e9;
padding: 20px 39px 15px;
margin: 0 auto;
/* position: relative; */
max-width: 1440px;
`;