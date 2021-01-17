import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import * as U from '../TuxComponents/UniversalComponents';
import * as A from '../TuxComponents/ActivitiesComponents';

const Question = ({ details }) => {
  const [response, setResponse] = useState('');
  // const [bkgrdColor, setbkgrdColor] = useState(['blue', 'green', 'red'])

  const { problemStatement, media, answers } = details.contents;

  const handleResponse = (answer, index) => {
    setResponse({ selection: answer, selectionIndex: index });
  };

  return (
    <U.Sub6ColGrid>
      <U.ColorBlock SubGridBlue></U.ColorBlock>
      <A.ProblemStatement>{problemStatement}</A.ProblemStatement>
      <U.FlexBox spaceAround>
        {/* <U.Placeholder></U.Placeholder> */}
        <img src={media} alt="" />
        <U.FlexBox column >
          {answers.map((answer, index) => (
            <A.AnswerBtn
              right={response && (response.selectionIndex === index) && (response.selection.isCorrect === true) }
              wrong={response && (response.selectionIndex === index) && (response.selection.isCorrect === false) }
              medium
              key={index}
              onClick={() => handleResponse(answer, index)}
            >
              {answer.label}
            </A.AnswerBtn>
          ))}
        </U.FlexBox>
      </U.FlexBox>
        {response && <Feedback response={response} />}
    </U.Sub6ColGrid>
  );
};

export default Question;
