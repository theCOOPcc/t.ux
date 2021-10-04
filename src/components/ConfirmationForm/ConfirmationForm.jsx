import React, { useContext } from 'react';
import {SessionContext}  from '../../contexts/SessionContext';
import styled, { css } from 'styled-components';

import { ColorBlock } from '../TuxComponents/elements/ColorBlock/ColorBlock';
import { Flex, pop_bolder, tux_orange, tux_white, not_started, disable_btn } from '../TuxComponents/utilities';
import Star from '../../images/AccessibilityActivity/CompletionStar.svg';
import Check from '../../images/AccessibilityActivity/check.svg';
import { pop_semi_bold } from '../TuxComponents/elements';

const ConfirmationForm = () => {
  const { sessionData } = useContext(SessionContext);
  const { sections } = sessionData;
  const { topic } = sessionData;
  
  return (
    <Outside>
      <ColorBlock />
      <Congrats>{topic} Activity, Done.<br/> You did it!</Congrats>
      <img src={Star} alt="blue and white star" />
      <Table>
        <TableRow>
          <TableHeader>Topic</TableHeader>
          <TableHeader>Answered Correctly</TableHeader>
          <TableHeader>Multiple Tries</TableHeader>
        </TableRow>
          {sections.map((section,idx) => 
        <TableRow>
          <>
            <TableData>{section.name}</TableData>
            <TableData><img src={Check} alt="checkmark" /></TableData>
            <TableData><img src={Check} alt="checkmark" /></TableData>
          </>

        </TableRow>
          )}
      </Table>
    </Outside>
  );
};

export default ConfirmationForm;

const Outside = styled.div`
  ${Flex({fd:'column',ai:'center'})};
  background-color: ${tux_white};
  border-radius: 5px 5px 0 0;
`;

// !Not sure if this should be a p or a H2/3/?
const Congrats = styled.p`
  font: ${pop_bolder};
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: ${tux_orange};
`;

const Table = styled.table`
  max-width: 668px;
  border: none;
  margin: 3% 1%;
  `;

const TableRow = styled.tr`
  padding: 32px 10px 0;
`;

const TableHeader = styled.th`
  font: ${pop_semi_bold};
  font-size: 16px;
  color: ${not_started};
  padding: 32px 10px 10px;
  border-bottom: 1px solid ${disable_btn};
  :first-child {
    width: 50%;
    text-align: left;
  }
  `;

const TableData = styled.td`
  font: ${pop_bolder};
  font-size: 16px;
  color: ${not_started};
  padding: 32px 10px 10px;
  border-bottom: 1px solid ${disable_btn};
  :first-child {
    width: 50%;
    text-align: left;
  }
  :not(:first-child) {
    text-align: center;
  }
`;