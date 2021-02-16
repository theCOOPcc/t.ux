import React, { useState, useContext, useEffect } from 'react';
import SessionContextProvider, { SessionContext } from '../../contexts/SessionContext';
import * as A from '../TuxComponents/ActivitiesComponents';

const Answer = ({  answer, index, disabled, response }) => {

  const {handleResponse} = useContext(SessionContext)

  // const handleSelection = (answer, index) => {
  //   handleResponse(answer, index);
  // };

  return (
    <A.SubmitQuestion

      right={response && response.isCorrect === true}
      wrong={response && response.isCorrect === false}
      medium
      onClick={() => handleResponse(answer, index)}
      disabled={disabled}
    >
      {answer.label}
    </A.SubmitQuestion>
  );
};

export default Answer;
