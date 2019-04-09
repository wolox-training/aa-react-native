import React, { Component } from 'react';

import Login from './layout';

import { emailRegex } from '../../../constants/regex';

class LoginContainer extends Component {
    
    state = { invalidEmail: false, email: '' , invalidPassword: false, password: '' };

    onChangeEmail = email => this.setState({email:email});

    onChangePassword = password => this.setState({password:password});

    validateEmail = () => {
        if(emailRegex.test(this.state.email)) {
            this.setState({invalidEmail: false});
        } else {
            this.setState({invalidEmail: true});
        }
    };

    validatePassword = () => {
        if(this.state.password.length >= 8) {
            this.setState({invalidPassword: false});
        } else {
            this.setState({invalidPassword: true});
        }
    };


    render() {
        return (
            <Login 
                { ...this.state }
                validateEmail={this.validateEmail} 
                onChangeEmail={this.onChangeEmail}
                validatePassword={this.validatePassword}
                onChangePassword={this.onChangePassword}
            />
        );
    }
}

export default LoginContainer;

