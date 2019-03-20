import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';

function Book({name, author, imageSource}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource||defaultImage}/>
            <View>
                <Text style={styles.name}>
                {name}
                </Text>
                <Text style={styles.author}>
                {author}
                </Text>
            </View>
        </View>
    )
};

export default Book;
