import React from 'react';
import styled from 'styled-components'
import { Flex, common_shadow } from '../../utilities';

export const TuxFlower = styled.img`
	width: 132px;
	z-index: 1;
    position: absolute;
    top: 100px;
	border-radius: 50%;
    background: #FFFFFF;
    box-sizing: border-box;
`;

export const LoginBox = styled.div`
    ${Flex({fd:'column', ai:'center'})};
    width: 400px;
    height: 200px;
    box-shadow: ${common_shadow};
    border-radius: 17px;
    margin-top: 140px;
    padding: 50px 0 0;
    // check figma file to refine this
`;

export const P = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */
letter-spacing: 0.21875px;
color: #000000;
`