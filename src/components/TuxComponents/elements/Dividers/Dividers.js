import styled, { css } from 'styled-components';
import React from 'react';
import {dashed_border} from '../../utilities/Borders';
import { solid_divider_bg } from '../../utilities';


// Dotted Divider
export const DottedDivider = styled.hr`
  position: absolute;
  left: 0%;
  right: 0%;
  /* top: -nan%;
  bottom: -nan%; */
  width: 918px;
  border: ${dashed_border};
`;

export const SolidDivider = styled.hr`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 886px;
  height: 8px;
  background: ${solid_divider_bg};
`;

