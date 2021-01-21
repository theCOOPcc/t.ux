import React from 'react';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import MoreInfo from '../MoreInfo/MoreInfo';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const ActivityBody = ({
  currentModule,
  handleAnswers,
  started,
  links,
  finished,
  sections
}) => {
  return (
    <>
      {started === true && (
        <ActivityMain
          currentModule={currentModule}
          handleAnswers={handleAnswers}
        />
      )}
      {started === false && finished === null && <ConfirmationForm sections={sections} topic={topic} />}
      {started === false && finished === true && (
        <ActivityLinks links={links} />
      )}
    </>
    >>>>>>> 619f24bc55a0fd146673a177ecd5533c2f2e32ed
  );
};

export default ActivityBody;
