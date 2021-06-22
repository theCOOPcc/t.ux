import React from 'react'
import styled from 'styled-components'

export const AlertIcon = styled.img`
position: absolute;
left: 20px;
width: 20px;
`
export const DefaultAlert = styled.button`
  /* position: fixed; */
  display: flex;
  /* overflow: hidden; */
  border: 1px solid #9EE8FF;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 50px;
  background: rgba(158, 232, 255, 0.2);
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
  background: rgba(255, 228, 92, 0.2);
  border: 1px solid #FFE45C;
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
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #E6211E;
  box-sizing: border-box;
  border-radius: 2px;
`