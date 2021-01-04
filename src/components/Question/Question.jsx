import React, { useState, useEffect } from 'react';

const Question = ({ details, handleAnswers }) => {
  const [isResponseCorrect, setIsResponseCorrect] = useState('');

  const { problemStatement, image, answers } = details.contents;

  const handleResponse = (answer) => {
    // Set the isResponseCorrect value in order to use it to change button
    setIsResponseCorrect(answer.isCorrect);
    handleAnswers(answer);
  };
  
  return (
    <>
      <h1>{problemStatement}</h1>
      <img src={`${image}`} alt="" />
      {answers.map((answer, index) => (
        <button key={index} onClick={() => handleResponse(answer)}>
          {answer.label}
        </button>
      ))}
      {isResponseCorrect === true ? (
        <h3>Render correct tip</h3>
      ) : isResponseCorrect === false ? (
        <h3>Render incorrect tip</h3>
      ) : (
        ''
      )}
    </>
  );
};

export default Question;
