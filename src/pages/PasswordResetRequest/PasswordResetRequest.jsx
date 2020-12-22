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
                    <L.Normal five00 forgot>Forgot your password?</L.Normal>
                    <h5>No problem, we'll send you an email<br/> with a link to reset your password.</h5>
                    <form>
                        <label>Your email or username</label>
                        <br></br>
                        <input onChange={this.handleChange} type='text'></input>
                        <br></br>
                        <br></br>
                        <button 
                            // onSubmit={this.handleSubmit}
                            >Reset Password</button>
                    </form>
                    {/* We need a link and a route set up down the road for a password reset link that emails 
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