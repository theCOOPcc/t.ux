import React from 'react';
import styled, { css } from 'styled-components'
import { pop_reg, success_grey, tux_blue, pop_bolder } from '../../utilities';
import { PrimaryButton } from '../Buttons/Buttons';
import HeuristicsImage from '../../../../images/icons/Heuristics.png';




export const HelpCard = ({ }) => {

    return (
        <div>
            <HelpContainer>
                <HelpContent>
                    <HelpTopText>Based on your selection, we recommend the following activity:</HelpTopText>
                    <HelpSuggestion>
                        <HelpImage src={HeuristicsImage}/>
                        <HelpDescription>
                            <HelpPartText></HelpPartText>
                            <HelpPartDescription></HelpPartDescription>
                        </HelpDescription>
                    </HelpSuggestion>
                    <ButtonContainer>
                    <PrimaryButton large='true'></PrimaryButton>
                    </ButtonContainer>
                </HelpContent>
            </HelpContainer>
        </div>
    )
}



export const HelpContainer = styled.div`
width: 486px;
height: 389px;
border: 1px solid ${success_grey};
background: rgba(120, 214, 218, 0.1);
`;

export const HelpContent = styled.div`


`;



export const HelpTopText = styled.div`
font: ${pop_reg};
padding: 60px 40px 33px 40px;


`;

export const HelpSuggestion = styled.div`
display: flex;
padding: 0px 20px 40px 40px;

`;

export const HelpImage = styled.img`
width: 90px;
height: 90px;
border: 1px solid ${success_grey};
border-radius: 100px;
background-position: 50% 50%;
background-size: cover;
margin-right: 20px;

`;

export const HelpDescription = styled.div`

`;

export const HelpPartText = styled.div`
font: ${pop_bolder};

`;

export const HelpPartDescription = styled.div`
font: ${pop_reg};
font-size: 14px;

`;


export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;
