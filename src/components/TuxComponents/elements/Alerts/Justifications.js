import React from 'react'
import styled from 'styled-components';
import Error from '../../../../images/icons/error.svg'
import Success from '../../../../images/icons/success.svg'

export const JustIncorrect = ({ selection }) => {
  const { feedback } = selection;
  return (
  <IncorrectJust>
    <AlertIcon className='justification-incorrect' src={Error} />
    <MessageHead>Not Quite</MessageHead>
    <MessageSub>{feedback}</MessageSub>
  </IncorrectJust>
  );
};

export const JustCorrect = ({ selection }) => {
  const { feedback } = selection;
  return (
  <CorrectJust>
    <AlertIcon className='justification-correct' src={Success} />
    <MessageHead>Correct</MessageHead>
    <MessageSub>{feedback}</MessageSub>
  </CorrectJust>
  );
};


export const IncorrectJust = styled.div`
position: relative;
  width: 962px;
  height: 189px;
  border: none;
  border-top: 7px solid #ED605C;
`;
export const CorrectJust = styled.div`
  position: relative;
  width: 962px;
  height: 189px;
  border: none;
  border-top: 7px solid #78C077;
`;

export const AlertIcon = styled.img`
position: absolute;
position: absolute;
width: 28px;
height: 28px;
left: 25px;
top: 27px;
`;

export const MessageHead = styled.div`
position: absolute;
left: 61px;
right: 60px;
top: 32px;
bottom: 23px;
width: 148px;
height: 24px;
font: "Poppins", sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
`;
export const MessageSub = styled.div`
  position: absolute;
  left: 61px;
  width: 70%;
  right: 60px;
  top: 60px;
  bottom: 23px;
  font-size: 16px;
  line-height: 24px;
`;