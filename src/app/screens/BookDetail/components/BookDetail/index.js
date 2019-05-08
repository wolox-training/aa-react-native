import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';


class BookDetail extends Component{
    state = {
        isRented: false,
        animated: new Animated.Value(0)
    };
    animateRentButton = () => {
        const { animated } = this.state;
        Animated.timing(animated, {
          toValue: 40,
          duration: 1000
        }).start();
    };

    handleOnPressRent = () => {
        const { isRented } = this.state;
        if(! isRented) {
            this.setState({isRented: true});
        }
        this.animateRentButton();
    };
    //transform: [{ scaleX: animated }] 
    //scale: animated.interpolate({intputRange: [0, 1], outputRange:[0, 1]}) 
    //{aux.map(value => <Text key={value} style={styles.text}>{value}</Text>)}
    render() {
    const aux = [author, year, type];
    const { title, author, imageSource, year, type } = this.props;
    const { isRented, animated } = this.state;
    return (
            <View style={styles.container}>
                <View style={styles.bookContainer}>
                    <Image style={styles.image} resizeMode="cover" source={imageSource||defaultImage}></Image>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        <View style={styles.dataContainer}>
                            
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.addToWishList} >
                        <Text style={styles.addToWishListText}>ADD TO WISH LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rent, isRented && {backgroundColor: 'transparent'}]} onPress={this.handleOnPressRent}>
                            <Animated.View style={[styles.rent, isRented && { backgroundColor: "green" }, isRented&&{ height: animated, maxWidth: animated}]}>
                                <Text style={styles.rentText}>RENT</Text>
                            </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default BookDetail;

