import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const ActivityBody = () => {
  const { started, finished, currentSection } = useContext(SessionContext);

  return (
    <>
      {started === true && currentSection && <ActivityMain />}
      {started === false && finished === null && <ConfirmationForm />}
    </>
  );
};

export default ActivityBody;
