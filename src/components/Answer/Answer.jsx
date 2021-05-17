import React, { useState, useContext, useEffect } from 'react';
import SessionContextProvider, { SessionContext } from '../../contexts/SessionContext';
import * as A from '../TuxComponents/ActivitiesComponents';

const Answer = ({  answer, index, disabled, response }) => {

  const {handleResponse} = useContext(SessionContext)

  return (
    <A.SubmitQuestion

      right={response && response.selection.isCorrect === true}
      wrong={response && response.selection.isCorrect === false}
      medium
      onClick={() => handleResponse(answer, index)}
      disabled={disabled}
    >
      {answer.label}
    </A.SubmitQuestion>
  );
};

export default Answer;
