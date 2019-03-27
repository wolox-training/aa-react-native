import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';


function BookDetail({title, author, imageSource, year, type}) {
    const aux = [author, year, type];
    return (
        <View style={styles.container}>
            <View style={styles.bookContainer}>
                <Image style={styles.image} resizeMode="cover" source={imageSource||defaultImage}></Image>
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <View style={styles.dataContainer}>
                        {aux.map(value => <Text key={value} style={styles.text}>{value}</Text>)}
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.addToWishList}>
                <Text style={styles.addToWishListText}>ADD TO WISH LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rent}>
                <Text style={styles.rentText}>RENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default BookDetail;

