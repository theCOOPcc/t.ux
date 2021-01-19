import React, { useState } from 'react';
import * as A from '../TuxComponents/ActivitiesComponents';

const Answer = ({ handleResponse, answer, index, disabled }) => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (answer,index) => {
    handleResponse(answer,index);
    setSelection({ isCorrect: answer.isCorrect });
  };
  return (
    <A.SubmitQuestion
      right={selection && selection.isCorrect === true}
      wrong={selection && selection.isCorrect === false}
      medium
      onClick={() => handleSelection(answer,index)}
      disabled={disabled}
    >
      {answer.label}
    </A.SubmitQuestion>
  );
};

export default Answer;
