import React from 'react';
import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components';
import { PrimaryButton } from '../TuxComponents/elements';
import { FlexCenter, common_shadow } from '../TuxComponents/utilities';


const EmailForm = ({ errors, values, handleChange, touched }) => {
  const { userData } = values
  return (
    <Main>
      <OuterBox>
        <OuterBox realtive>
          <TuxFlower src="/images/TuxFlower.svg" alt="tux logo, a blue, yellow and red flower"></TuxFlower>
          <LoginBox flexStart>
            <Heading1 margin50>Enter an Email</Heading1>
            <Normal>
              We'll use this email to set up your account.
            </Normal>
            <Label>Email Address</Label>
            <SmallInput
              type="text"
              autoComplete="off"
              id="userData.email"
              value={userData.email}
              name="userData.email"
              onChange={handleChange}
              placeholder={userData.email}
            ></SmallInput>
            {errors.email && <div>{errors.email}</div>}

            <PrimaryButton
              disabled={
                !errors.email && userData.email && userData.email.length > 0
                  ? false
                  : true
              }
              id="continue"
              name="continue"
              value={values.continue}
              onClick={handleChange}
            >
              Continue
            </PrimaryButton>
          </LoginBox>
        </OuterBox>
      </OuterBox>
      <OuterBox login>
        <Normal alignRight>Have an Account?&nbsp;</Normal>
        <LinkTo to="/login">Log In</LinkTo>
      </OuterBox>
    </Main>
  );
};

export default EmailForm;

const Main = styled.main`
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	margin: 0 auto;
	max-width: 1440px;
`;

export const OuterBox = styled.div`
  ${FlexCenter};
  ${props => props.relative && css`
  position: relative;
  `}
  ${props => props.column && css`
  flex-direction: column;
  `}
  ${(props) =>
    props.signUp &&
    css`
      margin-top: 730px;
      padding-left: 550px;
    `}
    ${(props) =>
    props.login &&
    css`
      margin-top: 625px;
      padding-left: 160px;
    `}
`;


export const Label = styled.label`
  font: var(--pop-reg);
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
  text-align: left;
`;

export const SmallInput = styled.input`
  margin: 0 10px;
  width: 343px;
  height: 50px;
  border: var(--input-border);
  border-radius: 5px;
  font-size: 24px;

  ${(props) =>
    props.marginTop &&
    css`
      margin: 98px 10px 88px 0;
    `}
`;

export const LinkTo = styled(Link)`
  color: var(--link-text);

  ${(props) => props.noDecor && css `
    list-style: none;

  `}
`;

const Heading1 = styled.h1`
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  margin-top: 50px;
`;

export const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
    position: absolute;
    top: 100px;
	border-radius: 50%;
    
    ${props => props.center && css`
        left: 100px;
    `}
    ${props => props.invite && css`
        top: 160px;
    `}
`;

export const LoginBox = styled.div`
    ${FlexCenter({dir:'column'})};
    width: 425px;
    height: 510px;
    background-color: var(--true-white);
    box-shadow: ${common_shadow};
    border-radius: 10px;
    margin-top: 200px;
    /* clip-path: circle(25% at 50% 0); */

    ${props => props.wide && css`
      width: 785px;
      height: 625px;
    `}

    ${props => props.flexStart && css`
      justify-content: flex-start;
    `}
    
    ${props => props.signup && css`
        position: absolute;
        top: 150px;
    `}

    ${props => props.general && css`
        margin-top: 120px;
    `}
    ${props => props.invite && css`
        width: 515px;
        height: 585px;
        margin-top: 120px;
    `}
`;

export const Normal = styled.p`
  font: var(--pop-reg);
  line-height: 20px;
  ${(props) =>
    props.setup &&
    css`
      margin-bottom: 50px;
    `}
    ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  `;