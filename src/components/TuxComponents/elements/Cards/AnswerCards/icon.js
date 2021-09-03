import React from 'react';
import styled, { css } from "styled-components";

export const Icon = ({ answer, display }) => {
  if (display === "none") {
    return answer;
  }

  if (display === "correct") {
    return "Correct";
  }

  if (display === "incorrect") {
    return "Incorrect";
  }

  return null;
};

export const IconIMG = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: absolute;
  background: #fff;
  left: -15px;
  top: -15px;
  z-index: 20;
`;