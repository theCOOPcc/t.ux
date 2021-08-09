import React from 'react';
import styled, { css } from 'styled-components'
import { success_grey, true_white, pop_reg } from '../../utilities';
import PuzzlePiece from '../../../../images/icons/PuzzlePiece.svg';
import BriefcaseArrow from '../../../../images/icons/BriefcaseArrow.svg';
import BriefcasePencil from '../../../../images/icons/BriefcasePencil.svg';
import ContinuedEducation from '../../../../images/icons/continuingeducation.png';
import PolygonHover from '../../../../images/icons/PolygonHover.svg';





export const MotivationBox = ({ }) => {

   return (
    
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <MotivationContainer>
        <MotivationImage src= {PuzzlePiece} />
        <MotivationText>
            <MotivationTitle>Hobby</MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>
    </div>
)}

export default MotivationBox;




export const MotivationImage = styled.img`
width: 44px;
height: 44px;
background-position: 50% 50%;
background-size: cover;
overflow: hidden;
padding-left: 5px;
padding-top: 3px;
`;


export const PolygonImage = styled.img`
position: relative;
display: none;
top: -9%;

`;

export const MotivationContainer = styled.div`
    display: grid;
    grid-template-columns: 75px 81% auto;
    width: 443px;
    height: 74px;
    background-color: ${true_white};
    border: 1px solid ${success_grey};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    &:hover {
        ${PolygonImage} {
            display: block;
        }
        background-color: #F2FBFB;
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.1);
    }
`;


export const MotivationText = styled.div`
white-space: nowrap;
padding-top: 7px;
`;

export const MotivationTitle = styled.div`
font: ${pop_reg};
font-size: 24px;
`;

