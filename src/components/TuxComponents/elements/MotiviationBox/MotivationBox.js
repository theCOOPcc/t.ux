import React from 'react';
import styled, { css } from 'styled-components'
import { success_grey, true_white, pop_reg } from '../../utilities';
import PuzzlePiece from '../../../../images/icons/PuzzlePiece.svg';
import BriefcaseArrow from '../../../../images/icons/BriefcaseArrow.svg';
import BriefcasePencil from '../../../../images/icons/BriefcasePencil.svg';
import ContinuedEducation from '../../../../images/icons/continuingeducation.png';
import PolygonHover from '../../../../images/icons/PolygonHover.svg';



export const MotivationBox = ({...props }) => {

   return (
    <MotivationWrapper>
    <MotivationContainer>
        <MotivationImage {...props}/>
        <MotivationText>
            <MotivationTitle>
                <Title title={``} {...props}/>
            </MotivationTitle>
        </MotivationText>
        <PolygonImage src={PolygonHover}/>
    </MotivationContainer>
    </MotivationWrapper>
)}

export default MotivationBox;

export const MotivationWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const MotivationImage = styled.div`
width: 44px;
height: 44px;
background-position: 50% 0%;
background-size: cover;
padding-left: 5px;
padding-top: 3px;

${props => props.brief && css`
    background-image: url(${BriefcaseArrow});
`}
${props => props.pencil && css`
    background-image: url(${BriefcasePencil});
`}
${props => props.education && css`
    background-image: url(${ContinuedEducation});
`}
${props => props.puzzle && css`
    background-image: url(${PuzzlePiece});
`}
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
        ${PolygonImage}{
            display: block;
        }
        background-color: #F2FBFB;
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.1);
    }
    
`;


export const MotivationText = styled.div`
padding-top: 7px;
`;

export const MotivationTitle = styled.div`
font: ${pop_reg};
font-size: 24px;
`;


export const Title = ({title}) => <MotivationTitle>{title}</MotivationTitle>;
