import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function Comment({user, comment}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={user.imageSource}/>
            <View style={styles.textContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text styles={styles.comment}>{comment}</Text>
            </View>
        </View>
    )
};

export default Comment;

