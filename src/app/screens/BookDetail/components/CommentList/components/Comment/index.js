import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function Comment({username, userImageSource, comment}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={userImageSource}/>
            <View style={styles.textContainer}>
                <Text style={styles.username} numberOfLines={1}>{username}</Text>
                <Text styles={styles.comment} numberOfLines={4}>{comment}</Text>
            </View>
        </View>
    )
};

export default Comment;

