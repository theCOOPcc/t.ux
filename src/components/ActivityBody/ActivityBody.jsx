import React from 'react';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import MoreInfo from '../MoreInfo/MoreInfo';

const ActivityBody = ({
  currentModule,
  handleAnswers,
  started,
  links,
  finished,
}) => {
  return (
    <>
    <ActivityLinks links={links} />
      {/* {started === true && (
        <ActivityMain
          currentModule={currentModule}
          handleAnswers={handleAnswers}
        />
      )}
      {started === false && !finished && <MoreInfo />}
      {started === false && finished === true && (
        
      )} */}
    </>
  );
};

export default ActivityBody;

