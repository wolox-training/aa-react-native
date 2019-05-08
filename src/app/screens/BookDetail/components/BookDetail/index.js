import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import  defaultImage from '../../../../assets/img_book6.png';
import { white, skyBlue, cian } from '../../../../../constants/colors';


class BookDetail extends Component{
    state = {
        isRented: false,
        animated: new Animated.Value(0)
    };
    animateRentButton = () => {
        const { animated } = this.state;
        Animated.timing(animated, {
          toValue: 40,
          duration: 800
        }).start();
    };

    handleOnPressRent = () => {
        const { isRented } = this.state;
        if(! isRented) {
            this.setState({isRented: true});
        }
        this.animateRentButton();
    };

    render() {
    const { title, author, imageSource, year, type } = this.props;
    const aux = [author, year, type];
    const { isRented, animated } = this.state;
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
                    <TouchableOpacity style={styles.addToWishList} >
                        <Text style={styles.addToWishListText}>ADD TO WISH LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={this.handleOnPressRent}>
                        {!isRented && (<LinearGradient colors={[skyBlue, cian]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={[styles.button]}>
                            <Text style={styles.rentText}>RENT</Text>
                        </LinearGradient>)}

                        {isRented && (<Animated.View style={[styles.button, styles.animatedRentButton, { height: animated, maxWidth: animated}]}>
                            {isRented && <Icon name='md-checkmark' type='ionicon' color={ white }/>}
                        </Animated.View>)}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default BookDetail;

