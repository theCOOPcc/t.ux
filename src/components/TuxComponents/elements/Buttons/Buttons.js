import styled, { css } from "styled-components";
import React, { useState } from "react";
import {
  tux_blue,
  disable_btn,
  enable_btn,
  enable_hover,
  google_hover,
  disable_g_btn,
  primary_text,
  primary_hover,
  pressed_btn,
  secondary_default,
  secondary_hover,
  g_focus_box,
  small_nav_default,
  small_nav_hover,
  small_nav_pressed,
  small_nav_disabled,
  tux_grey,
  tux_red,
  true_white,
} from "../../utilities";

import {
  pop_semiBold,
  Flex,
  solid_border,
  present_text,
  future_text,
  text_black,
  btn_active_shadow,
  input_border,
  pop_thick,
  pop_bolder,
  default_depressed,
  default_focus,
  common_shadow,
  FlexCenter,
} from "../../utilities";

// Primary Button
export const PrimaryButton = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${tux_blue};
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
      background-color: ${tux_blue};
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

//OAuth Button
export const GoogleBox = styled.a`
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
      background-color: ${true_white};
      box-shadow: 0 0 0 6px ${g_focus_box};
      &:hover {
        background-color: ${true_white};
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

export const CopyLinkButton = ({ ...args }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <CopyLinkDiv {...args}>
      <CopyLinkBtn
        className="copyLinkBtnTest"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Copy Link
        <CopyLinkImg
          className="copyLinkBtnTestImg"
          src="/images/CopyLink.png"
        />
      </CopyLinkBtn>
      {clicked ? <CopyLinkP>link copied to clipboard</CopyLinkP> : <p></p>}
    </CopyLinkDiv>
  );
};

//Button Nav Small

export const Arrow = styled.img`
  width: 7.52px;
  height: 7.96px;
`;

export const BtnNavSml = styled.button`
  ${FlexCenter}
  width: 22px;
  color: white;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: ${small_nav_default};
  font: 700 20px "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    background: ${small_nav_hover};
  }
  &:active {
    background: ${pressed_btn};
    color: white;
  }
  // Focus
  ${(props) =>
    props.focus &&
    css`
      background-color: ${small_nav_default};
      box-shadow: 0 0 0 4px ${g_focus_box};
      &:hover {
        background-color: ${small_nav_hover};
      }
    `}
  // Hover
  ${(props) =>
    props.hover &&
    css`
      background-color: ${small_nav_hover};
      &:hover {
        background-color: ${small_nav_hover};
      }
    `}
  // Diasbled
    ${(props) =>
    props.disabled &&
    css`
      background-color: ${small_nav_disabled};
      &:hover {
        background-color: ${small_nav_disabled};
      }
    `}
  // Depressed
    ${(props) =>
    props.depressed &&
    css`
      background-color: ${small_nav_pressed};
      color: white;
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
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${disable_btn};
      border: ${input_border};

      &:hover {
        background-color: ${disable_btn};
      }
    `}

  /* Extra Wide 350px*/
    ${(props) =>
    props.wide350 &&
    css`
      width: 350px;
    `}

    ${(props) =>
    props.login &&
    css`
      width: 343px;
    `}

    ${(props) =>
    props.medium &&
    css`
      width: 224px;
      font: var(--pop-thick);
      font-size: 14px;
      margin: ;
    `}
`;

export const Button350 = styled(Button280)`
  width: 350px;

  ${(props) =>
    props.auto &&
    css`
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
  align-items: center;
  text-align: center;
  justify-content: center;

  ${(props) =>
    props.hover &&
    css`
      text-decoration-line: underline;
      cursor: pointer;
    `}
  ${(props) =>
    props.focus &&
    css`
      outline: none;
      width: 71px;
      height: 18px;
      border: 1px solid rgba(60, 133, 130, 0.5);
    `}
  ${(props) =>
    props.depressed &&
    css`
      text-align: justify;
      color: #323239;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #cccccc;
    `}
`;

export const LinkBtn = styled.a`
  position: static;
  width: 225px;
  height: 24px;
  left: 4px;
  top: 4px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #518e90;
  ${(props) =>
    props.hover &&
    css`
      color: #A9CBCD
      cursor: pointer;
      `}
  ${(props) =>
    props.disabled &&
    css`
      text-decoration-line: none;
      color: #888888;
    `}
    ${(props) =>
    props.focus &&
    css`
      color: #a9cbcd;
    `}
    ${(props) =>
    props.depressed &&
    css`
      color: rgba(5, 0, 255, 0.75);
    `}
`;

export const HeadingIntro = styled.div`
  color: ${future_text};
  border: none;
  border-bottom: ${solid_border};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  max-width: 230.88px;
  margin: 1rem 0 0 1rem;
  padding: 0 0 0.5rem 0.5rem;

  ${(props) =>
    props.past &&
    css`
      color: ${text_black};
      font-weight: 600;
    `}

  ${(props) =>
    props.present &&
    css`
      color: ${present_text};
      font-weight: 700;
    `}
`;

export const NUmHeadContainer = styled.div`
  border-bottom: ${solid_border};
  padding: 0 0 0.6rem 0.5rem;

  ${(props) =>
    props.past &&
    css`
      color: ${text_black};
      font-weight: 600;
    `}

  ${(props) =>
    props.present &&
    css`
      color: ${present_text};
      font-weight: 700;
    `}
`;

export const SideBarAllText = styled(HeadingIntro)`
  border-bottom: 0;
  margin: 1rem 0 0 0.5rem;
  max-width: 238.88px;
`;

export const SubText = styled.div`
  color: #999999;
  border-bottom: ${solid_border};
  font-weight: 500;
  fine-height: 24px;
  font-size: 14px;
  margin-left: 2rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 191px;
  ${(props) =>
    props.past &&
    css`
      color: ${text_black};
    `}

  ${(props) =>
    props.present &&
    css`
      color: ${present_text};
      background-color: rgba(243, 120, 6, 0.1);
      font-weight: 600;
      margin-left: 24px;
    `}
`;

export const Dot = styled.div`
  ${(props) =>
    props.present &&
    css`
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: #f37806;
    `}
`;

export const DotContainer = styled.div`
  padding-left: 1rem;
  ${Flex({ ai: "center", jc: "center" })}
`;

export const SubDot = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubContainer = styled.div`
  width: 238.88px;
  ${Flex({ ai: "center", js: "center" })}
`;
