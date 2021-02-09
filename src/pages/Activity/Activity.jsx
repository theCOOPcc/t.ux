import React, { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivityContext';
import {UserContext} from '../../contexts/UserContext'
import * as U from '../../components/TuxComponents/UniversalComponents';
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
import SideBarNav from '../../components/SideBarNav/SideBarNav';
import Overview from '../../components/Overview/Overview';

const Activity = () => {
  const { started } = useContext(ActivityContext);

  return (
    <U.Main>
      {started === null ? (
        <Overview />
      ) : (
        <>
          <ActivityHeader />
          <ActivityBody />
          <SideBarNav />
        </>
      )}
    </U.Main>
  );
};

export default Activity;
