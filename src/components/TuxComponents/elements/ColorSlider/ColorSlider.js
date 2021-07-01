import React, { useState } from "react";
import styled, { css } from "styled-components";


export const SliderWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
export const LuminositySlider = styled.input`
  width: 713px;
  height: 20px;
  border-radius: 13px;
  position: relative;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 0%;
  border: 2px solid #f6f6f6;
  font-weight: 700;
  
  /* Border Drop Image */

  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ColorPicker = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 13px;
  border: none;
  position: relative;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 0%;
  border: 2px solid #f6f6f6;
  /* Border Drop Image */
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
`;
