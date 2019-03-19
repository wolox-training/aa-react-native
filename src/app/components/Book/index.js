import React, { Component } from 'react'
import styles from './styles';


class Book extends Component {
    render() {
        const {name, author, imageSource} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require({imageSource})}/>
                <Text style={styles.name}>
                {name}
                </Text>
                <Text style={styles.author}>
                {author}
                </Text>
            </View>
          )
    }
}
