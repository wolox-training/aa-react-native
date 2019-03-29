import React from 'react';
import { Image, StyleSheet } from 'react-native';


import backImage from '../../assets/ic_back.png';

function BackButton() {
    return (
        <TouchableHighlight onPress={onPress}>
        <Image
          source={require('./Assets/BackLight.png')}
        />
      </TouchableHighlight>
    )
};

export default BackButton;