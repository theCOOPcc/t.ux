import React, {useContext} from 'react';
import styled, { css } from 'styled-components'
import { Poppins, pop_bolder, success_grey, true_white, intro_text, pop_reg, pop_thick } from '../../utilities';
import { Link } from 'react-router-dom'





export const AssistanceBox = ({ }) => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <AssistanceContainer>
        <AssistanceImage>
        </AssistanceImage>
        <AssistanceText>
            <AssistanceTitle>Need help choosing the right activity?</AssistanceTitle>
            <AssistanceDescription>Follow our recommended learning cirriculum</AssistanceDescription>
        </AssistanceText>
        <BtnStyle to= '/HelpPage'>Start</BtnStyle>
    </AssistanceContainer>
    </div>
)

export default AssistanceBox;




export const AssistanceImage = styled.div`
width: 60px;
height: 60px;
background: url(https://cdn.discordapp.com/attachments/354397771744149505/872157368664862811/unknown.png) no-repeat center;
background-position: 50% 50%;
background-size: cover;
overflow: hidden;
margin-left: 15%;
margin-top: 9%;
`;



export const AssistanceContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 65% auto;
    width: 993px;
    height: 130px;
    background-color: ${true_white};
    border: 2px solid ${success_grey};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
`;



export const AssistanceText = styled.div`
padding-top: 7px;
`;

export const AssistanceTitle = styled.div`
font: ${pop_bolder};
font-size: 24px;
`;


export const AssistanceDescription = styled.div`
font: ${pop_reg};
`;



const BtnStyle = styled(Link)`
display: flex;
justify-content: center;
font: ${pop_bolder};
border: none;
font-size: 24px;
background: none;
cursor: pointer;
text-decoration: none;
color: black;
padding-top: 17%;
`;

