import styled, { css } from 'styled-components';
import { Flex, grey_text, pop_black, pop_bolder, pop_semiBold, pop_thick, success, text_black, tux_red } from '../../../utilities';
import { oneAnswerOption, twoAnswerOptions, fourAnswerOptions } from './data';

export const AnswerCard = (args) => (
    <CardGroup>
      {oneAnswerOption.map((answer, idx) => (
        <AnswerCardBox key={idx} className="answerCard">
            <Icon ><IconText>{answer.iconText}</IconText></Icon>
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
        <Icon>
          <IconText>{answer.iconText}</IconText>
        </Icon>
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
            <Icon>
            <IconText>{answer.iconText}</IconText>
            </Icon>
        <WideImage src={answer.image} alt={answer.altText} />
            <CardText>{answer.cardText}</CardText>
        </WideAnswerCardBox>
    ))}
    </CardGroup>
);

export const AnswerCardBox = styled.button`
    width: 165px;
    height: 215px;
    border-radius: 10px;
    margin: 5px 7px;
    position: relative;
    border: 1px solid rgba(187, 187, 187, 1);
    background: #FAFAFA;
    cursor: pointer;
    position: relative;
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
    
    
`;

export const Image = styled.img`
  width: 160px;
  height: 150px;
  border-radius: 10px;
  position: absolute;
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

export const Icon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 4px solid #666;
    background: #fafcfe;
    ${Flex({ai:'center', jc:'center'})};
    position: absolute;
    left: -15px;
    top: -15px;
    z-index: 20;
    &:hover {
        background: #3D3D3D;
    }
    ${props => props.correct && css`
        border: none;
    `}
    ${props => props.incorrect && css`
        border: none;
    `}
    ${props => props.hover && css`
        background: #3D3D3D;
    `}
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
