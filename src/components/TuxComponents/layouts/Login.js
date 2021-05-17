import React, { Component } from 'react';
import authService from '../../../services/authService';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import { Flex, common_shadow, pop_reg, pop_thick } from '../utilities';
import { SmallInput, Button280 } from '../elements';
// styled components for this Login comoponent are at the bottom

class Login extends Component {
    state = { 
        email: '',
        pw: '',
    };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
    handleSubmit = async (e) => {
        const { history, handleSignupOrLogin } = this.props;
        e.preventDefault();
        try {
          await authService.login(this.state);
          // Let <App> know a user has signed up!
          handleSignupOrLogin();
          history.push('/');
        } catch (err) {
          // Use a modal or toast in your apps instead of alert
          alert('Invalid Credentials!');
        }
    };

    render() { 
        const { email, pw } = this.state;
        return ( 
            <Main>
                <OutsideFlex>
                    <TuxFlower src="/images/tuxFlower.png" alt="tux logo, a blue, yellow and red flower"></TuxFlower>
                    <LoginBox>
                        <GoogleBox
                        // this is the "href" go to google
                        href="http://localhost:3001/api/auth/google"
                        // href="https://tux-staging.herokuapp.com/api/auth/google"
                        >
                            <GoogleG src="/images/GoogleG.png" alt="The mutlicolor Google G"/>
                            <SignIn>Sign in with Google</SignIn>
                        </GoogleBox>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <Text>or:</Text>
                        <Label for="email">Username or Email</Label>
                        <SmallInput
                            type="text"
                            autoComplete="off"
                            id="email"
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                        ></SmallInput>
                        <br/><br/>
                        <Label for="password">Password</Label>
                        <SmallInput
                            type="password"
                            autoComplete="off"
                            id="password"
                            value={pw}
                            name="pw"
                            onChange={this.handleChange}
                        ></SmallInput>
                        {/* <OutsideFlex> */}
                            {/* These are on hold until next sprint */}
                            {/* TODO: Make ability to stay logged in */}
                            {/* TODO: Create password reset */}
                            {/* <U. negMargin>
                            <U.Checkbox></U.Checkbox>
                            <U.Normal>Stay signed in</U.Normal>
                            </U.> 
                            <LinkTo
                                to="/passwordresetrequest"
                            >Forgot Password?</LinkTo>*/}
                        {/* </OutsideFlex> */}
                        <Button280 wide350
                            disabled={
                                email.length > 0 && pw.length > 0
                                ? false
                                : true}
                        >Log In</Button280>
                    </form>
                    </LoginBox>
                </OutsideFlex>
                <OutsideFlex signUp>
                    <Text>Need an Account?&nbsp;</Text>
                    <LinkTo
                        to="/signup"
                    >Sign Up</LinkTo>
                </OutsideFlex>
            </Main>
        );
    }
}
 
export default Login;

const Main = styled.main`
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	margin: 0;
    height: 100vh;
	/* max-width: 1440px; */
`;

const OutsideFlex = styled.article`
    ${Flex({jc:'center',ai:'center'})};

    ${(props) =>
    props.signUp && css`
      margin-top: 30px;
      padding-left: 550px;
    `}
`;

const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
    position: absolute;
    top: 150px;
	border-radius: 50%;
`;

const LoginBox = styled.div`
    ${Flex({fd:'column', ai:'center'})};
    width: 425px;
    height: 510px;
    background-color: var(--true-white);
    box-shadow: ${common_shadow};
    border-radius: 10px;
    /* margin-top: 90px; */
    padding: 50px 0 0;
    // check figma file to refine this
`;

const GoogleG = styled.img`
    width: 35px;
    height: 35px;
    margin: 20px;
`;

const GoogleBox = styled.a`
    width: 343px;
    height: 80px;
    border-radius: 5px;
    background: linear-gradient(360deg, #F9F9F9 0%, rgba(255, 255, 255, 0) 100%);
    ${Flex({jc:'center',ai:'center'})};
    margin-bottom: 10px;
    box-shadow: ${common_shadow};
    text-decoration: none;
    /* margin-top: 60px; */
`;

const SignIn = styled.p`
    font: 700 20px 'Roboto', sans-serif;
    /* line-height: 23.44px; */
    color: rgba(0,0,0,.54);
    margin-top: 15px;
`;

const Text = styled.p`
    font: ${pop_reg};
    margin: 0;
`;

const Label = styled.label`
    font: ${pop_thick};

`;

const LinkTo = styled(Link)`
  color: var(--link-text);
`;