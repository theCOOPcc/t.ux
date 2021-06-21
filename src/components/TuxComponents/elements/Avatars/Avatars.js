import styled, { css } from "styled-components";

export const AvatarLargeBox = styled.div`
width: 60px;
height: 60px;
${(props) =>
        props.name &&
        css`
        display:flex;
flex-direction: column;
        `}
`
export const AvatarLargeIcon = styled.img`
width: 60px;
height: 60px;
`

export const AvatarSmallBox = styled.div`
width: 40px;
height: 40px;
${(props) =>
        props.name &&
        css`
    display:flex;
    `}
`
export const AvatarSmallIcon = styled.img`
width: 40px;
height: 40px;
`

export const AvatarLargeName = styled.div`
position: absolute;
width: 30px;
height: 26px;
margin-left: 1em;
margin-top: 70px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 17px;
`
export const AvatarSmallName = styled.div`
position: static;
width: 30px;
height: 26px;
margin-right: 1em;
margin-top: 10px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 17px;
`


