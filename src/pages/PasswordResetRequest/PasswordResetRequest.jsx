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
                    <L.Normal semiBold forgot>Forgot your password?</L.Normal>
                    <U.Poppins>No problem, we'll send you an email<br/> with a link to reset your password.</U.Poppins>
                    <form>
                        <U.Poppins>Username or email</U.Poppins>
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
                    <L.Normal>Need an Account?</L.Normal>
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