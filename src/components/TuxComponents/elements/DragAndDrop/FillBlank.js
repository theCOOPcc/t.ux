import React from 'react';
import styled, {css} from 'styled-components';
import { pop_reg, pop_semiBold } from '../../utilities';
import CheckIcon from '../../../../images/DragNDrop/CheckmarkIcon.svg';

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




export const FillInBlank = ({}) => {

    return (
        <>
        <UIExampleCard>
            <CheckMarkContainer>
                <CheckMarkImage src={CheckIcon}/>
            </CheckMarkContainer>
            <ContentMessageHeader>
            
            </ContentMessageHeader>
            <ContentMessageDescription>

            </ContentMessageDescription>
            <ButtonFieldContainer>
            <EmptyDragNDrop>

            </EmptyDragNDrop>
            <ContinueButtonStatic>
                <ContinueText>

                </ContinueText>
            </ContinueButtonStatic>
            </ButtonFieldContainer>
        </UIExampleCard>
        <DraggableContainer>
        <WordChoiceContainer draggable>
            <AnswerChoicesText>
            </AnswerChoicesText>
        </WordChoiceContainer>
        </DraggableContainer>
        </>
    )
}


export default FillInBlank;

export const UIExampleCard = styled.div`
width: 22em;
height: 24em;
background: #FFFFFF;
box-sizing: border-box;
border-radius: 1.2em;
border: .13em solid #000000;
`;


export const CheckMarkContainer = styled.div`
display: flex;
justify-content: center;
margin: 6.7% 0 8% 0;

`;

export const ContentMessageHeader = styled.p`
text-align: center;
font: ${pop_semiBold};
font-size: 1.6em;
padding: 0;
margin: 0;

`;

export const ContentMessageDescription = styled.p`
text-align: center;
font: ${pop_reg};
font-size: 75%;

`;

export const CheckMarkImage = styled.img`
height: 4.5em;
`;


export const ButtonFieldContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 21% 0 0 0;


`;

export const EmptyDragNDrop = styled.div`
background: #FFFFFF;
border-radius: 40px;
height: 4.5em;
width: 35%;
border: .13em solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const ContinueButtonStatic = styled.div`
background: #4740FF;
border-radius: 40px;
height: 4.5em;
width: 35%;
border: .13em solid #000000;
`;

export const ContinueText = styled.div`
font: ${pop_reg};
color: white;
text-align: center;
margin-top: 17%;
font-size: 1.3em;
`;

export const DraggableContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 7%;
z-index: 1;

`;

export const AnswerChoicesText = styled.div`
font: ${pop_reg};
color: black;
text-align: center;
margin-top: 17%;
font-size: 1.3em;
`;

export const WordChoiceContainer = styled.div`
background: #FFFFFF;
border-radius: 40px;
height: 4.5em;
width: 7.7em;
min-width: 7.7em;
border: .13em solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-left: 25px;
&:hover {
    ${AnswerChoicesText} {
        color: #999999;
    }
    border: .13em solid #999999;
}
`;




