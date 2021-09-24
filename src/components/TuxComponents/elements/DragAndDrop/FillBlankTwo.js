import React from 'react';
import styled, {css} from 'styled-components';
import { pop_reg, pop_semiBold } from '../../utilities';
import CheckIcon2 from '../../../../images/DragNDrop/CheckmarkIcon.svg';
import { ToolTip } from '../ToolTips/ToolTips';

const AnswerChoices = [
{
    title: 'Undo'
},
{
    title: 'Close'
},
{
    title: 'Exit'
},
{
    title: 'Print'
}


]




export const FillInBlankTwo = ({}) => {

    return (
        <>
        <UIExampleCardTwo>
            <CheckMarkContainerTwo>
                <CheckMarkImageTwo src={CheckIcon2}/>
            </CheckMarkContainerTwo>
            <ContentMessageHeaderTwo>
            
            </ContentMessageHeaderTwo>
            <ContentMessageDescriptionTwo>

            </ContentMessageDescriptionTwo>
            <ButtonFieldContainerTwo>
              
            <EmptyDragNDropTwo>

            </EmptyDragNDropTwo>
           
            <ContinueButtonStaticTwo>
                <ContinueTextTwo>

                </ContinueTextTwo>
            </ContinueButtonStaticTwo>
            </ButtonFieldContainerTwo>
        </UIExampleCardTwo>
        <DraggableContainerTwo>
        <WordChoiceContainerTwo>
            <AnswerChoicesTextTwo>
            </AnswerChoicesTextTwo>
        </WordChoiceContainerTwo>
        </DraggableContainerTwo>
        </>
    )
}


export default FillInBlankTwo;

export const UIExampleCardTwo = styled.div`
width: 195px;
height: 217px;
background: #FFFFFF;
box-sizing: border-box;
border-radius: 13px;
border: 1px solid #000000;
`;


export const CheckMarkContainerTwo = styled.div`
display: flex;
justify-content: center;
margin: 14px 0 20px 0;

`;

export const ContentMessageHeaderTwo = styled.p`
text-align: center;
font: ${pop_semiBold};
font-size: 14px;
padding: 0;
margin: 0;

`;

export const ContentMessageDescriptionTwo = styled.p`
text-align: center;
font: ${pop_reg};
font-size: 7px;

`;

export const CheckMarkImageTwo = styled.img`

`;


export const ButtonFieldContainerTwo = styled.div`
display: flex;
justify-content: space-evenly;
margin: 40px 0 11px 0;
`;

export const EmptyDragNDropTwo = styled.div`
background: #FFFFFF;
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const ContinueButtonStaticTwo = styled.div`
background: #4740FF;
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid #000000;
`;

export const ContinueTextTwo = styled.div`
font: ${pop_reg};
color: white;
text-align: center;
margin-top: 17%;
font-size: 12px;
`;

export const DraggableContainerTwo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 70px;
z-index: -2;

`;

export const AnswerChoicesTextTwo = styled.div`
font: ${pop_reg};
color: black;
text-align: center;
margin-top: 17%;
font-size: 12px;
`;

export const WordChoiceContainerTwo = styled.div`
background: #FFFFFF;
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid #000000;
z-index: 1;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-left: 25px;
&:hover {
    ${AnswerChoicesTextTwo} {
        color: #999999;
    }
    border: 1px solid #999999;
}
${(props) => 
    props.isCorrect && 
    css`
    ${AnswerChoicesTextTwo} {
        color: #78C077;
    }
    border: 1px solid #78C077;
    pointer-events: none;
`}

${(props) => 
    props.isIncorrect && 
    css`
    ${AnswerChoicesTextTwo} {
        color: #EA4A46;
    }
    border: 1px solid #EA4A46;
    pointer-events: none;
`}
`;




