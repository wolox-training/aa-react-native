import React from 'react';
import { Image } from 'react-native';

import styles from './styles';


function TabBarIcon({focused, inactiveIcon, activeIcon}) {
    return (
        <Image style={styles.image} source={ focused ? activeIcon : inactiveIcon } resizeMode="cover"/>
    )
};

export default TabBarIcon;

