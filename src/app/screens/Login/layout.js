import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { lightGray } from '../../../constants/colors';
import styles from './styles';
import backgroundImage from '../../assets/bc_start.png'

function Login() {
    const commonProps = { style: styles.input, numberOfLines: 1, placeholderTextColor: lightGray };
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
                <Text style={styles.title}>WBOOKS</Text>
                <TextInput
                    {...commonProps}
                    placeholder="Email"
                    autoComplete= 'email'
                    keyboardType= 'email-address'
                    textContentType= 'emailAddress'
                    commonProps

                />
                <TextInput
                    {...commonProps}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoComplete= 'password'
                    textContentType= 'password'
                />
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText}>LOG IN</Text>
                 </TouchableOpacity>
        </ImageBackground>
    )
};

export default Login;

