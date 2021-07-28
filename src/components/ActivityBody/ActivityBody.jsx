import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import ActivityLinks from '../ActivityLinks/ActivityLinks';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';
import styled from 'styled-components';

const ActivityBody = () => {
  const { started, finished, currentSection } = useContext(SessionContext);

  return (
    <GridBox>
      {started === true && currentSection && <ActivityMain />}
      {started === false && finished === null && <ConfirmationForm />}
      {/* {started === false && finished === true && <ActivityLinks />}   */}
    </GridBox>
  );
};

export default ActivityBody;


const GridBox = styled.div`
grid-column: 1 / span 1;
grid-row: 2 / span 1;
background-color: var(--true-white);
border: var(--solid-border);
width: 1042px;

`;