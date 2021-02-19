import React, { useContext, useEffect } from 'react';
import { SessionContext } from '../../contexts/SessionContext';

import * as U from '../../components/TuxComponents/UniversalComponents';
import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';

const ActivityMain = () => {
  const { currentModule, handleAnswers } = useContext(SessionContext);

  return (
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
  );
};

export default ActivityMain;
