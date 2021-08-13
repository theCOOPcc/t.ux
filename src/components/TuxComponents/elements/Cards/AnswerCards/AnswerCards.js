import styled, { css } from 'styled-components';
import { Flex, grey_text, pop_black, pop_bolder, pop_semiBold, pop_thick, success, text_black, tux_red } from '../../../utilities';
import { oneAnswerOption, twoAnswerOptions, fourAnswerOptions } from './data';
import A from '../../../../../images/icons/A.svg'
import B from '../../../../../images/icons/B.svg'
import C from '../../../../../images/icons/C.svg'
import D from '../../../../../images/icons/D.svg'

export const iconIMG = [
    // {
    //     A: { A },
    // },
    // {
    //     B: { B },
    // },
    // {
    //     C: { C }
    // },
    // {
    //     D: { D }
    // }
    A,B,C,D
];

export const AnswerCard = ({label,image, index}) => ( 
    <CardGroup>
        <AnswerCardBox>
            <Icon src={
                index === 0 ? A
                : index === 1 ? B
                : index === 2 ? C
                : index === 3 ? D
                : null
            } alt={
                index === 0 ? A
                : index === 1 ? B
                : index === 2 ? C
                : index === 3 ? D
                : null
            
            }/>
            {/* {iconIMG.map((letter,idx)=> (
                <>
                <Icon 
                key={idx}
                src={letter} 
                /> */}
            <Image src={image} alt="" />
            <CardText>{label}</CardText>
            {/* </> */}
            {/* ))} */}
        </AnswerCardBox>
    </CardGroup>
)

export const AnswerCardExample = (args) => (
    <CardGroup>
        {oneAnswerOption.map((answer, idx) => (
            <AnswerCardBox key={idx} className="answerCard">
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

export const Icon = styled.img`
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
