import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { lightGray } from '../../../constants/colors';
import styles from './styles';
import backgroundImage from '../../assets/bc_start.png'

function Login({validateEmail, invalidEmail, email, onChangeEmail, validatePassword, password, invalidPassword, onChangePassword}) {
    const commonProps = { style: styles.input, numberOfLines: 1, placeholderTextColor: lightGray };
    
    renderInvalidEmailText = () => invalidEmail && <Text style={styles.errorMessage}>Please enter a valid email address.</Text>;

    renderInvalidPasswordText = () => invalidPassword && <Text style={styles.errorMessage}>Password must be at least 8 characters long.</Text>;

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
                <Text style={styles.title}>WBOOKS</Text>
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
                {renderInvalidEmailText()}
                <TextInput
                    {...commonProps}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoComplete='password'
                    textContentType='password'
                    onChangeText={onChangePassword}
                    value={password}
                    onEndEditing={validatePassword}
                />
                {renderInvalidPasswordText()}

                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText}>LOG IN</Text>
                 </TouchableOpacity>
        </ImageBackground>
    )
};

export default Login;

