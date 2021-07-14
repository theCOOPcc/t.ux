import React from 'react';
import {Link} from 'react-router-dom';
import * as U from '../TuxComponents/UniversalComponents';
import * as L from '../TuxComponents/LoginComponents';
import styled, { css } from 'styled-components';
import { PrimaryButton } from '../TuxComponents/elements'

const EmailForm = ({ errors, values, handleChange, touched }) => {
  const { userData } = values
  return (
    <L.Main>
      <U.FlexBox>
        <U.FlexBox realtive>
          <L.TuxFlower src="/images/TuxFlower.svg" alt="tux logo, a blue, yellow and red flower"></L.TuxFlower>
          <L.LoginBox flexStart>
            <Heading1 margin50>Enter an Email</Heading1>
            <U.Normal setup>
              We'll use this email to set up your account.
            </U.Normal>
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
          </L.LoginBox>
        </U.FlexBox>
      </U.FlexBox>
      <U.FlexBox login>
        <U.Normal alignRight>Have an Account?&nbsp;</U.Normal>
        <LinkTo to="/login">Log In</LinkTo>
      </U.FlexBox>
    </L.Main>
  );
};

export default EmailForm;

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