import styled, { css } from 'styled-components';
import { disable_btn, enable_btn, enable_hover, google_hover, disable_g_btn, g_focus } from '../utilities/Colors';
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

// export const Primary = styled.button`

// `;

// export const Secondary = styled.button`

// `;

export const GoogleG = styled.img`
  width: 35px;
  height: 35px;
  margin: 20px;
`;

export const GoogleBox = styled.button`
  width: 343px;
  height: 80px;
  border-radius: 5px;
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
  };
  &:active {
    background: linear-gradient(
      360deg,
      #f9f9f9 0%,
      rgba(255, 255, 255, 0) 100%
    );

    box-shadow: ${btn_active_shadow};
  }
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${g_focus};
      &:hover {
        background-color: ${g_focus};
      }
    `}
  // Diasbled
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
       background: linear-gradient(360deg, #F9F9F9 0%, rgba(255, 255, 255, 0) 100%);
    `}
`;

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

// Tylers 'Text Button'

export const TextBtn = styled.button`
/* positioning */

  position: absolute;
  border: none;
  background: none;
  left: 12%;
  right: 12%;
  top: 12.48%;
  bottom: 12.61%;
  width: 71px;
  height: 18px;
  

/* Fonts */
  font: Poppins;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  
/* Color */
  color: #222222;


  display: flex;
  align-items:center;
  text-align: center;
  justify-content:center;

  &:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }

  &:focus{
    outline: none;
    width: 71px;
    height: 18px;
    border: 1px solid rgba(60, 133, 130, 0.5);
  }
  &:active {
   text-align: justify;
    color: #323239;
  }
  &:disabled {
    color: #CCCCCC;
  }
`;

// Tylers 'Link Button'

export const LinkBtn = styled.a`
  position: static;
  width: 225px;
  height: 24px;
  left: 4px;
  top: 4px;
  font-family: Poppins;
  font-style:normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #518E90;
    &:hover {
     color: #A9CBCD;
     cursor: pointer;  
    }
    &:disabled {
      text-decoration-line: none;
      color: #888888;
    }
    &:focus {
      color: #A9CBCD;
    }
    &:active {
      color: rgba(5, 0, 255, 0.75);
    }
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

