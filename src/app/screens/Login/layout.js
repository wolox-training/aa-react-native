import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { lightGray } from '../../../constants/colors';

import styles from './styles';
import backgroundImage from '../../assets/bc_start.png'

function Login() {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
                <Text style={styles.title}>WBOOKS</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor= {lightGray}
                    autoComplete= 'email'
                    keyboardType= 'email-address'
                    numberOfLines= {1}
                    textContentType= 'emailAddress'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor= {lightGray}
                    autoComplete= 'password'
                    numberOfLines= {1}
                    textContentType= 'password'
                />
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText}>LOG IN</Text>
                 </TouchableOpacity>
        </ImageBackground>
    )
};

export default Login;
