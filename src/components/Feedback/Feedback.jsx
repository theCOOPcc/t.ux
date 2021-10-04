import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, true_white, pop_bolder, pop_reg } from '../TuxComponents/utilities';
import { JustCorrect, JustIncorrect } from '../TuxComponents/elements/Alerts/Justifications';

export const Feedback = ({ response }) => {
  const { selection, isCorrect } = response;

  return (
    <>
        {
          isCorrect ? <JustCorrect selection={selection} isCorrect={isCorrect} />
          : <JustIncorrect selection={selection} isCorrect={isCorrect} />
        }
    </>
  );
};

export default Feedback;


const FlexBox = styled.div`
  ${Flex};

`;

const HintBox = styled.div`
  ${Flex({fd:'column'})}
  align-items: flex-start;
  margin: 20px 35px 0 10px;
`;

const Hint = styled.div`
    height: 65px;
    width: 100px;
    background-color: ${(props) => (props.isCorrect ? 'Green' : 'Red')};
    color: ${true_white};
    font: ${pop_bolder};
    ${Flex({ai:'center',jc:'center'})};
    margin: 20px 0 0 65px;
`;

const Tips = styled.p`
    font: ${pop_bolder};
    margin: 0;
    padding: 25px;
    text-align: left;
`;

const Text = styled.p`
  font: ${pop_reg};
  line-height: 20px;
`;