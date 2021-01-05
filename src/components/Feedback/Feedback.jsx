import React from 'react';
import styled from 'styled-components';

const Hint = styled.div`
  height: 50px;
  width: 100px;
  background-color: ${(props) => (props.isCorrect ? 'Green' : 'Red')};
`;

const FeedbackBox = ({ selection }) => {
  const { feedback, isCorrect } = selection;
  return (
    <>
      <Hint isCorrect={isCorrect}>{isCorrect ? 'Correct!' : 'Hint!'}</Hint>
      <span>Tips:</span>
      <p>{feedback}</p>
    </>
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
