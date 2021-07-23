import React from "react";
import styled, { css } from "styled-components";
import {
  complete,
  in_progress,
  true_white,
  not_started,
  pop_reg,
} from "../../utilities";
export const Lozenges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${pop_reg};
  font-size: 16px;
  height: 24px;
  width: 125px;
  line-height: 24px;
  border-radius: 3px;
  ${(props) =>
    props.complete &&
    css`
      background-color: ${complete};
      color: ${true_white};
    `}
  ${(props) =>
    props.progress &&
    css`
      background-color: ${in_progress};
      color: ${true_white};
    `}
    ${(props) =>
    props.notStarted &&
    css`
      color: ${not_started};
      width: 130px;
    `}
`;
