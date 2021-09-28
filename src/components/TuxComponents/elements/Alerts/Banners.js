import React from 'react'
import styled from 'styled-components'

import {
  alert_default_border,
  alert_default_bg,
  alert_warning_border,
  alert_warning_background,
  alert_error_background,
  alert_error_border
} from "../../utilities";

export const AlertIcon = styled.img`
position: absolute;
left: 20px;
width: 20px;
`
export const DefaultAlert = styled.button`
  /* position: fixed; */
  display: flex;
  /* overflow: hidden; */
  border: 1px solid ${alert_default_border};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 50px;
  background: ${alert_default_bg};
  box-sizing: border-box;
  border-radius: 2px;
`

export const WarningAlert = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 50px;
  background: ${alert_warning_background};
  border: 1px solid ${alert_warning_border};
  box-sizing: border-box;
  border-radius: 2px;
`
export const ErrorAlert = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 50px;
  background: ${alert_error_background};
  border: 1px solid ${alert_error_border};
  box-sizing: border-box;
  border-radius: 2px;
`