import React, { useState } from 'react';
import * as A from '../TuxComponents/ActivitiesComponents';

const Answer = ({ handleResponse, answer, response }) => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (answer) => {
    handleResponse(answer);
    setSelection({ isCorrect: answer.isCorrect });
  };
  return (
    <A.SubmitQuestion
      right={selection && selection.isCorrect === true}
      wrong={selection && selection.isCorrect === false}
      disabled={!response ? false : true}
      medium
      onClick={() => handleSelection(answer)}
    >
      {answer.label}
    </A.SubmitQuestion>
  );
};

export default Answer;
