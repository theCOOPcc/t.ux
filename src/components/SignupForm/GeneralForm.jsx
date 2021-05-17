import React from "react";
import * as U from "../TuxComponents/UniversalComponents";
import * as L from "../TuxComponents/LoginComponents";
import { Label, SmallInput, LinkTo } from './EmailForm';
import { Button280 } from '../TuxComponents/elements'


const GeneralForm = ({
  errors,
  values,
  handleChange,
  touched,
  handleSubmit,
}) => {
  const { userData } = values;
  return (
    <L.Main>
      {/* <U.FlexBox > */}
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png" alt="tux logo, a blue, yellow and red flower"></L.TuxFlower>
        <L.LoginBox wide flexStart>
          <U.Normal semiBold margin50 large>
            Create New Account
          </U.Normal>
          <U.Normal center>
            We're glad to have you onboard! Fill in
            <br />
            the information below to get started.
          </U.Normal>

          <U.FlexBox flexMargin>
            <U.FlexBox column>
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
            </U.FlexBox>
            <U.FlexBox column>
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
            </U.FlexBox>
          </U.FlexBox>

          <U.FlexBox marginTop>
            <U.FlexBox column>
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
            </U.FlexBox>
            <U.FlexBox column>
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
            </U.FlexBox>
          </U.FlexBox>
          {errors.password && <U.Normal red>{errors.password}</U.Normal>}
          {errors.passwordConf && <U.Normal red>{errors.passwordConf}</U.Normal>}
          {/* //TODO: Still need to conditionally enable or disable the button. */}
          <Button280 wide350
            disabled={
              userData.firstName.length > 0 && userData.lastName.length > 0 && userData.passwordConf
              ? false
              : true
            } 
            onClick={handleSubmit} 
            >
            Create Account
          </Button280>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox signUp>
        <U.Normal>Have an Account?&nbsp;</U.Normal>
        <LinkTo to="/login">Log In</LinkTo>
      </U.FlexBox>
    </L.Main>
  );
};

export default GeneralForm;
