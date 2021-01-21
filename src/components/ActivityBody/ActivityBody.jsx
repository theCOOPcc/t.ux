import React from 'react';
// <<<<<<< HEAD
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
    // =======
    // import ActivityLinks from '../ActivityLinks/ActivityLinks';
    // import ActivityMain from '../ActivityMain/ActivityMain';
    // import MoreInfo from '../MoreInfo/MoreInfo';
    // import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'


    // const ActivityBody = ({
    //   currentModule,
    //   handleAnswers,
    //   started,
    //   links,
    //   finished,
    //   sections
    // }) => {
    //   return (
    //     <>
    //       {started === true && (
    //         <ActivityMain
    //           currentModule={currentModule}
    //           handleAnswers={handleAnswers}
    //         />
    //       )}
    //       {started === false && finished === null && <ConfirmationForm sections={sections}/>}
    //       {started === false && finished === true && (
    //         <ActivityLinks links={links} />
    //       )}
    //     </>
    // >>>>>>> 619f24bc55a0fd146673a177ecd5533c2f2e32ed
  );
};

export default ActivityBody;
