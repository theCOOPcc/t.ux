import React from 'react';
import * as U from '../TuxComponents/UniversalComponents';
import * as L from '../TuxComponents/LoginComponents';

const GeneralForm = ({ errors, values, handleChange, touched }) => {
  return (
    <main>
      <U.FlexBox relative>
        <U.FlexBox relative>
          <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
          <L.LoginBox wide flexStart>
            <U.Normal semiBold margin50 large>
              Create New Account
            </U.Normal>
            <U.Normal>
              We're glad to have you onboard! Fill in
              <br />
              the information below to get started.
            </U.Normal>

            <U.FlexBox flexMargin>
              <U.FlexBox column>
                <U.Normal semiBold alignLeft>
                  First Name
                </U.Normal>
                <U.SmallInput
                  type="text"
                  autoComplete="off"
                  id="firstName"
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                ></U.SmallInput>
              </U.FlexBox>
              <U.FlexBox column>
                <U.Normal semiBold alignLeft>
                  Last Name
                </U.Normal>
                <U.SmallInput
                  type="text"
                  autoComplete="off"
                  id="lastName"
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                ></U.SmallInput>
              </U.FlexBox>
            </U.FlexBox>

            <U.FlexBox marginTop>
              <U.FlexBox column>
                <U.Normal semiBold alignLeft>
                  Password
                </U.Normal>
                <U.SmallInput
                  type="text"
                  autoComplete="off"
                  id="password"
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                ></U.SmallInput>
              </U.FlexBox>
              <U.FlexBox column>
                <U.Normal semiBold alignLeft>
                  Confirm Password
                </U.Normal>
                <U.SmallInput
                  disabled={values.password ? false : true}
                  type="password"
                  autoComplete="off"
                  id="passwordConf"
                  value={values.passwordConf}
                  name="passwordConf"
                  onChange={handleChange}
                ></U.SmallInput>
              </U.FlexBox>
            </U.FlexBox>
            {errors.password  && <div>{errors.password}</div>}
            {errors.passwordConf && <div>{errors.passwordConf}</div>}
            <U.WideBtn disabled>Create Account</U.WideBtn>
          </L.LoginBox>
        </U.FlexBox>
        <U.Normal>Need an Account?</U.Normal>
        <U.LinkTo to="/signup">Sign Up</U.LinkTo>
      </U.FlexBox>
    </main>
  );
};

export default GeneralForm;
