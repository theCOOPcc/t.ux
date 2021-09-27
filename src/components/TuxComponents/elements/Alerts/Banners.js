import React from 'react'
import styled from 'styled-components'

import {
  alert_default,
  alert_warning,
  alert_error_background,
  tux_red
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
  border: 1px solid ${alert_default};
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 50px;
  background: ${alert_default};
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
  background: ${alert_warning};
  border: 1px solid ${alert_warning};
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
  border: 1px solid ${tux_red};
  box-sizing: border-box;
  border-radius: 2px;
`