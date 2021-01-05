import React, { useState, useEffect } from 'react';
import * as U from '../TuxComponents/UniversalComponents'
import * as A from '../TuxComponents/ActivitiesComponents'

const Question = ({ details, handleAnswers }) => {
  const [isResponseCorrect, setIsResponseCorrect] = useState('');

  const { problemStatement, image, answers } = details.contents;

  const handleResponse = (answer) => {
    // Set the isResponseCorrect value in order to use it to change button
    setIsResponseCorrect(answer.isCorrect);
    handleAnswers(answer);
  };
  
  return (
    <U.Sub6ColGrid>
      <A.ProblemStatement>{problemStatement}</A.ProblemStatement>
      <U.FlexBox spaceAround>
      <U.Placeholder></U.Placeholder>
      {/* <img src={`${image}`} alt="" /> */}
      <U.FlexBox column spaceAround>
      {answers.map((answer, index) => (
          <U.WideBtn enable medium key={index} onClick={() => handleResponse(answer)}>
            {answer.label}
          </U.WideBtn>
      ))}
      </U.FlexBox>
      {isResponseCorrect === true ? (
        <h3>Render correct tip</h3>
      ) : isResponseCorrect === false ? (
        <h3>Render incorrect tip</h3>
      ) : (
        ''
      )}
      </U.FlexBox>
    </U.Sub6ColGrid>
  );
};

export default Question;
