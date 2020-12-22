import React, { Component } from 'react'
import * as U from '../../components/TuxComponents/UniversalComponents'
import * as L from '../../components/TuxComponents/LoginComponents'

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
                    <U.Normal semiBold forgot>Forgot your password?</U.Normal>
                    <U.Normal>No problem, we'll send you an email<br/> with a link to reset your password.</U.Normal>
                    <form>
                        <U.Normal>Username or email</U.Normal>
                        <U.SmallInput onChange={this.handleChange} type='text'></U.SmallInput>
                        <br></br>
                        <br></br>
                        <U.WideBtn greyed extraWide
                            // onSubmit={this.handleSubmit}
                            >Reset Password</U.WideBtn>
                    </form>
                    {/* TODO: We need a link and a route set up down the road for a password reset link that emails 
                    a user the reset link upon form submission */}
                    
                </L.LoginBox>
                <U.FlexBox signUp>
                    <U.Normal>Need an Account?</U.Normal>
                    <U.LinkTo
                      to="/signup"
                    >Sign Up</U.LinkTo>
                </U.FlexBox>
            </U.FlexBox>
        </U.FlexBox>

         );
    }
}
 
export default PasswordResetRequest;