import styled, { css } from 'styled-components';
import { Flex, pop_semiBold, pop_thick, success, tux_red } from '../../../utilities';
import { oneAnswerOption, twoAnswerOptions, fourAnswerOptions } from './data';

export const AnswerCard = (args) => (
    <CardGroup>
      {oneAnswerOption.map((answer, idx) => (
        <AnswerCardBox {...args} key={idx} className="answerCard">
          <img src={answer.image} alt={answer.altText} />
          <div style={{ display: "flex" }}>
            <Icon {...args}>
              <IconText>{answer.iconText}</IconText>
            </Icon>
            <CardText>{answer.cardText}</CardText>
          </div>
        </AnswerCardBox>
      ))}
    </CardGroup>
  );

export const FourAnswerCards = (args) => (
  <CardGroup>
  {fourAnswerOptions.map((answer, idx) => (
    <AnswerCardBox key={idx}>
      <img src={answer.image} alt={answer.altText} />
      <div style={{ display: "flex" }}>
        <Icon>
          <IconText>{answer.iconText}</IconText>
        </Icon>
        <CardText>{answer.cardText}</CardText>
      </div>
    </AnswerCardBox>
  ))}
</CardGroup>
);

export const TwoAnswerCards = (args) => (
    <CardGroup>
    {twoAnswerOptions.map((answer, idx) => (
        <WideAnswerCardBox key={idx}>
        <img src={answer.image} alt={answer.altText} />
        <div style={{ display: "flex" }}>
            <Icon>
            <IconText>{answer.iconText}</IconText>
            </Icon>
            <CardText>{answer.cardText}</CardText>
        </div>
        </WideAnswerCardBox>
    ))}
    </CardGroup>
);

export const AnswerCardBox = styled.button`
    width: 240px;
    height: 250px;
    border-radius: 10px;
    margin: 5px 7px;
    position: relative;
    border: 1px solid rgba(187, 187, 187, 1);
    background: #FAFAFA;
    cursor: pointer;
    &:hover {
        box-shadow: 4px 4px 3px rgba(0,0,0,.25);
    }
    ${props => props.incorrect && css`
        border: 1px solid ${tux_red};
    `}
    ${props => props.hover && css`
        box-shadow: 4px 4px 3px rgba(0,0,0,.25);
    `}
    ${props => props.focus && css`
        border: 5px solid lightblue;
    `}
    
    img {
        width: 212px;
        height: 170px;
        border-radius: 10px;
        position: absolute;
        top: 12px;
        left: 14px;
    }
`;

export const WideAnswerCardBox = styled(AnswerCardBox)`
  width: 360px;
  height: 250px;

  img {
    width: 330px;
    height: 150px;
  }
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.75);
    position: absolute;
    top: 195px;
    left: 11.53px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: #3D3D3D;
    }
    ${props => props.correct && css`
        background: ${success};
    `}
    ${props => props.incorrect && css`
        background: ${tux_red};
    `}
    ${props => props.hover && css`
        background: #3D3D3D;
    `}

`;

export const IconText = styled.p`
    font: ${pop_semiBold};
    color: rgba(255,255,255,1);
`;

export const CardText = styled.p`
    font: ${pop_thick};
    line-height: 27px;
    color: black;
    position: absolute;
    top: 185px;
    left: 61.53px;
`;

export const CardGroup = styled.div`
    ${Flex};
    /* flex-flow: row wrap; */
    max-width: 1000px;
    margin-bottom: 25px;
`;
