import React from 'react';
import * as U from '../TuxComponents/UniversalComponents';
import * as L from '../TuxComponents/LoginComponents';
import styled, { css } from 'styled-components';

const EmailForm = ({ errors, values, handleChange, touched }) => {
  const { userData } = values
  return (
    <L.Main>
      <U.FlexBox>
        <U.FlexBox realtive>
          <L.TuxFlower src="/images/TuxFlower.svg" alt="tux logo, a blue, yellow and red flower"></L.TuxFlower>
          <L.LoginBox flexStart>
            <U.Heading1 margin50>Enter an Email</U.Heading1>
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

            <U.WideBtn
              extraWide
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
            </U.WideBtn>
          </L.LoginBox>
        </U.FlexBox>
      </U.FlexBox>
      <U.FlexBox login>
        <U.Normal alignRight>Have an Account?&nbsp;</U.Normal>
        <U.LinkTo to="/login">Log In</U.LinkTo>
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