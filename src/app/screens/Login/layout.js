import React, { PureComponent } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';

import backgroundImage from '../../assets/bc_start.png'
import WithLoading from '../../components/WithLoading';

import styles, { commonProps } from './styles';

class Login extends PureComponent {
    
    renderErrorMessage = (invalidCondition, errorMessage) => invalidCondition && <Text style={styles.errorMessage}>{errorMessage}</Text>;

    render() {
        const {validateEmail, invalidEmail, email, onChangeEmail, validatePassword, password, invalidPassword, onChangePassword, disableSubmit, onPress, signInErrorMessage} = this.props;
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
                    <Text style={styles.title}>WBOOKS</Text>
                    {this.renderErrorMessage(!!signInErrorMessage, signInErrorMessage)}
                    <TextInput
                        {...commonProps}
                        placeholder="Email"
                        autoComplete='email'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        onChangeText={onChangeEmail}
                        value={email}
                        onEndEditing={validateEmail}
                    />
                    {this.renderErrorMessage(invalidEmail, 'Please enter a valid email address.')}
                    <TextInput
                        {...commonProps}
                        placeholder="Password"
                        secureTextEntry
                        autoComplete='password'
                        textContentType='password'
                        onChangeText={onChangePassword}
                        value={password}
                        onEndEditing={validatePassword}
                    />
                    {this.renderErrorMessage(invalidPassword, 'Password must be at least 8 characters long.')}

                    <TouchableOpacity style={[styles.button, disableSubmit && styles.disabledButton]} disabled={disableSubmit} onPress={onPress}>
                        <Text style={[styles.buttonText, disableSubmit && styles.disabledButtonText]}>LOG IN</Text>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }
};

export default WithLoading(props => props.isLoading)(Login);

