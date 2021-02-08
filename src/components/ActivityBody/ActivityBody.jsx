import React, { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivityContext';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const ActivityBody = ({ handleAnswers }) => {
  // Context instead of props
  const {
    name,
    links,
    sections,
    started,
    finished,
    currentModule,
  } = useContext(ActivityContext);
  return (
    <>
      {started === true && (
        <ActivityMain
          currentModule={currentModule}
          handleAnswers={handleAnswers}
        />
      )}
      {started === false && finished === null && (
        <ConfirmationForm sections={sections} name={name} />
      )}
      {started === false && finished === true && (
        <ActivityLinks links={links} />
      )}
    </>
  );
};

export default ActivityBody;
