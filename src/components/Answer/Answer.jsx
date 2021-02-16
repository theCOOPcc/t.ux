import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import * as A from '../TuxComponents/ActivitiesComponents';

const Answer = ({ handleResponse, answer, index, disabled, response }) => {

  const handleSelection = (answer, index) => {
    handleResponse(answer, index);
  };
  return (
    <A.SubmitQuestion

      right={response && response.isCorrect === true}
      wrong={response && response.isCorrect === false}
      medium
      onClick={() => handleSelection(answer, index)}
      disabled={disabled}
    >
      {answer.label}
    </A.SubmitQuestion>
  );
};

export default Answer;
