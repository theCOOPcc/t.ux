import React from 'react';
import * as A from '../TuxComponents/ActivitiesComponents';
import * as U from '../TuxComponents/UniversalComponents';


const FeedbackBox = ({ selection }) => {
  const { feedback, isCorrect } = selection;
  return (
    <U.FlexBox flexStartJC>
      <A.Hint isCorrect={isCorrect}>{isCorrect ? 'Correct!' : 'Hint!'}</A.Hint>
      <U.FlexBox column hint>
        <A.Tips>Tips:</A.Tips>
        <U.Normal>{feedback}</U.Normal>
      </U.FlexBox>
    </U.FlexBox>
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
