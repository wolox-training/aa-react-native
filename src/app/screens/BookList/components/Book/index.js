import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';

function Book({name, author, imageSource, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={imageSource||defaultImage}/>
            <View style = {styles.bookContainer}>
                <Text style={styles.name} numberOfLines={1}>
                {name}
                </Text>
                <Text style={styles.author}>
                {author}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default Book;

