import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function ImageButton({image, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={image} resizeMode="stretch"/>
        </TouchableOpacity>
    )
};

export default ImageButton;
