import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../TuxComponents/utilities';

const FeedbackBox = ({ selection }) => {
  const { feedback, isCorrect } = selection;
  return (
    <FlexBox>
      <Hint isCorrect={isCorrect}>{isCorrect ? 'Correct!' : 'Hint!'}</Hint>
      <HintBox>
        <Tips>Tips:</Tips>
        <Text>{feedback}</Text>
      </HintBox>
    </FlexBox>
  );
};

const Feedback = ({ response }) => {
  const { selection } = response;
  const { isCorrect } = selection;

  return (
    <>
      {(isCorrect && <FeedbackBox selection={selection} />) ||
        (!isCorrect && <FeedbackBox selection={selection} />)}
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
    color: var(--true-white);
    font: var(--pop-bolder);
    ${Flex({ai:'center',jc:'center'})};
    margin: 20px 0 0 65px;
    /* flex-grow: 3; */
`;

const Tips = styled.p`
    font: var(--pop-bolder);
    margin: 0;
    padding: 25px;
    text-align: left;
`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
`;