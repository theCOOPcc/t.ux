import React, { useContext, useEffect } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import styled from 'styled-components';

import Question from '../../components/Question/Question';
import InjectHTML from '../../components/InjectHTML/InjectHTML';
import { Flex } from '../TuxComponents/utilities';

const ActivityMain = () => {
  const { currentModule, handleAnswers } = useContext(SessionContext);

  return (
    <>
      {currentModule.type === 'display' ? (
        <div className="injectParent">
          <InjectHTML markup={currentModule.contents} />
        </div>
      ) : (
        <Activty>

          <Question details={currentModule} handleAnswers={handleAnswers} />
        </Activty>
      )}
    </>
  );
};

export default ActivityMain;

const Activty = styled.section`
  /* display: grid;
  grid-template-rows: 2fr; */
  ${Flex({fd:'column',ai:'center'})}
`;
