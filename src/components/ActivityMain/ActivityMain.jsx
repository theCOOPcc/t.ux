import React, { useContext, useEffect } from 'react';
import { SessionContext } from '../../contexts/SessionContext';

import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';

const ActivityMain = () => {
  const { currentModule, handleAnswers } = useContext(SessionContext);

  return (
    <>
      {currentModule.type === 'display' ? (
        <div className="injectParent">
          <InjectHTML markup={currentModule.contents} />
        </div>
      ) : (
        <Question details={currentModule} handleAnswers={handleAnswers} />
      )}
    </>
  );
};

export default ActivityMain;


