import React, { Component } from 'react';
import authService from '../../../services/authService';


class login extends Component {
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

        );
    }
}
 
export default login;

const Main = styled.main`
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
	margin: 0 auto;
	max-width: 1440px;
`;

const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
    position: absolute;
    top: 100px;
	border-radius: 50%;
`;

const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 425px;
    height: 510px;
    background-color: var(--true-white);
    box-shadow: ${common_shadow};
    border-radius: 10px;
    margin-top: 200px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: ${common_shadow};
    text-decoration: none;
`;