import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SessionContext } from '../../contexts/SessionContext';
import { AnswerCard } from '../TuxComponents/elements/Cards/AnswerCards/AnswerCards';

const Answer = ({ answer, index, disabled, response }) => {
	const { handleResponse, disable, setDisable } = useContext(SessionContext);
	response ? setDisable(false) : setDisable(true);

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
	background-color: transparent;
	cursor: pointer;
`;
