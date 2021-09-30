import React from 'react';
import styled, {css} from 'styled-components';
import { 
    pop_reg, 
    pop_semiBold, 
    true_white, 
    text_black, notification_panel_box_shadow, future_text, 
    complete, 
    toasts_error_bg 
} from '../../utilities';
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
background: ${true_white};
box-sizing: border-box;
border-radius: 13px;
border: 1px solid ${text_black};
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
background: ${true_white};
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid ${text_black};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const ContinueButtonStaticTwo = styled.div`
background: ${continue_btn_two_bg};
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid ${text_black};
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
background: ${true_white};
border-radius: 40px;
height: 42px;
width: 74px;
min-width: 74px;
border: 1px solid ${text_black};
z-index: 1;
box-shadow: 0px 4px 4px ${notification_panel_box_shadow};
margin-left: 25px;
&:hover {
    ${AnswerChoicesTextTwo} {
        color: ${future_text};
    }
    border: 1px solid ${future_text};
}
${(props) => 
    props.isCorrect && 
    css`
    ${AnswerChoicesTextTwo} {
        color: ${complete};
    }
    border: 1px solid ${complete};
    pointer-events: none;
`}

${(props) => 
    props.isIncorrect && 
    css`
    ${AnswerChoicesTextTwo} {
        color: ${toasts_error_bg};
    }
    border: 1px solid ${toasts_error_bg};
    pointer-events: none;
`}
`;




