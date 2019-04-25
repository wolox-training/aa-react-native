import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import searchPlaceHolderImage from '../../assets/ic_search_placeholder.png';

function SearchPlaceHolder() {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={searchPlaceHolderImage} resizeMode="cover"/>
            <Text style={styles.title}>Search in Wbooks</Text>
            <Text style={styles.text}>Find your favorite writers and books!</Text>
        </View>
    )
};

export default SearchPlaceHolder;
