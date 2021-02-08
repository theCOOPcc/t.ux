import React, { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivityContext';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const ActivityBody = () => {
  // Context instead of props
  const { started, finished } = useContext(ActivityContext);
  return (
    <>
      {started === true && <ActivityMain />}
      {started === false && finished === null && <ConfirmationForm />}
      {started === false && finished === true && <ActivityLinks />}
    </>
  );
};

export default ActivityBody;
