import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';
import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';
import Overview from '../../components/Overview/Overview';

const ActivityBody = ({ currentModule, handleAnswers, started }) => {
  return (
    // If started is set to null/false then the overview page will be shown.
    !started  ? (
      <Overview />
    ) : (
      <U.Sub6ColGrid>
        {/* <U.ColorBlock SubGridBlue></U.ColorBlock> */}
        {currentModule.type === 'display' ? (
          <div className="injectParent">
            <InjectHTML markup={currentModule.contents} />
          </div>
        ) : (
          <Question details={currentModule} handleAnswers={handleAnswers} />
        )}
      </U.Sub6ColGrid>
    )
  );
};

export default ActivityBody;
