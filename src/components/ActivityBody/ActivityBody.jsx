import React from 'react';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const ActivityBody = ({
  currentModule,
  handleAnswers,
  started,
  links,
  finished,
  sections,
  name
}) => {
  return (
    <>
      {started === true && (
        <ActivityMain
          currentModule={currentModule}
          handleAnswers={handleAnswers}
        />
      )}
      {started === false && finished === null && <ConfirmationForm sections={sections} name={name} />}
      {started === false && finished === true && (
        <ActivityLinks links={links} />
      )}
    </>
  );
};

export default ActivityBody;
