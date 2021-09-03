import React, { useContext, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Answer from '../Answer/Answer';
import styled from 'styled-components';
import { Flex, tux_blue, common_shadow } from '../TuxComponents/utilities';
import { SessionContext } from '../../contexts/SessionContext';



const Question = ({ details }) => {
  const { response} = useContext(SessionContext);
  const { problemStatement, media, answers } = details.contents;
  const [optionSelected, setOptionSelected] = useState(null);
  
  const determineDisplay = (answer) => {
    if (optionSelected !== answer) {
      return "none";
    }
    return optionSelected === answer.isCorrect ? "correct" : "incorrect";
  };
  return (
    <>
      <ColorBlock></ColorBlock>
      <FlexBox>{problemStatement}</FlexBox>
      <img src={media} alt='' />
      <MediaBox>
        {/* <BtnBox> */}
        {/* Object.entries(answers) */}
        {answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            answer={answer}
            response={response}
            // id={answer.id}
            // display={determineDisplay(answer)}
            // onClick={() => setOptionSelected(answer)}
            disabled={
              !response
                ? false
                : response.selectionIndex === index
                ? false
                : true
            }
          />
        ))}
        {/* </BtnBox> */}
      </MediaBox>
      {/* Refactor to include feedback from database for wrong answer  */}
      {response && <Feedback response={response} />}
      {/* {optionSelected && (
        <span>
          Feedback: {answers[optionSelected]?.feedback}
          {console.log(answers[optionSelected]?.feedback)}
        </span>
      )} */}
    </>
  );
};

export default Question;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const FlexBox = styled.div`
    background-color: var(--true-white);
    //  box-shadow: ${common_shadow}; 
    border-radius: 10px;
    margin: 30px 60px;
`;

const MediaBox = styled.div`
  ${Flex({jc:'space-around',ai:'center', fd: 'row'})};
`;

const BtnBox = styled.div`
  ${Flex({fd:'column',jc:'center',ai:'center'})};
`;