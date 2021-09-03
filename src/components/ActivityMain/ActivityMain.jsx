import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import styled from 'styled-components';

import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';
import { Flex } from '../TuxComponents/utilities';
import {MainColumn} from '../TuxComponents/elements/PageBackgrounds/PageBackgrounds'

const ActivityMain = () => {
  const { currentModule, handleAnswers } = useContext(SessionContext);

  return (
    <>
      {currentModule.type === "display" ? (
        <div>
          <p>{currentModule.contents.title}</p>
          <img src={currentModule.contents.image} alt='' />
          <p>{currentModule.contents.content}</p>
          <p>{currentModule.contents.objectives}</p>
          {/* <InjectHTML markup={currentModule.contents} /> */}
        </div>
      ) : 
      currentModule.type === "dnd" ? (
        <p>{currentModule.contents.title}</p>
      ) 
      : (
        <Activity>
          <Question details={currentModule} handleAnswers={handleAnswers} />
        </Activity>
      )}
    </>
  );
};

export default ActivityMain;

const Activity = styled.section`
  /* display: grid;
  grid-template-rows: 2fr; */
  ${Flex({fd:'column',ai:'center'})}
`;


