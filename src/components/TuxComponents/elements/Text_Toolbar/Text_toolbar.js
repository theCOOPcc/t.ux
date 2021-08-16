import React from "react";
import styled, { css } from "styled-components";

export const TextToolBar = () => {
  return (
    <>
      <BarContainer>
        <B><HB></HB></B>
        <I></I>
        <Linkicon></Linkicon>
        <BrokenLink></BrokenLink>
        <MobileNav></MobileNav>
      </BarContainer>
    </>
  );
};

export const BarContainer = styled.div`
  height: 50px;
  width: 240px;
  border-radius: 5px;
  background-color: #666666;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const B = styled.img`
  height: 16px;
  width: 12px;


  ${(props) =>
    props.hover &&
    css`
   padding: 3px 5px;
    border: 1px solid #f1f2eb;
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
 
`;
export const HB = styled.img`
height: 16px;
width: 12px;
`

export const I = styled.img`
  height: 16px;
  width: 12px;
`;
export const Linkicon = styled.img`
heightL 17.76px;
width: 19.03px;

`;

export const BrokenLink = styled.img`
heightL 21px;
width: 21px;

`;
export const MobileNav = styled.img`
heightL 15px;
width: 18px;

`;
