import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './layout';

import AuthActions from '../../../redux/auth/actions';
import { emailRegex } from '../../../constants/regex';
import { Home } from '../../../constants/routes';
class LoginContainer extends Component {
    
    state = { invalidEmail: false, email: '' , invalidPassword: false, password: '' };

    onChangeEmail = email => this.setState({email});

    onChangePassword = password => this.setState({password});

    validateEmail = () => {
        const { email } = this.state;
        this.setState({ invalidEmail: !emailRegex.test(email) });
    };

    validatePassword = () => {
        const { password } = this.state;
        this.setState({ invalidPassword: password.length < 8 });
    };

    loginOnPressHandler = async () => {
        const { navigation, signIn } = this.props;
        const { email, password } = this.state;
        await signIn(email, password);
        const { signInErrorMessage } = this.props;
        !signInErrorMessage && navigation.replace(Home);
    };

    render() {
        const { signInErrorMessage, isLoading } = this.props;
        const { email, password, invalidEmail, invalidPassword } = this.state;
        const disableSubmit = !email.length || !password.length || password.length < 8 || invalidEmail || invalidPassword;

        return (
            <Login
                { ...this.state}
                validateEmail={this.validateEmail} 
                onChangeEmail={this.onChangeEmail}
                validatePassword={this.validatePassword}
                onChangePassword={this.onChangePassword}
                disableSubmit={disableSubmit}
                onPress={this.loginOnPressHandler}
                signInErrorMessage={signInErrorMessage}
                isLoading={isLoading}
            />
        );
    }
}

const mapStateToProps = state => ({
    signInErrorMessage: state.auth.currentUserError,
    isLoading: state.auth.currentUserLoading
});

const mapDispatchToProps = dispatch => ({
    signIn: (email, password) => dispatch(AuthActions.signIn(email, password))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

