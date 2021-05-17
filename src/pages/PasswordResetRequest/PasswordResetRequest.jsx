import React, { Component } from 'react'
import * as U from '../../components/TuxComponents/UniversalComponents'
import * as L from '../../components/TuxComponents/LoginComponents'
import styled from 'styled-components';
import { Button280 } from '../TuxComponents/elements'


class PasswordResetRequest extends Component {
    state = { 

     }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    render() { 
        return ( 
            <U.FlexBox>
            <U.FlexBox>
                <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
                <L.LoginBox flexStart>
                    <U.Normal semiBold twenty4 margin50>Forgot your password?</U.Normal>
                    <U.Normal>No problem, we'll send you an email<br/> with a link to reset your password.</U.Normal>
                    <form>
                        <U.Normal>Username or email</U.Normal>
                        <SmallInput onChange={this.handleChange} type='text'></SmallInput>
                        <br></br>
                        <br></br>
                        <Button280 wide350
                            // onSubmit={this.handleSubmit}
                            >Reset Password</Button280>
                    </form>
                    {/* TODO: We need a link and a route set up down the road for a password reset link that emails 
                    a user the reset link upon form submission */}
                    
                </L.LoginBox>
                <U.FlexBox signUp>
                    <U.Normal>Need an Account?</U.Normal>
                    <LinkTo
                      to="/signup"
                    >Sign Up</LinkTo>
                </U.FlexBox>
            </U.FlexBox>
        </U.FlexBox>

         );
    }
}
 
export default PasswordResetRequest;

const LinkTo = styled(Link)`
  color: var(--link-text);
`;

const SmallInput = styled.input`
  margin: 0 10px;
  width: 343px;
  height: 50px;
  border: var(--input-border);
  border-radius: 5px;
  font-size: 24px;
`;