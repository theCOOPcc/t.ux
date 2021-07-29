import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SessionContext } from '../../contexts/SessionContext';

const Answer = ({  answer, index, disabled, response }) => {

  const {handleResponse} = useContext(SessionContext)

  return (
    <SubmitQuestion

      right={response && response.selection.isCorrect === true}
      wrong={response && response.selection.isCorrect === false}
      medium
      onClick={() => handleResponse(answer, index)}
      disabled={disabled}
    >
      {answer.label}
    </SubmitQuestion>
  );
};

export default Answer;

const SubmitQuestion = styled.button`
	border: none;
	width: 224px;
	padding: 12px 0;
	margin: 10px 8px;
	border-radius: 5px;
	font: var(--answer-btn);
	line-height: 24px;
	color: var(--true-white);
    background-color: var(--enable-btn);
    cursor: pointer;
    ${props => props.right && css`
        background: #78C077;
        border: 1px solid #78C077;
    `}
    ${props => props.wrong && css`
        background: #EE6E6B;
        border: 1px solid #EE6E6B;
    `}
    ${props => props.disabled && css`
        background: #dddddd
    `}
`;