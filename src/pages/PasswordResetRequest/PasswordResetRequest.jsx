import React, { Component } from 'react'

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
            <React.Fragment>
                <h1>TUX</h1>
                <h3>Forgot Password?</h3>
                <h5>Don't worry we'll send you an email with a link to reset your password</h5>
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
                <h5>Need an Account? <span><a href='/signup'>Sign Up</a></span></h5>
                {/* We need a link and a route set up down the road for a password reset link that emails 
                a user the reset link upon form submission */}
            </React.Fragment>
         );
    }
}
 
export default PasswordResetRequest;