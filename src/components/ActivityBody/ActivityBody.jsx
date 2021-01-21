import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';
import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';
import Overview from '../../components/Overview/Overview';
import ConfirmationForm from '../../components/ConfirmationForm/ConfirmationForm'

const ActivityBody = ({ currentModule, handleAnswers, started, sections, topic }) => {
  return (
    <U.Sub6ColGrid>
      <ConfirmationForm sections={sections} topic={topic} />
    </U.Sub6ColGrid>
    // If started is set to null/false then the overview page will be shown.

    //commenting out 11-25 to check activity
    //   !started  ? (
    //     <Overview />
    //   ) : (
    //     <U.Sub6ColGrid>
    //       {/* <U.ColorBlock SubGridBlue></U.ColorBlock> */}
    //       {currentModule.type === 'display' ? (
    //         <div className="injectParent">
    //           <InjectHTML markup={currentModule.contents} />
    //         </div>
    //       ) : (
    //         <Question details={currentModule} handleAnswers={handleAnswers} />
    //       )}
    //     </U.Sub6ColGrid>
    //   )
  );
};

export default ActivityBody;
