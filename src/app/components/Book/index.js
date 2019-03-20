import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

class Book extends Component {
    render() {
        const {name, author, imageSource} = this.props;
        const defaultImage = require('../../assets/General/img_book6.png');
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={imageSource||defaultImage}/>
                <View>
                    <Text style={styles.name}>
                    {name}
                    </Text>
                    <Text style={styles.author}>
                    {author}
                    </Text>
                </View>
            </View>
          )
    }
}

export default Book;