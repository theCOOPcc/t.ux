import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import * as U from '../TuxComponents/UniversalComponents';
import * as A from '../TuxComponents/ActivitiesComponents';
import Answer from '../Answer/Answer'

const Question = ({ details }) => {
  const [response, setResponse] = useState('');
  // const [bkgrdColor, setbkgrdColor] = useState(['blue', 'green', 'red'])

  const { problemStatement, media, answers } = details.contents;

  const handleResponse = (answer, index) => {
    setResponse({ selection: answer, selectionIndex: index });
  };

  return (
    <U.Sub6ColGrid>
      <A.ProblemStatement>{problemStatement}</A.ProblemStatement>
      <U.FlexBox spaceAround>
        <img src={media} alt="" />
        <U.FlexBox column spaceAround>
          {answers.map((answer, index) => (
            <Answer 
             key={index}
              response={response}
              index={index}
              handleResponse={handleResponse}
              answer={answer}
            />
          ))}
        </U.FlexBox>
      </U.FlexBox>
        {response && <Feedback response={response} />}
    </U.Sub6ColGrid>
  );
};

export default Question;
