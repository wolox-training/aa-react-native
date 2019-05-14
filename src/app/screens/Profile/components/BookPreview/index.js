import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';

function BookPreview({name, author, imageSource, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={imageSource||defaultImage} resizeMode="cover"/>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <Text style={styles.author} numberOfLines={1}>{author}</Text>
        </TouchableOpacity>
    )
};

export default BookPreview;

