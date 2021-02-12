import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const ActivityBody = () => {
  const { started, finished } = useContext(SessionContext);
  
  return ( 
    <>
      {started === true && <ActivityMain />}
      {started === false && finished === null && <ConfirmationForm />}
      {started === false && finished === true && <ActivityLinks />}
    </>
  );
};

export default ActivityBody;
