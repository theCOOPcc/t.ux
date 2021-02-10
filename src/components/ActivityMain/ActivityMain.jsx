import React, { useContext, useEffect } from 'react';
import { ActivityContext } from '../../contexts/ActivityContext';
import { SessionContext } from '../../contexts/SessionContext';
import * as U from '../../components/TuxComponents/UniversalComponents';
import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';

const ActivityMain = () => {
  const {
    currentModule,
    handleAnswers,
    currentSectionIndex,
    currentModuleIndex,
  } = useContext(ActivityContext);

  const { sessionData, setCurrentSessionModule } = useContext(SessionContext);
  const { sections } = sessionData;

  const touchModule = () => {
    const currentSessionModule = { ...currentModule };
    currentSessionModule.touched = true;
    currentSessionModule.completed = false;
    setCurrentSessionModule(currentSessionModule);
  };

  const completeModule = () => {
    //
  };

  useEffect(() => {
    touchModule();
  }, []);

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
