import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
// import ProgressBar from '../../components/TuxComponents/layouts/ProgressBar';
import {ProgressBar} from '../TuxComponents/elements/ProgressBar/ProgressBar';
import styled, {css} from 'styled-components';
import { Flex } from '../TuxComponents/utilities';

const ActivityHeader = () => {
  const { completed, currentSection, sessionData, started, finished } = useContext(SessionContext);
  const { name } = currentSection;
  const { topic } = sessionData;
  return (
    <InfoBar>
      <Heading1>{topic}</Heading1>
      <Heading2 greyed>&nbsp;-&nbsp;{name}</Heading2>
      <Heading2 progress>Progress&nbsp;&nbsp;</Heading2>
      <ProgressBar completed={completed} started={started} finished={finished}/>
    </InfoBar>
  );
};

export default ActivityHeader;

/*---------- Top Info Bar Grid ----------*/
const InfoBar = styled.section`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  justify-self: stretch;
  background-color: var(--true-white);
  ${Flex({ai:'center'})};
  padding: 0 40px;
  max-width: 1440px;
`;

const Heading1 = styled.h1`
  font-size: 36px;
  line-height: 54px;
  font-weight: 600;
`;

export const Heading2 = styled.h2`
  font: 500 24px 'Poppins', sans-serif;
  line-height: 36px;
  ${(props) =>
    props.progress &&
    css`
      margin-left: auto;
      font: var(--pop-semi-bold);
      font-size: 16px;
      line-height: 24px;
    `}

    ${(props) =>
    props.greyed &&
    css`
      color: var(--future);
    `}
`;