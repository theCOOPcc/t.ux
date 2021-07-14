import React, { useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'
import {SessionContext} from '../../contexts/SessionContext'
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import SideNav from '../../components/TuxComponents/layouts/SideNav';
import Overview from '../../components/Overview/Overview';
import { PageBackground } from '../../components/TuxComponents/elements/PageBackgrounds/PageBackgrounds';
import * as U from '../../components/TuxComponents/UniversalComponents'

const Activity = () => {
  const { started } = useContext(SessionContext);
  const {user} = useContext(UserContext)

  return (
    <U.Main>
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
    </U.Main>
  );
};

export default Activity;
