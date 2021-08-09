import React from 'react';
import styled, { css } from 'styled-components';


export const TextToolBar = () => {

    return(
<>
<BarContainer>
    <B></B>
    <I></I>
</BarContainer>
</>
    )
}



export const BarContainer = styled.div`
height: 50px;
width: 240px;
border-radius: 5px;
background-color: #666666;
display: flex;
justify-content: center;
align-items: center;

`;

export const B = styled.img`
heightL 16px;
width: 12px;
`

export const I = styled.img`
heightL 16px;
width: 12px;

`