import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import ActivityMain from '../ActivityMain/ActivityMain';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';
import styled from 'styled-components';
import {true_white, solid_border} from '../TuxComponents/utilities';

const ActivityBody = () => {
  const { started, finished, currentSection } = useContext(SessionContext);

  return (
    <GridBox>
      {started === true && currentSection && <ActivityMain />}
      {started === false && finished === null && <ConfirmationForm />}
    </GridBox>
  );
};

export default ActivityBody;


const GridBox = styled.div`
grid-column: 1 / span 1;
grid-row: 2 / span 1;
background-color: ${true_white};
border: ${solid_border};
width: 1042px;

`;