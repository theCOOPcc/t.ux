import React from "react";
import styled, { css } from "styled-components";

export const TextToolBar = () => {
  return (
    <>
      <BarContainer>
        <B>
          <HB></HB>
        </B>
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
      padding: 4px 6px;
      border: 1px solid #f1f2eb;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
   
  ${(props) =>
    props.active &&
    css`
      padding: 4px 6px;
      border: 1px solid #78D6DA;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
`;
export const HB = styled.img`
  height: 16px;
  width: 12px;

  
`;

export const I = styled(B)`
  height: 16px;
  width: 12px;

 
`;
export const Linkicon = styled.img`
height:16px;
width: 19.03px;

${(props) =>
  props.hover &&
  css`
    padding: 4px 3px;
    border: 1px solid #f1f2eb;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `}
  ${(props) =>
    props.active &&
    css`
      padding: 4px 3px;
      border: 1px solid #78D6DA;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
`;

export const BrokenLink = styled(Linkicon)`
height:16px;
width: 19.03px; 



`;
export const MobileNav = styled(Linkicon)`
height: 16px;
width: 19.03px;



`;

//