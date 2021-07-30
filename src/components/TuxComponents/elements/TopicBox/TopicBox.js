import React from 'react';
import styled, { css } from 'styled-components'
import { Poppins, pop_bolder, success_grey, true_white, intro_text, pop_reg, pop_thick } from '../../utilities';

export const TopicBox = ({ }) => (
    <>
    <TopicContainer>
        <TopicImage>
            <TopicCompletion>
            </TopicCompletion>
        </TopicImage>
        <TopicText>
            <TopicTitle></TopicTitle>
            <TopicDescription></TopicDescription>
            <TopicQuestionTotal></TopicQuestionTotal>
        </TopicText>
        <Btn></Btn>

    </TopicContainer>
    </>
)



export const TopicImage = styled.div`
width: 90px;
height: 90px;
border: 5px solid ${success_grey};
border-radius: 100px;
background: url(https://918443.smushcdn.com/2283479/wp-content/uploads/2017/01/question-mark-1722865_1920-370x218.png?lossy=0&strip=1&webp=1) no-repeat center;
background-position: 50% 50%;
background-size: cover;
overflow: hidden;
`;

export const TopicCompletion = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 90px;
height: 90px;
text-align: center;
font-size: 0;
color: ${true_white};
background-color: #222222;
opacity: 0;
border-radius: 100px;
`;


export const TopicContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 70% auto;
    width: 993px;
    height: 130px;
    background-color: ${true_white};
    border: 2px solid ${success_grey};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    &:hover {
        ${TopicCompletion} {
            font: ${pop_thick};
            font-size: 16px;
            opacity: .6;

        }
    }
`;



export const TopicText = styled.div`
padding-top: 7px;
`;

export const TopicTitle = styled.div`
font: ${pop_bolder};
font-size: 24px;
`;


export const TopicDescription = styled.div`
font: ${pop_reg};
`;



export const TopicQuestionTotal = styled.div`
font-family: ${Poppins};
color: ${intro_text};
`;


export const Btn = styled.button`
font: ${pop_bolder};
border: none;
font-size: 24px;
background: none;
`;