import React from 'react'
import styled, { css } from "styled-components";


export const DefaultAlert = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(158, 232, 255, 0.2);
  border: 1px solid #9ee8ff;
  box-sizing: border-box;
  border-radius: 2px;
`
export const SuccessAlert = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(120, 192, 119, 0.2);
  border: 1px solid #9ee8ff;
  box-sizing: border-box;
  border-radius: 2px;
`
export const WarningAlert = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(255, 228, 92, 0.2);
  border: 1px solid #9ee8ff;
  box-sizing: border-box;
  border-radius: 2px;
`
export const ErrorAlert = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 20px;
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #9ee8ff;
  box-sizing: border-box;
  border-radius: 2px;
`