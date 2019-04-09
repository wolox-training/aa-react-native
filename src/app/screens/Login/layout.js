import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import styles, { commonProps } from './styles';
import backgroundImage from '../../assets/bc_start.png'


function Login() {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
                <Text style={styles.title}>WBOOKS</Text>
                <TextInput
                    {...commonProps}
                    placeholder="Email"
                    autoComplete='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <TextInput
                    {...commonProps}
                    placeholder="Password"
                    secureTextEntry
                    autoComplete='password'
                    textContentType='password'
                />
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText}>LOG IN</Text>
                 </TouchableOpacity>
        </ImageBackground>
    )
};

export default Login;

