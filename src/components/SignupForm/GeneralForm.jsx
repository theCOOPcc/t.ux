import React from "react";
import styled, { css } from 'styled-components';
import { Label, SmallInput, LinkTo, LoginBox, TuxFlower, OuterBox, Normal } from './EmailForm';
import { PrimaryButton } from '../TuxComponents/elements';
import { backgroundGradient} from '../TuxComponents/utilities';


const GeneralForm = ({
  errors,
  values,
  handleChange,
  touched,
  handleSubmit,
}) => {
  const { userData } = values;
  return (
    <Main>
      <OuterBox>
        <TuxFlower src="/images/tuxFlower.png" alt="tux logo, a blue, yellow and red flower"></TuxFlower>
        <LoginBox wide flexStart>
          <Normal semiBold margin50 large>
            Create New Account
          </Normal>
          <Normal center>
            We're glad to have you onboard! Fill in
            <br />
            the information below to get started.
          </Normal>

          <OuterBox style={{margin:'40px'}}>
            <OuterBox column>
              <Label>
                First Name
              </Label>
              <SmallInput
                type="text"
                autoComplete="off"
                id="userData.firstName"
                value={userData.firstName}
                name="userData.firstName"
                onChange={handleChange}
              ></SmallInput>
            </OuterBox>
            <OuterBox column>
              <Label>
                Last Name
              </Label>
              <SmallInput
                type="text"
                autoComplete="off"
                id="userData.lastName"
                value={userData.lastName}
                name="userData.lastName"
                onChange={handleChange}
              ></SmallInput>
            </OuterBox>
          </OuterBox>

          <OuterBox style={{margin:'40px'}}>
            <OuterBox column>
              <Label>
                Password
              </Label>
              <SmallInput
                type="password"
                autoComplete="off"
                id="userData.password"
                value={userData.password}
                name="userData.password"
                onChange={handleChange}
              ></SmallInput>
            </OuterBox>
            <OuterBox column>
              <Label>
                Confirm Password
              </Label>
              <SmallInput
                disabled={userData.password ? false : true}
                type="password"
                autoComplete="off"
                id="userData.passwordConf"
                value={userData.passwordConf}
                name="userData.passwordConf"
                onChange={handleChange}
              ></SmallInput>
            </OuterBox>
          </OuterBox>
          {errors.password && <Normal red>{errors.password}</Normal>}
          {errors.passwordConf && <Normal red>{errors.passwordConf}</Normal>}
          {/* //TODO: Still need to conditionally enable or disable the button. */}
          <PrimaryButton
            disabled={
              userData.firstName.length > 0 && userData.lastName.length > 0 && userData.passwordConf
              ? false
              : true
            } 
            onClick={handleSubmit} 
            >
            Create Account
          </PrimaryButton>
        </LoginBox>
      </OuterBox>
      <OuterBox signUp>
        <Normal>Have an Account?&nbsp;</Normal>
        <LinkTo to="/login">Log In</LinkTo>
      </OuterBox>
    </Main>
  );
};

export default GeneralForm;

const Main = styled.main`
	background: ${backgroundGradient};
	background-blend-mode: normal, multiply;
	margin: 0 auto;
	max-width: 1440px;
`;

