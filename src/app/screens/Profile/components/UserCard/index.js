import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
 

import styles from './styles';
import { skyBlue } from '../../../../../constants/colors';

function UserCard({firstName, lastName}) {
    const displayName= `${firstName}, ${lastName}`;
    return (
        <View style={styles.container}>
            <Icon name='md-contact' type='ionicon' color={ skyBlue } size={100} containerStyle={styles.icon}/>
            <Text style={styles.text} numberOfLines={1}>{displayName}</Text>
        </View>
    )
};

export default UserCard;

