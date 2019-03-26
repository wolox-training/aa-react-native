import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Comment({user, comment}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} imageSource={user.image}/>
            <View>
                <Text style={styles.username}>{user.name}</Text>
                <Text styles={styles.comment}>{comment}</Text>
            </View>
        </View>
    )
};

export default Comment;

