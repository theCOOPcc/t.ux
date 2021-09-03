import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { SessionContext } from "../../contexts/SessionContext";
import { AnswerCard } from "../TuxComponents/elements/Cards/AnswerCards/AnswerCards";
// import A from "../../images/icons/A.svg";
// import B from "../../images/icons/B.svg";
// import C from "../../images/icons/C.svg";
// import D from "../../images/icons/D.svg";
// import Check from "../../images/icons/answerCheckGreen.svg";
// import Xred from "../../images/icons/answerXRed.svg";

// const indexMap = {
//   0: A,
//   1: B,
// };

// function useForceUpdate() {
//   console.log('UPDATE')
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => value + 1); // update the state to force render
// }

const Answer = ({ answer, index, disabled, response, id }) => {
  const {
    handleResponse,
    handleAnswer,
    checkResponse
    // setCorrect,
    // icon,
    // setResponse,
  } = useContext(SessionContext);
  // const [iconVal, setIconVal] = useState(indexMap[index]);
  // const forceUpdate = useForceUpdate()
  

  // const checkIcon = (EVAL) => {
  //   if (icon) {
  //     EVAL = null;
  //   }
  // };
  // var iconValue;
  // const getIconValue = (EVAL) => {
  //   checkIcon(EVAL);
  //   if (EVAL === null) {
  //     switch (index) {
  //       case 0:
  //         iconValue = A;
  //         break;
  //       case 1:
  //         iconValue = B;
  //         break;
  //       case 2:
  //         iconValue = C;
  //         break;
  //       case 3:
  //         iconValue = D;
  //         break;
  //       default:
  //         iconValue = null;
  //     }
  //   } else {
  //     iconValue = EVAL === true ? Check : Xred;
  //   }
  //   setIconVal(iconValue);
  //   setTimeout(() => resetIconValue(iconValue), 3000);
  // };
  const ClickHandler = (answer) => {
    handleResponse(answer, index);
    // setOptionSelected(answer)
    handleAnswer(answer);
    checkResponse(answer, index)
  };
  // const wrongClickHandler = () => {
  //   handleResponse(answer, index);
  //   getIconValue(false);
  // };
  // const resetIconValue = (iconValue) => {
  //   if (iconValue === Check || Xred) {
  //     setIconVal(indexMap[index]);
  //   }
  //   setResponse(null)
  // };

  // useEffect(() => {
  //   return (
  //     resetIconValue(iconValue),
  //     console.log('reset')
  //   )
  // }, []);
  
  const [optionSelected, setOptionSelected] = useState(null);

  const determineDisplay = (answer) => {
    return optionSelected === answer.isCorrect ? "correct" : "incorrect";
  };

  return (
    <SubmitQuestion
      right={response && response.selection.isCorrect === true}
      wrong={response && response.selection.isCorrect === false}
      onClick={() => {ClickHandler(answer)}}
      // onClick={() => onClick(answer)}
      disabled={disabled}
    >
      <AnswerCard
        index={index}
        label={answer.newLabel} //option
        // display={determineDisplay(answer)}
        image={answer.answerImage}
        id={answer.id}
        isCorrect={answer.isCorrect}
      />
      <p>{console.log(optionSelected)}</p>
    </SubmitQuestion>
  );
};

export default Answer;

const SubmitQuestion = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
