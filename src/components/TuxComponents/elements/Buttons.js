import styled, { css } from 'styled-components';
import React, { useState } from 'react'
import { primary_default, disable_btn, enable_btn, enable_hover, google_hover, disable_g_btn, g_focus, primary_text, primary_hover, pressed_btn, secondary_default, secondary_hover, g_focus_box, tux_grey, tux_red } from '../utilities/Colors';
import {
  btn_active_shadow,
  input_border,
  pop_thick,
  pop_bolder,
  default_depressed,
  default_focus,
  common_shadow,
  FlexCenter,
} from "../utilities";

// Primary Button
export const PrimaryButton = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${primary_default};
  padding: 12px 0;
  margin: 17px 8px;
  color: ${primary_text};
  font: 700 20px "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background: ${primary_hover};
  }
  &:active {
    background: ${pressed_btn};
    color: white;
  }
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${primary_default};
      &:hover {
        background-color: ${primary_hover};
      }
  `}
  // Hover
  ${(props) =>
    props.hover &&
    css`
      background-color: ${primary_hover};
      &:hover {
        background-color: ${primary_hover};
      }
  `}
  // Disabled
    ${(props) =>
    props.disabled &&
    css`
      background-color: ${disable_btn};
      &:hover {
        background-color: ${disable_btn};
      }
    `}
  // Depressed
    ${(props) =>
    props.depressed &&
    css`
      background-color: ${pressed_btn};
      color: white;
    `}
    // Large
    ${(props) =>
    props.large &&
    css`
      width: 343px;
    `}
    // Small
    ${(props) =>
    props.small &&
    css`
      width: 154px;
    `}
`;

// Secondary Button
export const SecondaryButton = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${secondary_default};
  padding: 12px 0;
  margin: 17px 8px;
  color: white;
  font: 700 20px "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background: ${secondary_hover};
  }
  &:active {
    background: ${pressed_btn};
  }
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${secondary_default};
      &:hover {
        background-color: ${secondary_hover};
      }
  `}
    // Hover
    ${(props) =>
    props.hover &&
    css`
      background-color: ${secondary_hover};
      &:hover {
        background-color: ${secondary_hover};
      }
  `}
  // Diasbled
    ${(props) =>
    props.disabled &&
    css`
      background-color: ${disable_btn};
      &:hover {
        background-color: ${disable_btn};
      }
    `}
  // Depressed
    ${(props) =>
    props.depressed &&
    css`
      background-color: ${pressed_btn};
    `}
    // Large
    ${(props) =>
    props.large &&
    css`
      width: 343px;
    `}
    // Small
    ${(props) =>
    props.small &&
    css`
      width: 154px;
    `}
`;

export const GoogleG = styled.img`
  width: 35px;
  height: 35px;
  margin: 20px;
`;

export const GoogleBox = styled.button`
  width: 343px;
  height: 80px;
  border-radius: 5px;
  border: none;
  background: #ffffff;
  ${FlexCenter}
  margin-bottom: 10px;
  box-shadow: ${common_shadow};
  text-decoration: none;
  font: 700 20px "Roboto", sans-serif;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 15px;
  &:hover {
    background: ${google_hover};
  }
  &:active {
    background: linear-gradient(
      360deg,
      #f9f9f9 0%,
      rgba(255, 255, 255, 0) 100%
    );

    box-shadow: ${btn_active_shadow};
  }
  ${(props) =>
    props.hover &&
    css`
      background-color: ${google_hover};
      color: black;
      &:hover {
        background-color: ${google_hover};
      }
    `}
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${g_focus};
      box-shadow: 0 0 0 6px ${g_focus_box};
      &:hover {
        background-color: ${g_focus};
      }
    `}
  // Disabled
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${disable_g_btn};
      &:hover {
        background-color: ${disable_g_btn};
      }
    `}
  // Depressed
    ${(props) =>
    props.depressed &&
    css`
      background: linear-gradient(
        360deg,
        #f9f9f9 0%,
        rgba(255, 255, 255, 0) 100%
      );
    `}
`;

export const CopyLinkDiv = styled.div`
	width: 408.76px;
	height: 90px;
	display: flex;
	flex-direction: column;
	${(props) =>
		props.depressed &&
		css`
			width: 390px;
		`}
`;

export const CopyLinkImg = styled.img`
	width: 28px;
	height: 28.64px;
	margin: 13px;
`;

export const CopyLinkP = styled.p`
	color: ${tux_red};
	font: 600 18px "Poppins", sans-serif;
	line-height: 27px;
	text-align: center;
  margin: 6px;
`;

export const CopyLinkBtn = styled.button`
	width: 100%;
	height: 54px;
	border: none;
	border-radius: 5px;
	background: #ffffff;
	padding: 12px 0;
	margin: 17px 8px;
	${FlexCenter};
	margin-bottom: 10px;
	box-shadow: ${common_shadow};
	color: ${tux_grey};
	font: 700 18px "Poppins", sans-serif;
	cursor: pointer;
	${(props) =>
		props.depressed &&
		css`
			width: 390px;
		`}
`;

export const CopyLinkButton = ({...args}) => {
	const [clicked, setClicked] = useState(false);

	return (
		<CopyLinkDiv {...args}>
			<CopyLinkBtn
				onClick={() => {
					setClicked(!clicked);
				}}>
				Copy Link 
        <CopyLinkImg src="/images/CopyLink.png" />
			</CopyLinkBtn>
			{clicked ? <CopyLinkP>link copied to clipboard</CopyLinkP> : <p></p>}
		</CopyLinkDiv>
	);
}; 

//KARENS BUTTON
export const Button = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${enable_btn};
  padding: 12px 0;
  margin: 17px 8px;
  color: white;
  font: 700 20px "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background: ${enable_hover};
  }
  &:active {
    background: ${default_depressed};
    box-shadow: ${btn_active_shadow};
  }
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${default_focus};
      &:hover {
        background-color: ${default_focus};
      }
    `}
  // Diasbled
    ${(props) =>
    props.disabled &&
    css`
      background-color: ${disable_btn};
      &:hover {
        background-color: ${disable_btn};
      }
    `}
    // Depressed
    ${(props) =>
    props.depressed &&
    css`
      background-color: ${default_depressed};
    `}
    // Large
    ${(props) =>
    props.large &&
    css`
      width: 350px;
    `}
    // Small
    ${(props) =>
    props.small &&
    css`
      width: 154px;
    `}
`;

// This was the "WideBtn", 280px
export const Button280 = styled.button`
    border: none;
    border-radius: 5px;
    width: 280px;
    padding: 12px 0;
    margin: 17px 8px;
    font: ${pop_bolder};
    background: ${enable_btn};
    color: white;
    cursor: pointer;

        &:hover {
            background: ${enable_hover};
        }
        &:active {
            box-shadow: ${btn_active_shadow};
        }

    /* Disabled */
    ${props => props.disabled && css`
		background-color: ${disable_btn};
		border: ${input_border};
	
		&:hover {
			background-color: ${disable_btn};
		}
    `}    

    /* Extra Wide 350px*/
    ${props => props.wide350 && css`
        width: 350px;
    `}

    ${props => props.login && css`
        width: 343px;
    `}

    ${props => props.medium && css`
        width: 224px;
        font: var(--pop-thick);
        font-size: 14px;
        margin: 
    `}
`;

export const Button350 = styled(Button280)`
    width: 350px;

    ${props => props.auto && css`
        margin-left: auto;
    `}
`;

export const LoginBtn = styled(Button280)`
    width: 343px;
`;

export const MedBtn = styled(Button280)`
    width: 224px;
    font: ${pop_thick};
    font-size: 14px;
`;

// Disabled button extention
export const DisabledBtn = styled(Button280)`
    background-color: ${disable_btn};
		border: ${input_border};
	
		&:hover {
			background-color: ${disable_btn};
		}
`;

