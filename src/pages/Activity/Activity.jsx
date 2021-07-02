import React, { useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'
import {SessionContext} from '../../contexts/SessionContext'
import * as U from '../../components/TuxComponents/UniversalComponents';
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import SideNav from '../../components/TuxComponents/layouts/SideNav';
import Overview from '../../components/Overview/Overview';

const Activity = () => {
  const { started } = useContext(SessionContext);
  const {user} = useContext(UserContext)

  return (
    <U.Main>
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
