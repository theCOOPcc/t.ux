import React from "react";
import styled, { css } from "styled-components";
import { success } from "../../utilities/Colors";

export const ToggleWrapper = styled.div`
  position: relative;
`;
export const ToggleLabel = styled.label`
  position: absolute;
  left: 0%;
  right: 15.49%;
  top: 0%;
  bottom: 0%;
  background: #c4c4c4;
  border-radius: 38px;
  width: 60px;
  height: 25px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    top: 4px;
    left: 7px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
  }
`;

export const Toggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 38px;
  width: 60px;
  height: 25px;
  &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      display: block;
      position: absolute;
      left: 35%;
      right: 22.54%;
      top: 3%;
      bottom: 3%;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      margin-left: 21px;
      transition: 0.2s;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
