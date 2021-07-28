import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SessionContextProvider, { SessionContext } from '../../contexts/SessionContext';
import { AnswerCard } from '../TuxComponents/elements/Cards/AnswerCards/AnswerCards';

const Answer = ({  answer, index, disabled, response }) => {

  const {handleResponse} = useContext(SessionContext)

  return (
    <SubmitQuestion

      right={response && response.selection.isCorrect === true}
      wrong={response && response.selection.isCorrect === false}
      onClick={() => handleResponse(answer, index)}
      disabled={disabled}
      >
      <AnswerCard 
        index={index}
        label={answer.newLabel}
        image={answer.answerImage}
      />
      {/* {answer.label} */}
    </SubmitQuestion>
  );
};

export default Answer;

const SubmitQuestion = styled.button`
	border: none;
	/* width: 224px; */
	/* padding: 12px 0; */
	/* margin: 10px 8px; */
	/* border-radius: 5px; */
	/* font: var(--answer-btn); */
	/* line-height: 24px; */
	/* color: var(--true-white); */
    background-color: transparent;
    cursor: pointer;
    /* ${props => props.isCorrect && css`
        background-color: ${(props) => (props.isCorrect ? 'Green' : 'Red')};
        `} */
    /* ${props => props.right && css`
        background: #78C077;
        border: 1px solid #78C077;
    `}
    ${props => props.wrong && css`
        background: #EE6E6B;
        border: 1px solid #EE6E6B;
    `}
    ${props => props.disabled && css`
        background: #dddddd
    `} */
		/* &:hover {
			background: #236C69;
		}
		&:active {
			box-shadow: var(--btn-active-shadow);
		} */
`;