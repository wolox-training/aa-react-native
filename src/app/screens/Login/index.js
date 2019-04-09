import React, { Component } from 'react';

import Login from './layout';

import { emailRegex } from '../../../constants/regex';
import { Home } from '../../../constants/routes';

class LoginContainer extends Component {
    
    state = { invalidEmail: false, email: '' , invalidPassword: false, password: '' };

    onChangeEmail = email => this.setState({email:email});

    onChangePassword = password => this.setState({password:password});

    validateEmail = () => {
        const { email } = this.state;
        this.setState({ invalidEmail: !emailRegex.test(email) });
    };

    validatePassword = () => {
        const { password } = this.state;
        this.setState({ invalidPassword: password.length < 8 });
    };

    loginOnPressHandler = () => {
        const { navigation } = this.props;
        navigation.navigate(Home);
    };

    render() {
        return (
            <Login 
                { ...this.state }
                validateEmail={this.validateEmail} 
                onChangeEmail={this.onChangeEmail}
                validatePassword={this.validatePassword}
                onChangePassword={this.onChangePassword}
                disableSubmit={!this.state.email.length || !this.state.password.length || this.state.password.length < 8 || this.state.invalidEmail || this.state.invalidPassword}
                onPress={this.loginOnPressHandler}
            />
        );
    }
}

export default LoginContainer;

