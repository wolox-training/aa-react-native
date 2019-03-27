import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function Comment({username, userImageSource, comment}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={userImageSource}/>
            <View style={styles.textContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text styles={styles.comment}>{comment}</Text>
            </View>
        </View>
    )
};

export default Comment;

