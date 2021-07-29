import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../TuxComponents/utilities';
import { JustCorrect, JustIncorrect } from '../TuxComponents/elements/Alerts/Justifications';
// import { FlagFeature } from '../TuxComponents/elements/FlagFeature/FlagFeature';


export const Feedback = ({ response }) => {
  const { selection, isCorrect } = response;
  // const { isCorrect } = selection;

  return (
    <>
      {/* {(isCorrect && <FeedbackBox selection={selection} />) ||
        (!isCorrect && <FeedbackBox selection={selection} />)} */}
               {/* {(isCorrect && <JustCorrect selection={selection} />) ||
        (!isCorrect && <JustIncorrect selection={selection} />)}  */}
        {
          isCorrect ? <JustCorrect selection={selection} isCorrect={isCorrect} />
          : <JustIncorrect selection={selection} isCorrect={isCorrect} />
        }
        {/* <JustCorrect selection={selection} isCorrect={isCorrect}/> */}
    </>
  );
};

// export default Feedback;


const FlexBox = styled.div`
  ${Flex};

`;

const HintBox = styled.div`
  ${Flex({fd:'column'})}
  align-items: flex-start;
  margin: 20px 35px 0 10px;
`;

const Hint = styled.div`
    height: 65px;
    width: 100px;
    background-color: ${(props) => (props.isCorrect ? 'Green' : 'Red')};
    color: var(--true-white);
    font: var(--pop-bolder);
    ${Flex({ai:'center',jc:'center'})};
    margin: 20px 0 0 65px;
    /* flex-grow: 3; */
`;

const Tips = styled.p`
    font: var(--pop-bolder);
    margin: 0;
    padding: 25px;
    text-align: left;
`;

const Text = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
`;




















// {
//   isCorrect ? 
//   <JustCorrect selection={selection}/>
//   :
//   <JustIncorrect selection={selection}/>
// }

      /* {(isCorrect && <JustCorrect selection={selection} />) ||
        (!isCorrect && <JustIncorrect selection={selection} />)} */