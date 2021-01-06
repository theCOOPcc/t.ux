import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import * as U from '../TuxComponents/UniversalComponents';
import * as A from '../TuxComponents/ActivitiesComponents';

const Question = ({ details }) => {
  const [response, setResponse] = useState('');

  const { problemStatement, image, answers } = details.contents;

  const handleResponse = (answer, index) => {
    setResponse({ selection: answer, selectionIndex: index });
  };

  return (
    <U.Sub6ColGrid>
      <A.ProblemStatement>{problemStatement}</A.ProblemStatement>
      <U.FlexBox spaceAround>
        <U.Placeholder></U.Placeholder>
        {/* <img src={`${image}`} alt="" /> */}
        <U.FlexBox column spaceAround>
          {answers.map((answer, index) => (
            <U.WideBtn
              enable
              medium
              key={index}
              onClick={() => handleResponse(answer, index)}
            >
              {answer.label}
            </U.WideBtn>
          ))}
        </U.FlexBox>
      </U.FlexBox>
        {response && <Feedback response={response} />}
    </U.Sub6ColGrid>
  );
};

export default Question;
