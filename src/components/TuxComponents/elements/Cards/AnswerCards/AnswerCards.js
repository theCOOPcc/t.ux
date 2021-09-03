import React, { useContext } from "react";
import { SessionContext } from "../../../../../contexts/SessionContext";
import styled, { css } from "styled-components";
import {
  Flex,
  pop_black,
  pop_bolder,
  pop_semiBold,
  pop_thick,
  success,
  text_black,
  tux_red,
} from "../../../utilities";
import { oneAnswerOption, twoAnswerOptions, fourAnswerOptions } from "./data";
import A from "../../../../../images/icons/A.svg";
import B from "../../../../../images/icons/B.svg";
import C from "../../../../../images/icons/C.svg";
import D from "../../../../../images/icons/D.svg";
import Check from "../../../../../images/icons/answerCheckGreen.svg";
import Xred from "../../../../../images/icons/answerXRed.svg";
import {Icon} from '../AnswerCards/icon'

// export const iconIMG = [A, B, C, D];

export const AnswerCard = ({ label, image, index, id, isCorrect, display }) => {
  const { icon } = useContext(SessionContext);

  //   let variable;
  //   const getIcon = () => {
  //       (id === "A" && isCorrect)
  //         ? variable = icon
  //         : variable = A

  //         (id === "B" && isCorrect)
  //         ? variable = icon
  //         : variable = B

  //         (id === "C" && isCorrect)
  //         ? variable = icon
  //         : variable = C

  //         (id === "D" && isCorrect)
  //         ? variable = icon
  //         : variable = D;
  //   }
  return (
    <CardGroup>
      <AnswerCardBox>
          {/* {console.log(display)} */}
        <IconIMG
          // else-if to check and then individually set either check or x
          src={
            id === "A"
              ? A
              : id === "B"
              ? B
              : id === "C"
              ? C
              : id === "D"
              ? D
            //   : display === 'correct' 
            //   ? Check
            //   : display === 'incorrect'
            //   ? Xred
              : null
          }
          alt={id}
        />
        {/* <div>
          <Icon answer={label} display={display} />
        </div> */}
        <Image src={image} alt='' />
        <CardText>{label}</CardText>
        {/* <p>{console.log(display)}</p> */}
      </AnswerCardBox>
    </CardGroup>
  );
};

//   index === 0
//             ? A
//             : index === 1
//             ? B
//             : index === 2
//             ? C
//             : index === 3
//             ? D
//             : null
export const AnswerCardExample = (args) => (
  <CardGroup>
    {oneAnswerOption.map((answer, idx) => (
      <AnswerCardBox key={idx} className='answerCard'>
        <Icon src={A} />
        <Image src={answer.image} alt={answer.altText} />
        <CardText>{answer.cardText}</CardText>
      </AnswerCardBox>
    ))}
  </CardGroup>
);

export const FourAnswerCards = (args) => (
  <CardGroup>
    {fourAnswerOptions.map((answer, idx) => (
      <AnswerCardBox key={idx}>
        <Icon src={answer.iconIMG} />
        <WideImage src={answer.image} alt={answer.altText} />
        <CardText>{answer.cardText}</CardText>
      </AnswerCardBox>
    ))}
  </CardGroup>
);

export const TwoAnswerCards = (args) => (
  <CardGroup>
    {twoAnswerOptions.map((answer, idx) => (
      <WideAnswerCardBox key={idx}>
        <Icon src={answer.iconIMG} />
        <WideImage src={answer.image} alt={answer.altText} />
        <CardText>{answer.cardText}</CardText>
      </WideAnswerCardBox>
    ))}
  </CardGroup>
);

export const AnswerCardBox = styled.button`
  width: 323px;
  height: 215px;
  border-radius: 10px;
  margin: 5px 7px;
  position: relative;
  /* border: 1px solid rgba(187, 187, 187, 1); */
  border: none;
  /* background: #FAFAFA; */
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
  ${(props) =>
    props.incorrect &&
    css`
      border: 1px solid ${tux_red};
    `}
  ${(props) =>
    props.hover &&
    css`
      box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.25);
    `}
    ${(props) =>
    props.focus &&
    css`
      border: 5px solid lightblue;
    `}
`;

export const Image = styled.img`
  width: 323px;
  height: 150px;
  border-radius: 10px;
  position: absolute;
  border: none;
  top: 0;
  left: 1.5px;
`;

export const WideAnswerCardBox = styled(AnswerCardBox)`
  width: 340px;
  height: 215px;
  position: relative;
`;

export const WideImage = styled(Image)`
  width: 330px;
  height: 150px;
  top: 5px;
  left: 2.5px;
`;

export const IconIMG = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: absolute;
  background: #fff;
  left: -15px;
  top: -15px;
  z-index: 20;
`;

export const IconText = styled.p`
  font: ${pop_black};
  color: #666;
`;

export const CardText = styled.p`
  font: ${pop_bolder};
  line-height: 20px;
  font-size: 16px;
  color: ${text_black};
  position: absolute;
  top: 158px;
  left: 5px;
`;

export const CardGroup = styled.div`
  ${Flex};
  /* flex-flow: row wrap; */
  max-width: 1000px;
  margin-bottom: 25px;
`;
